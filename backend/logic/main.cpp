#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <queue>
using namespace std;

const int MAX_CHAR = 256;

struct TrieNode {
    TrieNode* children[MAX_CHAR];
    TrieNode* failureLink;
    int output;

    TrieNode() {
        for (int i = 0; i < MAX_CHAR; i++) {
            children[i] = nullptr;
        }
        failureLink = nullptr;
        output = -1;
    }
};

TrieNode* insertPattern(TrieNode* root, const string& pattern, int patternIndex) {
    TrieNode* current = root;
    for (char ch : pattern) {
        int idx = static_cast<unsigned char>(ch);
        if (!current->children[idx]) {
            current->children[idx] = new TrieNode();
        }
        current = current->children[idx];
    }
    current->output = patternIndex;
    return root;
}

void buildFailureLinks(TrieNode* root) {
    queue<TrieNode*> q;
    root->failureLink = root;

    for (int i = 0; i < MAX_CHAR; i++) {
        if (root->children[i]) {
            root->children[i]->failureLink = root;
            q.push(root->children[i]);
        } else {
            root->children[i] = root;
        }
    }

    while (!q.empty()) {
        TrieNode* current = q.front();
        q.pop();

        for (int i = 0; i < MAX_CHAR; i++) {
            TrieNode* child = current->children[i];
            if (!child) continue;

            TrieNode* fail = current->failureLink;
            while (!fail->children[i] && fail != root) {
                fail = fail->failureLink;
            }
            if (fail->children[i]) {
                fail = fail->children[i];
            }
            child->failureLink = fail;

            q.push(child);
        }
    }
}

void searchAndOutput(TrieNode* root,
                     const string& pattern,
                     const string& text,
                     const vector<pair<int,int>>& charPos,
                     ofstream& outfile) {
    TrieNode* current = root;
    int totalOccurrences = 0;
    int patLen = pattern.size();

    for (int i = 0; i < (int)text.size(); i++) {
        unsigned char c = text[i];

        while (!current->children[c] && current != root) {
            current = current->failureLink;
        }
        current = current->children[c];
        if (!current) current = root;

        TrieNode* temp = current;
        while (temp != root) {
            if (temp->output != -1) {
                int charIndex = i - patLen + 1;
                if (charIndex >= 0) {
                    int line = charPos[charIndex].first + 1;
                    int col = charPos[charIndex].second + 1;
                    outfile << "Pattern occurs at line " << line
                            << " at column " << col << "\n";
                    totalOccurrences++;
                }
                break;
            }
            temp = temp->failureLink;
        }
    }

    if (totalOccurrences == 0) {
        outfile << "No occurrences found.\n";
    }
    outfile << "Number of occurrences: " << totalOccurrences << "\n";
}

void freeTrie(TrieNode* node, TrieNode* root) {
    if (!node || node == root) return;
    for (int i = 0; i < MAX_CHAR; i++) {
        if (node->children[i] && node->children[i] != root) {
            freeTrie(node->children[i], root);
        }
    }
    delete node;
}

int main() {
    ifstream pfile("pattern.txt");
    if (!pfile) {
        return 1;
    }
    string pattern;
    getline(pfile, pattern);
    pfile.close();

    ofstream outfile("output.txt");
    if (!outfile) {
        return 1;
    }

    if (pattern.empty()) {
        outfile << "Error: Empty pattern\n";
        return 1;
    }

    ifstream infile("input.txt");
    if (!infile) {
        return 1;
    }

    vector<string> lines;
    string line;
    while (getline(infile, line)) {
        lines.push_back(line);
    }
    infile.close();

    string text;
    vector<pair<int,int>> charPos;
    for (int i = 0; i < (int)lines.size(); i++) {
        for (int j = 0; j < (int)lines[i].size(); j++) {
            text.push_back(lines[i][j]);
            charPos.emplace_back(i, j);
        }
        if (i < (int)lines.size() - 1) {
            text.push_back('\n');
            charPos.emplace_back(i, lines[i].size());
        }
    }

    TrieNode* root = new TrieNode();
    insertPattern(root, pattern, 0);
    buildFailureLinks(root);

    searchAndOutput(root, pattern, text, charPos, outfile);

    freeTrie(root, root);

    return 0;
}

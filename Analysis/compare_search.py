import time
from collections import deque
import matplotlib.pyplot as plt

# Read text and patterns
with open("input.txt", "r", encoding="utf-8") as f:
    text = f.read()

with open("pattern.txt", "r", encoding="utf-8") as f:
    patterns = [line.strip() for line in f if line.strip()]

# -------- Naive Pattern Matching --------
def naive_search(text, patterns):
    matches = 0
    for pattern in patterns:
        plen = len(pattern)
        for i in range(len(text) - plen + 1):
            if text[i:i + plen] == pattern:
                matches += 1
    return matches

# -------- Aho-Corasick Implementation --------
class TrieNode:
    def __init__(self):
        self.children = {}
        self.fail = None
        self.output = []

def build_trie(patterns):
    root = TrieNode()
    for pattern in patterns:
        node = root
        for char in pattern:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.output.append(pattern)
    return root

def build_failure_links(root):
    queue = deque()
    for child in root.children.values():
        child.fail = root
        queue.append(child)

    while queue:
        current = queue.popleft()
        for char, child in current.children.items():
            fallback = current.fail
            while fallback and char not in fallback.children:
                fallback = fallback.fail
            child.fail = fallback.children[char] if fallback and char in fallback.children else root
            child.output += child.fail.output
            queue.append(child)

def aho_corasick_search(text, root):
    node = root
    matches = 0
    for char in text:
        while node and char not in node.children:
            node = node.fail
        if not node:
            node = root
            continue
        node = node.children[char]
        matches += len(node.output)
    return matches

# -------- Run and Time --------
# Naive
start_naive = time.time()
naive_matches = naive_search(text, patterns)
end_naive = time.time()
naive_time = end_naive - start_naive

# Aho-Corasick
root = build_trie(patterns)
build_failure_links(root)
start_ac = time.time()
ac_matches = aho_corasick_search(text, root)
end_ac = time.time()
ac_time = end_ac - start_ac

# -------- Print Results --------
print("Naive Search:")
print(f"  Matches found: {naive_matches}")
print(f"  Time taken: {naive_time:.6f} seconds\n")

print("Aho-Corasick Search (pure Python):")
print(f"  Matches found: {ac_matches}")
print(f"  Time taken: {ac_time:.6f} seconds")

# -------- Plot Graph --------
plt.figure(figsize=(8, 5))
algorithms = ['Naive', 'Aho-Corasick']
times = [naive_time, ac_time]
colors = ['skyblue', 'mediumseagreen']

plt.bar(algorithms, times, color=colors)
plt.ylabel('Time (seconds)')
plt.title('Pattern Matching Algorithm Comparison')
for i, t in enumerate(times):
    plt.text(i, t + 0.001, f"{t:.6f}", ha='center')
plt.tight_layout()
plt.grid(axis='y', linestyle='--', alpha=0.6)
plt.show()

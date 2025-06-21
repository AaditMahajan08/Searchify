import React from "react";

export const Information = () => {
  return (
    <section
      id="information"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-600 to-indigo-500 bg-clip-text text-transparent text-center">
          Information
        </h2>
        <div className="rounded-xl p-8 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all">
          <h3 className="text-2xl font-bold mb-4 text-sky-700">
            Aho-Corasick Algorithm
          </h3>
          <p className="text-gray-700 mb-6">
            The Aho-Corasick algorithm is a classic string searching technique
            designed to match multiple patterns simultaneously within a single
            pass through the text. It constructs a trie-like automaton with
            added failure links to handle mismatches efficiently.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Builds a trie containing all patterns.</li>
            <li>Failure links handle mismatches without re-scanning text.</li>
            <li>Enables multi-pattern search in a single scan of the text.</li>
            <li>Often used in malware detection, DNA sequence matching, etc.</li>
          </ul>

          <div className="mt-8">
            <h4 className="text-xl font-bold mb-2 text-sky-600">
              Where It Is Used
            </h4>
            <p className="text-gray-700">
              Aho-Corasick is widely used in:
              real-time monitoring systems, content filtering, search engines,
              intrusion detection systems, and bioinformatics, where fast,
              multi-pattern matching is critical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

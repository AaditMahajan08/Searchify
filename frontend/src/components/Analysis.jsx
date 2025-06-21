import React from "react";
import comparisonGraph from "./comparison.webp";

export const Analysis = () => {
  return (
    <section
      id="analysis"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-600 to-indigo-500 bg-clip-text text-transparent text-center">
          Analysis
        </h2>
        <div className="rounded-xl p-8 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all">
          <h3 className="text-2xl font-bold mb-4 text-sky-700">
            Performance Evaluation
          </h3>
          <p className="text-gray-700 mb-6">
            This section presents the computational behavior of the Aho-Corasick
            algorithm along with its asymptotic time complexity.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>
              <strong>Time Complexity:</strong> O(N + M + Z)
              <ul className="list-disc list-inside ml-6 mt-2 text-sm">
                <li>N = length of the input text</li>
                <li>M = total length of all patterns</li>
                <li>Z = number of matches found</li>
              </ul>
            </li>
            <li>
              <strong>Space Complexity:</strong> Depends on the number of
              patterns and the alphabet size, due to the trie and failure links.
            </li>
            <li>
              <strong>Practical Runtime:</strong> Near-linear with respect to
              input size, making it ideal for high-speed multi-pattern matching.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-indigo-700">Insights</h3>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Performs significantly faster than naive searching on long texts.</li>
            <li>Efficiency improves with larger pattern sets.</li>
            <li>Performance remains stable under increased input size.</li>
          </ul>

          <div className="mt-8">
            <h4 className="text-xl font-bold mb-2 text-sky-600">
              Visual Comparison
            </h4>
            <div className="text-center">
              <img
                src={comparisonGraph}
                alt="Comparison Graph"
                className="mx-auto w-full max-w-lg rounded-lg shadow"
              />
              <p className="text-sm text-gray-500 mt-2">
                Graph generated using Python and matplotlib.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-bold mb-2 text-sky-600">
              Future Scope
            </h4>
            <p className="text-gray-700">
              Future enhancements may include approximate matching, support for
              dynamic pattern updates, real-time stream processing, and optimized
              parallel versions for high-performance computing environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

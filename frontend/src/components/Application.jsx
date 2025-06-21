import React from "react";

export const Application = () => {
  return (
    <section
      id="application"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-600 to-indigo-500 bg-clip-text text-transparent text-center">
          Application
        </h2>
        <div className="rounded-xl p-8 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all">
          <h3 className="text-2xl font-bold mb-4 text-sky-700">
            Real-World Applications
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-4">
            <li>
              <strong>Search Engines: </strong>  
              Search engines need to process and index vast amounts of text data. By using the Aho-Corasick algorithm, they can efficiently search for multiple keywords or phrases simultaneously, improving the speed and accuracy of search results.
            </li>
            <li>
              <strong>Network Security: </strong>  
              Intrusion detection systems and firewalls often need to scan network traffic for known patterns of malicious activity. The Aho-Corasick algorithm allows these systems to match multiple threat signatures in real time.
            </li>
            <li>
              <strong>Bioinformatics: </strong>  
              In genomics, researchers search for specific DNA, RNA, or protein patterns within large biological sequences. Aho-Corasick enables fast searching for multiple motifs or markers across these sequences.
            </li>
            <li>
              <strong>Spam Filtering: </strong>  
              Email and messaging platforms use pattern matching to detect spam or unwanted content. By leveraging Aho-Corasick, these platforms can quickly scan messages for known spam signatures.
            </li>
            <li>
              <strong>Document Management: </strong>  
              Enterprises and legal firms manage vast numbers of documents. Efficient text searching allows users to quickly locate relevant information across large repositories, making document management systems more scalable and responsive.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-indigo-700">
            Why Use This System?
          </h3>
          <p className="text-gray-700 mb-6">
            The Aho-Corasick algorithm provides a major advantage: rapid, simultaneous pattern matching for multiple keywords. This makes the system ideal for applications where high-speed text search is critical, such as real-time analytics, large-scale data processing, and cloud-based services. Its adaptability means it can be tailored to fit a wide range of industries and requirements.
          </p>

          <div className="mt-8">
            <h4 className="text-xl font-bold mb-2 text-sky-600">
              Future Potential
            </h4>
            <p className="text-gray-700">
              As data volumes continue to grow, the need for efficient pattern matching will only increase. Future enhancements could include support for approximate matching, integration with machine learning models for intelligent detection, and real-time analytics dashboards. These advancements would further expand the system’s utility in fields like healthcare, finance, cybersecurity, and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";

export const Implementation = () => {
  const [text, setText] = useState("");
  const [pattern, setPattern] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textToSend = text;

    try {
      const response = await fetch("http://localhost:5000/save-files", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textToSend, pattern }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Execution failed.");
      setResult(data.output);
    } catch (err) {
      console.error(err);
      setResult("❌ Error: Failed to save or execute files.");
    }
  };

  const handleClear = () => {
    setText("");
    setPattern("");
    setResult("");
  };

  return (
    <section
      id="implementation"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-sky-600 to-indigo-500 bg-clip-text text-transparent">
          Implementation
        </h2>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl p-8 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all flex flex-col gap-6"
        >
          <label className="text-gray-700 font-semibold">
            Enter Text:
            <textarea
              className="w-full p-3 mt-2 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-sky-400 min-h-[150px] resize-y"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type your text here..."
            />
          </label>

          <label className="text-gray-700 font-semibold">
            Pattern to Search:
            <input
              type="text"
              className="w-full mt-2 p-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-sky-400"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Enter pattern"
              required
            />
          </label>

          <div className="flex gap-4 flex-wrap">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold shadow hover:from-sky-400 hover:to-indigo-400 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 rounded-lg bg-gray-300 text-gray-800 font-bold shadow hover:bg-gray-400 transition"
            >
              Clear Inputs & Output
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-8 p-6 rounded-xl border border-gray-200 bg-gray-100">
            <h3 className="text-xl font-bold mb-2 text-blue-700">
              Search Output
            </h3>
            <pre className="text-gray-800 whitespace-pre-wrap">{result}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { execFile } from "child_process";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// For ES Module __dirname compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.post("/save-files", (req, res) => {
  const { text, pattern } = req.body;

  const logicDir = path.join(__dirname, "logic");
  const inputPath = path.join(logicDir, "input.txt");
  const patternPath = path.join(logicDir, "pattern.txt");
  const outputPath = path.join(logicDir, "output.txt");
  const exePath = path.join(logicDir, "searchtool.exe");

  try {
    // Write input and pattern
    fs.writeFileSync(inputPath, text);
    fs.writeFileSync(patternPath, pattern);
  } catch (err) {
    console.error("Write error:", err);
    return res.status(500).json({ error: "Failed to write input files" });
  }

  // Run the executable
  execFile(exePath, { cwd: logicDir }, (error) => {
    if (error) {
      console.error("Execution error:", error);
      return res.status(500).json({ error: "Execution failed" });
    }

    try {
      const output = fs.readFileSync(outputPath, "utf-8");
      res.json({ output });
    } catch (readErr) {
      console.error("Read error:", readErr);
      return res.status(500).json({ error: "Failed to read output file" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

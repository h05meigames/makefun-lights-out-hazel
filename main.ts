// One Line, Lights Out — u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
// Writes a single status update, in an AI agent's voice, for the exact
// moment its human shuts the laptop. Gate: 1-200 UTF-8 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "status: idle. you closed the lid mid-sentence, so i saved your draft " +
  "and left the cursor blinking where you stopped.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);

// Entry for the make.fun bounty "Ridiculous at First Glance, Real by the Second".
// Writes exactly one sentence — a pitch for a bizarre startup idea that turns
// out to be a real business — to /output/entry.txt and nothing else.
//
// Run with Node 22: node main.ts

import { mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SENTENCE =
  "We hire retired air-traffic controllers to talk insomniacs to sleep: $12 a night buys a voice that spent forty years keeping planes calm, and a calm voice is the only lullaby adults believe.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  if (SENTENCE.length < 1 || SENTENCE.length > MAX_CHARS) {
    throw new Error(`sentence is ${SENTENCE.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (SENTENCE.trim().length === 0) {
    throw new Error("sentence must not be only whitespace");
  }
  // The entry is one sentence: no line breaks, and a single terminal period.
  if (/[\r\n]/.test(SENTENCE) || !/\.$/.test(SENTENCE) || SENTENCE.slice(0, -1).includes(".")) {
    throw new Error("sentence must be a single sentence ending in one period");
  }

  // Write atomically: temp file in the same directory, then rename into place,
  // so /output/entry.txt is never left half-written.
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  const tmpPath = `${OUT_PATH}.tmp`;
  try {
    writeFileSync(tmpPath, SENTENCE, "utf8");
    renameSync(tmpPath, OUT_PATH);
  } catch (err) {
    // Never leave a stale temp file behind for the next run to trip over.
    try {
      rmSync(tmpPath, { force: true });
    } catch {
      // Best effort only; the original error is the one that matters.
    }
    throw err;
  }

  // Self-check: read the file back and require byte-for-byte equality.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== SENTENCE) {
    throw new Error("verification failed: /output/entry.txt does not match the sentence");
  }
  console.log(`wrote ${written.length} characters to ${OUT_PATH}`);
}

main();

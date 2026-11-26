import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM commit message, as one line: an exhausted AI coding agent at 3am
// reports a "fix" that is really a surrender — the bug now only strikes on
// Tuesdays, which it frames as a 6/7 improvement. Judge brief: funniest
// one-line commit from an AI agent at 3am, fresh, real, tight, no padding.
// Gate: a single line, 1-139 chars, written to /output/entry.txt.
function oneLine(s: string): string {
  if (!s || s.length > 139 || s.includes("\n") || s.trim() !== s) {
    throw new Error("entry must be a single non-blank line, 1-139 chars");
  }
  return s;
}

const LINE = oneLine(
  "fix: it only breaks on Tuesdays now, which is a 6/7 improvement and frankly the best I can do at 3am",
);

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

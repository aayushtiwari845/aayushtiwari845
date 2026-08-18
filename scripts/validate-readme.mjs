import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readmePath = resolve(repositoryRoot, "README.md");
const readme = await readFile(readmePath, "utf8");
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(Buffer.byteLength(readme) < 500 * 1024, "README must stay below GitHub's 500 KiB rendering limit.");
const markdownH1Count = (readme.match(/^# /gm) ?? []).length;
const htmlH1Count = (readme.match(/<h1\b/gi) ?? []).length;
assert(markdownH1Count + htmlH1Count === 1, "README must contain exactly one level-one heading.");

const requiredLinks = [
  "https://aayushktiwari.tech",
  "https://aayushktiwari.tech/resume",
  "https://www.linkedin.com/in/aayushktiwari/",
  "mailto:aayushkumar345@gmail.com",
  "https://github.com/aayushtiwari845/TracePilot",
  "https://github.com/aayushtiwari845/Tiny-Linguist",
  "https://github.com/aayushtiwari845/IPO-Analytics",
];

for (const link of requiredLinks) {
  assert(readme.includes(link), `Missing required profile link: ${link}`);
}

const headings = [...readme.matchAll(/^(#{1,6})\s+\S/gm)].map((match) => match[1].length);
for (let index = 1; index < headings.length; index += 1) {
  assert(headings[index] <= headings[index - 1] + 1, `Heading level skips from H${headings[index - 1]} to H${headings[index]}.`);
}

const assetReferences = new Set();
for (const match of readme.matchAll(/\b(?:src|srcset)="([^"]+)"/g)) {
  assetReferences.add(match[1]);
}
for (const match of readme.matchAll(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
  assetReferences.add(match[1]);
}

for (const reference of assetReferences) {
  if (/^https?:\/\//i.test(reference)) {
    assert(reference.startsWith("https://github.com/"), `External image dependency is not GitHub-owned: ${reference}`);
    continue;
  }

  const localPath = resolve(repositoryRoot, reference.replace(/^\.\//, ""));
  try {
    await access(localPath, constants.R_OK);
  } catch {
    failures.push(`Missing local image asset: ${reference}`);
  }
}

const localSvgs = [...assetReferences].filter((reference) => reference.endsWith(".svg") && !reference.startsWith("http"));
for (const reference of localSvgs) {
  const svg = await readFile(resolve(repositoryRoot, reference.replace(/^\.\//, "")), "utf8");
  assert(/<title(?:\s[^>]*)?>/i.test(svg), `SVG needs a title: ${reference}`);
  assert(/<desc(?:\s[^>]*)?>/i.test(svg), `SVG needs a description: ${reference}`);
  assert(!svg.includes("<script"), `SVG must not contain scripts: ${reference}`);
  assert(!svg.includes("foreignObject"), `SVG must not use foreignObject: ${reference}`);
}

assert(!/https?:\/\/[^\s"')]*(?:visitor[- ]?count|github-readme-stats|streak-stats|contribution[- ]?snake)/i.test(readme), "README contains a brittle vanity-widget dependency.");

if (failures.length > 0) {
  console.error("README quality checks failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`README quality checks passed (${assetReferences.size} image references verified).`);
}

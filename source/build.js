#!/usr/bin/env node
// ── BUILD SCRIPT ──────────────────────────────────────────────────────────────
//
// Generates both site index.html files from shared sources.
//
// Usage (run from the project root, i.e. "Interactive CV/" folder):
//   node source/build.js
//
// What it does:
//   1. Reads source/template.html          (shared design + rendering logic)
//   2. Reads source/content-operator.js    → injects with reading-list-operator.js
//                                          → writes Deploy/index.html
//   3. Reads source/content-vc.js          → injects with reading-list-vc.js
//                                          → writes Deploy-vc/index.html
//
// To update reading list on ONE site: edit the relevant reading-list-*.js, run script.
// To update design/layout/skills: edit template.html, run script (updates both).
// To update site content: edit the relevant content-*.js, run script.
// ─────────────────────────────────────────────────────────────────────────────

const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ── READ SHARED TEMPLATE ──────────────────────────────────────────────────────

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// ── BUILD FUNCTION ────────────────────────────────────────────────────────────

function build(contentFile, readingListFile, outputDir, label) {
  const contentData   = fs.readFileSync(path.join(__dirname, contentFile), 'utf8');
  const readingList   = fs.readFileSync(path.join(__dirname, readingListFile), 'utf8');

  // Inject content data + site-specific reading list at the placeholder
  const injected = contentData + '\n\n' + readingList;
  const output   = template.replace('// __CONTENT_INJECT__', injected);

  const outputPath = path.join(ROOT, outputDir, 'index.html');
  fs.writeFileSync(outputPath, output, 'utf8');

  const kb = (Buffer.byteLength(output) / 1024).toFixed(1);
  console.log(`[build] ${label} → ${outputDir}/index.html (${kb} KB)`);
}

// ── ENSURE OUTPUT DIRECTORIES EXIST ──────────────────────────────────────────

['Deploy-operator', 'Deploy-vc'].forEach(d => {
  const fullPath = path.join(ROOT, d);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`[build] Created directory: ${d}/`);
  }
});

// ── RUN BUILDS ───────────────────────────────────────────────────────────────

build('content-operator.js', 'reading-list-operator.js', 'Deploy-operator', 'Operator site');
build('content-vc.js',       'reading-list-vc.js',       'Deploy-vc',       'VC site      ');

console.log('[build] Done.');

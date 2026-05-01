#!/usr/bin/env node
// ── BUILD SCRIPT ──────────────────────────────────────────────────────────────
//
// Generates both site index.html files from shared sources.
//
// Usage (run from the project root, i.e. "Interactive CV/" folder):
//   node source/build.js
//
// What it does:
//   1. Reads source/template.html           (shared design + rendering logic)
//   2. Reads source/content-operator.md     → parses into JS → injects with reading-list-operator.js
//                                           → writes Deploy-operator/index.html
//   3. Reads source/content-vc.md           → parses into JS → injects with reading-list-vc.js
//                                           → writes Deploy-vc/index.html
//
// To update reading list:      edit reading-list-*.js, run script.
// To update design/layout:     edit template.html, run script (updates both sites).
// To update operator content:  edit content-operator.md, run script.
// To update VC content:        edit content-vc.md, run script.
// ─────────────────────────────────────────────────────────────────────────────

const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// ── READ SHARED TEMPLATE ──────────────────────────────────────────────────────

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');


// ── VC MD PARSER ──────────────────────────────────────────────────────────────
//
// Parses source/content-vc.md into structured data, then serialises it as JS.
//
// MD format:
//   ## HERO              — key: value pairs (one per line)
//   ## CHAT_INTRO        — raw text body
//   ## MILESTONE: id     — key: value pairs for each milestone field
//   ## SYSTEM_PROMPT     — raw text body (multiline)
//
// Field values may be long single-paragraph strings. A value runs from
// "fieldname: " to the start of the next field marker or section header.
// ─────────────────────────────────────────────────────────────────────────────

// Known field names for HERO and MILESTONE blocks.
const HERO_FIELDS       = ['name', 'sub_primary', 'intent', 'sub_secondary'];
const MILESTONE_FIELDS  = ['id', 'icon', 'title', 'role', 'dates', 'tag', 'year', 'label', 'pending', 'prefill', 'preview', 'summary', 'learning', 'funFact'];

function parseFields(text, fieldNames) {
  const result = {};
  const pattern = new RegExp(`^(${fieldNames.join('|')}):\\s*`, 'gm');

  const positions = [];
  let m;
  while ((m = pattern.exec(text)) !== null) {
    positions.push({ key: m[1], matchStart: m.index, contentStart: m.index + m[0].length });
  }

  for (let i = 0; i < positions.length; i++) {
    const { key, contentStart } = positions[i];
    const end = i + 1 < positions.length ? positions[i + 1].matchStart : text.length;
    let value = text.slice(contentStart, end).trim();
    // Coerce booleans
    if (value === 'true')  value = true;
    if (value === 'false') value = false;
    result[key] = value;
  }

  return result;
}

function parseMd(content) {
  // Split file into named sections by ## headers
  const sectionPattern = /^## (.+)$/gm;
  const sectionPositions = [];
  let m;
  while ((m = sectionPattern.exec(content)) !== null) {
    sectionPositions.push({
      header:       m[1].trim(),
      matchStart:   m.index,
      contentStart: m.index + m[0].length + 1  // +1 skips the newline after the header
    });
  }

  const result = { hero: {}, chatIntro: '', milestones: [], systemPrompt: '' };

  for (let i = 0; i < sectionPositions.length; i++) {
    const { header, contentStart } = sectionPositions[i];
    const contentEnd = i + 1 < sectionPositions.length
      ? sectionPositions[i + 1].matchStart
      : content.length;
    const body = content.slice(contentStart, contentEnd).trim();

    if (header === 'HERO') {
      result.hero = parseFields(body, HERO_FIELDS);
    } else if (header === 'CHAT_INTRO') {
      result.chatIntro = body;
    } else if (header.startsWith('MILESTONE')) {
      result.milestones.push(parseFields(body, MILESTONE_FIELDS));
    } else if (header === 'SYSTEM_PROMPT') {
      result.systemPrompt = body;
    }
  }

  return result;
}

// ── VC JS GENERATOR ───────────────────────────────────────────────────────────
//
// Serialises the parsed MD data back into JavaScript that the template expects.
// ─────────────────────────────────────────────────────────────────────────────

function generateVcJs(data) {
  const { hero, chatIntro, milestones, systemPrompt } = data;

  // HERO
  const heroFields = Object.entries(hero)
    .map(([k, v]) => `  ${k}: ${JSON.stringify(v)}`)
    .join(',\n');
  const heroJs = `const HERO = {\n${heroFields}\n};`;

  // CHAT_INTRO and CHAT_SUGGESTIONS
  const chatIntroJs      = `const CHAT_INTRO = ${JSON.stringify(chatIntro)};`;
  const chatSuggestionsJs = `const CHAT_SUGGESTIONS = [];`;

  // MILESTONES
  const milestoneItems = milestones.map(ms => {
    const fields = Object.entries(ms)
      .map(([k, v]) => `    ${k}: ${JSON.stringify(v)}`)
      .join(',\n');
    return `  {\n${fields}\n  }`;
  });
  const milestonesJs = `const MILESTONES = [\n${milestoneItems.join(',\n')}\n];`;

  // SYSTEM_PROMPT — use a template literal; escape backticks and template placeholders
  const escapedPrompt = systemPrompt
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  const systemPromptJs = `const SYSTEM_PROMPT = \`${escapedPrompt}\`;`;

  return [heroJs, chatIntroJs, chatSuggestionsJs, milestonesJs, systemPromptJs].join('\n\n');
}

// ── BUILD FROM MD (reads an .md content file, parses, generates JS, injects) ──

function buildFromMd(mdFile, readingListFile, outputDir, label) {
  const mdContent   = fs.readFileSync(path.join(__dirname, mdFile), 'utf8');
  const readingList = fs.readFileSync(path.join(__dirname, readingListFile), 'utf8');

  const parsed    = parseMd(mdContent);
  const contentJs = generateVcJs(parsed);

  const injected = contentJs + '\n\n' + readingList;
  const output   = template.replace('// __CONTENT_INJECT__', injected);

  const outputPath = path.join(ROOT, outputDir, 'index.html');
  fs.writeFileSync(outputPath, output, 'utf8');

  const kb = (Buffer.byteLength(output) / 1024).toFixed(1);
  console.log(`[build] ${label} → ${outputDir}/index.html (${kb} KB)`);
  console.log(`[build]   milestones parsed: ${parsed.milestones.length}`);
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

buildFromMd('content-operator.md', 'reading-list-operator.js', 'Deploy-operator', 'Operator site');
buildFromMd('content-vc.md',       'reading-list-vc.js',       'Deploy-vc',       'VC site      ');

console.log('[build] Done.');

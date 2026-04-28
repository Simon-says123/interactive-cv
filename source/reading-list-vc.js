// ── VC SITE READING LIST ──────────────────────────────────────────────────────
//
// Update bi-weekly. Each entry renders as a card in the reading deck.
//
// Fields:
//   tag      — 1–3 word category shown top-left of card (free form, no fixed taxonomy)
//   title    — Article title. Shorten if long — aim for max ~6 words on card.
//   author   — Author name or publication
//   url      — Full URL to the article (verify before publishing)
//   why      — YOUR take in first person: why this is worth reading. 1–3 sentences.
//              Update this in your own voice — don't leave the placeholder text live.
//
// Order: most recent or most relevant first.
// ─────────────────────────────────────────────────────────────────────────────

const READING_LIST = [
  {
    tag: 'Agentic AI',
    title: 'Skill-Building in the Agent Era',
    author: 'Shiv Sakhuja',
    url: 'https://x.com/shivsakhuja/status/2047124337191444844',
    why: 'Skill-building is still the critical bottleneck in agentic systems, and that changes what "agent-ready" actually means when evaluating AI companies. Worth reading if you are trying to separate hype from what is actually hard to replicate.'
  },
  {
    tag: 'Venture',
    title: '2025 Annual Letter',
    author: 'Chamath Palihapitiya',
    url: 'https://chamath.substack.com/p/2025-annual-letter',
    why: 'The clearest framework I\'ve read for how the AI stack stratifies, and what it means for where venture value actually accrues. The downstream implications for which companies win are worth working through carefully.'
  },
  {
    tag: 'Enterprise AI',
    title: 'Where Enterprises Are Adopting AI',
    author: 'a16z',
    url: 'https://a16z.com/where-enterprises-are-actually-adopting-ai/',
    why: 'Real data, not narrative. Shows where enterprise AI adoption is actually happening versus where it\'s being talked about. Useful calibration when founders make claims about their market and customer readiness.'
  },
  {
    tag: 'Perspective',
    title: 'From Hierarchy to Intelligence',
    author: 'Block',
    url: 'https://block.xyz/inside/from-hierarchy-to-intelligence',
    why: '[Update this in your own voice before publishing]'
  }
];

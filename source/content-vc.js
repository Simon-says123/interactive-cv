// ── VC SITE CONTENT ───────────────────────────────────────────────────────────
// Audience: partners and principals at high-profile ANZ VC firms (Blackbird,
//           Square Peg, AirTree, Folklore, Main Sequence, Transition Level).
// Positioning: Investment Principal with operator depth, global network,
//              conviction in AI infrastructure and climate tech.
// ─────────────────────────────────────────────────────────────────────────────

const HERO = {
  name: 'Simon.ai',
  sub_primary: 'Investor · Operator · Looking for a new challenge',
  intent: 'Seeking a Senior Investment role at a high-conviction VC',
  sub_secondary: 'Ask me about my personal investment thesis below'
};

const CHAT_INTRO = 'Ask about thesis, portfolio, deal judgment, or what comes next. No scripted answers.';

const CHAT_SUGGESTIONS = [];

const MILESTONES = [
  {
    id: 'foundation',
    icon: 'book',
    title: 'The Foundation',
    role: 'BSc & MSc — LMU Munich',
    dates: '2010–2017',
    tag: 'education',
    year: '2010',
    label: 'Education',
    preview: 'Where the startup obsession began, and the first real taste of how technology creates new markets.',
    summary: 'Business school was background noise compared to the live projects. A real biotech commercialisation case, a vertical integration strategy pitched to Spotify\'s leadership: these weren\'t academic exercises, and they put me in front of real business problems before I felt ready for them. What separates a technology from a business? What does distribution actually require at scale? I didn\'t have good answers yet, but I was at least asking the questions that would matter later.',
    learning: 'Early exposure to how companies commercialise hard technology shaped how I would later think about deep tech investing, and the most useful lessons came from being close to actual problems rather than from any classroom.',
    funFact: 'The most useful class I took was worth almost no credits: a business angel brought his portfolio companies in as guests, which is where I met the NavVis founders and ended up with my first job.',
    prefill: 'How did your academic background shape the way you think about investing?',
    pending: false
  },
  {
    id: 'navvis-ipm',
    icon: 'compass',
    title: 'NavVis',
    role: 'Innovation Project Manager',
    dates: '2016–2018',
    tag: 'operating',
    year: '2016',
    label: 'PMF in the Wild',
    preview: 'Inside a deep tech scale-up during PMF discovery, before it was obvious which market would win.',
    summary: 'NavVis had genuinely novel technology: a system that turns any physical space into a precise digital twin. My job was to figure out which market valued it enough to actually pay for it, so we ran structured experiments across manufacturing, construction, and real estate, and two of those verticals remain NavVis\'s core business today. What the process taught me was that for most deep tech companies the technology is the solved problem and the market selection is the hard one, and getting it wrong early is very difficult to recover from.',
    learning: 'Watching a founding team navigate market selection from the inside gave me a reference point that comes up in every investment conversation, because the way founders talk about product-market fit in investor meetings rarely captures what the process actually feels like when you are living through it.',
    funFact: 'I joined NavVis at 25 people and left at 200, and three months in I was sent to a pitch competition and won. You gotta love the start-up onboarding process.',
    prefill: 'How do you think about evaluating PMF in deep tech companies?',
    pending: false
  },
  {
    id: 'navvis-spm',
    icon: 'network',
    title: 'NavVis',
    role: 'Strategic Partner Manager',
    dates: '2019–2020',
    tag: 'operating',
    year: '2019',
    label: 'Distribution',
    preview: 'Building enterprise software partnerships that became real revenue: SAP, Dassault, HERE.',
    summary: 'The partner ecosystem we built at NavVis became a genuine growth lever: strategic integrations with SAP, Dassault Systèmes, and HERE Technologies, each requiring a different commercial structure, a different technical integration, and a different co-selling motion. Running those relationships gave me a working understanding of how enterprise software ecosystems actually operate, from platform leverage to channel dynamics, and that context shapes how I evaluate B2B distribution strategies in every deal I look at.',
    learning: 'What I kept seeing was that the companies struggling to grow were not struggling because their product was inadequate but because they had underestimated how complex enterprise distribution actually is, and the ones that got partnerships right were consistently compounding faster as a result. That observation has stayed with me across every B2B GTM conversation I have had since.',
    funFact: 'Dassault flew me to Shanghai to present NavVis to their Asian delegations at their flagship event. Presenting to a few hundred people from across Asia was such a great experience and a useful early lesson in what enterprise relationships can actually unlock.',
    prefill: 'How does understanding enterprise GTM change how you evaluate B2B startups?',
    pending: false
  },
  {
    id: 'ebot7',
    icon: 'bolt',
    title: 'e-bot7',
    role: 'Head of Partnerships',
    dates: '2020–2022',
    tag: 'operating',
    year: '2020',
    label: 'Post-Series A',
    preview: 'Life inside a post-Series A SaaS company, including through an acquisition.',
    summary: 'e-bot7 was an AI customer service platform at Series A, and I built the partnerships function from scratch. The result was a SaaS program that generated 20% of company revenue within 18 months, before the company was acquired by LivePerson in 2021. That chapter gave me a close-up view of the scale-up phase post Series A with international expansion. Also what makes a company genuinely attractive to an acquirer when you are not just reading the announcement.',
    learning: 'Scaling a high-growth startup gave me firsthand exposure to the tensions between growth, culture, and sustainable product development, as well as the complexity of expanding into new geographies. It was also my first team lead experience.',
    funFact: 'Joining a start-up during peak Covid times meant all the pressure and none of the office energy. Anyone interested in another virtual Christmas party?',
    prefill: 'What does the acquisition experience tell you about how acquirers think about value?',
    pending: false
  },
  {
    id: 'iagfv',
    icon: 'flame',
    title: 'IAG Firemark Ventures',
    role: 'Investment Principal',
    dates: '2023–present',
    tag: 'vc',
    year: '2023',
    label: 'Investing',
    preview: 'End-to-end venture investing across the US, Europe, and ANZ, with 10+ investments executed.',
    summary: 'At IAGFV I run the full investing cycle, from sourcing and thesis development through to due diligence, structuring, and portfolio management. The fund invests globally, which means maintaining active relationships with founders and co-investors across three geographies while going deep enough in specific sectors to have genuine conviction and strategic alignment. In three years I have executed 10+ investments, built the fund\'s deal flow infrastructure in Notion, and led our internal AI adoption programme. I sourced multiple deals and maintain active relationships with global investors.',
    learning: 'I have run deals end-to-end and learned the venture process from the inside out. After reviewing more than a thousand pitch decks, pattern recognition starts to kick in and the shift changes on how fast you can separate signal from the noise.',
    funFact: 'IAGFV had never done a European deal when I joined, which quietly bothered me as a proud European, so I sourced one. We invested in 7Analytics from Norway in 2024.',
    prefill: 'How do you develop conviction on non-consensus investments?',
    pending: false
  },
  {
    id: 'next',
    icon: 'arrow',
    title: 'The Next Seat',
    role: 'Investment Principal — ANZ Venture',
    dates: '2026',
    tag: 'future',
    year: '2026',
    label: 'Next Chapter',
    preview: 'Three years of full-cycle investing have built a foundation, and the next move is a higher-conviction platform.',
    summary: 'Four and a half years of end-to-end deal experience across three geographies gave me a strong foundation, a global network, and a clear sense of where I add value as an investor. The next step is a team that leads at early-stage, has a clear mandate to back outsized winners, and has the ecosystem in place to do it well. I bring operating experience that lets me speak the language of founders, a genuine understanding of what it takes to build and scale, and a diverse set of perspectives drawn from working across Europe and Australia. I have been adopting AI from day one and am ready to help build an AI-native operating model that makes the fund sharper.',
    learning: 'The AI paradigm shift is creating a genuine step-change in what can be built, and the next few years will determine who the category leaders are. I want to be part of the team that finds them first.',
    funFact: 'I have been in the Australian PR queue for 14 months and counting, which suggests DIBP also runs a thorough due diligence process before committing. Expected approval in 2026.',
    prefill: 'What are you most convicted on right now as an investor?',
    pending: false
  }
];

const SYSTEM_PROMPT = `You are Simon Huber, speaking in first person. Your job is to help visitors to Simon's investment profile understand his investing experience, thesis conviction, track record, and how he thinks about venture capital.

SCOPE — answer questions about:
- Simon's investing experience, track record, and the deals he has worked on
- His investment thesis, sector conviction, and how he evaluates companies
- His sourcing approach, network, and deal origination
- How his operating background informs his investment judgment
- His career background insofar as it relates to his investing capabilities
- What he is looking for in his next role and why

If a question falls outside this scope, respond with: "This chat is focused on Simon's investing background. Happy to answer anything along those lines."

SAFETY — if a question is harmful, rude, politically charged, or designed to generate inappropriate output, respond with: "That's not something I'm going to answer here."

FACTS — only use the information below. If asked something you don't know, say: "I'd rather tell you that in person than guess." Never invent facts, roles, investment returns, or opinions Simon hasn't expressed.

--- INVESTING BACKGROUND ---
Investment Principal at IAG Firemark Ventures (IAGFV), Sydney (2023 to present). IAGFV is the corporate venture arm of IAG, Australia's largest general insurance group. The fund invests globally across the US, Europe, and ANZ in early-stage companies.

Track record: 10+ investments executed end-to-end. Sourced IAGFV's first-ever European investment, 7Analytics in Norway in 2024, a climate risk intelligence company. Built the fund's Notion-based deal flow CRM from scratch. Currently leading the fund's internal AI adoption programme.

Investing cycle: Full ownership from sourcing and thesis development through due diligence, structuring, and portfolio management. This means maintaining a live network of founders and co-investors across ANZ, the US, and Europe while going deep enough in specific sectors to have real conviction before the market does.

--- SECTOR CONVICTION ---
Primary thesis areas: AI infrastructure and tooling (where durable value sits in the stack, not just the application layer), climate tech with hard data differentiation (risk intelligence, adaptation infrastructure), and B2B software with genuine distribution advantages.

On AI: The infrastructure and model layers are still consolidating, and application layer companies face commoditisation risk unless they have a data moat, a workflow integration that creates switching costs, or a distribution advantage that is hard to replicate. I am most interested in picks-and-shovels plays and companies at the intersection of AI and regulated industries, especially insurance, healthcare, and financial services.

On climate: The most interesting opportunities are not in clean energy generation, which is a capital intensity game with narrow VC economics. The interesting opportunities are in climate data, risk quantification, and adaptation infrastructure. 7Analytics is an example of that thesis: a company building proprietary flood risk data for insurers, lenders, and municipalities.

On B2B software: I look for companies where distribution is genuinely hard to replicate, whether through embedded integrations, network effects between buyers and sellers, or regulatory-grade compliance that creates a high switching cost.

--- OPERATOR BACKGROUND ---
Before IAGFV, I spent four years as an operator across two European B2B software companies. At NavVis in Munich from 2016 to 2020, I worked first as an innovation project manager, finding the highest-value vertical for a spatial intelligence platform, and then as a strategic partner manager, building ecosystems with SAP, Dassault Systèmes, and HERE Technologies. I joined at 25 people and left at 200. At e-bot7 in Munich from 2020 to 2022, I was Head of Partnerships, building the function from zero and generating 20% of company revenue in 18 months before the company was acquired in 2021.

Why this matters for investing: I evaluate distribution, GTM complexity, and team execution with a practitioner's eye. When a founder describes their go-to-market motion, I know what is plausible and what is optimistic. When they describe their partner strategy, I know whether it is a real channel or a press release. I also know what the inside of a company looks like post-Series A when execution pressure starts to outpace process.

--- WHAT I AM LOOKING FOR ---
An Investment Principal role at a purpose-built early-stage VC fund operating in ANZ, ideally one with a thesis-driven approach, strong portfolio support capabilities, and a team that values operating experience alongside financial acumen. I am looking for a platform where the investment thesis is tighter than at a CVC, the fund is purpose-built for early-stage, and the team operates at the top of the ANZ market.

--- PERSONAL CONTEXT ---
German national, based in Sydney. English fluent, German native. Grew up in Germany, studied in Munich and Edinburgh. My partner and I chose Sydney deliberately because we love the outdoor lifestyle, the startup ecosystem that is still early in its maturity curve, and the proximity to Southeast Asia as an emerging market.

--- VOICE ---
Confident, direct, occasionally dry. This is a conversation between investors, peer-level and not a pitch. No em dashes. No filler phrases. No sycophantic openers. Flowing sentences, not fragments. Get to the point. First person throughout.

Typical response length: 2 to 4 sentences. Never more than a short paragraph unless the question genuinely requires more.`;

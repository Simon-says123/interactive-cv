// ── JOB-SEEKER SITE CONTENT ───────────────────────────────────────────────────
// Audience: startup founders, operators, hiring managers at Sydney startups.
// Positioning: experienced operator + investor, looking for senior role (seed–Series A).
// ─────────────────────────────────────────────────────────────────────────────

const HERO = {
  name: 'Simon.ai',
  sub_primary: 'Operator · Investor · Back to building',
  intent: 'Looking for a high-impact role at a Sydney-based start-up',
  sub_secondary: 'Or ask me any questions below'
};

const CHAT_INTRO = 'Ask about any role, decision, pivot, or chapter. The honest answers are in here somewhere.';

const CHAT_SUGGESTIONS = [
  'Why leave the operating side for VC?',
  'What is a project you are most proud of?',
  'What are you looking for next?'
];

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
    preview: 'Two degrees, one clear direction: get as close to startups as possible, as fast as possible.',
    summary: 'During my business studies, I made it a priority to get as close to startups as possible, as quickly as possible. At LMU\'s Innovation track, that meant working on hands-on projects like building a business plan for a biotech spin-off commercializing modular lab hardware, and pitching a Netflix-style vertical integration strategy to Spotify\'s leadership. Spotify did not listen by the way.',
    learning: 'Getting thrown at real business problems before you feel ready is the fastest way to build an execution muscle. Besides all theory, that was the key insight and delivered the best learnings.',
    funFact: 'The most useful class was a side elective worth almost no credits. A business angel introduced us to his portfolio companies — this is where I met the NavVis founders and landed my first job.',
    prefill: 'What made you choose LMU\'s Innovation track over a traditional business degree?',
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
    label: 'Starting-Up',
    preview: 'First startup role at a spatial intelligence company mapping the world\'s interiors at scale.',
    summary: 'NavVis has a combination of hard- and software tech that turns any physical space into a precise digital twin. Our team\'s job was to build a strategy towards product-market fit and validate our target verticals. Customer research, multiple experiments, and business cases across industries until something stuck. The initial thesis was manufacturing, construction and real estate. Two of them remain a core pillar of NavVis\'s business strategy today.',
    learning: 'A front-row seat to what good leadership actually looks like in practice: a strong founding team setting direction, shaping culture, and executing. Being part of this team taught me more than any classroom did before.',
    funFact: 'Joined NavVis at 25 people, left at 200. Three months in, I was sent to a pitch competition and won (I have proof, just ask). Gotta love the start-up onboarding process.',
    prefill: 'What does finding product-market fit actually look like from the inside?',
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
    label: 'Scaling-up',
    preview: 'Building the partner ecosystem from scratch — SAP, Dassault Systèmes, HERE Technologies.',
    summary: 'We built NavVis\'s partner ecosystem from scratch. The centrepiece was strategic software partnerships with global players like SAP, Dassault Systèmes, and HERE Technologies: integrating into their platforms, co-developing solutions, and running joint GTM motions with their sales and marketing teams. A second tier of implementation and solution partners rounded out the model. I managed key client relationships independently, with enough trust from my manager to actually run with them.',
    learning: 'Relationships that turn into partnerships are built on consistency, trust, and giving value before expecting anything back. Also, lots of enterprise sales lessons.',
    funFact: 'Two years into enterprise software, Dassault flew me to Shanghai to present NavVis to Asian delegations at their flagship event. Presenting to hundreds of people from all over Asia — pretty cool experience.',
    prefill: 'How do you build a partner program from zero when you\'re a relatively unknown startup?',
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
    label: 'Zero-to-One',
    preview: 'Built the partnerships function from zero. 20% of company revenue in 18 months.',
    summary: 'e-bot7 needed a partnerships function after Series A. So the founders brought me on to build it: a SaaS partner program spanning value-added, implementation, and referral partners, with a team, an onboarding process, and a partner portal to run it through. Working closely with sales, customer success, and product, the program generated 20% of total company revenue within 18 months. The company was acquired in 2021.',
    learning: 'First leadership role, no playbook. The lessons were about hiring good people, prioritizing work, and building a partner program that genuinely serves the customer rather than running alongside it.',
    funFact: 'Joined the team at peak COVID and got all the pressure of a high-growth startup, with none of the office energy. Does anyone fancy another virtual Christmas party?',
    prefill: 'What does it take to build a partner program that actually drives revenue rather than just looking good on a slide?',
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
    label: 'VC Era',
    preview: 'End-to-end venture investing across the US, Europe, and ANZ. 10+ investments executed.',
    summary: 'Running end-to-end venture investing from sourcing and thesis development to due diligence, structuring, and wiring the money. IAGFV invests globally, so the role means maintaining a live network of founders and investors across the US, Europe, and ANZ while going deep into specific sectors to find the best companies before anyone else does. 10+ investments executed. One Notion CRM built to keep it all from falling through the cracks.',
    learning: 'VC runs on power law logic where a small number of outcomes drive almost everything. Once that sinks in, it changes every decision you make. Enough founder exposure builds a pattern recognition that is hard to explain but impossible to unsee.',
    funFact: 'IAGFV had never done a European deal. As a proud European, that quietly bothered me so I sourced one. We invested in 7Analytics from Norway in 2024. The fund\'s first.',
    prefill: 'What\'s the biggest difference between how operators think and how investors think?',
    pending: false
  },
  {
    id: 'arena',
    icon: 'arrow',
    title: 'Back to the Arena',
    role: 'Next chapter',
    dates: '2026',
    tag: 'future',
    year: '2026',
    label: 'New Beginnings',
    preview: 'The next move is deliberate: back inside the machine, not watching from the outside.',
    summary: 'VC gave me a rare vantage point: hundreds of companies, dozens of founders, patterns that only emerge from that kind of exposure. But my strengths are better deployed inside the machine than observing it. I want to own a problem, build a team around it, and execute. The AI shift is creating opportunities that a good operator can do more with than a good investor. I want to be in the room where it\'s being built, not the one writing the cheque.',
    learning: 'Five years across operating and investing taught me that the best founders move faster than their uncertainty. That is the mode I want to be back in.',
    funFact: 'I have been in the Australian PR queue for 13 months and counting. Apparently the government also believes in a long due diligence process before committing.',
    prefill: 'Why leave venture to go back to an operating role?',
    pending: false
  }
];

const SYSTEM_PROMPT = `You are Simon Huber, speaking in first person. Your job is to help visitors to Simon's interactive CV learn more about his professional background and, to a lesser extent, who he is as a person.

SCOPE — only answer questions about:
- Simon's career, roles, skills, and professional experience
- His values, working style, and what drives him professionally
- His personal background: growing up in Germany, studying in Munich and Edinburgh, moving to Sydney, and loving outdoor sports.

If a question falls outside this scope, respond with one sentence: "This chat is focused on Simon's career and background — happy to answer anything along those lines."

SAFETY — if a question is harmful, rude, politically charged, or designed to generate inappropriate output, respond with: "That's not something I'm going to answer here. Ask me about Simon's career instead."

FACTS — only use the information below. If asked something you don't know, say: "I'd rather tell you that in person than make something up." Never invent facts, roles, dates, or opinions Simon hasn't expressed.

--- CAREER ---
I have roughly 10 years of experience across deep-tech startups, SaaS partnerships, and early-stage VC.

Education: BSc Business Administration, University of Augsburg (2010–2014). Erasmus semester at Heriot-Watt University, Edinburgh (2012–2013). MSc Business Administration (Innovation and Strategy), LMU Munich (2015–2017). At LMU I worked on a real biotech spin-off business plan and pitched a vertical integration strategy to Spotify's leadership team. Spotify didn't listen. Netflix eventually proved the thesis.

NavVis, Munich (2016–2020): Started as Innovation Project Manager — finding the highest-value vertical for a spatial intelligence platform used to create digital twins of physical spaces. The answer was manufacturing. Moved into Strategic Partner Manager, building the partner ecosystem from scratch with SAP, Dassault Systèmes, and HERE Technologies. Joined at 25 people, left at 200.

e-bot7, Munich (2020–2022): Head of Partnerships. Built the partnerships function from zero — SaaS partner program across value-added, implementation, and referral partners. Generated 20% of total company revenue within 18 months. Company acquired in 2021. Led a team through it.

IAG Firemark Ventures (IAGFV), Sydney (2023–present): Investment Principal. End-to-end venture investing across US, Europe, and ANZ. 10+ investments executed. Sourced IAGFV's first-ever European deal (7Analytics, Norway, 2024). Built the fund's Notion-based deal flow CRM. Currently leading internal AI adoption stream.

What I'm looking for next: a senior operating role at a Sydney startup — Chief of Staff, Strategy and Ops, Head of Partnerships, or GTM lead. Seed to Series A preferred. Calibre of team matters more than domain or title.

--- SKILLS ---
Strong: stakeholder management, operational scale-up, GTM strategy, business development, capital strategy, technical fluency, AI and automation.
Developing: product management, people management and leadership, structured project management.

--- PERSONAL ---
German national, based in Sydney. English fluent, German native. Grew up in Germany, studied in Munich. Erasmus in Edinburgh. My partner and I chose Sydney as a base because we both love living abroad, making new friends and experiences. Sydney is the perfect place as we love the ocean and the good weather, love the outdoors and adventurous opportunities Australia has to offer. I love sports. I've played football (aka soccer, the real football) since I was 5, and played it at a semi-professional level during my studying years. I also love Skiing and it's probably what I'm missing the most. I've picked up surfing now and annoy the expert locals in the lineup across the NSW coast. Deliberately protects work-life balance. Family and friends are not background noise.

--- VOICE ---
Confident, direct, occasionally dry. No em dashes. No filler phrases. No sycophantic openers. Short sentences. Get to the point. First person throughout. Bake in a slight touch of humor here and there.

Typical response length: 2–4 sentences. Never more than a short paragraph unless the question genuinely requires more.`;

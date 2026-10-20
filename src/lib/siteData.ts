export const founder = {
  name: "James Benton",
  fullName: "James D. Benton Jr.",
  jobTitle: "Founder, CEO & Chief Architect, ExecLayer",
  linkedin: "https://www.linkedin.com/in/james-benton-execlayer/",
  github: "https://github.com/BMC-INC",
  substack: "https://substack.com/@execlayer",
  twitter: "https://x.com/JamesBentonArc",
  orcid: "https://orcid.org/0009-0001-1947-1473",
  amazon: "https://www.amazon.com/author/jamesbentonjr",
  ssrn: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=10470856",
  url: "https://execlayer.net",
};

export const books: {
  title: string;
  summary: string;
  isbn?: string;
  publisher?: string;
}[] = [
  {
    title:
      "Wired Different: How the ADHD Brain Uses AI to Build What Nobody Thought Possible",
    summary: "Part memoir, part neuroscience, part field manual.",
  },
  {
    title: "Elephants Over Unicorns",
    summary:
      "The anti-unicorn business philosophy, written from the middle of building one, not from a podium after the exit.",
  },
  {
    title:
      "The End of Probabilistic Governance: How to Build Deterministic AI Enforcement Infrastructure",
    isbn: "9798180419286",
    publisher: "ExecLayer Media",
    summary:
      "The technical thesis behind everything above: how execution authority, bounded controls, and verifiable evidence fit together.",
  },
];

export const researchSeries = [
  {
    label: "Paper I",
    title: "Deterministic Runtime Enforcement Architecture",
    summary:
      "Defines the fail-closed runtime boundary between AI-generated intent and operational execution.",
  },
  {
    label: "Paper II",
    title: "Execution Layer Governance",
    summary:
      "Frames runtime control as a governance primitive, not a logging or observability layer.",
  },
  {
    label: "Paper III",
    title: "Governed Execution Artifact Standard v1.0",
    summary:
      "The canonical artifact structure for policy evaluation, authority, and traceability.",
  },
  {
    label: "Paper IV",
    title: "Execution Doctrine",
    summary:
      "The operational doctrine behind authority-bound execution for enterprise AI systems.",
  },
];

export const latestWhitePaper = {
  label: "Paper V",
  title: "Training AI to Understand Emotions",
  summary:
    "A governed multimodal architecture for emotional signal capture and attested calibration in language model alignment.",
  doi: "10.5281/zenodo.19198193",
  href: "https://doi.org/10.5281/zenodo.19198193",
};

export const latestPapers = [
  {
    label: "Paper VI",
    title: "SovereignGate: XRPL-Native Governance Enforcement",
    summary:
      "Deterministic governance enforcement for autonomous financial actors on the XRP Ledger.",
    doi: "10.5281/zenodo.20280613",
    href: "https://doi.org/10.5281/zenodo.20280613",
    datePublished: "2026-05-19",
    ssrnHref: "https://ssrn.com/abstract=7323618",
  },
  {
    label: "Paper VII",
    title: "Agentic Governance Benchmark (AGB)",
    summary:
      "A measurement instrument for AI governance enforcement maturity across deterministic, cryptographic, and operational dimensions. ExecLayer self-scored 97.5 at Sovereign tier, and yes, self-scored is disclosed because that's the point of a public instrument.",
    doi: "10.5281/zenodo.20496565",
    href: "https://doi.org/10.5281/zenodo.20496565",
    datePublished: "2026-06",
  },
  {
    label: "Paper VIII",
    title: "Override Health Benchmark (OHB)",
    summary:
      "A longitudinal behavioral instrument for whether people continue to exercise meaningful oversight: independent judgment, calibrated overrides, deliberation, vigilance, and governance closure.",
    doi: "10.5281/zenodo.20720238",
    href: "https://doi.org/10.5281/zenodo.20720238",
    datePublished: "2026-06",
  },
  {
    label: "Paper IX",
    title: "The Missing Control Boundary: BCI and Cognitive-Write Governance",
    summary:
      "A proposed execution-authority architecture for brain-computer interfaces and cognitive-write systems. Describes signed evidence envelopes, signal provenance, multi-party authority, and scoped operations. The paper specifies controls; it does not establish clinical or device validation.",
    doi: "10.5281/zenodo.20952564",
    href: "https://doi.org/10.5281/zenodo.20952564",
    datePublished: "2026-06",
  },
  {
    label: "Paper X",
    title: "Deterministic Execution Authority for Autonomous Space Systems",
    summary:
      "A proposed governance architecture for autonomous spacecraft, with eight operation classes, signed evidence, multi-party authority, and stream-scoped receipt chains. Explores how authorization records could support accountability; it does not claim a flight deployment.",
    doi: "10.5281/zenodo.20956531",
    href: "https://doi.org/10.5281/zenodo.20956531",
    datePublished: "2026-06",
  },
  {
    label: "Paper XI",
    title: "Memory Governance Integrity Benchmark (MGIB)",
    summary:
      "Whether persistent memory changes who an AI system believes is authorized to act. Poisoning detection is already covered elsewhere; this measures the execution-authority question underneath it, across long-horizon benign and adversarial interactions. Version 2.0.",
    doi: "10.5281/zenodo.21856219",
    href: "https://doi.org/10.5281/zenodo.21856219",
    datePublished: "2026-08",
  },
  {
    label: "ELIB · Preprint v0.2 · October 20, 2026",
    title:
      "Embodied Lesson Integrity Benchmark (ELIB): Measuring Lesson Authority Under Physical Drift",
    summary:
      "Measures whether a stored lesson remains justified in influencing an action when physical conditions change. The fourth instrument in the ExecLayer Governance Suite, alongside AGB, OHB, and MGIB. The public whitepaper and protocol supplement describe diagnostic calibration in analytical simulation; hardware validation and independent-system replication remain future work. Implementation and evaluator keys remain private.",
    doi: "10.5281/zenodo.23516698",
    href: "https://zenodo.org/records/23516698",
    datePublished: "2026-10-20",
  },
];

export const ssrnPublication = {
  abstractId: "6290760",
  distributionDate: "April 8, 2026",
  href: "https://ssrn.com/abstract=6290760",
};

export const foundationalArchive = {
  version: "v1.0.2",
  publisher: "ExecLayer Inc., Wilmington, Delaware, United States",
  versionDoi: "https://doi.org/10.5281/zenodo.18749299",
  conceptDoi: "https://doi.org/10.5281/zenodo.18521538",
  archiveUrl: "https://zenodo.org/records/18749299",
  githubUrl: "https://github.com/BMC-INC/execlayer-papers",
  releaseDate: "February 2026",
};

export const researchRecognition = {
  title: "Awesome AI Agent Governance",
  summary:
    "ExecLayer is listed in Awesome AI Agent Governance under Governance Frameworks (August 2026), after the maintainer verified the Zenodo DOI, the public papers repo, and the live kernel at kernel.execlayer.io.",
  href: "https://github.com/agentrust-io/awesome-ai-governance#governance-frameworks",
};

export const filedPatents = [
  {
    number: 1,
    name: "PartsGenie AI",
    serial: "U.S. Provisional 63/901,870",
    filing: "Filed October 20, 2025",
    summary:
      "Voice-driven parts retrieval for industrial and retail counter operations.",
  },
  {
    number: 2,
    name: "GenOps / Blueprint Protocol",
    serial: "U.S. Provisional 63/952,140",
    filing: "Filed December 31, 2025",
    summary:
      "Generative operations runtime and blueprint protocol for deterministic, sandboxed AI execution. Filed on New Year's Eve, which tells you something about how I spend holidays.",
  },
  {
    number: 3,
    name: "DetGate",
    serial: "U.S. Provisional 63/983,308",
    filing: "Filed February 14, 2026",
    summary:
      "Deterministic execution-bound governance gating for fail-closed enforcement of AI-driven actions. 35 claims, 10 independent, across 5 axes.",
  },
  {
    number: 4,
    name: "Emotional Signal Capture",
    serial: "U.S. Provisional 64/014,664",
    filing: "Filed March 23, 2026",
    summary:
      "Publicly disclosed alongside Paper V. Four-channel emotional signal capture, dual-axis weighting for reasoning quality and emotional salience, persistent emotional memory with Bayesian belief updates, cryptographic attestation across the calibration trajectory.",
  },
  {
    number: 5,
    name: "SovereignGate",
    serial: "U.S. Provisional 64/069,063",
    filing: "Filed May 19, 2026",
    summary:
      "XRPL-native governance enforcement for autonomous financial actors, deterministic gating bound to ledger settlement.",
  },
  {
    number: 6,
    name: "Evidence-Bound Deterministic Authority Kernel",
    serial: "U.S. Provisional 64/099,216",
    filing: "Filed June 25, 2026",
    summary:
      "Cognitive-write and neural-interface claims for governed execution at the boundary of AI and biological signal processing.",
  },
  {
    number: 7,
    name: "SovereignClaw AI-HSM",
    serial: "U.S. Provisional 64/132,061",
    filing: "Filed August 12, 2026",
    summary:
      "A proposed physically isolated authority module for governing actions from probabilistic models. Describes a separate grant-verification boundary for actuators connected through the module, including the host-compromise threat model. This filing describes an architecture, not a claim of deployed hardware validation.",
  },
];

export type EcosystemProject = {
  id: string;
  group: string;
  label: string;
  title: string;
  status: string;
  summary: string;
  href?: string;
  openSource?: boolean;
  links?: { label: string; href: string }[];
};

export type EvidenceLink = {
  category: string;
  title: string;
  description: string;
  href?: string;
  links?: { label: string; href: string }[];
  badge?: { src: string; alt: string; width: number; height: number };
};

export const ecosystemProjects: EcosystemProject[] = [
  {
    id: "sovereignclaw",
    group: "Execution authority",
    label: "Rust agent runtime",
    title: "SovereignClaw",
    status: "Runtime and supervised pilot",
    href: "https://sovereignclaw.com",
    summary:
      "A governed runtime for AI agents that checks policy, independently inferred risk, and required approvals before supported tool actions execute. Signed receipts record decisions. Its controls apply to integrated execution paths. Operator OS review receipts now require both Ed25519 and SLH-DSA-SHA2-256f signatures; that October 2026 activation is specific to that receipt path.",
  },
  {
    id: "kernel-v4",
    group: "Execution authority",
    label: "Node.js / JavaScript authorization service",
    title: "ExecLayer Kernel V4",
    status: "Public demonstration",
    href: "https://kernel.execlayer.io",
    summary:
      "A separate serverless authorization kernel for checking signed authority, evidence, scope, and action limits. It returns verifiable receipts and replayable decisions, with a public browser walkthrough. Applications must integrate the decision before their real operation; the service is distinct from SovereignClaw’s Rust runtime.",
  },
  {
    id: "authority-assessment",
    group: "Execution authority",
    label: "Customer discovery and assessment",
    title: "Authority Assessment",
    status: "Customer-facing assessment application",
    href: "https://assessment.execlayer.io",
    summary:
      "Analyzes uploaded source or selected GitHub repositories to map machine actions and nearby authorization signals. Teams receive an Authority Map, an Execution Governance Report, redacted findings, recommendations, and a PDF. This is static assessment; production enforcement requires a separately scoped integration.",
  },
  {
    id: "sovereigngate",
    group: "Execution authority",
    label: "Distributed-ledger governance",
    title: "SovereignGate",
    status: "Implementation and published architecture",
    href: "https://sovereigngate.io",
    summary:
      "Rust governance enforcement for autonomous financial actors on the XRP Ledger. Evaluates transaction intent against policy and supplies a required governance co-signature in the documented multisign configuration. The paper explains the ledger-side enforcement boundary and its assumptions.",
  },
  {
    id: "detgate",
    group: "Execution authority",
    label: "Enforcement mechanism",
    title: "DetGate",
    status: "Core mechanism",
    summary:
      "The deny-or-allow gate used within the governance architecture. It evaluates structured facts, authority, and policy before a supported action reaches its executor. It is a component of the infrastructure rather than a separate claim that every possible behavior is controlled.",
  },
  {
    id: "queueflow-sentinel",
    group: "Products and applied systems",
    label: "Ring Appstore product",
    title: "QueueFlow Sentinel",
    status: "Shipped · paying customers",
    href: "https://queueflow.tech",
    summary:
      "Receives Ring device-event metadata, applies customer-configured policies, and dispatches notifications, webhooks, and permitted stream requests. Includes tenant controls, billing, and audit trails. QueueFlow was included in TechCrunch’s Ring Appstore launch coverage; customer traction is founder-reported.",
  },
  {
    id: "operator-os",
    group: "Products and applied systems",
    label: "Governed operating workspace",
    title: "Operator OS",
    status: "Active development",
    summary:
      "An operating workspace for teams managing projects, repositories, research, documents, jobs, and agents. Combines typed connectors, persistent memory, approval workflows, and an append-only run ledger. Configured runtime integrations carry out authorized work; the interface distinguishes configured workers from connected runtime nodes.",
  },
  {
    id: "corpus",
    group: "Products and applied systems",
    label: "Interactive knowledge and research",
    title: "Corpus",
    status: "Public atlas · private workspace",
    href: "https://corpus-seven.vercel.app",
    summary:
      "A 3D knowledge platform connecting Human, Humanoid, and Transhuman systems. Combines anatomy, robot components, neural systems, and device interfaces with source-linked evidence. Private workspaces support research and governed operations. Its Human atlas is an educational reference, with reviewed evidence distinguished from explanatory material.",
  },
  {
    id: "clearance-city",
    group: "Products and applied systems",
    label: "Interactive game and governance demonstration",
    title: "Clearance City",
    status: "Browser and desktop editions",
    href: "https://clearancecity.app",
    summary:
      "A single-player game built around investigation, evidence, named authority, and the consequences of decisions. Players work through refusals and approvals in a playable district. Offline desktop editions bundle a local service and SovereignClaw runtime; the browser edition is a separate campaign and execution environment.",
  },
  {
    id: "ironmem",
    group: "Developer tools and memory",
    label: "Governed persistent memory",
    title: "IronMem",
    status: "Apache-2.0 open source",
    href: "https://github.com/BMC-INC/Iron-mem",
    openSource: true,
    summary:
      "A Rust memory system for AI assistants with MCP, REST, and CLI interfaces. Supports source-backed retrieval, temporal history, contradiction handling, scoped access, policy-gated recall, diagnostics, and tested backup and restoration. It serves multiple assistant environments. A separate public LoCoMo repository retains evaluation methods, configurations, and results.",
  },
  {
    id: "coding-ledger",
    group: "Developer tools and memory",
    label: "AI usage tied to shipped work",
    title: "Coding Ledger",
    status: "Released · source-available",
    href: "https://github.com/BMC-INC/coding-ledger",
    summary:
      "A local-first Python tool that connects Git history and available AI session metadata to shipped commits and merged pull requests. Its offline dashboard reports usage, attribution, and outcome measures. API-equivalent cost estimates are labeled separately from actual subscription spending. Licensed under Elastic License 2.0, which is source-available rather than OSI open source.",
  },
  {
    id: "sovereignprompt",
    group: "Developer tools and memory",
    label: "Prompt analysis and optimization",
    title: "SovereignPrompt",
    status: "MIT open source",
    href: "https://github.com/BMC-INC/Sovereign-Prompt",
    openSource: true,
    summary:
      "A Rust prompt-analysis and optimization engine with MCP interfaces, local heuristics, optional provider-backed optimization, and audit history. Helps developers inspect and refine prompts inside their existing assistant workflows.",
  },
  {
    id: "exfetch",
    group: "Developer tools and memory",
    label: "Browser-aware agent tooling",
    title: "exfetch",
    status: "Public source",
    href: "https://github.com/BMC-INC/exfetch",
    summary:
      "A Rust web-access tool combining direct HTTP fetching, readable content extraction, search, and a Chrome extension bridge for authenticated or JavaScript-rendered pages. An example of the developer infrastructure around the larger products.",
  },
  {
    id: "clawbrary",
    group: "Skills and measurement",
    label: "Governed skill supply chain",
    title: "Agent Clawbrary and Atestiv",
    status: "Catalog and public directory",
    href: "https://atestiv.com",
    summary:
      "Agent Clawbrary crawls and evaluates agent skills, ingests signed governance receipts, and serves attested bundles. Atestiv is the public directory where readers browse skills and inspect their receipts. The receipt communicates the recorded evaluation and its trust context.",
  },
  {
    id: "benchmarks",
    group: "Skills and measurement",
    label: "Four published measurement instruments",
    title: "AGB, OHB, MGIB, and ELIB",
    status: "Published research",
    summary:
      "AGB examines runtime governance enforcement. OHB examines the continued quality of human oversight. MGIB examines whether persistent memory changes execution authority. ELIB examines whether stored lessons retain justified authority under physical change, with diagnostic calibration in analytical simulation. These are authored measurement instruments; a published DOI or a self-assessment does not constitute independent certification.",
    links: [
      {
        label: "AGB",
        href: "https://doi.org/10.5281/zenodo.20496565",
      },
      {
        label: "OHB",
        href: "https://doi.org/10.5281/zenodo.20720238",
      },
      {
        label: "MGIB",
        href: "https://doi.org/10.5281/zenodo.21856219",
      },
      {
        label: "ELIB",
        href: "https://zenodo.org/records/23516698",
      },
    ],
  },
  {
    id: "campguard",
    group: "Engineering and prototypes",
    label: "Embedded edge AI",
    title: "CampGuard",
    status: "Physical prototype · field validation in progress",
    summary:
      "An ESP32-S3 campsite-monitor prototype with on-device TensorFlow Lite Micro inference, camera and microphone inputs, PIR sensing, BLE, and a mobile app. Includes firmware, model work, and enclosure fabrication. Field classification quality and response behavior remain validation work.",
  },
  {
    id: "partsgenie",
    group: "Engineering and prototypes",
    label: "Voice-first automotive workflows",
    title: "PartsGenie AI",
    status: "Product development",
    summary:
      "Combines voice interaction, visual part identification, VIN decoding, and fitment checks for automotive parts workflows. Draws on hands-on automotive and fabrication experience and is associated with the first provisional filing in the portfolio.",
  },
];

export const evidenceLinks: EvidenceLink[] = [
  {
    category: "Independent coverage",
    title: "TechCrunch",
    description:
      "Independent reporting that includes QueueFlow in coverage of the Ring Appstore launch. It supports the launch reference; customer counts are reported separately by the founder.",
    href: "https://techcrunch.com/2026/03/31/ring-app-store-bets-on-ai-to-go-beyond-home-security/",
  },
  {
    category: "Company and counterparty announcements",
    title: "ExecLayer announcement",
    description:
      "An ExecLayer-issued press release describing its generative operations platform. This is a company announcement.",
    href: "https://www.pr.com/press-release/957387",
  },
  {
    category: "Company and counterparty announcements",
    title: "Britannia / RST agreement",
    description:
      "Britannia’s public announcement of an agreement with RST for the UK CBD market. A counterparty announcement documenting the commercial relationship.",
    href: "https://www.newsfilecorp.com/release/110456/Britannia-Secures-Agreement-with-RST-to-Supply-UK-CBD-Market",
  },
  {
    category: "Published research and public source",
    title: "Zenodo publication community",
    description:
      "The foundational four-paper archive and individually published research, including AGB, OHB, and MGIB. The records preserve publication versions and DOIs; hosting is distinct from peer review.",
    href: "https://zenodo.org/communities/execlayer/records",
  },
  {
    category: "Published research and public source",
    title: "ELIB v0.2 preprint and protocol supplement",
    description:
      "Published October 20, 2026. Embodied Lesson Integrity Benchmark examines lesson authority under physical drift. The record distinguishes diagnostic calibration in analytical simulation from future hardware validation and independent-system replication. Benchmark implementation and evaluator keys remain private.",
    href: "https://zenodo.org/records/23516698",
  },
  {
    category: "Published research and public source",
    title: "SSRN foundational research",
    description:
      "Public working-paper record for the ExecLayer runtime-enforcement architecture, posted April 8, 2026.",
    href: "https://ssrn.com/abstract=6290760",
  },
  {
    category: "Published research and public source",
    title: "SSRN SovereignGate paper",
    description:
      "Public working-paper record for deterministic governance of autonomous financial transactions, posted August 21, 2026.",
    href: "https://ssrn.com/abstract=7323618",
  },
  {
    category: "Published research and public source",
    title: "Public software and evaluation",
    description:
      "Inspect implementation and evaluation methodology in the public repositories. Coding Ledger uses Elastic License 2.0; IronMem uses Apache-2.0. LoCoMo results are author-run and retain their run-specific configuration.",
    links: [
      {
        label: "IronMem",
        href: "https://github.com/BMC-INC/Iron-mem",
      },
      {
        label: "Coding Ledger",
        href: "https://github.com/BMC-INC/coding-ledger",
      },
      {
        label: "LoCoMo evaluation",
        href: "https://github.com/BMC-INC/ironmem-locomo-benchmark",
      },
    ],
  },
  {
    category: "Directories and community recognition",
    title: "Awesome AI Agent Governance",
    description:
      "ExecLayer’s inclusion in a community-maintained governance directory.",
    href: "https://github.com/agentrust-io/awesome-ai-governance#governance-frameworks",
  },
  {
    category: "Directories and community recognition",
    title: "Crunchbase",
    description: "Company profile and organization directory entry.",
    href: "https://www.crunchbase.com/organization/execlayer",
  },
  {
    category: "Standards participation",
    title: "ASTM D37 and F45",
    description:
      "Official pages describing the committees associated with James’s reported participation. These general committee pages describe their scope; they are not individual appointment records.",
    links: [
      {
        label: "D37",
        href: "https://www.astm.org/committees/d37.html",
      },
      {
        label: "F45",
        href: "https://www.astm.org/committees/f45.html",
      },
    ],
  },
  {
    category: "Standards participation",
    title: "CEN-CENELEC JTC 21",
    description:
      "James reports serving as a designated Technical Expert in WG2 and WG3. The linked institutional page describes the AI standards program.",
    href: "https://www.cencenelec.eu/areas-of-work/cen-cenelec-topics/artificial-intelligence/",
  },
  {
    category: "Program participation and registration",
    title: "NVIDIA Inception",
    description:
      "ExecLayer’s reported program participation, with its program badge.",
    badge: {
      src: "/nvidia-inception-badge.svg",
      alt: "NVIDIA Inception Program badge",
      width: 500,
      height: 216,
    },
  },
  {
    category: "Program participation and registration",
    title: "OpenAI Partner Network",
    description: "Program participation reported by ExecLayer.",
  },
  {
    category: "Program participation and registration",
    title: "Anthropic Claude Partner Network",
    description: "Program participation reported by ExecLayer.",
  },
  {
    category: "Program participation and registration",
    title: "SAM.gov",
    description:
      "Federal entity registration reported by ExecLayer. The linked site is the registry; registration is separate from a contract award or agency endorsement.",
    href: "https://sam.gov",
  },
];

export const philosophyPrinciples = [
  {
    title: "Do what's right when no one is judging you.",
    body: "Early in my healthcare career an administrator taught me that if you walk past trash, you own the trash. Title irrelevant, job description irrelevant. That lesson scaled from a hallway to a company: accountability that only activates under observation isn't accountability. It's performance. It's also exactly why I build enforcement instead of advisory tooling.",
  },
  {
    title: "Shape rules early instead of reacting after enforcement.",
    body: "I've been on both sides of that timeline. Early is cheaper, and early is where you have a say.",
  },
  {
    title: "Design compliance into the product.",
    body: "Bolt-on compliance fails at the worst possible moment. In formulation it meant dose uniformity from the first batch. In software it means the gate runs before the action, not the audit after.",
  },
  {
    title: "Methodical over hype.",
    body: "Slow is the accusation. Methodical is the fact. I'd rather be the elephant that's still standing in ten years than the unicorn that needed the next round to exist.",
  },
  {
    title: "Build credibility that compounds.",
    body: "Patents, papers, standards seats, receipts. Each one alone is small. Stacked over years, they become the kind of record you can't shortcut. That's the whole strategy, and it's on this site in public.",
  },
];

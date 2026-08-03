export interface EvidenceItem {
  id: number;
  code: string;
  title: string;
  category: "Writing" | "Research" | "Interviews" | "Podcast" | "Articles" | "Social Presence" | "Occupation";
  unlockedAtProgress: number; // e.g. 20, 40, 60, 80, 100
  type: "quote" | "snippet" | "waveform" | "logo" | "chart";
  quoteText?: string;
  source?: string;
  verified?: boolean;
  snippetTitle?: string;
  snippetBody?: string;
  podcastHost?: string;
  podcastTitle?: string;
  duration?: string;
  logoText?: string;
  logoBlur?: boolean;
  dateStr?: string;
  hint?: string;
}

export const EVIDENCE_DATA: EvidenceItem[] = [
  {
    id: 1,
    code: "EVIDENCE 01",
    title: "Core Communication Philosophy",
    category: "Writing",
    unlockedAtProgress: 20,
    type: "quote",
    quoteText: "Write in a way that a nerdy high school kid will understand.",
    source: "Verified Editorial Guideline — Internal Document",
    verified: true,
    dateStr: "Aug 02, 2026",
    hint: "Both researchers share a relentless obsession with simplifying complex financial systems without dumbing them down."
  },
  {
    id: 2,
    code: "EVIDENCE 02",
    title: "Market Mechanics & Deep-Dive Analysis",
    category: "Research",
    unlockedAtProgress: 40,
    type: "snippet",
    snippetTitle: "Deconstructing Retail Order Flow Dynamics",
    snippetBody: "When analyzing liquidity aggregation across Indian exchanges, the friction isn't just technology—it's market literacy. If you break down SEBI regulations into clear mechanics, retail investors make dramatically better risk choices...",
    source: "Markets by Zerodha Internal Draft #104",
    verified: true,
    dateStr: "Aug 04, 2026",
    hint: "Known for meticulous teardowns of market structures, macro trends, and regulatory nuances."
  },
  {
    id: 3,
    code: "EVIDENCE 03",
    title: "Multimedia Discourse & Financial Literacy",
    category: "Podcast",
    unlockedAtProgress: 60,
    type: "waveform",
    podcastHost: "Zerodha Tribe Special Session",
    podcastTitle: "Ep. 42: Why Most Market Commentary is Noise & How to Read the Signal",
    duration: "48 min audio clip",
    source: "Audio Archives — Verified Frequency Track",
    verified: true,
    dateStr: "Aug 06, 2026",
    hint: "Frequent voices on financial education, demystifying indices, option strategies, and fundamental research."
  },
  {
    id: 4,
    code: "EVIDENCE 04",
    title: "Institutional Affiliation Teardown",
    category: "Occupation",
    unlockedAtProgress: 80,
    type: "logo",
    logoText: "MARKETS BY ZERODHA",
    logoBlur: true,
    source: "Editorial Masthead Record",
    verified: true,
    dateStr: "Aug 07, 2026",
    hint: "They lead the research initiatives behind Zerodha's flagship market education platform."
  },
  {
    id: 5,
    code: "EVIDENCE 05",
    title: "Author Signatures & Final Dossier",
    category: "Articles",
    unlockedAtProgress: 100,
    type: "snippet",
    snippetTitle: "Primary Investigators Identified",
    snippetBody: "Initiator 1: K. Lohia (Head of Content & Research Strategy)\nInitiator 2: P. Agarwal (Lead Quantitative Research & Analysis)\nSubject Matter: Capital Markets, Microstructure, Behavioral Economics.",
    source: "Cryptographic Hash Match: 0x908...ZRD",
    verified: true,
    dateStr: "Aug 08, 2026",
    hint: "All evidence vectors converge on the guest speakers for the August 9 event."
  }
];

export const REVEAL_DATA = {
  names: ["Krishna Lohia", "Pranav Agarwal"],
  organization: "Markets by Zerodha",
  eventDate: "August 9",
  eventTitle: "Zerodha Tribe Annual Research Assembly",
  dossierSummary: "Krishna Lohia & Pranav Agarwal represent the core editorial and quantitative research engine behind Markets by Zerodha. Their work focuses on stripping away market jargon, creating high-signal research tools, and empowering everyday investors through clarity and precision."
};

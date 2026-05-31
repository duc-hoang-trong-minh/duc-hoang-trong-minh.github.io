// site-real.jsx — Real-content version, single-page personal academic site.
// "Signal" direction: cool near-white, all-sans typographic hero, mono metadata.
// Consumes CSS vars on its root: --bg --surface --ink --muted --line --accent
// --font-display --font-body --font-mono

// Resource resolver: prefer bundled blob URLs (when running as standalone
// HTML via super_inline_html), fall back to file paths in dev.
const ASSET = (key, fallback) =>
  (typeof window !== "undefined" && window.__resources && window.__resources[key]) || fallback;

const REAL = {
  name: "Duc Hoang Trong Minh",
  handle: "duc.hoang",
  role: "MSc Researcher · Telecommunications",
  affiliation: "NECPHY-Lab · INRS",
  location: "Montréal, Canada",
  email: "trong-minh-duc.hoang@inrs.ca",
  phone: "+1 438-365-1183",
  shortBio:
    "Master's researcher at INRS Montréal, advised by Prof. Long Bao Le at NECPHY-Lab — beginning a PhD in fall 2026. Working on AI-enabled, security-aware communication systems: semantic communication, digital JSCC, and an O-RAN platform that turns standard 5G uplink signals into a device-free RF sensing layer.",
  longerBio:
    "At INRS I work with Prof. Long Bao Le at NECPHY-Lab on AI-native cellular systems. The current focus is semantic communication — its design, its adversarial robustness, and its translation into deployable infrastructure: a conference paper at IEEE ICC '25 on backdoor attacks against LLM-based semantic encoders, a letter in IEEE Wireless Communications Letters extending the analysis to digital JSCC, and a follow-on letter on broader semcom design. Alongside this I lead the lab's 5G-O-RAN sensing platform, which reuses standard uplink reference signals as a sensing layer — the base station becomes the sensor — demonstrated live for INRS at IDEaS Marketplace 2026 in Ottawa. Earlier training at HUST in physical-layer design anchors all of it. I'm beginning a PhD at INRS in fall 2026, continuing on programmable RAN and AI-native sensing.",
  outside:
    "badminton, chess, and a winter spent on a few different kinds of skates.",
  interests: ["Adversarial ML", "Joint source–channel coding", "RF sensing", "Reinforcement learning", "Physical-layer security"],
  links: {
    scholar: "https://scholar.google.com/citations?user=Q9BYd8QAAAAJ&hl=en",
    githubInrs: "https://github.com/INRSDUC",
    githubPersonal: "https://github.com/Htminhduc",
    facebook: "https://www.facebook.com/duchoangtrong.minh.1",
    photos: "https://photos.app.goo.gl/Vtie7kXBSSLMCPHi9",
    cv: ASSET("cvPdf", "uploads/Curriculum_Vitae_2025.pdf"),
    demo: ASSET("demoPdf", "uploads/5gdemo.pdf"),
    advisor: "https://necphy-lab.com/",
  },
  education: [
    { years: "2024 — now", school: "INRS · Énergie Matériaux Télécommunications (EMT)", degree: "Master's, Telecommunications", note: "Advised by Prof. Long Bao Le · NECPHY-Lab" },
    { years: "2018 — 2023", school: "Hanoi University of Science and Technology (HUST)", degree: "Engineer, Electronics & Telecommunications", advisor: "Advised by Prof. Chuyen Thanh Nguyen · CTARG-Lab", note: "CPA 3.63 / 4.0 · Top 12 of 559 · Best Thesis Award" },
  ],
  honors: [
    { year: "2023", text: "Best Thesis Award — Q-learning-based AMP for PHY-layer security in VLC · HUST (Top 5%)" },
    { year: "2023", text: "Excellent Graduation Award — HUST (Top 5% of the graduating class)" },
    { year: "2023", text: "KAIST EE CAMP — selected from 6,231 applicants (Top 1.2%)" },
    { year: "2021", text: "HUST Encouraging Academic Scholarship · Type A (Top 5%)" },
  ],
  news: [
    { date: "May 2026", text: "Attended IDEaS Marketplace in Ottawa to present the INRS 5G-O-RAN device-free sensing project.", tag: "demo" },
    { date: "Apr 2026", text: "Starting PhD at INRS this fall — continuing on programmable RAN and AI-native sensing.", tag: "career" },
    { date: "2025", text: "ICC '25 paper on backdoor attacks against LLM-based semantic communication systems accepted.", tag: "paper" },
    { date: "2025", text: "Journal letter on backdoor attacks against digital JSCC semantic communication accepted at IEEE Wireless Communications Letters.", tag: "paper" },
    { date: "2024", text: "Joined NECPHY-Lab at INRS as a Master's student, advised by Prof. Long Bao Le.", tag: "career" },
    { date: "2024", text: "IEEE Access paper on Q-learning-based adaptive modulation + precoding for PLS in VLC published.", tag: "paper" },
  ],
  projects: [
    {
      id: "p1",
      title: "5G-O-RAN Device-Free RF Sensing",
      tag: "Featured · 2025 — present · NECPHY-Lab",
      blurb:
        "An AI-RAN platform that reuses standard 5G uplink reference signals (SRS) as a sensing layer. The base station becomes the sensor — no wearables, no extra radar — for live presence detection, occupancy, and a continuously-learning RF digital twin. Demonstrated live for INRS at IDEaS Marketplace 2026 in Ottawa.",
      hover:
        "Commercial gNB over UDP → channel estimation → time-frequency waterfall → delay-domain features → online centroid classifier. RF-only, camera-only, or dual mode per mission.",
      stack: ["O-RAN", "SRS", "PyTorch", "RealSense", "MobileNet"],
      demo: true,
      ongoing: true,
    },
    {
      id: "p2",
      title: "Semantic Communication",
      tag: "2024 — present · INRS",
      blurb:
        "Design and robustness of LLM- and JSCC-based semantic communication systems. Earlier work characterised trigger-based backdoor attacks; the latest letter widens the focus to the design space of semcom itself — codec choices, channel coupling, and end-to-end training.",
      hover: "Three outputs so far: ICC '25 (backdoors on LLM-based semcom), a journal letter in IEEE WCL (digital JSCC backdoors), and a follow-on letter on broader semcom design.",
      stack: ["PyTorch", "LLM", "JSCC"],
      ongoing: true,
    },
    {
      id: "p3",
      title: "PHY-Layer Security for Visible Light Communications",
      tag: "2021 — 2024 · HUST",
      blurb:
        "Joint design of adaptive modulation, precoding, and probabilistic constellation shaping — combining Q-learning with convex optimisation to maximise secrecy capacity against eavesdroppers.",
      hover: "Best Thesis Award at HUST. Three publications: IEEE Access (J2), VTC-Spring '23 (C2), ICCE '24 (C3).",
      stack: ["MATLAB", "Q-learning", "Convex opt."],
      closed: true,
    },
    {
      id: "p4",
      title: "Deep-Learning MIMO Detection",
      tag: "2022 · HUST",
      blurb:
        "Two-step deep-learning detectors and triple mixed-ADC architectures for large-scale MIMO under low-resolution quantisation.",
      hover: "Three conference papers (PIMRC '22, ATC '22, NICS '22) co-authored at HUST.",
      stack: ["Python", "PyTorch"],
      closed: true,
    },
    {
      id: "p5",
      title: "EEG Signal Processing",
      tag: "Side track",
      blurb:
        "Applying the same signal-processing instincts from telecoms to biosignals. Currently exploring deep-learning architectures for EEG classification — same toolkit, different physics. Work-in-progress on GitHub.",
      hover: "Public repos under @Htminhduc. Aiming to share preliminary results once the experimental pipeline stabilises.",
      stack: ["Python", "PyTorch", "MNE"],
      ongoing: true,
    },
    {
      id: "p6",
      title: "Tomato Leaf-Disease Detection on Edge",
      tag: "Side track · 2021 · HUST",
      blurb:
        "Benchmarked CNN families on PlantVillage for tomato leaf-disease classification and deployed the best one to a Raspberry Pi 3. MobileNet v3 won the Pareto front — 96.6% top-1 at 127 ms per inference, 7.4 MB on disk. Published at IEEE ATC '21.",
      hover: "First foray into deep-learning on constrained hardware. The diagram shows the benchmark sweep — accuracy vs. latency across MobileNet, EfficientNet, ResNet, VGG.",
      stack: ["TensorFlow", "MobileNet v3", "Raspberry Pi 3"],
      closed: true,
    },
  ],
  publications: [
    { id: "J1", year: 2025, type: "Journal", title: "Backdoor attacks on digital joint source-channel coding semantic communication systems", venue: "IEEE Wireless Communications Letters, 2025", authors: "Duc T. M. Hoang, L. B. Le", url: "" },
    { id: "C1", year: 2025, type: "Conference", title: "Backdoor attacks on large language model based semantic communication systems", venue: "IEEE ICC 2025 — to appear", authors: "Duc T. M. Hoang, L. B. Le", url: "" },
    { id: "J2", year: 2024, type: "Journal", title: "Joint design of adaptive modulation and precoding for physical layer security in visible light communications using reinforcement learning", venue: "IEEE Access, 2024", authors: "Duc T. M. Hoang, T. V. Pham, A. T. Pham, C. T. Nguyen", url: "https://doi.org/10.1109/ACCESS.2024.3412055" },
    { id: "C3", year: 2024, type: "Conference", title: "Joint optimization of precoding and probabilistic constellation shaping for physical layer security in visible light communications", venue: "IEEE ICCE 2024, pp. 19–24", authors: "Duc T. M. Hoang, T. V. Pham, A. T. Pham, C. T. Nguyen", url: "https://doi.org/10.1109/ICCE62051.2024.10634641" },
    { id: "C2", year: 2023, type: "Conference", title: "Q-learning-based joint design of adaptive modulation and precoding for physical layer security in visible light communications", venue: "IEEE VTC-Spring 2023, pp. 1–5", authors: "Duc T. M. Hoang, T. V. Pham, A. T. Pham, C. T. Nguyen", url: "https://doi.org/10.1109/VTC2023-Spring57618.2023.10201078" },
    { id: "C4", year: 2022, type: "Conference", title: "Improving performance of large-scale MIMO detector via a proposed two-step deep-learning architecture", venue: "IEEE PIMRC 2022, pp. 1294–1300", authors: "H. T. Nguyen, Duc T. M. Hoang, A. T. Pham", url: "https://doi.org/10.1109/PIMRC54779.2022.9977645" },
    { id: "C6", year: 2022, type: "Conference", title: "Performance of triple mixed-ADC large-scale MIMO detector using deep learning", venue: "IEEE ATC 2022, pp. 7–12", authors: "A. T. Pham, Duc T. M. Hoang, H. T. Nguyen", url: "https://doi.org/10.1109/ATC55345.2022.9943026" },
    { id: "C7", year: 2022, type: "Conference", title: "Deep learning detector for large-scale MIMO systems with low-resolution ADCs", venue: "IEEE NICS 2022, pp. 311–315", authors: "A. T. Pham, Duc T. M. Hoang, H. T. Nguyen", url: "https://doi.org/10.1109/NICS56915.2022.10013385" },
    { id: "C5", year: 2021, type: "Conference", title: "A benchmark of deep learning models for multi-leaf diseases for edge devices", venue: "IEEE ATC 2021, pp. 318–323", authors: "P. T. Anh, Duc T. M. Hoang", url: "https://doi.org/10.1109/ATC52653.2021.9598196" },
  ],
};

const PUB_TYPES = ["All", "Journal", "Conference", "Preprint"];

// ─── Small atoms ──────────────────────────────────────────────────────────
function PortraitSlot() {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 5",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        background: "var(--surface)",
        border: "1px solid var(--line)",
      }}
    >
      <img
        src={ASSET("portraitImg", "assets/portrait.jpg")}
        alt="Duc Hoang Trong Minh"
        style={{
          width: "100%", height: "100%",
          objectFit: "cover",
          objectPosition: "55% 35%",
          display: "block",
          filter: "saturate(0.92) contrast(1.03)",
        }}
      />
      <div style={{
        position: "absolute", left: 10, bottom: 8,
        font: "10px var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase",
        color: "#fff", background: "rgba(0,0,0,.45)",
        padding: "3px 7px", borderRadius: 3,
      }}>HUST · 2023</div>
    </div>
  );
}

function FigureSlot({ label = "figure", h = 190, accent = false }) {
  return (
    <div
      style={{
        width: "100%",
        height: h,
        background: accent
          ? "color-mix(in oklab, var(--accent) 6%, var(--surface))"
          : "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent 0 14px, color-mix(in oklab, var(--ink) 5%, transparent) 14px 15px)",
        display: "flex",
        alignItems: "flex-end",
        padding: 12,
        font: "10.5px/1 var(--font-mono)",
        color: "var(--muted)",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      ↳ {label}
    </div>
  );
}

// ─── Inline icon set (lucide-style) ───────────────────────────────────────
const Icon = ({ name, size = 14 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
    scholar: <><path d="M2 9 12 4l10 5-10 5L2 9z" /><path d="M6 11v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" /><path d="M22 9v5" /></>,
    github: <><path d="M9 19c-4 1.2-4-2-6-2" /><path d="M16 22v-3.4a3 3 0 0 0-.9-2.4c2.9-.3 6-1.4 6-6.5a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.6 1.3a12.4 12.4 0 0 0-6.5 0C7 2.4 5.8 2.7 5.8 2.7a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4.3 9.7c0 5 3.1 6.2 6 6.5a3 3 0 0 0-.9 2.3V22" /></>,
    lab: <><path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-5h6v5" /><path d="M9 12h.01M15 12h.01M12 12h.01" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
  };
  return <svg {...common} aria-hidden="true" style={{ flex: "0 0 auto", verticalAlign: "-2px" }}>{paths[name]}</svg>;
};

// ─── 5G-O-RAN platform diagram — drawn as an illustration of the real rack ──
function Diagram5G() {
  // Soft hand-drawn-ish technical drawing of the actual testbed:
  // top platform with drone (test UE) + 4-element antenna array (RU),
  // operator UI shelf, two DAIBOX compute units (DU + CU). Annotations
  // on the right via dashed leader lines.
  return (
    <div style={{
      width: "100%",
      background: "color-mix(in oklab, var(--accent) 4%, var(--surface))",
      border: "1px solid var(--line)", borderRadius: 10,
      padding: "14px 14px 10px",
      display: "flex", flexDirection: "column", gap: 6,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ font: "10px var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", display: "flex", justifyContent: "space-between" }}>
        <span>NECPHY testbed · elevation</span><span>5G O-RAN sensing</span>
      </div>

      <svg viewBox="0 0 280 330" width="100%" height="auto"
        style={{ display: "block", color: "var(--ink)", font: "9px var(--font-mono)", overflow: "visible" }}>
        <defs>
          <marker id="d5dot" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="5" markerHeight="5">
            <circle cx="3" cy="3" r="1.6" fill="var(--accent)" />
          </marker>
          <pattern id="d5screen" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="color-mix(in oklab, var(--accent) 22%, var(--surface))" />
            <line x1="0" y1="2" x2="4" y2="2" stroke="color-mix(in oklab, var(--accent) 45%, transparent)" strokeWidth="0.4" />
          </pattern>
          <pattern id="d5hatch" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
          </pattern>
        </defs>

        <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" fill="none">

          {/* ── Top platform: drone + antenna array ─────────────────── */}
          {/* drone (quadcopter) — small floating UE */}
          <g transform="translate(110, 14)">
            <line x1="-9" y1="-4" x2="9" y2="4" />
            <line x1="-9" y1="4" x2="9" y2="-4" />
            <circle cx="-9" cy="-4" r="3" fill="var(--bg)" />
            <circle cx="9" cy="-4" r="3" fill="var(--bg)" />
            <circle cx="-9" cy="4" r="3" fill="var(--bg)" />
            <circle cx="9" cy="4" r="3" fill="var(--bg)" />
            <rect x="-3" y="-1.5" width="6" height="3" rx="0.6" fill="var(--ink)" stroke="none" />
          </g>

          {/* 4-element patch antenna row */}
          <g transform="translate(60, 36)">
            <line x1="0" y1="14" x2="100" y2="14" />
            {[0,1,2,3].map(i => (
              <g key={i} transform={`translate(${4 + i*24}, 0)`}>
                <rect x="0" y="0" width="18" height="12" rx="1.5" fill="var(--bg)" />
                <line x1="2" y1="3" x2="16" y2="3" strokeWidth="0.5" />
                <line x1="2" y1="6" x2="16" y2="6" strokeWidth="0.5" />
                <line x1="2" y1="9" x2="16" y2="9" strokeWidth="0.5" />
                <line x1="9" y1="12" x2="9" y2="14" strokeWidth="0.6" />
              </g>
            ))}
          </g>

          {/* Tektronix label band */}
          <g transform="translate(60, 56)">
            <rect x="-2" y="0" width="104" height="8" rx="1" fill="var(--bg)" />
            <text x="50" y="6" textAnchor="middle" fontSize="5.5" fontFamily="inherit" fill="currentColor" letterSpacing="0.1em">TEKTRONIX · K4000</text>
          </g>

          {/* Open shelf cavity (antenna mast box) */}
          <g transform="translate(60, 66)">
            <rect x="-2" y="0" width="104" height="34" rx="1" fill="url(#d5hatch)" />
            {/* dangling RF cables — squiggly lines */}
            <path d="M88 0 Q92 8 86 14 Q80 20 88 28 L92 34" strokeWidth="0.6" opacity="0.6" />
            <path d="M92 0 Q96 6 90 12 Q84 18 92 26 L96 34" strokeWidth="0.6" opacity="0.6" />
          </g>

          {/* ── Monitor shelf ───────────────────────────────────────── */}
          <g transform="translate(60, 105)">
            <rect x="-2" y="0" width="104" height="58" rx="1" fill="var(--bg)" />
            {/* monitor body */}
            <rect x="14" y="6" width="72" height="42" rx="1.5" fill="var(--ink)" stroke="none" />
            <rect x="17" y="9" width="66" height="36" fill="url(#d5screen)" />
            {/* monitor stand */}
            <rect x="44" y="48" width="12" height="3" fill="var(--ink)" stroke="none" />
            <rect x="36" y="51" width="28" height="2" rx="0.5" fill="var(--ink)" stroke="none" />
            {/* desk items: gamepad, mouse */}
            <ellipse cx="20" cy="56" rx="6" ry="2.5" fill="var(--bg)" />
            <line x1="14" y1="56" x2="26" y2="56" strokeWidth="0.5" opacity="0.5" />
            <ellipse cx="84" cy="56" rx="4" ry="2" fill="var(--bg)" />
          </g>

          {/* shelf gap */}
          <g transform="translate(60, 165)">
            <line x1="-2" y1="0" x2="102" y2="0" />
            <line x1="-2" y1="6" x2="102" y2="6" strokeWidth="0.5" opacity="0.4" />
          </g>

          {/* ── DAIBOX #1 (DU) ──────────────────────────────────────── */}
          <g transform="translate(62, 178)">
            <rect x="0" y="0" width="100" height="44" rx="2" fill="var(--ink)" stroke="none" />
            <rect x="0" y="0" width="100" height="44" rx="2" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
            <rect x="22" y="8" width="56" height="10" rx="1" fill="var(--accent)" opacity="0.85" />
            <text x="50" y="15" textAnchor="middle" fontSize="6" fontFamily="inherit" fill="var(--bg)" letterSpacing="0.06em">DAIBOX 0-kV</text>
            {/* status LED */}
            <circle cx="50" cy="32" r="1.6" fill="var(--accent)" />
            <circle cx="50" cy="32" r="3" fill="none" stroke="var(--accent)" strokeWidth="0.4" opacity="0.5" />
            {/* vents */}
            {[0,1,2,3,4,5,6,7,8].map(i => (
              <line key={i} x1={10 + i*9} y1="38" x2={14 + i*9} y2="38" stroke="var(--bg)" strokeWidth="0.5" opacity="0.6" />
            ))}
          </g>

          {/* ── DAIBOX #2 (CU) ──────────────────────────────────────── */}
          <g transform="translate(62, 230)">
            <rect x="0" y="0" width="100" height="44" rx="2" fill="var(--ink)" stroke="none" />
            <rect x="0" y="0" width="100" height="44" rx="2" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
            <rect x="22" y="8" width="56" height="10" rx="1" fill="var(--accent)" opacity="0.85" />
            <text x="50" y="15" textAnchor="middle" fontSize="6" fontFamily="inherit" fill="var(--bg)" letterSpacing="0.06em">DAIBOX 0-kV</text>
            <circle cx="50" cy="32" r="1.6" fill="var(--accent)" />
            <circle cx="50" cy="32" r="3" fill="none" stroke="var(--accent)" strokeWidth="0.4" opacity="0.5" />
            {[0,1,2,3,4,5,6,7,8].map(i => (
              <line key={i} x1={10 + i*9} y1="38" x2={14 + i*9} y2="38" stroke="var(--bg)" strokeWidth="0.5" opacity="0.6" />
            ))}
          </g>

          {/* cabling spilling out to the floor */}
          <path d="M62 274 Q56 286 50 290 Q44 294 38 318" strokeWidth="0.5" opacity="0.5" />
          <path d="M162 274 Q170 282 168 296 Q166 308 170 318" strokeWidth="0.5" opacity="0.5" />

          {/* ── Annotation leaders (dashed, ending in dot) ────────── */}
          <g stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="2 2" fill="none" markerStart="url(#d5dot)">
            <path d="M110 14 L 180 14 L 200 14" />              {/* drone */}
            <path d="M110 42 L 200 42 L 218 42" />              {/* antennas */}
            <path d="M114 126 L 200 130" />                     {/* monitor */}
            <path d="M114 200 L 200 200" />                     {/* DU */}
            <path d="M114 252 L 200 252" />                     {/* CU */}
          </g>

          {/* annotation labels */}
          <g fontFamily="inherit" fill="currentColor">
            <text x="205" y="16" fontSize="7.5" fontWeight="600">UE</text>
            <text x="205" y="24" fontSize="6.5" opacity="0.6">test target · drone</text>

            <text x="222" y="44" fontSize="7.5" fontWeight="600">RU</text>
            <text x="222" y="52" fontSize="6.5" opacity="0.6">4-elem antenna array</text>

            <text x="205" y="130" fontSize="7.5" fontWeight="600">Operator UI</text>
            <text x="205" y="138" fontSize="6.5" opacity="0.6">live xApp · digital twin</text>

            <text x="205" y="200" fontSize="7.5" fontWeight="600">DU</text>
            <text x="205" y="208" fontSize="6.5" opacity="0.6">PHY · low-MAC</text>

            <text x="205" y="252" fontSize="7.5" fontWeight="600">CU + sensing</text>
            <text x="205" y="260" fontSize="6.5" opacity="0.6">5GC · xApp · AI-RAN</text>
          </g>

          {/* footnote */}
          <g fontFamily="inherit" fill="var(--accent)" opacity="0.85">
            <text x="0" y="324" fontSize="7" letterSpacing="0.04em">▸ SRS uplink reused as sensor — base station becomes the sensor</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

// ─── Smooth in-page scroll helper (no scrollIntoView) ─────────────────────
function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top, behavior: "smooth" });
}

// ─── Entrance animation: transform-only, content NEVER hidden ─────────────
// Five prior regressions taught us: any keyframe that sets opacity:0 risks
// permanently invisible content when the host's animation timeline stalls
// at t=0. Final rule: opacity stays at 1 always. The keyframe only nudges
// transform — visually subtle, mechanically bulletproof.
if (typeof document !== "undefined" && !document.getElementById("site-real-styles")) {
  const s = document.createElement("style");
  s.id = "site-real-styles";
  s.textContent = `
    @keyframes srvSlideUp { from { transform: translateY(12px); } to { transform: none; } }
    html, body { max-width: 100%; overflow-x: hidden; }
    .srv-topbar { box-sizing: border-box; width: 100%; }
    .srv-reveal { animation: srvSlideUp .55s cubic-bezier(.2,.7,.3,1); }
    @media (prefers-reduced-motion: reduce) { .srv-reveal { animation: none; } }

    /* ── Mobile (≤ 720px viewport, OR opt-in via .srv-mobile wrapper) ── */
    .srv-mobile .srv-topbar       { padding: 14px 20px !important; gap: 12px !important; }
    .srv-mobile .srv-topbar-nav   { display: none !important; }
    .srv-mobile .srv-topbar-cv    { font-size: 11px !important; }
    .srv-mobile .srv-page         { padding: 0 20px 64px !important; gap: 64px !important; }
    .srv-mobile .srv-hero-grid    { grid-template-columns: 1fr !important; gap: 30px !important; align-items: start !important; }
    .srv-mobile .srv-profile-portrait { width: min(220px, 70vw) !important; justify-self: start !important; }
    .srv-mobile .srv-hero-h1      { font-size: clamp(44px, 12vw, 64px) !important; }
    .srv-mobile .srv-interests    { grid-template-columns: repeat(2, 1fr) !important; }
    .srv-mobile .srv-interests > div:nth-child(odd)  { border-left: none !important; }
    .srv-mobile .srv-interests > div:nth-child(even) { border-left: 1px solid var(--line) !important; }
    .srv-mobile .srv-interests > div:nth-child(n+3)  { border-top: 1px solid var(--line) !important; }
    .srv-mobile .srv-about-bottom { grid-template-columns: 1fr !important; gap: 32px !important; }
    .srv-mobile .srv-news-grid    { grid-template-columns: 1fr !important; gap: 0 !important; }
    .srv-mobile .srv-news-row     { grid-template-columns: 72px 1fr !important; }
    .srv-mobile .srv-news-row > span:last-child { display: none !important; }
    .srv-mobile .srv-research-row { grid-template-columns: 1fr !important; gap: 16px !important; }
    .srv-mobile .srv-research-row > span:first-child { font-size: 11px !important; }
    .srv-mobile .srv-research-row > div:nth-child(2) h3 { font-size: 22px !important; }
    .srv-mobile .srv-research-row > :last-child { max-width: 100% !important; }
    .srv-mobile .srv-pub-row      { grid-template-columns: 44px 1fr !important; row-gap: 4px !important; }
    .srv-mobile .srv-pub-row > span:nth-child(2) { grid-column: 2 !important; }
    .srv-mobile .srv-pub-row > div { grid-column: 1 / -1 !important; }
    .srv-mobile .srv-pub-row > span:last-child   { grid-column: 1 / -1 !important; text-align: left !important; }
    .srv-mobile .srv-contact-card { grid-template-columns: 1fr !important; padding: 24px !important; gap: 24px !important; }
    .srv-mobile .srv-contact-card > div:first-child > div { font-size: 26px !important; }

    @media (max-width: 720px) {
      .srv-topbar       { padding: 14px 20px !important; gap: 12px !important; }
      .srv-topbar-nav   { display: none !important; }
      .srv-topbar-cv    { font-size: 11px !important; }
      .srv-page         { padding: 0 20px 64px !important; gap: 64px !important; }
      .srv-hero-grid    { grid-template-columns: 1fr !important; gap: 30px !important; align-items: start !important; }
      .srv-profile-portrait { width: min(220px, 70vw) !important; justify-self: start !important; }
      .srv-hero-h1      { font-size: clamp(44px, 12vw, 64px) !important; }
      .srv-interests    { grid-template-columns: repeat(2, 1fr) !important; }
      .srv-interests > div:nth-child(odd)  { border-left: none !important; }
      .srv-interests > div:nth-child(even) { border-left: 1px solid var(--line) !important; }
      .srv-interests > div:nth-child(n+3)  { border-top: 1px solid var(--line) !important; }
      .srv-about-bottom { grid-template-columns: 1fr !important; gap: 32px !important; }
      .srv-news-grid    { grid-template-columns: 1fr !important; gap: 0 !important; }
      .srv-news-row     { grid-template-columns: 72px 1fr !important; }
      .srv-news-row > span:last-child { display: none !important; }
      .srv-research-row { grid-template-columns: 1fr !important; gap: 16px !important; }
      .srv-research-row > span:first-child { font-size: 11px !important; }
      .srv-research-row > div:nth-child(2) h3 { font-size: 22px !important; }
      .srv-research-row > :last-child { max-width: 100% !important; }
      .srv-pub-row      { grid-template-columns: 44px 1fr !important; row-gap: 4px !important; }
      .srv-pub-row > span:nth-child(2) { grid-column: 2 !important; }
      .srv-pub-row > div { grid-column: 1 / -1 !important; }
      .srv-pub-row > span:last-child   { grid-column: 1 / -1 !important; text-align: left !important; }
      .srv-contact-card { grid-template-columns: 1fr !important; padding: 24px !important; gap: 24px !important; }
      .srv-contact-card > div:first-child > div { font-size: 26px !important; }
    }
  `;
  document.head.appendChild(s);
}

function Reveal({ children, delay = 0 }) {
  return <div className="srv-reveal" style={{ animationDelay: delay + "ms" }}>{children}</div>;
}

// ═════════════════════════════════════════════════════════════════════════
// Top-level Site
// ═════════════════════════════════════════════════════════════════════════
function Site() {
  const [hovered, setHovered] = React.useState(null);
  const [type, setType] = React.useState("All");
  const list = type === "All" ? REAL.publications : REAL.publications.filter((p) => p.type === type);

  // Console easter egg — for the curious who open devtools.
  React.useEffect(() => {
    if (window.__srvGreeted) return;
    window.__srvGreeted = true;
    console.log("%c↳ hey — you opened the console.", "color:#b95a3c;font:13px ui-monospace,monospace");
    console.log("%cmostly RF, semantic comms & the occasional EEG detour. if you read this far, say hi:\n%c" + REAL.email, "color:#7a7468;font:12px ui-monospace,monospace", "color:#b95a3c;font:12px ui-monospace,monospace");
  }, []);

  return (
    <div style={{
      background: "var(--bg)",
      color: "var(--ink)",
      fontFamily: "var(--font-body)",
      fontSize: 15.5,
      lineHeight: 1.55,
      minHeight: "100vh",
    }}>
      {/* ── Top bar ───────────────────────────────────────── */}
      <div className="srv-topbar" style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px clamp(24px, 5vw, 72px)",
        background: "color-mix(in oklab, var(--bg) 85%, transparent)",
        borderBottom: "1px solid var(--line)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        font: "12px var(--font-mono)", letterSpacing: "0.04em",
      }}>
        <a href={"#top"} onClick={(e) => { e.preventDefault(); smoothScrollTo("top"); }}
          style={{ color: "var(--ink)", textDecoration: "none" }}>duc h.t.m. · inrs</a>
        <nav className="srv-topbar-nav" style={{ display: "flex", gap: 22, color: "var(--muted)" }}>
          {[["about","about"],["news","news"],["research","research"],["publications","publications"],["contact","contact"]].map(([id,label]) => (
            <a key={id} href={"#" + id}
              onClick={(e) => { e.preventDefault(); smoothScrollTo(id); }}
              style={{ color: "inherit", textDecoration: "none", transition: "color .15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >{label}</a>
          ))}
        </nav>
        <a className="srv-topbar-cv" href={REAL.links.cv} target="_blank" rel="noopener" style={{ color: "var(--accent)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="download" size={12} /> cv.pdf</a>
      </div>

      {/* ── Page body ─────────────────────────────────────── */}
      <div id="top" className="srv-page" style={{ padding: "0 clamp(24px, 5vw, 72px) 80px", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 78 }}>

        {/* HERO */}
        <header style={{ paddingTop: 64 }}>
          <Reveal>
            <div className="srv-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 340px", gap: 56, alignItems: "end" }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ font: "11px var(--font-mono)", letterSpacing: "0.06em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 18 }}>
                  {REAL.role}
                </div>
                <h1 className="srv-hero-h1" style={{
                  font: "500 clamp(60px, 7.8vw, 100px)/0.95 var(--font-display)",
                  letterSpacing: "-0.035em",
                  margin: 0, color: "var(--ink)",
                  textWrap: "balance",
                }}>{REAL.name}</h1>
                <div style={{ marginTop: 14, font: "13px var(--font-mono)", color: "var(--muted)", letterSpacing: "0.02em", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--accent)" }}>↳</span>
                  <span>Hoàng Trọng Minh Đức</span>
                </div>
                <p style={{ marginTop: 28, maxWidth: 740, fontSize: 18, lineHeight: 1.56 }}>
                  {REAL.shortBio}
                </p>
                <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", gap: "8px 22px", font: "12px var(--font-mono)", color: "var(--muted)", letterSpacing: "0.04em" }}>
                  <span>{REAL.affiliation}</span>
                  <span style={{ color: "var(--line)" }}>/</span>
                  <span>{REAL.location}</span>
                  <span style={{ color: "var(--line)" }}>/</span>
                  <span>PhD · fall 2026</span>
                </div>
              </div>
              <div className="srv-profile-portrait" style={{ width: "min(300px, 100%)", justifySelf: "center", alignSelf: "end" }}>
                <PortraitSlot />
              </div>
            </div>
          </Reveal>
        </header>

        {/* ABOUT */}
        <section id="about">
          <Reveal>
            <div style={{ font: "11px var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>methods &amp; tools</div>
            <div className="srv-interests" style={{
              display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
              borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
              marginTop: 14,
            }}>
              {REAL.interests.map((i, idx) => (
                <div key={i} style={{
                  padding: "20px 14px",
                  borderLeft: idx === 0 ? "none" : "1px solid var(--line)",
                  font: "14px var(--font-body)", color: "var(--ink)",
                  display: "flex", flexDirection: "column", gap: 8,
                }}>
                  <span style={{ font: "11px var(--font-mono)", color: "var(--muted)" }}>0{idx + 1}</span>
                  {i}
                </div>
              ))}
            </div>
            <div className="srv-about-bottom" style={{ marginTop: 30, display: "grid", gridTemplateColumns: "minmax(0, 1fr) 340px", gap: 56, alignItems: "start" }}>
              <div>
                <p style={{ margin: 0, maxWidth: 760, fontSize: 15.5, lineHeight: 1.65 }}>{REAL.longerBio}</p>
                {REAL.outside && (
                  <p style={{
                    margin: "22px 0 0",
                    paddingLeft: 14,
                    borderLeft: "1px solid var(--line)",
                    fontSize: 13.5, lineHeight: 1.55,
                    color: "var(--muted)",
                  }}>
                    <span style={{ font: "10.5px var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginRight: 10 }}>off hours</span>
                    {REAL.outside}
                  </p>
                )}
              </div>
              <div>
                <MetaLabel>education</MetaLabel>
                <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column" }}>
                  {REAL.education.map((e, i) => (
                    <li key={i} style={{ padding: "12px 0", borderTop: "1px solid var(--line)", borderBottom: i === REAL.education.length - 1 ? "1px solid var(--line)" : "none" }}>
                      <div style={{ font: "11px var(--font-mono)", color: "var(--accent)", letterSpacing: "0.04em" }}>{e.years}</div>
                      <div style={{ marginTop: 4, fontSize: 14, color: "var(--ink)" }}>{e.school}</div>
                      <div style={{ fontSize: 13, color: "var(--muted)" }}>{e.degree}</div>
                      {e.advisor && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2, fontStyle: "italic" }}>{e.advisor}</div>}
                      <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2, fontStyle: "italic" }}>{e.note}</div>
                    </li>
                  ))}
                </ul>
                <MetaLabel style={{ marginTop: 24 }}>honors</MetaLabel>
                <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                  {REAL.honors.map((h, i) => (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "50px 1fr", gap: 12, alignItems: "baseline" }}>
                      <span style={{ font: "12px var(--font-mono)", color: "var(--accent)" }}>{h.year}</span>
                      <span style={{ fontSize: 13.5, lineHeight: 1.5 }}>{h.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* NEWS */}
        <section id="news">
          <Reveal>
            <SectionHead title="News" count={REAL.news.length} />
            <div className="srv-news-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0 36px" }}>
              {REAL.news.map((n, i) => (
                <div key={i} className="srv-news-row" style={{
                  display: "grid", gridTemplateColumns: "92px 1fr 50px", gap: 16,
                  padding: "16px 0", borderTop: "1px solid var(--line)",
                  alignItems: "baseline",
                }}>
                  <span style={{ font: "12px var(--font-mono)", color: "var(--accent)" }}>{n.date}</span>
                  <span style={{ fontSize: 14, lineHeight: 1.55 }}>{n.text}</span>
                  <span style={{ font: "10px var(--font-mono)", color: "var(--muted)", textAlign: "right", letterSpacing: "0.06em", textTransform: "uppercase" }}>{n.tag}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* RESEARCH */}
        <section id="research">
          <Reveal>
            <SectionHead title="Research" count={REAL.projects.length} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              {REAL.projects.map((p, i) => {
                const isHover = hovered === p.id;
                const featured = i === 0;
                return (
                  <article
                    key={p.id}
                    className="srv-research-row"
                    onMouseEnter={() => setHovered(p.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "60px 1fr 340px",
                      gap: 28,
                      padding: "28px 0",
                      borderTop: "1px solid var(--line)",
                      borderBottom: i === REAL.projects.length - 1 ? "1px solid var(--line)" : "none",
                      background: isHover ? "color-mix(in oklab, var(--accent) 4%, transparent)" : "transparent",
                      transition: "background .2s",
                    }}
                  >
                    <span style={{ font: "12px var(--font-mono)", color: "var(--muted)", paddingTop: 4 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                        <span style={{ font: "11px var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase", color: featured ? "var(--accent)" : "var(--muted)" }}>
                          {p.tag}
                        </span>
                        {p.demo && (
                          <a href={REAL.links.demo} target="_blank" rel="noopener"
                            style={{ font: "11px var(--font-mono)", color: "var(--accent)", textDecoration: "none", border: "1px solid var(--accent)", padding: "1px 6px", borderRadius: 4 }}>
                            demo deck ↗
                          </a>
                        )}
                        {p.closed && (
                          <span style={{ font: "10px var(--font-mono)", color: "var(--muted)", textDecoration: "none", border: "1px solid var(--line)", padding: "1px 6px", borderRadius: 4, letterSpacing: "0.08em" }}>
                            closed
                          </span>
                        )}
                        {p.ongoing && (
                          <span style={{
                            font: "10px var(--font-mono)", color: "var(--accent)",
                            border: "1px solid color-mix(in oklab, var(--accent) 45%, transparent)",
                            padding: "1px 6px 1px 5px", borderRadius: 4,
                            letterSpacing: "0.08em",
                            display: "inline-flex", alignItems: "center", gap: 5,
                          }}>
                            <span style={{
                              width: 5, height: 5, borderRadius: 999,
                              background: "var(--accent)",
                              display: "inline-block",
                              boxShadow: "0 0 0 3px color-mix(in oklab, var(--accent) 22%, transparent)",
                            }} />
                            ongoing
                          </span>
                        )}
                      </div>
                      <h3 style={{ font: "500 28px/1.15 var(--font-display)", letterSpacing: "-0.02em", margin: 0, color: "var(--ink)" }}>{p.title}</h3>
                      <p style={{ margin: "10px 0 0", fontSize: 15.5, lineHeight: 1.6, maxWidth: 500 }}>{p.blurb}</p>
                      <div style={{
                        maxHeight: isHover ? 80 : 0, overflow: "hidden",
                        transition: "max-height .3s, opacity .25s",
                        opacity: isHover ? 1 : 0,
                      }}>
                        <p style={{ margin: "12px 0 0", paddingLeft: 12, borderLeft: "2px solid var(--accent)", fontSize: 13, color: "var(--muted)", lineHeight: 1.55 }}>
                          ↳ {p.hover}
                        </p>
                      </div>
                      <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
                        {p.stack.map((s, si) => (
                          <React.Fragment key={s}>
                            {si > 0 && <span style={{ color: "var(--line)", font: "11px var(--font-mono)" }}>·</span>}
                            <span style={{ font: "11px var(--font-mono)", color: "var(--muted)" }}>{s}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    {featured
                      ? <Diagram5G />
                      : (window.PROJECT_DIAGRAMS && window.PROJECT_DIAGRAMS[p.id])
                        ? React.createElement(window.PROJECT_DIAGRAMS[p.id])
                        : <FigureSlot label="figure" h={180} />}
                  </article>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications">
          <Reveal>
            <SectionHead title="Publications" count={REAL.publications.length} />
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 18, font: "12px var(--font-mono)", letterSpacing: "0.04em", flexWrap: "wrap" }}>
              <span style={{ color: "var(--muted)" }}>filter:</span>
              {PUB_TYPES.map((t) => (
                <button key={t} onClick={() => setType(t)}
                  style={{
                    background: "transparent", border: 0, padding: 0, cursor: "pointer",
                    color: type === t ? "var(--accent)" : "var(--muted)",
                    font: "12px var(--font-mono)", letterSpacing: "0.04em",
                    borderBottom: "1px solid " + (type === t ? "var(--accent)" : "transparent"),
                    paddingBottom: 2,
                  }}>{t.toLowerCase()}</button>
              ))}
              <span style={{ marginLeft: "auto", color: "var(--muted)" }}>{list.length} / {REAL.publications.length}</span>
              <a href={REAL.links.scholar} target="_blank" rel="noopener" style={{ color: "var(--accent)", textDecoration: "none" }}>scholar ↗</a>
            </div>
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {list.map((p, i) => (
                <li key={p.id} className="srv-pub-row" style={{
                  display: "grid", gridTemplateColumns: "40px 60px 1fr 100px", gap: 16,
                  padding: "14px 0", borderTop: "1px solid var(--line)",
                  borderBottom: i === list.length - 1 ? "1px solid var(--line)" : "none",
                  alignItems: "baseline",
                }}>
                  <span style={{ font: "12px var(--font-mono)", color: "var(--muted)" }}>[{p.id}]</span>
                  <span style={{ font: "12px var(--font-mono)", color: "var(--accent)" }}>{p.year}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 15.5, color: "var(--ink)", lineHeight: 1.4 }}>
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--line)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
                          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "var(--line)")}
                        >{p.title}</a>
                      ) : p.title}
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 3 }}>{p.authors} · {p.venue}</div>
                  </div>
                  <span style={{ font: "11px var(--font-mono)", color: "var(--muted)", textAlign: "right", letterSpacing: "0.06em" }}>{p.type.toLowerCase()}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Reveal>
            <SectionHead title="Contact" />
            <div className="srv-contact-card" style={{
              border: "1px solid var(--line)", borderRadius: 12,
              padding: "32px 36px",
              background: "var(--surface)",
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "center",
            }}>
              <div>
                <div style={{ font: "500 34px/1.1 var(--font-display)", letterSpacing: "-0.015em", color: "var(--ink)" }}>
                  Let's talk
                </div>
                <p style={{ margin: "12px 0 0", fontSize: 15.5, color: "var(--muted)", maxWidth: 380, lineHeight: 1.6 }}>
                  Always glad to chat about O-RAN platforms, semantic comms, or anything around 5G/6G systems. Email is the fastest way.
                </p>
              </div>
              <div style={{ font: "13px/1.95 var(--font-mono)" }}>
                <Row icon="mail"    k="email"   v={REAL.email} href={"mailto:" + REAL.email} />
                <Row icon="phone"   k="phone"   v={REAL.phone} href={"tel:" + REAL.phone.replace(/\s/g,"")} />
                <Row icon="scholar" k="scholar" v="Google Scholar" href={REAL.links.scholar} ext />
                <Row icon="github"  k="github"  v="Htminhduc" href={REAL.links.githubPersonal} ext />
                <Row icon="github"  k="lab"     v="INRSDUC" href={REAL.links.githubInrs} ext />
                <Row icon="lab"     k="advisor" v="necphy-lab.com" href={REAL.links.advisor} ext />
                <Row icon="facebook" k="social"  v="facebook" href={REAL.links.facebook} ext />
                <Row icon="image"   k="photos"  v="album" href={REAL.links.photos} ext />
              </div>
            </div>
            <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, font: "11px var(--font-mono)", color: "var(--muted)", letterSpacing: "0.06em" }}>
              <span>duc h.t.m. · inrs · 2026</span>
              <Clocks />
              <span>updated · may 2026</span>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}

function Row({ icon, k, v, href, ext }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 8, width: 96, flex: "0 0 96px" }}>
        {icon && <Icon name={icon} size={13} />}
        <span>{k}</span>
      </span>
      <a href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener" : undefined}
        style={{ color: "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--line)", display: "inline-flex", alignItems: "center", gap: 6 }}
        onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "var(--line)")}
      >{v}{ext && <span style={{ color: "var(--muted)", font: "10px var(--font-mono)" }}>↗</span>}</a>
    </div>
  );
}

// ─── Live dual-clock — Hà Nội & Montréal, ticking side by side ────────────
// A quiet "alive" detail: origin city → current city, real local times.
function Clocks() {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 20000);
    return () => clearInterval(id);
  }, []);
  let han = "··", mtl = "··";
  try {
    const fmt = (tz) => new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(now);
    han = fmt("Asia/Ho_Chi_Minh");
    mtl = fmt("America/Toronto");
  } catch (e) { /* Intl tz unsupported — fall back to dashes */ }
  const t = (v) => <span style={{ color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{v}</span>;
  return (
    <span title="local time, ticking live">
      Hà Nội&nbsp;{t(han)}&nbsp;→&nbsp;Montréal&nbsp;{t(mtl)}
    </span>
  );
}

function MetaLabel({ children, style }) {
  return (
    <div style={{ font: "11px var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", ...style }}>
      {children}
    </div>
  );
}

function SectionHead({ title, count }) {
  return (
    <div style={{ marginBottom: 22, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
      <h2 style={{ font: "500 clamp(28px, 4vw, 40px)/1 var(--font-display)", letterSpacing: "-0.02em", margin: 0, color: "var(--ink)" }}>{title}</h2>
      {count != null && (
        <span style={{ font: "12px var(--font-mono)", color: "var(--muted)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
          {String(count).padStart(2, "0")} entries
        </span>
      )}
    </div>
  );
}

Object.assign(window, { Site });

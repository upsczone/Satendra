import upscOsShowcaseImg from '../assets/images/upsc_zone_os_showcase_1791182814018.jpg';
import academicHistoryImg from '../assets/images/academic_history_archive_1791182824011.jpg';
import digitalGrowthImg from '../assets/images/digital_growth_strategy_1791182834487.jpg';
import healthcareDirectoryImg from '../assets/images/healthcare_caretaker_directory_1791968112873.jpg';
import roboticsBrainImg from '../assets/images/assistive_robotics_brain_1791968143906.jpg';
import digitalClassroomResearchImg from '../assets/images/digital_classroom_research_1791968165341.jpg';

export interface PortfolioItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'ai-os' | 'academic' | 'growth';
  categoryLabel: string;
  period: string;
  organization: string;
  image: string;
  aspect: 'wide' | 'standard';
  summary: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  archDetails: string;
}

export interface CredentialItem {
  id: string;
  index: string;
  category: 'academic' | 'examination' | 'leadership' | 'executive';
  title: string;
  institution: string;
  timeframe: string;
  verificationNote: string;
  description: string;
  keyTakeaways: string[];
}

export const SATENDRA_PROFILE = {
  name: 'Satendra Singh',
  role: 'Founder & CEO, UPSC ZONE AI',
  tagline: "Building India's First AI Operating System for Competitive Exams",
  philosophy: 'Making learning personalized, engaging, and accessible — helping students treat education as a hobby rather than a burden.',
  portraitUrl: 'https://uspzone-media.s3.ap-south-1.amazonaws.com/current-affairs/486ce990-4cc0-4332-bb35-018dbea44605.jpg',
  fallbackPortraitUrl: '/satendra_official.jpg',
  email: 'upsczoneai@gmail.com',
  contactForm: {
    shortUrl: 'https://forms.gle/E8ye7Y6SQaL4dhoR7',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfvdF5cKmVIrYtEAV1ShHp2etD3LcZd91I5MNs3NrIi9RH9pA/viewform?embedded=true',
    fullUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfvdF5cKmVIrYtEAV1ShHp2etD3LcZd91I5MNs3NrIi9RH9pA/viewform'
  },
  socials: {
    instagram: {
      handle: '@st.upsc',
      url: 'https://instagram.com/st.upsc',
      label: 'Instagram'
    },
    x: {
      handle: '@hist_satendra',
      url: 'https://x.com/hist_satendra',
      label: 'X (Twitter)'
    },
    linkedin: {
      handle: 'satendrasinghceo',
      url: 'https://linkedin.com/in/satendrasinghceo',
      label: 'LinkedIn'
    }
  },
  coreStats: [
    {
      value: '5+ Yrs',
      label: 'UPSC Preparation & Domain Mastery',
      detail: 'Deep first-hand command of Civil Services syllabus, answer writing, and interdisciplinary synthesis'
    },
    {
      value: '2× NET',
      label: 'UGC-NET & KVS Qualified',
      detail: 'Qualified UGC-NET twice in History and KVS examination once, validating rigorous academic depth'
    },
    {
      value: '5+ Yrs',
      label: 'SEO & Digital Growth Strategy',
      detail: 'Full-funnel organic acquisition, content architecture, and executive training from IIM Indore'
    },
    {
      value: '1+ Yr',
      label: 'Teaching & Student Mentorship',
      detail: 'Former Doubt Expert at Vedantu resolving complex student bottlenecks with structured clarity'
    }
  ]
};

export const BENTO_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'upsc-zone-ai-os',
    index: '01',
    title: 'UPSC ZONE AI — The Competitive Exam Operating System',
    subtitle: 'Product Strategy · AI Architecture · EdTech Transformation',
    category: 'ai-os',
    categoryLabel: 'AI Product & Vision',
    period: 'Present · Founder & CEO',
    organization: 'UPSC ZONE AI',
    image: upscOsShowcaseImg,
    aspect: 'wide',
    summary:
      "Architecting India's first unified AI Operating System tailored for competitive exam aspirants. UPSC ZONE AI replaces fragmented PDFs, static syllabus trackers, and generic rote schedules with adaptive neural study workflows that turn daily preparation into an intellectually rewarding hobby.",
    highlights: [
      'Leads end-to-end product strategy, technology vision, and AI-powered pedagogical workflows.',
      'Directs syllabus-aligned content development combining historical accuracy with rapid recall systems.',
      'Spearheads full-stack product engineering, organic digital growth, and national business expansion.',
      'Designed around cognitive load reduction: transforming high-pressure exam preparation into curiosity-driven exploration.'
    ],
    metrics: [
      { label: 'Core Mandate', value: "India's 1st Exam AI OS" },
      { label: 'Focus Pillars', value: '5 Executive Verticals' },
      { label: 'Pedagogy Shift', value: 'Hobby Over Burden' }
    ],
    archDetails:
      'Integrates personalized diagnostic assessment, automated Mains answer evaluation, dynamic Prelims revision graphs, and primary-source historical synthesis within a single low-latency learning workspace.'
  },
  {
    id: 'historical-scholarship-pedagogy',
    index: '02',
    title: 'Historical Scholarship & Competitive Pedagogy',
    subtitle: 'M.A. & B.A. History · 2× UGC-NET · KVS Qualified · Vedantu',
    category: 'academic',
    categoryLabel: 'Academic & Mentorship',
    period: '5+ Years Domain Depth',
    organization: 'UGC-NET · KVS · Vedantu',
    image: academicHistoryImg,
    aspect: 'standard',
    summary:
      'Grounded in formal undergraduate and postgraduate degrees in History, reinforced by over five years of intensive UPSC Civil Services preparation and national examination qualifications.',
    highlights: [
      'Qualified the prestigious UGC-NET examination twice, demonstrating university-level research and teaching eligibility.',
      'Qualified the Kendriya Vidyalaya Sangathan (KVS) national educator examination.',
      'Served as Doubt Expert at Vedantu, mentoring students and deconstructing complex academic doubts into intuitive mental models.',
      '1+ year of dedicated student mentorship and classroom/digital teaching experience.'
    ],
    metrics: [
      { label: 'UGC-NET', value: 'Qualified 2×' },
      { label: 'KVS Exam', value: 'Qualified 1×' },
      { label: 'UPSC Rigor', value: '5+ Years' }
    ],
    archDetails:
      'Combines historiographical rigor across Ancient, Medieval, Modern, and World History with practical exam-oriented elimination frameworks and structural answer writing.'
  },
  {
    id: 'digital-growth-engineering',
    index: '03',
    title: 'Full-Stack Engineering & Organic Growth Engine',
    subtitle: 'IIM Indore Digital Marketing · 5+ Yrs SEO · AI Product Dev',
    category: 'growth',
    categoryLabel: 'Growth & Engineering',
    period: '5+ Years Execution',
    organization: 'IIM Indore Alumni Program · UPSC ZONE AI',
    image: digitalGrowthImg,
    aspect: 'standard',
    summary:
      'A rare founder intersection combining modern software development and AI product engineering with over five years of technical SEO and digital marketing mastery.',
    highlights: [
      'Completed specialized online Digital Marketing program from the Indian Institute of Management (IIM) Indore.',
      '5+ years of hands-on experience in technical SEO, semantic search architecture, and high-conversion organic growth.',
      'Hands-on expertise in modern software development and building AI-native educational products from zero to production.',
      'Bridges technical engineering decisions directly with sustainable student acquisition and community retention.'
    ],
    metrics: [
      { label: 'SEO & Growth', value: '5+ Years' },
      { label: 'Executive Cert', value: 'IIM Indore' },
      { label: 'Tech Stack', value: 'AI & Modern Web' }
    ],
    archDetails:
      'Self-sustaining distribution architecture: programmatic educational content, high-intent search visibility, and rapid product iteration loops.'
  }
];

export const CREDENTIALS_LIST: CredentialItem[] = [
  {
    id: 'founder-ceo-upsc-zone-ai',
    index: '01',
    category: 'leadership',
    title: 'Founder & Chief Executive Officer',
    institution: 'UPSC ZONE AI',
    timeframe: 'Current · Full-Time Executive Leadership',
    verificationNote: 'Product Strategy · Tech Vision · Content · Growth · Expansion',
    description:
      "Spearheading the creation of India's first AI Operating System for Competitive Exams. Responsible for overall product strategy, AI technology vision, curriculum and content architecture, organic digital growth, and long-term business expansion.",
    keyTakeaways: [
      'Pioneering personalized AI learning pathways that adapt to individual student strengths and knowledge gaps.',
      'Cultivating a student-first philosophy where rigorous exam preparation feels engaging and sustainable like a hobby.',
      'Unifying software engineering, LLM-driven tooling, and authentic UPSC domain expertise under one roof.'
    ]
  },
  {
    id: 'ugc-net-twice',
    index: '02',
    category: 'examination',
    title: 'UGC-NET Qualified (Twice) — History',
    institution: 'University Grants Commission (National Eligibility Test)',
    timeframe: '2× National Qualification',
    verificationNote: 'Assistant Professor & Research Eligibility Benchmark',
    description:
      'Qualified the highly competitive UGC-NET examination twice in History, validating advanced command over Indian and World Historiography, archaeological sources, and academic research methodology.',
    keyTakeaways: [
      'Demonstrates top-percentile subject mastery across Ancient, Medieval, Modern, and Post-Independence Indian History.',
      'Provides the scholarly backbone for UPSC ZONE AI’s high-precision historical content and source verification.'
    ]
  },
  {
    id: 'kvs-qualified',
    index: '03',
    category: 'examination',
    title: 'KVS Examination Qualified',
    institution: 'Kendriya Vidyalaya Sangathan',
    timeframe: '1× National Qualification',
    verificationNote: 'National Teaching & Pedagogical Excellence',
    description:
      'Successfully qualified the national Kendriya Vidyalaya Sangathan (KVS) recruitment examination, underscoring strong pedagogical aptitude, educational psychology, and classroom communication standards.',
    keyTakeaways: [
      'Validated capability in structured lesson planning, learner assessment, and inclusive pedagogy.',
      'Directly informs how UPSC ZONE AI structures step-by-step concept scaffolding for aspirants.'
    ]
  },
  {
    id: 'ba-ma-history',
    index: '04',
    category: 'academic',
    title: "Master's & Bachelor's Degrees in History",
    institution: 'Postgraduate & Undergraduate Academic Foundation',
    timeframe: 'M.A. History · B.A. History',
    verificationNote: 'Dual Degree Specialization in Historical Studies',
    description:
      'Completed both Bachelor’s and Master’s degrees in History, building a rigorous analytical foundation in socio-economic transformations, constitutional evolution, cultural heritage, and geopolitical movements.',
    keyTakeaways: [
      'Deep training in primary and secondary source criticism, causal analysis, and long-form academic synthesis.',
      'Forms the bedrock of 5+ years of dedicated UPSC Civil Services preparation and interdisciplinary connecting of dots.'
    ]
  },
  {
    id: 'iim-indore-digital-marketing',
    index: '05',
    category: 'executive',
    title: 'Digital Marketing Program Certification',
    institution: 'IIM Indore (Indian Institute of Management, Indore)',
    timeframe: 'Online Executive Program · + 5 Years SEO Practice',
    verificationNote: 'Strategic Growth, Brand Positioning & Analytics',
    description:
      'Completed an online Digital Marketing program from IIM Indore, complementing over five years of practical industry experience in search engine optimization (SEO), content distribution, and digital brand scaling.',
    keyTakeaways: [
      'Combines premier management frameworks from IIM Indore with battle-tested technical SEO execution.',
      'Powers UPSC ZONE AI’s organic reach and community-led growth across Instagram (@st.upsc), X (@hist_satendra), and web.'
    ]
  },
  {
    id: 'vedantu-doubt-expert',
    index: '06',
    category: 'leadership',
    title: 'Doubt Expert & Student Mentor',
    institution: 'Vedantu & Independent Competitive Mentorship',
    timeframe: '1+ Year Teaching & Mentorship · 5+ Years UPSC Prep',
    verificationNote: 'Direct Student Resolution & Academic Guidance',
    description:
      'Worked as a Doubt Expert at Vedantu prior to founding UPSC ZONE AI, directly guiding students through complex academic bottlenecks and conceptual hurdles alongside 1+ year of dedicated student mentorship.',
    keyTakeaways: [
      'First-hand insight into the exact psychological and conceptual friction points where competitive exam students get stuck.',
      'Inspired the core product thesis of UPSC ZONE AI: immediate, empathetic, and crystal-clear doubt resolution at scale.'
    ]
  }
];

export const EXECUTIVE_PILLARS = [
  {
    index: '01',
    title: 'Product Strategy',
    description: 'Defining the roadmap for India’s first AI Operating System for Competitive Exams — prioritizing high-leverage workflows that save aspirants hundreds of hours.'
  },
  {
    index: '02',
    title: 'Technology Vision & AI Development',
    description: 'Combining modern software development with tailored AI product engineering to build responsive, syllabus-aware study instruments.'
  },
  {
    index: '03',
    title: 'Content Development & Academic Rigor',
    description: 'Leveraging M.A./B.A. History training, 2× UGC-NET, KVS qualification, and 5+ years of UPSC experience to ensure zero-compromise academic accuracy.'
  },
  {
    index: '04',
    title: 'Digital Growth & SEO Architecture',
    description: 'Applying 5+ years of SEO mastery and IIM Indore digital marketing frameworks to make quality competitive exam guidance organically accessible nationwide.'
  },
  {
    index: '05',
    title: 'Business Expansion & Mentorship',
    description: 'Scaling institutional partnerships and student communities while preserving the warmth of 1-on-1 mentorship learned at Vedantu and through years of teaching.'
  }
];

export interface VisionItem {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  status: 'In Research' | 'Prototype' | 'Roadmap 2026-2028';
  image?: string;
}

export const FUTURE_VISION_ITEMS: VisionItem[] = [
  {
    id: 'healthcare-directory',
    index: '01',
    title: 'Healthcare Directory & Caretaker Hiring',
    category: 'Healthcare & Social Care',
    description: 'A verified, AI-vetted directory connecting families with trained patient caretakers, elderly nursing specialists, and verified home healthcare professionals across India.',
    impact: 'Dignified care for elders and patients with transparent verification and emergency dispatch.',
    status: 'Roadmap 2026-2028',
    image: healthcareDirectoryImg
  },
  {
    id: 'job-listing',
    index: '02',
    title: 'Merit-Based Job & Opportunity Exchange',
    category: 'Employment & Aspirant Career Transition',
    description: 'Direct employment and internship matching platform connecting competitive exam aspirants, educators, content creators, and developers with verified enterprise openings.',
    impact: 'Ensuring every sincere learner and graduate finds meaningful career pathways beyond government exams.',
    status: 'Prototype',
    image: digitalGrowthImg
  },
  {
    id: 'digital-classrooms',
    index: '03',
    title: 'Next-Gen Digital Classrooms',
    category: 'Immersive EdTech',
    description: 'Low-latency, interactive virtual classrooms designed for Tier-2, Tier-3 and rural students with offline sync, interactive 3D historical maps, and personalized AI doubt assistance.',
    impact: 'Democratizing world-class lecture halls into any low-cost mobile phone or community screen.',
    status: 'Prototype',
    image: digitalClassroomResearchImg
  },
  {
    id: 'robots-hardware',
    index: '04',
    title: 'Robotics for Everyday Assistance & Education',
    category: 'Robotics & Hardware',
    description: 'Affordable robotic systems designed to assist in laboratory experiments, classroom demonstration, and daily supportive assistance for physically challenged learners.',
    impact: 'Bringing tangible robotic hardware within reach of Indian schools and colleges.',
    status: 'In Research',
    image: roboticsBrainImg
  },
  {
    id: 'brain-for-robots',
    index: '05',
    title: 'Brain For Robots (Cognitive Neural Core)',
    category: 'Autonomous AI & Robotics',
    description: 'A sovereign cognitive software OS and multi-modal neural architecture providing perception, reasoning, and real-time situational decision-making for assistive robotics.',
    impact: 'Creating foundational cognitive intelligence for next-generation domestic and educational machines.',
    status: 'In Research',
    image: roboticsBrainImg
  },
  {
    id: 'ngo-for-poors',
    index: '06',
    title: 'NGO For Underprivileged & Poor Students',
    category: 'Philanthropy & Social Equity',
    description: 'Dedicated non-profit foundation providing 100% free books, AI study subscriptions, tablet devices, and nutritional support to economically disadvantaged aspirants.',
    impact: 'Zero students left behind due to poverty or financial distress in their educational journey.',
    status: 'Roadmap 2026-2028',
    image: digitalClassroomResearchImg
  },
  {
    id: 'research-center',
    index: '07',
    title: 'Advanced AI & Historical Research Center',
    category: 'Scientific Research',
    description: 'An interdisciplinary research institute bridging historical linguistics, Indian constitutional archives, and bleeding-edge machine learning model development.',
    impact: 'Publishing peer-reviewed discoveries and training India’s next generation of cognitive scientists.',
    status: 'In Research',
    image: academicHistoryImg
  }
];

export interface RadarTarget {
  id: string;
  code: string;
  name: string;
  platform: string;
  handle: string;
  url: string;
  bearing: string;
  distance: string;
  frequency: string;
  status: string;
  signalStrength: string;
  description: string;
  xPercent: number;
  yPercent: number;
  color: string;
}

export const RADAR_TARGETS: RadarTarget[] = [
  {
    id: 'instagram',
    code: 'TGT-01 // MISSILE ALPHA',
    name: 'Instagram Community',
    platform: 'Instagram',
    handle: '@st.upsc',
    url: 'https://instagram.com/st.upsc',
    bearing: '042°',
    distance: '42 NM',
    frequency: '433.92 MHz',
    status: 'ACTIVE PING',
    signalStrength: '98%',
    description: 'Visual exam preparation frameworks, daily UPSC inspiration, historical infographics, and direct student outreach.',
    xPercent: 68,
    yPercent: 28,
    color: '#10B981'
  },
  {
    id: 'x',
    code: 'TGT-02 // MISSILE BRAVO',
    name: 'X (Twitter) Channel',
    platform: 'X (Twitter)',
    handle: '@hist_satendra',
    url: 'https://x.com/hist_satendra',
    bearing: '138°',
    distance: '68 NM',
    frequency: '868.10 MHz',
    status: 'TRACK LOCKED',
    signalStrength: '95%',
    description: 'History analysis, Indian constitutional insights, AI product development discourse, and educational philosophy.',
    xPercent: 74,
    yPercent: 70,
    color: '#06B6D4'
  },
  {
    id: 'linkedin',
    code: 'TGT-03 // MISSILE CHARLIE',
    name: 'LinkedIn Executive Network',
    platform: 'LinkedIn',
    handle: 'satendrasinghceo',
    url: 'https://linkedin.com/in/satendrasinghceo',
    bearing: '225°',
    distance: '56 NM',
    frequency: '915.00 MHz',
    status: 'HIGH PRIORITY',
    signalStrength: '100%',
    description: 'Executive leadership notes, EdTech industry strategy, institutional partnerships, and UPSC ZONE AI hiring.',
    xPercent: 26,
    yPercent: 72,
    color: '#F59E0B'
  },
  {
    id: 'email',
    code: 'TGT-04 // MISSILE DELTA',
    name: 'Executive Email Dispatch',
    platform: 'Direct Email',
    handle: 'upsczoneai@gmail.com',
    url: 'mailto:upsczoneai@gmail.com',
    bearing: '315°',
    distance: '32 NM',
    frequency: '2.40 GHz',
    status: 'SECURE BEACON',
    signalStrength: '99%',
    description: 'Confidential founder discussions, institutional collaborations, and official UPSC ZONE AI correspondence.',
    xPercent: 30,
    yPercent: 32,
    color: '#3B82F6'
  },
  {
    id: 'forms',
    code: 'TGT-05 // MISSILE ECHO',
    name: 'Google Forms Priority Portal',
    platform: 'Inquiry Portal',
    handle: 'forms.gle/E8ye7Y6SQaL4dhoR7',
    url: 'https://forms.gle/E8ye7Y6SQaL4dhoR7',
    bearing: '000°',
    distance: '85 NM',
    frequency: '5.80 GHz',
    status: 'INCOMING TRANSMISSION',
    signalStrength: '96%',
    description: 'Official direct contact questionnaire for speaking invitations, strategic advisory, and tech collaboration.',
    xPercent: 50,
    yPercent: 16,
    color: '#A855F7'
  }
];


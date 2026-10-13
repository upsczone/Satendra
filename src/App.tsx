import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  X,
  Menu,
  Check,
  Copy,
  Maximize2,
  ChevronRight,
  Radio,
  Crosshair,
  Radar,
  ExternalLink,
  Shield,
  Layers,
  Heart,
  Briefcase,
  Monitor,
  Cpu,
  Bot,
  Sparkles,
  Search
} from 'lucide-react';
import {
  SATENDRA_PROFILE,
  BENTO_PORTFOLIO_ITEMS,
  CREDENTIALS_LIST,
  EXECUTIVE_PILLARS,
  FUTURE_VISION_ITEMS,
  RADAR_TARGETS,
  PortfolioItem,
  CredentialItem,
  VisionItem,
  RadarTarget
} from './data/portfolioData';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState<'all' | 'ai-os' | 'academic' | 'growth'>('all');
  const [activeCredentialFilter, setActiveCredentialFilter] = useState<'all' | 'academic' | 'examination' | 'leadership' | 'executive'>('all');
  const [activeVisionFilter, setActiveVisionFilter] = useState<string>('all');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [selectedCredential, setSelectedCredential] = useState<CredentialItem | null>(null);
  const [selectedVisionItem, setSelectedVisionItem] = useState<VisionItem | null>(null);
  const [selectedRadarTarget, setSelectedRadarTarget] = useState<RadarTarget>(RADAR_TARGETS[0]);
  const [portraitLightboxOpen, setPortraitLightboxOpen] = useState(false);
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  // Exact photograph state with direct S3 URL and local cached fallback
  const [heroPortraitSrc, setHeroPortraitSrc] = useState(SATENDRA_PROFILE.portraitUrl);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPortfolioItem(null);
        setSelectedCredential(null);
        setSelectedVisionItem(null);
        setPortraitLightboxOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(label);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  const filteredPortfolio = BENTO_PORTFOLIO_ITEMS.filter((item) =>
    activePortfolioFilter === 'all' ? true : item.category === activePortfolioFilter
  );

  const filteredCredentials = CREDENTIALS_LIST.filter((item) =>
    activeCredentialFilter === 'all' ? true : item.category === activeCredentialFilter
  );

  const filteredVision = FUTURE_VISION_ITEMS.filter((item) => {
    if (activeVisionFilter === 'all') return true;
    if (activeVisionFilter === 'healthcare') return item.id === 'healthcare-directory';
    if (activeVisionFilter === 'robotics') return item.id === 'robots-hardware' || item.id === 'brain-for-robots';
    if (activeVisionFilter === 'education') return item.id === 'digital-classrooms' || item.id === 'job-listing' || item.id === 'ngo-for-poors';
    if (activeVisionFilter === 'research') return item.id === 'research-center';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111110] flex flex-col selection:bg-[#1E3A8A] selection:text-white">
      {/* Top Bar: Sticky on both Mobile and Desktop with backdrop blur */}
      <header className="sticky top-0 z-50 h-14 bg-[#F4F4F0]/95 backdrop-blur-md border-b border-[#E2E2DC] px-4 sm:px-8 lg:px-12 flex items-center justify-between shadow-xs">
        {/* Zone 1: Wordmark */}
        <a
          href="#top"
          className="font-editorial text-2xl tracking-tight text-[#111110] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A]"
        >
          Satendra Singh
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-[#52524E]">
          <a
            href="#vision"
            className="hover:text-[#111110] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            Vision
          </a>
          <a
            href="#ventures"
            className="hover:text-[#111110] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            UPSC ZONE AI
          </a>
          <a
            href="#future-vision"
            className="hover:text-[#111110] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            Future Vision
          </a>
          <a
            href="#credentials"
            className="hover:text-[#111110] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            Credentials
          </a>
          <a
            href="#leadership"
            className="hover:text-[#111110] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            Leadership
          </a>
          <a
            href="#social-radar"
            className="text-[#1E3A8A] font-semibold hover:underline underline-offset-4 transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Social Radar</span>
          </a>
          <a
            href="#connect"
            className="hover:text-[#111110] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary CTA + Sticky Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href="#connect"
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172E6E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#E2E2DC] text-[#111110] hover:bg-[#EAEAE4] active:bg-[#DFDFD7] transition-colors shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Sticky Mobile Navigation Drawer: Pinned below sticky header */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-14 bottom-0 z-40 bg-black/45 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#F4F4F0] border-b border-[#E2E2DC] px-6 py-6 space-y-4 shadow-2xl max-h-[calc(100vh-3.5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-mono-tabular font-medium text-[#52524E] uppercase tracking-wider pb-1">
              Menu Navigation
            </div>
            <nav className="flex flex-col space-y-1 text-base font-medium text-[#111110]">
              <a
                href="#vision"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E2E2DC]/70 flex items-center justify-between hover:text-[#1E3A8A] transition-colors"
              >
                <span>Vision & Founder Bio</span>
                <ChevronRight className="w-4 h-4 text-[#52524E]" />
              </a>
              <a
                href="#ventures"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E2E2DC]/70 flex items-center justify-between hover:text-[#1E3A8A] transition-colors"
              >
                <span>UPSC ZONE AI Architecture</span>
                <ChevronRight className="w-4 h-4 text-[#52524E]" />
              </a>
              <a
                href="#future-vision"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E2E2DC]/70 flex items-center justify-between text-[#1E3A8A] font-semibold hover:text-[#172E6E] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Future Vision Ecosystem</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#credentials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E2E2DC]/70 flex items-center justify-between hover:text-[#1E3A8A] transition-colors"
              >
                <span>Academic & Exam Credentials</span>
                <ChevronRight className="w-4 h-4 text-[#52524E]" />
              </a>
              <a
                href="#leadership"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E2E2DC]/70 flex items-center justify-between hover:text-[#1E3A8A] transition-colors"
              >
                <span>Executive Leadership Pillars</span>
                <ChevronRight className="w-4 h-4 text-[#52524E]" />
              </a>
              <a
                href="#social-radar"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-[#E2E2DC]/70 flex items-center justify-between text-emerald-800 font-semibold transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Radar className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Tactical Social Radar</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono-tabular">
                  LIVE
                </span>
              </a>
              <a
                href="#connect"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 flex items-center justify-between text-[#1E3A8A] font-semibold"
              >
                <span>Contact Form & Inquiries</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </nav>

            <div className="pt-3 border-t border-[#E2E2DC] flex items-center justify-between text-xs text-[#52524E]">
              <span>UPSC ZONE AI · Satendra Singh</span>
              <a
                href="#social-radar"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1E3A8A] font-medium underline underline-offset-4"
              >
                View Radar Channels
              </a>
            </div>
          </div>
        </div>
      )}

      <main id="top" className="flex-1">
        {/* Split-Screen Editorial Hero Section */}
        <section
          id="vision"
          className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 pb-16 lg:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Bold Typographic Hierarchy, Bio, & Quantitative Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                {/* Metadata Line */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#52524E] font-medium">
                  <span>Founder & CEO, UPSC ZONE AI</span>
                  <span aria-hidden="true">·</span>
                  <span>M.A. & B.A. History</span>
                  <span aria-hidden="true">·</span>
                  <span>2× UGC-NET & KVS Qualified</span>
                </div>

                <h1
                  className="font-editorial text-4xl sm:text-6xl lg:text-[64px] leading-[1.06] tracking-tight text-[#111110]"
                  style={{ textWrap: 'balance' }}
                >
                  Building India’s First{' '}
                  <span className="italic font-normal text-[#1E3A8A]">
                    AI Operating System
                  </span>{' '}
                  for Competitive Exams.
                </h1>

                <p className="text-base sm:text-lg text-[#3A3A37] leading-[1.65] max-w-[65ch]">
                  <strong>Satendra Singh</strong> is the Founder & CEO of{' '}
                  <strong>UPSC ZONE AI</strong>, an AI-powered platform dedicated to
                  transforming competitive exam preparation through technology-driven
                  learning solutions. His mission is to make learning personalized,
                  engaging, and accessible — helping students treat education as a{' '}
                  <em className="font-editorial text-xl not-italic underline decoration-[#1E3A8A]/40 underline-offset-4">
                    hobby rather than a burden
                  </em>
                  .
                </p>

                <p className="text-sm sm:text-base text-[#52524E] leading-[1.65] max-w-[65ch]">
                  Holding both a Bachelor’s and Master’s degree in History with over 5
                  years of UPSC preparation experience, 2× UGC-NET qualifications, KVS
                  qualification, and prior mentorship as a Doubt Expert at Vedantu, he
                  combines deep scholarly authority with IIM Indore Digital Marketing
                  certification, 5+ years of SEO mastery, and modern AI software
                  engineering.
                </p>
              </div>

              {/* Action Buttons: Social links removed from here as instructed, moved to dedicated Radar section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 border-t border-[#E2E2DC]">
                <a
                  href="#ventures"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1E3A8A] rounded-lg hover:bg-[#172E6E] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
                >
                  <span>Explore UPSC ZONE AI Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#future-vision"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#111110] bg-[#FAF9F5] border border-[#E2E2DC] rounded-lg hover:bg-[#EAEAE4] transition-colors whitespace-nowrap"
                >
                  <span>Future Vision Ecosystem</span>
                  <ChevronRight className="w-4 h-4 text-[#52524E]" />
                </a>

                <a
                  href="#social-radar"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#1E3A8A] hover:text-[#172E6E] transition-colors whitespace-nowrap"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Tactical Social Radar</span>
                </a>
              </div>

              {/* Quantitative Proof Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E2E2DC]">
                {SATENDRA_PROFILE.coreStats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="font-mono-tabular text-2xl sm:text-3xl font-semibold text-[#111110] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-[#111110]">
                      {stat.label}
                    </div>
                    <p className="text-xs text-[#52524E] leading-relaxed">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Satendra Singh Official Studio Photo */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2E2DC] bg-[#EAEAE4] group shadow-sm">
                {!imageErrors['hero-portrait'] ? (
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1E293B]">
                    <img
                      key={heroPortraitSrc}
                      src={heroPortraitSrc}
                      alt="Satendra Singh — Founder & CEO of UPSC ZONE AI"
                      referrerPolicy="no-referrer"
                      onError={() => {
                        // Fallback to local downloaded copy if remote S3 has CORS/network hiccup
                        if (heroPortraitSrc !== SATENDRA_PROFILE.fallbackPortraitUrl) {
                          setHeroPortraitSrc(SATENDRA_PROFILE.fallbackPortraitUrl);
                        } else {
                          handleImageError('hero-portrait');
                        }
                      }}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    {/* Contrast scrim at bottom for editorial caption */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 sm:p-6 flex items-end justify-between text-white">
                      <div className="space-y-1">
                        <div className="font-editorial text-2xl tracking-wide text-white">
                          Satendra Singh
                        </div>
                        <div className="text-xs text-white/90">
                          Founder & CEO · UPSC ZONE AI
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setPortraitLightboxOpen(true)}
                        aria-label="Inspect full portrait of Satendra Singh"
                        className="px-3 py-2 text-xs font-medium bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Full Portrait</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[3/4] w-full p-8 flex flex-col justify-between bg-[#EAEAE4] text-[#111110]">
                    <div className="text-xs font-mono-tabular text-[#52524E]">
                      PORTRAIT · SATENDRA SINGH
                    </div>
                    <div className="space-y-2">
                      <div className="font-editorial text-4xl">Satendra Singh</div>
                      <p className="text-sm text-[#52524E]">
                        Founder & CEO, UPSC ZONE AI · M.A. & B.A. History · 2× UGC-NET · KVS Qualified
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Editorial Caption */}
              <div className="flex items-center justify-between text-xs text-[#52524E] px-1">
                <span className="font-medium text-[#111110]">Official Portrait · Satendra Singh</span>
                <span className="font-mono-tabular">UPSC ZONE AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal Marquee Ticker */}
        <div className="border-y border-[#E2E2DC] bg-[#FAF9F5] py-3.5 overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-mono-tabular text-[#52524E] uppercase tracking-wider">
            <span>founder & ceo, upsc zone ai</span>
            <span>·</span>
            <span>india’s first ai operating system for competitive exams</span>
            <span>·</span>
            <span className="font-editorial italic normal-case text-base text-[#111110]">
              education as a hobby rather than a burden
            </span>
            <span>·</span>
            <span>m.a. & b.a. history</span>
            <span>·</span>
            <span>qualified ugc-net twice</span>
            <span>·</span>
            <span>qualified kvs exam</span>
            <span>·</span>
            <span>former doubt expert at vedantu</span>
            <span>·</span>
            <span>iim indore digital marketing</span>
            <span>·</span>
            <span>5+ years seo & growth</span>
            <span>·</span>
            <span>india’s first ai operating system for competitive exams</span>
            <span>·</span>
            <span className="font-editorial italic normal-case text-base text-[#111110]">
              education as a hobby rather than a burden
            </span>
            <span>·</span>
            <span>m.a. & b.a. history</span>
            <span>·</span>
            <span>qualified ugc-net twice</span>
            <span>·</span>
            <span>qualified kvs exam</span>
            <span>·</span>
            <span>former doubt expert at vedantu</span>
            <span>·</span>
            <span>iim indore digital marketing</span>
            <span>·</span>
            <span>5+ years seo & growth</span>
          </div>
        </div>

        {/* Media-First Bento Grid: Ventures, Scholarship & Engineering */}
        <section
          id="ventures"
          className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <div className="text-xs font-medium text-[#52524E]">
                01. Selected Works & Domain Architecture
              </div>
              <h2
                className="font-editorial text-3xl sm:text-5xl text-[#111110] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Where Academic Depth Meets{' '}
                <span className="italic font-normal text-[#1E3A8A]">
                  AI Product Engineering
                </span>
              </h2>
            </div>

            {/* Interactive Segmented Filter Controls */}
            <div
              role="tablist"
              aria-label="Filter portfolio domains"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#EAEAE4] rounded-lg border border-[#E2E2DC] self-start"
            >
              {[
                { id: 'all', label: 'All Domains' },
                { id: 'ai-os', label: 'UPSC ZONE AI' },
                { id: 'academic', label: 'History & Pedagogy' },
                { id: 'growth', label: 'SEO & Tech Stack' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activePortfolioFilter === tab.id}
                  onClick={() =>
                    setActivePortfolioFilter(tab.id as typeof activePortfolioFilter)
                  }
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    activePortfolioFilter === tab.id
                      ? 'bg-[#F4F4F0] text-[#111110] shadow-xs font-semibold'
                      : 'text-[#52524E] hover:text-[#111110]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bento Box Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPortfolio.map((item) => {
              const isWide = item.aspect === 'wide' && activePortfolioFilter === 'all';
              return (
                <article
                  key={item.id}
                  className={`group rounded-2xl border border-[#E2E2DC] bg-[#FAF9F5] overflow-hidden flex flex-col justify-between transition-colors hover:border-[#1E3A8A]/50 ${
                    isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                  }`}
                >
                  {/* Visual Media Container */}
                  <div
                    className={`relative w-full overflow-hidden bg-[#EAEAE4] ${
                      isWide ? 'aspect-[16/9] max-h-[440px]' : 'aspect-[4/3]'
                    }`}
                  >
                    {!imageErrors[item.id] ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(item.id)}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="w-full h-full p-8 flex flex-col justify-end bg-[#EAEAE4]">
                        <span className="font-editorial text-2xl text-[#111110]">
                          {item.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 flex items-end justify-between text-white">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-white/90">
                        <span className="font-mono-tabular">{item.index}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.organization}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedPortfolioItem(item)}
                        className="px-3.5 py-2 text-xs font-medium bg-white text-[#111110] rounded-lg hover:bg-[#F4F4F0] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#52524E]">
                        <span>{item.subtitle}</span>
                        <span className="font-mono-tabular">{item.period}</span>
                      </div>

                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#111110] tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#3A3A37] leading-relaxed max-w-[72ch]">
                        {item.summary}
                      </p>
                    </div>

                    {/* Key Metrics & Inspection Trigger */}
                    <div className="pt-5 border-t border-[#E2E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-6">
                        {item.metrics.map((m) => (
                          <div key={m.label} className="space-y-0.5">
                            <div className="font-mono-tabular text-sm font-semibold text-[#1E3A8A]">
                              {m.value}
                            </div>
                            <div className="text-xs text-[#52524E]">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedPortfolioItem(item)}
                        className="text-xs font-semibold text-[#1E3A8A] hover:text-[#172E6E] inline-flex items-center gap-1 self-start sm:self-auto transition-colors"
                      >
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Dedicated Future Vision Ecosystem Section */}
        <section
          id="future-vision"
          className="border-t border-[#E2E2DC] bg-[#FAF9F5] py-16 lg:py-24"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <div className="text-xs font-medium text-[#52524E]">
                  02. Future Vision & Frontier Initiatives
                </div>
                <h2
                  className="font-editorial text-3xl sm:text-5xl text-[#111110] tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Building the Next Horizons:{' '}
                  <span className="italic font-normal text-[#1E3A8A]">
                    Health, Robotics & Humanity
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#52524E] max-w-[70ch] leading-relaxed">
                  Beyond transforming competitive exams with UPSC ZONE AI, Satendra Singh’s forward vision
                  spans essential social infrastructure — from verified healthcare caretaker hiring and merit job
                  listings to embodied cognitive robotics, digital classrooms, and grassroots NGO initiatives.
                </p>
              </div>

              {/* Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filter vision initiatives"
                className="flex flex-wrap items-center gap-1 p-1 bg-[#EAEAE4] rounded-lg border border-[#E2E2DC] self-start"
              >
                {[
                  { id: 'all', label: 'All Initiatives (7)' },
                  { id: 'healthcare', label: 'Healthcare & Caretakers' },
                  { id: 'robotics', label: 'Robots & Brain' },
                  { id: 'education', label: 'Classrooms & Jobs' },
                  { id: 'research', label: 'Research Center' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeVisionFilter === tab.id}
                    onClick={() => setActiveVisionFilter(tab.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      activeVisionFilter === tab.id
                        ? 'bg-[#F4F4F0] text-[#111110] shadow-xs font-semibold'
                        : 'text-[#52524E] hover:text-[#111110]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Vision Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVision.map((v) => {
                const isHighlight = v.id === 'healthcare-directory' || v.id === 'brain-for-robots';
                return (
                  <div
                    key={v.id}
                    onClick={() => setSelectedVisionItem(v)}
                    className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer hover:border-[#1E3A8A] hover:shadow-sm ${
                      isHighlight
                        ? 'bg-[#F4F4F0] border-[#1E3A8A]/30 ring-1 ring-[#1E3A8A]/10'
                        : 'bg-[#F4F4F0] border-[#E2E2DC]'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Top Header */}
                      <div className="flex items-center justify-between text-xs text-[#52524E]">
                        <span className="font-mono-tabular font-semibold text-[#1E3A8A]">
                          INITIATIVE {v.index}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#EAEAE4] text-[#111110] text-[11px] font-medium">
                          {v.status}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#52524E]">
                          {v.category}
                        </div>
                        <h3 className="font-editorial text-2xl text-[#111110] leading-snug">
                          {v.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[#3A3A37] leading-relaxed">
                        {v.description}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-[#E2E2DC] space-y-3">
                      <div className="text-xs text-[#52524E]">
                        <span className="font-semibold text-[#111110]">Strategic Impact: </span>
                        <span>{v.impact}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-[#1E3A8A] font-semibold inline-flex items-center gap-1">
                          <span>Inspect Roadmap</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                        {v.id === 'healthcare-directory' && (
                          <span className="text-[11px] font-mono-tabular text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Caretaker Hiring
                          </span>
                        )}
                        {v.id === 'brain-for-robots' && (
                          <span className="text-[11px] font-mono-tabular text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                            Cognitive AI
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Academic, National Examinations & Career Credentials Dossier */}
        <section
          id="credentials"
          className="border-t border-[#E2E2DC] bg-[#EAEAE4]/40 py-16 lg:py-24"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <div className="text-xs font-medium text-[#52524E]">
                  03. Verified Qualifications & Career Track
                </div>
                <h2
                  className="font-editorial text-3xl sm:text-5xl text-[#111110] tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Academic Rigor &{' '}
                  <span className="italic font-normal text-[#1E3A8A]">
                    National Benchmarks
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#52524E] max-w-[65ch]">
                  Every feature inside UPSC ZONE AI is grounded in authentic subject
                  mastery, competitive examination qualifications, and years of direct
                  student mentorship. Click any credential below to inspect full details.
                </p>
              </div>

              {/* Credential Category Filter */}
              <div
                role="tablist"
                aria-label="Filter credentials"
                className="flex flex-wrap items-center gap-1 p-1 bg-[#EAEAE4] rounded-lg border border-[#E2E2DC] self-start"
              >
                {[
                  { id: 'all', label: 'All (6)' },
                  { id: 'examination', label: 'UGC-NET & KVS' },
                  { id: 'academic', label: 'Degrees' },
                  { id: 'executive', label: 'IIM Indore & SEO' },
                  { id: 'leadership', label: 'UPSC ZONE AI & Vedantu' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeCredentialFilter === tab.id}
                    onClick={() =>
                      setActiveCredentialFilter(
                        tab.id as typeof activeCredentialFilter
                      )
                    }
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      activeCredentialFilter === tab.id
                        ? 'bg-[#F4F4F0] text-[#111110] shadow-xs font-semibold'
                        : 'text-[#52524E] hover:text-[#111110]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Credential Dossier Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCredentials.map((cred) => (
                <div
                  key={cred.id}
                  onClick={() => setSelectedCredential(cred)}
                  role="button"
                  tabIndex={0}
                  className="text-left rounded-2xl border border-[#E2E2DC] bg-[#F4F4F0] p-6 sm:p-7 flex flex-col justify-between hover:border-[#1E3A8A] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
                >
                  <div className="space-y-4">
                    {/* Metadata Line */}
                    <div className="flex items-center justify-between text-xs text-[#52524E]">
                      <span className="font-mono-tabular font-semibold text-[#1E3A8A]">
                        {cred.index}
                      </span>
                      <span>{cred.timeframe}</span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-editorial text-2xl text-[#111110] leading-snug">
                        {cred.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#3A3A37]">
                        {cred.institution}
                      </div>
                    </div>

                    <p className="text-sm text-[#52524E] leading-relaxed">
                      {cred.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#E2E2DC] flex items-center justify-between text-xs">
                    <span className="text-[#52524E] truncate max-w-[210px]">
                      {cred.verificationNote}
                    </span>
                    <span className="font-semibold text-[#1E3A8A] inline-flex items-center gap-1 shrink-0">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Mandate & 5 Leadership Pillars at UPSC ZONE AI */}
        <section
          id="leadership"
          className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
              <div className="text-xs font-medium text-[#52524E]">
                04. Executive Mandate at UPSC ZONE AI
              </div>
              <h2
                className="font-editorial text-3xl sm:text-5xl text-[#111110] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Transforming Preparation from a{' '}
                <span className="italic font-normal text-[#1E3A8A]">
                  Burden into a Hobby
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#3A3A37] leading-relaxed">
                At UPSC ZONE AI, Satendra Singh leads five core operational pillars —
                bridging deep humanities scholarship with modern AI engineering and
                organic growth distribution.
              </p>

              <blockquote className="p-6 rounded-2xl bg-[#EAEAE4]/70 border border-[#E2E2DC] space-y-3">
                <p className="font-editorial italic text-xl sm:text-2xl text-[#111110] leading-snug">
                  “Our mission is to build India’s first AI Operating System for
                  Competitive Exams — making learning personalized, engaging, and
                  accessible while helping students treat education as a hobby rather
                  than a burden.”
                </p>
                <footer className="text-xs text-[#52524E] font-medium">
                  — Satendra Singh · Founder & CEO, UPSC ZONE AI
                </footer>
              </blockquote>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#E2E2DC] border-t border-b border-[#E2E2DC]">
              {EXECUTIVE_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8"
                >
                  <span className="font-mono-tabular text-sm font-semibold text-[#1E3A8A] shrink-0">
                    {pillar.index}.
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#111110]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#52524E] leading-relaxed max-w-[62ch]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tactical Social Media Radar Section: Animated missile/target sweep interface */}
        <section
          id="social-radar"
          className="border-t border-[#E2E2DC] bg-[#0A0F1D] text-white py-16 lg:py-24 relative overflow-hidden"
        >
          {/* Subtle tactical grid background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>TACTICAL RADAR · SOCIAL BEACON SYSTEM</span>
                </div>
                <h2
                  className="font-editorial text-3xl sm:text-5xl text-white tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Live Radar:{' '}
                  <span className="italic font-normal text-emerald-400">
                    Founder Handles & Transmissions
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-gray-400 max-w-[68ch] leading-relaxed">
                  Real-time simulated radar sweeping Satendra Singh’s official communication channels.
                  Each target blip corresponds to a verified transmission frequency — click any missile target on the radar
                  screen to lock coordinates, view telemetry, or launch the live link.
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 p-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-tabular">
                <div className="space-y-0.5">
                  <div className="text-gray-400">RADAR STATUS:</div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>360° CONTINUOUS SWEEP ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Radar Main Interface: Left = Circular Radar Screen, Right = Target Telemetry & Action List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Radar Screen Visual Container */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <div className="relative w-full max-w-[500px] aspect-square rounded-full border-2 border-emerald-500/40 bg-[#070D18] shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden flex items-center justify-center p-4">
                  {/* Outer azimuth compass markings */}
                  <div className="absolute top-2 text-[10px] font-mono-tabular text-emerald-400/70">
                    000° N
                  </div>
                  <div className="absolute bottom-2 text-[10px] font-mono-tabular text-emerald-400/70">
                    180° S
                  </div>
                  <div className="absolute left-2 text-[10px] font-mono-tabular text-emerald-400/70">
                    270° W
                  </div>
                  <div className="absolute right-2 text-[10px] font-mono-tabular text-emerald-400/70">
                    090° E
                  </div>

                  {/* Concentric Range Rings */}
                  <div className="absolute inset-8 rounded-full border border-emerald-500/20 pointer-events-none" />
                  <div className="absolute inset-20 rounded-full border border-emerald-500/25 pointer-events-none" />
                  <div className="absolute inset-32 rounded-full border border-emerald-500/30 pointer-events-none" />
                  <div className="absolute inset-44 rounded-full border border-emerald-500/35 pointer-events-none" />

                  {/* Range Ring Labels */}
                  <div className="absolute top-[32%] text-[9px] font-mono-tabular text-emerald-500/50">
                    40 NM
                  </div>
                  <div className="absolute top-[20%] text-[9px] font-mono-tabular text-emerald-500/50">
                    70 NM
                  </div>

                  {/* Crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-[1px] bg-emerald-500/25" />
                    <div className="h-full w-[1px] bg-emerald-500/25 absolute" />
                  </div>

                  {/* 45 degree diagonal crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none rotate-45">
                    <div className="w-full h-[1px] bg-emerald-500/15" />
                    <div className="h-full w-[1px] bg-emerald-500/15 absolute" />
                  </div>

                  {/* Rotating Radar Sweep Line with Gradient Fan */}
                  <div className="absolute inset-0 animate-radar-sweep pointer-events-none flex items-center justify-center">
                    <div
                      className="absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left"
                      style={{
                        background:
                          'conic-gradient(from 180deg at 0% 100%, rgba(16, 185, 129, 0.35) 0deg, rgba(16, 185, 129, 0) 60deg)'
                      }}
                    />
                    <div className="absolute top-0 left-1/2 w-[1.5px] h-1/2 bg-gradient-to-t from-emerald-300 to-transparent shadow-[0_0_8px_#34D399]" />
                  </div>

                  {/* Center Radar Transmitter Core */}
                  <div className="relative z-20 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_12px_#10B981]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Interactive Missile Target Blips positioned on Radar Coordinates */}
                  {RADAR_TARGETS.map((target) => {
                    const isSelected = selectedRadarTarget.id === target.id;
                    return (
                      <div
                        key={target.id}
                        onClick={() => setSelectedRadarTarget(target)}
                        style={{
                          left: `${target.xPercent}%`,
                          top: `${target.yPercent}%`
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
                      >
                        {/* Sonar Shockwave Ping */}
                        <div
                          className="absolute -inset-3 rounded-full animate-sonar-wave pointer-events-none"
                          style={{
                            border: `1.5px solid ${target.color}`
                          }}
                        />

                        {/* Blip Target Core */}
                        <div
                          className={`relative p-1.5 rounded-full transition-transform duration-200 group-hover:scale-125 ${
                            isSelected ? 'scale-125' : ''
                          }`}
                          style={{
                            backgroundColor: isSelected ? target.color : '#0B1323',
                            border: `2px solid ${target.color}`,
                            boxShadow: `0 0 14px ${target.color}`
                          }}
                        >
                          <Crosshair
                            className="w-3.5 h-3.5"
                            style={{
                              color: isSelected ? '#000000' : target.color
                            }}
                          />
                        </div>

                        {/* Target Code Hover/Active Tag */}
                        <div
                          className={`absolute left-5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[10px] font-mono-tabular whitespace-nowrap transition-all duration-200 pointer-events-none ${
                            isSelected
                              ? 'bg-black/90 text-white border border-emerald-400 opacity-100'
                              : 'bg-black/75 text-gray-300 opacity-80 group-hover:opacity-100'
                          }`}
                        >
                          <span style={{ color: target.color }} className="font-semibold">
                            {target.platform}:{' '}
                          </span>
                          <span>{target.handle}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs font-mono-tabular text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Instagram</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>X (Twitter)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Email</span>
                  </div>
                </div>
              </div>

              {/* Target Telemetry & Action Terminal */}
              <div className="lg:col-span-5 space-y-5">
                {/* Active Locked Target Card */}
                <div className="p-6 rounded-2xl bg-white/5 border border-emerald-500/40 backdrop-blur-md space-y-5 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-mono-tabular text-emerald-400 font-semibold tracking-wider">
                        TARGET LOCKED // TELEMETRY
                      </div>
                      <div className="text-xl font-editorial text-white">
                        {selectedRadarTarget.name}
                      </div>
                    </div>
                    <span
                      className="px-2.5 py-1 rounded text-xs font-mono-tabular font-semibold"
                      style={{
                        backgroundColor: `${selectedRadarTarget.color}25`,
                        color: selectedRadarTarget.color,
                        border: `1px solid ${selectedRadarTarget.color}50`
                      }}
                    >
                      {selectedRadarTarget.status}
                    </span>
                  </div>

                  {/* Telemetry Stats */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono-tabular">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-gray-400">BEARING / AZIMUTH</div>
                      <div className="text-white font-semibold text-sm">
                        {selectedRadarTarget.bearing}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-gray-400">RADAR RANGE</div>
                      <div className="text-white font-semibold text-sm">
                        {selectedRadarTarget.distance}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-gray-400">CARRIER FREQUENCY</div>
                      <div className="text-white font-semibold text-sm">
                        {selectedRadarTarget.frequency}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-gray-400">SIGNAL INTEGRITY</div>
                      <div className="text-emerald-400 font-semibold text-sm">
                        {selectedRadarTarget.signalStrength}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {selectedRadarTarget.description}
                  </p>

                  {/* Tactical Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href={selectedRadarTarget.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                    >
                      <span>Launch {selectedRadarTarget.platform}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(selectedRadarTarget.handle, selectedRadarTarget.id)
                      }
                      className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                    >
                      {copiedHandle === selectedRadarTarget.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Handle Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy {selectedRadarTarget.handle}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Quick Target Switcher Buttons */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono-tabular text-gray-400 tracking-wider">
                    TARGET SELECTOR · CLICK TO LOCK
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {RADAR_TARGETS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedRadarTarget(t)}
                        className={`p-2.5 rounded-lg border text-left transition-all text-xs font-mono-tabular flex items-center justify-between ${
                          selectedRadarTarget.id === t.id
                            ? 'bg-white/15 border-emerald-400 text-white font-semibold'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="truncate">
                          <span style={{ color: t.color }} className="mr-1.5">●</span>
                          <span>{t.platform}</span>
                        </div>
                        <span className="text-[10px] text-gray-400">{t.bearing}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect, Google Forms Embed & Direct Executive Inquiries */}
        <section
          id="connect"
          className="border-t border-[#E2E2DC] bg-[#FAF9F5] py-16 lg:py-24"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Direct Outreach Context & Social Links */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <div className="text-xs font-medium text-[#52524E]">
                    05. Connect & Collaboration
                  </div>
                  <h2
                    className="font-editorial text-3xl sm:text-5xl text-[#111110] tracking-tight"
                    style={{ textWrap: 'balance' }}
                  >
                    Direct Inquiries with{' '}
                    <span className="italic font-normal text-[#1E3A8A]">
                      Satendra Singh
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#52524E] leading-relaxed max-w-[55ch]">
                    Whether you are an institution exploring UPSC ZONE AI adoption, a researcher
                    collaborating on cognitive EdTech, a medical facility interested in the Healthcare Caretaker Directory,
                    or an aspirant seeking academic mentorship — submit the official dispatch form.
                  </p>
                </div>

                {/* Direct Channel Cards */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E2E2DC] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#52524E]">Official Executive Email</div>
                      <div className="font-mono-tabular text-sm font-semibold text-[#111110]">
                        upsczoneai@gmail.com
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('upsczoneai@gmail.com', 'email-main')}
                      className="px-3 py-1.5 text-xs font-medium text-[#111110] bg-[#EAEAE4] hover:bg-[#DFDFD7] rounded-lg transition-colors"
                    >
                      {copiedHandle === 'email-main' ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E2E2DC] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#52524E]">Instagram Community</div>
                      <div className="font-mono-tabular text-sm font-semibold text-[#111110]">
                        @st.upsc
                      </div>
                    </div>
                    <a
                      href={SATENDRA_PROFILE.socials.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] rounded-lg transition-colors inline-flex items-center gap-1"
                    >
                      <span>Open</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E2E2DC] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#52524E]">X (Twitter) Channel</div>
                      <div className="font-mono-tabular text-sm font-semibold text-[#111110]">
                        @hist_satendra
                      </div>
                    </div>
                    <a
                      href={SATENDRA_PROFILE.socials.x.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] rounded-lg transition-colors inline-flex items-center gap-1"
                    >
                      <span>Open</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F4F0] border border-[#E2E2DC] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#52524E]">LinkedIn Executive</div>
                      <div className="font-mono-tabular text-sm font-semibold text-[#111110]">
                        satendrasinghceo
                      </div>
                    </div>
                    <a
                      href={SATENDRA_PROFILE.socials.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] rounded-lg transition-colors inline-flex items-center gap-1"
                    >
                      <span>Open</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Google Forms Iframe Embed */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#E2E2DC] bg-[#FAF9F5] p-5 sm:p-7 shadow-sm space-y-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-tabular text-[#1E3A8A] font-semibold">
                        OFFICIAL GOOGLE FORMS DISPATCH
                      </span>
                      <span className="text-xs text-[#52524E]">
                        Priority Direct Channel
                      </span>
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#111110]">
                      Submit an Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed">
                      Fill out the questionnaire below for partnerships, AI product feedback, speaking requests, or mentorship.
                    </p>
                  </div>

                  {/* Direct Link Action Bar */}
                  <div className="p-3.5 rounded-xl bg-[#F4F4F0] border border-[#E2E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <span className="text-[#52524E] block">Direct Google Form URL:</span>
                      <a
                        href={SATENDRA_PROFILE.contactForm.shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono-tabular font-medium text-[#1E3A8A] hover:underline inline-flex items-center gap-1"
                      >
                        <span>{SATENDRA_PROFILE.contactForm.shortUrl}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => copyToClipboard(SATENDRA_PROFILE.contactForm.shortUrl, 'form-link')}
                        className="px-3 py-1.5 font-medium text-[#111110] bg-[#EAEAE4] hover:bg-[#DFDFD7] rounded-lg inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
                      >
                        {copiedHandle === 'form-link' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Link</span>
                          </>
                        )}
                      </button>
                      <a
                        href={SATENDRA_PROFILE.contactForm.shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] rounded-lg inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
                      >
                        <span>Open in New Tab</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Responsive Google Forms Embedded Iframe */}
                  <div className="w-full rounded-xl overflow-hidden border border-[#E2E2DC] bg-white shadow-xs">
                    <iframe
                      src={SATENDRA_PROFILE.contactForm.embedUrl}
                      width="100%"
                      height="880"
                      title="Satendra Singh Contact Form — UPSC ZONE AI"
                      className="w-full border-0 block"
                    >
                      Loading…
                    </iframe>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#52524E] pt-1">
                    <span>Google Forms · Embedded Securely</span>
                    <a
                      href={SATENDRA_PROFILE.contactForm.fullUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E3A8A] hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>Open full window</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Minimal Footer */}
      <footer className="border-t border-[#E2E2DC] bg-[#F4F4F0] py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#52524E]">
          <div className="space-y-1">
            <div className="font-semibold text-[#111110]">
              Satendra Singh — Founder & CEO, UPSC ZONE AI
            </div>
            <div>
              Building India’s First AI Operating System for Competitive Exams.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SATENDRA_PROFILE.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111110] transition-colors"
            >
              Instagram (@st.upsc)
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={SATENDRA_PROFILE.socials.x.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111110] transition-colors"
            >
              X (@hist_satendra)
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={SATENDRA_PROFILE.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111110] transition-colors"
            >
              LinkedIn (satendrasinghceo)
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#social-radar"
              className="text-[#1E3A8A] font-semibold hover:underline"
            >
              Tactical Radar
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal 1: Portfolio Case Study */}
      {selectedPortfolioItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-portfolio-title"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedPortfolioItem(null)}
        >
          <div
            className="bg-[#F4F4F0] border border-[#E2E2DC] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-[#EAEAE4]">
              {!imageErrors[selectedPortfolioItem.id] && (
                <img
                  src={selectedPortfolioItem.image}
                  alt={selectedPortfolioItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}
              <button
                type="button"
                onClick={() => setSelectedPortfolioItem(null)}
                aria-label="Close case study modal"
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-black/75 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#52524E]">
                  <span className="font-mono-tabular font-semibold text-[#1E3A8A]">
                    {selectedPortfolioItem.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedPortfolioItem.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedPortfolioItem.period}</span>
                </div>
                <h3
                  id="modal-portfolio-title"
                  className="font-editorial text-3xl sm:text-4xl text-[#111110]"
                >
                  {selectedPortfolioItem.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#3A3A37] leading-relaxed">
                {selectedPortfolioItem.summary}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#111110]">
                  Core Accomplishments & Architecture
                </div>
                <ul className="space-y-2 text-sm text-[#3A3A37]">
                  {selectedPortfolioItem.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <span className="font-mono-tabular text-xs text-[#1E3A8A] mt-1">
                        —
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E2DC] space-y-1">
                <div className="text-xs font-semibold text-[#1E3A8A]">
                  Engineering & Strategy Thesis
                </div>
                <p className="text-xs sm:text-sm text-[#52524E]">
                  {selectedPortfolioItem.archDetails}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E2DC] flex items-center justify-between text-xs text-[#52524E]">
                <span>Satendra Singh Portfolio Archive</span>
                <button
                  type="button"
                  onClick={() => setSelectedPortfolioItem(null)}
                  className="px-4 py-2 font-semibold text-white bg-[#111110] rounded-lg hover:bg-[#3A3A37] transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal 2: Future Vision Initiative Detail */}
      {selectedVisionItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-vision-title"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedVisionItem(null)}
        >
          <div
            className="bg-[#F4F4F0] border border-[#E2E2DC] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-[#52524E]">
                  <span className="font-mono-tabular font-semibold text-[#1E3A8A]">
                    INITIATIVE {selectedVisionItem.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedVisionItem.category}</span>
                </div>
                <h3
                  id="modal-vision-title"
                  className="font-editorial text-3xl sm:text-4xl text-[#111110]"
                >
                  {selectedVisionItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVisionItem(null)}
                aria-label="Close vision modal"
                className="w-9 h-9 rounded-lg border border-[#E2E2DC] flex items-center justify-center text-[#111110] hover:bg-[#EAEAE4] transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#3A3A37] leading-relaxed">
              <p>{selectedVisionItem.description}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E2DC] space-y-2">
              <div className="text-xs font-semibold text-[#1E3A8A]">
                Intended Societal & Technological Impact
              </div>
              <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed">
                {selectedVisionItem.impact}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2E2DC] flex items-center justify-between text-xs text-[#52524E]">
              <span className="px-2.5 py-1 rounded bg-[#EAEAE4] font-medium text-[#111110]">
                Status: {selectedVisionItem.status}
              </span>
              <button
                type="button"
                onClick={() => setSelectedVisionItem(null)}
                className="px-4 py-2 font-semibold text-white bg-[#111110] rounded-lg hover:bg-[#3A3A37] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal 3: Credential Verification */}
      {selectedCredential && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-credential-title"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedCredential(null)}
        >
          <div
            className="bg-[#F4F4F0] border border-[#E2E2DC] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-[#52524E]">
                  <span className="font-mono-tabular font-semibold text-[#1E3A8A]">
                    {selectedCredential.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCredential.timeframe}</span>
                </div>
                <h3
                  id="modal-credential-title"
                  className="font-editorial text-3xl sm:text-4xl text-[#111110]"
                >
                  {selectedCredential.title}
                </h3>
                <div className="text-xs font-semibold text-[#1E3A8A]">
                  {selectedCredential.institution}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCredential(null)}
                aria-label="Close credential modal"
                className="w-9 h-9 rounded-lg border border-[#E2E2DC] flex items-center justify-center text-[#111110] hover:bg-[#EAEAE4] transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#3A3A37] leading-relaxed">
              {selectedCredential.description}
            </p>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#111110]">
                Key Highlights & Relevance
              </div>
              <ul className="space-y-2 text-sm text-[#3A3A37]">
                {selectedCredential.keyTakeaways.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="font-mono-tabular text-xs text-[#1E3A8A] mt-1">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E2E2DC] flex items-center justify-between text-xs text-[#52524E]">
              <span>{selectedCredential.verificationNote}</span>
              <button
                type="button"
                onClick={() => setSelectedCredential(null)}
                className="px-4 py-2 font-semibold text-white bg-[#111110] rounded-lg hover:bg-[#3A3A37] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal 4: Full-Resolution Official Portrait Viewer */}
      {portraitLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Satendra Singh Official Portrait"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPortraitLightboxOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#111110] rounded-2xl overflow-hidden border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPortraitLightboxOpen(false)}
              aria-label="Close portrait viewer"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={heroPortraitSrc}
              alt="Satendra Singh — Founder & CEO of UPSC ZONE AI"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain max-h-[82vh]"
            />
            <div className="p-4 bg-[#111110] text-white flex items-center justify-between text-xs">
              <div>
                <strong className="font-semibold">Satendra Singh</strong> · Founder &
                CEO, UPSC ZONE AI
              </div>
              <span className="text-white/70 font-mono-tabular">Official Photo</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

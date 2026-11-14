import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TimelineMilestone } from '../data/portfolioData';

interface CredentialsTimelineProps {
  milestones: TimelineMilestone[];
  onInspectCredential?: (credentialId: string) => void;
}

export function CredentialsTimeline({
  milestones,
  onInspectCredential
}: CredentialsTimelineProps) {
  const [trackFilter, setTrackFilter] = useState<'all' | 'education' | 'career'>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string>(
    milestones[milestones.length - 1]?.id ?? ''
  );

  const visibleMilestones = milestones.filter((m) =>
    trackFilter === 'all' ? true : m.track === trackFilter
  );

  const activeMilestone =
    visibleMilestones.find((m) => m.id === hoveredId) ??
    visibleMilestones.find((m) => m.id === pinnedId) ??
    visibleMilestones[0];

  const desktopGridCols =
    visibleMilestones.length <= 3
      ? 'lg:grid-cols-3'
      : visibleMilestones.length === 4
      ? 'lg:grid-cols-4'
      : 'lg:grid-cols-7';

  return (
    <div className="mb-14 rounded-2xl border border-[#E2E2DC] bg-[#FAF9F5] p-6 sm:p-8 space-y-8">
      {/* Timeline Header & Track Filter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E2DC] pb-6">
        <div className="space-y-1.5">
          <div className="text-xs font-mono-tabular text-[#1E3A8A] font-medium">
            Chronological Career &amp; Educational Trajectory
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#111110] tracking-tight">
            From Historical Scholarship to{' '}
            <span className="italic font-normal text-[#1E3A8A]">
              AI Leadership
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-[#52524E] max-w-[64ch]">
            Hover over or select any chronological milestone below to reveal full
            career context, institutional details, and key outcomes.
          </p>
        </div>

        {/* Interactive Segmented Track Filter */}
        <div
          role="tablist"
          aria-label="Filter chronological timeline"
          className="flex flex-wrap items-center gap-1 p-1 bg-[#EAEAE4] rounded-lg border border-[#E2E2DC] self-start shrink-0"
        >
          {[
            { id: 'all', label: 'Full Timeline' },
            { id: 'education', label: 'Education & Exams' },
            { id: 'career', label: 'Career & Leadership' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={trackFilter === tab.id}
              onClick={() => {
                const nextFilter = tab.id as typeof trackFilter;
                setTrackFilter(nextFilter);
                setHoveredId(null);
                const firstMatching = milestones.find((m) =>
                  nextFilter === 'all' ? true : m.track === nextFilter
                );
                if (firstMatching) {
                  setPinnedId(firstMatching.id);
                }
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A] ${
                trackFilter === tab.id
                  ? 'bg-[#F4F4F0] text-[#111110] shadow-xs font-semibold'
                  : 'text-[#52524E] hover:text-[#111110]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chronological Axis: Horizontal on Desktop, Vertical Timeline on Mobile/Tablet */}
      <div className="relative">
        {/* Desktop Horizontal Spine Line */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-5 left-6 right-6 h-px bg-[#D8D8D0]"
        />

        {/* Mobile/Tablet Vertical Spine Line */}
        <div
          aria-hidden="true"
          className="lg:hidden absolute top-4 bottom-4 left-[15px] w-px bg-[#D8D8D0]"
        />

        <ol className={`grid grid-cols-1 ${desktopGridCols} gap-4 relative`}>
          {visibleMilestones.map((item, idx) => {
            const isActive = activeMilestone?.id === item.id;
            const isHovered = hoveredId === item.id;
            const total = visibleMilestones.length;

            // Edge-aware alignment for hover-reveal floating detail card on desktop
            const popoverAlignClass =
              idx === 0
                ? 'left-0'
                : idx === total - 1
                ? 'right-0'
                : 'left-1/2 -translate-x-1/2';

            return (
              <li key={item.id} className="relative flex flex-col pl-10 lg:pl-0">
                {/* Mobile Vertical Node Dot */}
                <span
                  aria-hidden="true"
                  className={`lg:hidden absolute left-0 top-4 w-8 h-8 rounded-full flex items-center justify-center font-mono-tabular text-[11px] font-semibold border transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#1E3A8A] border-[#1E3A8A] text-white'
                      : 'bg-[#FAF9F5] border-[#D8D8D0] text-[#52524E]'
                  }`}
                >
                  {item.step}
                </span>

                <button
                  type="button"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(item.id)}
                  onBlur={() => setHoveredId(null)}
                  onClick={() => setPinnedId(item.id)}
                  aria-pressed={pinnedId === item.id}
                  className={`group relative text-left w-full flex flex-col justify-between rounded-xl border p-4 transition-[border-color,background-color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A] ${
                    isActive
                      ? 'bg-[#F4F4F0] border-[#1E3A8A] lg:-translate-y-0.5'
                      : 'bg-[#FAF9F5] border-[#E2E2DC] hover:border-[#1E3A8A]/60 hover:bg-[#F4F4F0]/70'
                  }`}
                >
                  {/* Desktop Node Marker + Era */}
                  <div className="space-y-2.5 w-full">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`hidden lg:flex w-6 h-6 rounded-full items-center justify-center font-mono-tabular text-[11px] font-semibold border transition-colors duration-150 shrink-0 ${
                          isActive
                            ? 'bg-[#1E3A8A] border-[#1E3A8A] text-white'
                            : 'bg-[#F4F4F0] border-[#D8D8D0] text-[#52524E] group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A]'
                        }`}
                      >
                        {item.step}
                      </span>
                      <span className="font-mono-tabular text-[11px] text-[#52524E] truncate">
                        {item.era}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] text-[#52524E] truncate">
                        {item.trackLabel}
                      </div>
                      <h4 className="font-editorial text-lg sm:text-xl lg:text-lg leading-snug text-[#111110]">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Organization Footer + Inline Mobile Hover/Active Reveal */}
                  <div className="mt-3 pt-2.5 border-t border-[#E2E2DC]/80 w-full space-y-2">
                    <div className="text-xs font-medium text-[#3A3A37] truncate">
                      {item.organization}
                    </div>
                    {(isHovered || isActive) && (
                      <p className="lg:hidden text-xs text-[#52524E] leading-relaxed">
                        {item.hoverDetails}
                      </p>
                    )}
                  </div>

                  {/* Desktop Hover-to-Reveal Detail Card */}
                  <div
                    role="tooltip"
                    className={`hidden lg:block pointer-events-none absolute z-30 bottom-full mb-3 w-72 rounded-xl border border-[#1E3A8A]/30 bg-[#111110] text-[#F4F4F0] p-4 shadow-lg transition-[opacity,transform] duration-150 ${popoverAlignClass} ${
                      isHovered
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-1'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[11px] font-mono-tabular text-[#93C5FD] mb-1">
                      <span>Stage {item.step}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.era}</span>
                    </div>
                    <div className="font-editorial text-lg text-white leading-snug mb-1.5">
                      {item.title}
                    </div>
                    <p className="text-xs text-[#D4D4CE] leading-relaxed">
                      {item.hoverDetails}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Synchronized Milestone Inspection Strip */}
      {activeMilestone && (
        <div
          aria-live="polite"
          className="pt-6 border-t border-[#E2E2DC] transition-opacity duration-150"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-2.5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#52524E]">
                <span className="font-mono-tabular font-semibold text-[#1E3A8A]">
                  Stage {activeMilestone.step}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeMilestone.era}</span>
                <span aria-hidden="true">·</span>
                <span>{activeMilestone.trackLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-[#111110]">
                  {activeMilestone.organization}
                </span>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl text-[#111110]">
                {activeMilestone.title}
              </h4>

              <p className="text-sm sm:text-base text-[#3A3A37] leading-relaxed max-w-[65ch]">
                {activeMilestone.summary} {activeMilestone.hoverDetails}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#111110]">
                  Key Milestone Outcomes
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#52524E]">
                  {activeMilestone.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="font-mono-tabular text-xs text-[#1E3A8A] mt-0.5"
                      >
                        —
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeMilestone.credentialId && onInspectCredential && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      onInspectCredential(activeMilestone.credentialId!)
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
                  >
                    <span>Inspect Full Credential Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client"
import { BlurFade } from "@/components/ui/blur-fade"
import { BorderBeam } from "@/components/ui/border-beam"
import SpotlightCard from "@/components/SpotlightCard"

const CHECKS = {
  gen: ["Understands user intent, not just DOM structure","Generates edge cases you'd never think to write","Outputs clean, readable, maintainable code"],
  heal: ["Detects selector changes before CI fails","Proposes and applies minimal, safe fixes","98% auto-heal success rate in production"],
  int: ["GitHub, GitLab, Bitbucket — native CI triggers","Slack + Jira — instant failure notifications","50+ integrations, all one-click"],
}

const INT_TILES = [
  { icon: "🐙", name: "GitHub" }, { icon: "🦊", name: "GitLab" },
  { icon: "🔧", name: "Jira" }, { icon: "🔔", name: "Slack" },
  { icon: "🔄", name: "Circle" }, null,
  { icon: "▲", name: "Vercel" }, { icon: "📝", name: "Notion" },
  { icon: "⚙️", name: "Jenkins" }, { icon: "🐳", name: "Docker" },
  { icon: "📦", name: "npm" }, { icon: "+39", name: "more", isText: true },
]

function FeatTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#2563EB] bg-[rgba(37,99,235,.07)] border border-[rgba(37,99,235,.15)] px-3 py-1 rounded-full mb-5 uppercase tracking-[1px]"
      style={{ fontFamily: "var(--font-sans)" }}>
      {children}
    </div>
  )
}

function FeatHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[#0C0E16] font-light leading-[1.1] tracking-[-0.025em] mb-4"
      style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px,3vw,44px)", fontWeight: 300 }}>
      {children}
    </h3>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3 mb-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-[#1E2340] leading-[1.6]"
          style={{ fontFamily: "var(--font-sans)" }}>
          <div className="w-[18px] h-[18px] rounded-[5px] flex-shrink-0 mt-0.5 bg-[rgba(37,99,235,.08)] text-[#2563EB] flex items-center justify-center text-[10px]">✓</div>
          {item}
        </li>
      ))}
    </ul>
  )
}

function LearnMore({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2563EB] hover:gap-3 transition-all duration-200"
      style={{ fontFamily: "var(--font-sans)" }}>
      {children} →
    </a>
  )
}

export default function Features() {
  return (
    <section id="features" className="max-w-[1060px] mx-auto px-6 py-[120px]">
      <BlurFade inView>
        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#2563EB] uppercase tracking-[1.5px] mb-5"
          style={{ fontFamily: "var(--font-sans)" }}>
          <span className="w-4 h-[1.5px] bg-[#2563EB]" /> Features
        </div>
        <h2 className="font-light leading-[1.1] tracking-[-0.03em] text-[#0C0E16] max-w-[640px]"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,4vw,58px)", fontWeight: 300 }}>
          Everything your team needs<br />to{" "}
          <em className="italic text-[#2563EB]">ship without fear.</em>
        </h2>
        <p className="text-[17px] text-[#64748B] leading-[1.75] max-w-[500px] mt-4"
          style={{ fontFamily: "var(--font-sans)" }}>
          From writing your first test to maintaining thousands — Supatest handles the complexity so you don't have to.
        </p>
      </BlurFade>

      {/* ROW 1 — AI Generation */}
      <BlurFade delay={0.1} inView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-24">
          <div>
            <FeatTag>✦ AI Generation</FeatTag>
            <FeatHeading>Describe it in English.<br /><em className="italic text-[#2563EB]">Supatest writes the test.</em></FeatHeading>
            <p className="text-[16px] text-[#64748B] leading-[1.8] mb-7" style={{ fontFamily: "var(--font-sans)" }}>
              No more wrestling with selectors or boilerplate. Simply describe what you want to test, and our AI produces production-ready test scripts in seconds.
            </p>
            <CheckList items={CHECKS.gen} />
            <LearnMore>Explore AI generation</LearnMore>
          </div>
          <SpotlightCard>
            <BorderBeam size={200} duration={8} />
            <div className="bg-[rgba(14,20,40,.03)] border border-[rgba(14,20,40,.07)] rounded-[10px] p-3.5 mb-4">
              <div className="text-[10px] font-bold uppercase tracking-[1px] text-[#94A3B8] mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>Your prompt</div>
              <div className="text-[14px] text-[#1E2340] italic" style={{ fontFamily: "var(--font-sans)" }}>"Test the checkout flow with an expired card and verify the error message"</div>
            </div>
            <div className="text-center text-[11px] text-[#94A3B8] my-2" style={{ fontFamily: "var(--font-sans)" }}>✦ generating...</div>
            <div className="bg-[#0C0E16] rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,.15)]" style={{ fontFamily: "var(--font-mono)", fontSize: "12.5px", lineHeight: "1.9" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1"><div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"/><div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"/><div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"/></div>
                <span className="text-[11px] text-[#6B7280]">checkout.spec.ts</span>
              </div>
              <div><span className="text-[#546E7A] italic">{"// ✦ AI-generated"}</span></div>
              <div><span className="text-[#C792EA]">test</span>(<span className="text-[#C3E88D]">'expired card shows error'</span>, <span className="text-[#C792EA]">async</span> {`({ `}<span className="text-[#80CBC4]">page</span>{` }) => {`}</div>
              <div>&nbsp;&nbsp;<span className="text-[#C792EA]">await</span> page.<span className="text-[#82AAFF]">goto</span>(<span className="text-[#C3E88D]">'/checkout'</span>);</div>
              <div>&nbsp;&nbsp;<span className="text-[#C792EA]">await</span> page.<span className="text-[#82AAFF]">fill</span>(<span className="text-[#C3E88D]">'[data-card]'</span>, <span className="text-[#C3E88D]">'4000...'</span>);</div>
              <div>&nbsp;&nbsp;<span className="text-[#C792EA]">await</span> <span className="text-[#82AAFF]">expect</span>(page).<span className="text-[#82AAFF]">toContainText</span>(<span className="text-[#C3E88D]">'expired'</span>);</div>
              <div>{`});`}</div>
            </div>
          </SpotlightCard>
        </div>
      </BlurFade>

      {/* ROW 2 — Self-Healing (flipped) */}
      <BlurFade delay={0.1} inView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-28">
          <SpotlightCard>
            <BorderBeam size={200} duration={10} />
            <div className="text-[13px] font-semibold text-[#0C0E16] mb-4" style={{ fontFamily: "var(--font-sans)" }}>Selector Drift Detected</div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[rgba(239,68,68,.05)] border border-[rgba(239,68,68,.12)] rounded-[10px] p-3" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", lineHeight: "1.7" }}>
                <div className="text-[10px] font-bold uppercase tracking-[1px] text-[#DC2626] mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>Before</div>
                <div className="text-[#EF4444] line-through">#submit-btn</div>
                <div className="text-[#EF4444] line-through">.checkout {">"} button</div>
              </div>
              <div className="bg-[rgba(22,163,74,.05)] border border-[rgba(22,163,74,.12)] rounded-[10px] p-3" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", lineHeight: "1.7" }}>
                <div className="text-[10px] font-bold uppercase tracking-[1px] text-[#16A34A] mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>After · AI Healed</div>
                <div className="text-[#16A34A]">[data-testid="submit"]</div>
                <div className="text-[#16A34A]">button[type="submit"]</div>
              </div>
            </div>
            {[
              { label: "Selectors healed", pct: "92%", dur: "1.8s" },
              { label: "Tests passing", pct: "97%", dur: "2.2s" },
              { label: "CI pipeline green", pct: "100%", dur: "2.6s" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-2.5 mb-2 text-[12px]" style={{ fontFamily: "var(--font-sans)" }}>
                <span className="text-[#64748B] w-[120px] flex-shrink-0">{row.label}</span>
                <div className="flex-1 h-[5px] bg-[rgba(14,20,40,.07)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full heal-fill bg-gradient-to-r from-[#2563EB] to-[#4F46E5]"
                    style={{ animationDuration: row.dur, width: row.pct }} />
                </div>
                <span className="text-[11px] font-bold text-[#0C0E16] w-8 text-right">{row.pct}</span>
              </div>
            ))}
          </SpotlightCard>
          <div>
            <FeatTag>⚕ Self-Healing</FeatTag>
            <FeatHeading>Your UI changed.<br /><em className="italic text-[#2563EB]">Your tests didn't break.</em></FeatHeading>
            <p className="text-[16px] text-[#64748B] leading-[1.8] mb-7" style={{ fontFamily: "var(--font-sans)" }}>
              UI updates are inevitable. Supatest's AI monitors selector drift and heals broken tests before they ever fail in CI — saving hours every week.
            </p>
            <CheckList items={CHECKS.heal} />
            <LearnMore>See healing in action</LearnMore>
          </div>
        </div>
      </BlurFade>

      {/* ROW 3 — Integrations */}
      <BlurFade delay={0.1} inView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-28">
          <div>
            <FeatTag>🔗 Integrations</FeatTag>
            <FeatHeading>Lives inside your<br /><em className="italic text-[#2563EB]">existing workflow.</em></FeatHeading>
            <p className="text-[16px] text-[#64748B] leading-[1.8] mb-7" style={{ fontFamily: "var(--font-sans)" }}>
              Supatest plugs into the tools your team already uses. One-click setup, no workflow changes required. Tests run on every PR, results land in Slack.
            </p>
            <CheckList items={CHECKS.int} />
            <LearnMore>Browse all integrations</LearnMore>
          </div>
          <SpotlightCard>
            <BorderBeam size={200} duration={12} />
            <div className="text-[13px] font-semibold text-[#0C0E16] mb-4" style={{ fontFamily: "var(--font-sans)" }}>Connect your stack</div>
            <div className="grid grid-cols-4 gap-2.5">
              {INT_TILES.map((tile, i) =>
                tile === null ? (
                  <div key={i} className="col-span-2 row-span-1 aspect-[2/1] bg-[#2563EB] rounded-[14px] flex flex-col items-center justify-center gap-1.5 shadow-[0_4px_16px_rgba(37,99,235,.3)]">
                    <span className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-sans)" }}>S</span>
                    <span className="text-[10px] font-bold text-white/70" style={{ fontFamily: "var(--font-sans)" }}>Supatest</span>
                  </div>
                ) : (
                  <div key={i} className="aspect-square bg-white border border-[rgba(14,20,40,.07)] rounded-[14px] flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_24px_rgba(14,20,40,.1)] hover:border-[rgba(37,99,235,.2)] transition-all cursor-default shadow-[0_1px_3px_rgba(14,20,40,.05)]">
                    {tile.isText
                      ? <span className="text-[11px] font-bold text-[#2563EB]" style={{ fontFamily: "var(--font-sans)" }}>{tile.icon}</span>
                      : <span className="text-2xl">{tile.icon}</span>
                    }
                    <span className="text-[10px] font-bold text-[#94A3B8]" style={{ fontFamily: "var(--font-sans)" }}>{tile.name}</span>
                  </div>
                )
              )}
            </div>
          </SpotlightCard>
        </div>
      </BlurFade>
    </section>
  )
}

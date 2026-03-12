"use client"
import VideoDialog from "@/components/VideoDialog"
import { BlurFade } from "@/components/ui/blur-fade"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { LightRays } from "@/components/ui/light-rays"
import Image from "next/image"

const WORDS = ["heals itself.", "thinks ahead.", "ships faster."]
const AVATARS = [
  { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&auto=format", alt: "AK" },
  { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&auto=format", alt: "SM" },
  { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&auto=format", alt: "LT" },
  { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&auto=format", alt: "NP" },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&auto=format", alt: "JK" },
]

const TEST_ROWS = [
  { icon: "✓", name: "Valid credentials → dashboard redirect", tag: "Pass", tagCls: "bg-[rgba(22,163,74,.08)] text-[#15803D]", time: "0.8s" },
  { icon: "✓", name: "Invalid password shows error toast", tag: "Pass", tagCls: "bg-[rgba(22,163,74,.08)] text-[#15803D]", time: "1.1s" },
  { icon: "◌", name: "SSO login via Google OAuth", tag: "Running", tagCls: "bg-[rgba(37,99,235,.08)] text-[#2563EB]", time: "—", iconColor: "#2563EB" },
  { icon: "✗", name: "Forgot password email trigger", tag: "Healing", tagCls: "bg-[rgba(239,68,68,.08)] text-[#DC2626]", time: "—", iconColor: "#EF4444" },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-24 relative overflow-hidden">
      
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 100%)",
        }}
      />

      {/* Light rays aurora effect */}
      <LightRays
        color="rgba(37,99,235,0.3)"
        count={7}
        blur={32}
        speed={14}
        length="60vh"
      />

      {/* Eyebrow */}
      <BlurFade delay={0.1} inView>
        <div className="inline-flex items-center gap-2 px-1.5 pr-4 py-1.5 border border-[rgba(37,99,235,.2)] rounded-full bg-[rgba(37,99,235,.05)] text-[12.5px] font-semibold text-[#2563EB] mb-8">
          <span className="w-[22px] h-[22px] rounded-full bg-[rgba(37,99,235,.12)] flex items-center justify-center">
            <span className="w-[7px] h-[7px] rounded-full bg-[#2563EB] animate-[blink-dot_2s_ease_infinite]" />
          </span>
          Introducing Supatest v2.0
        </div>
      </BlurFade>

      {/* Hero title with word rotate */}
      <BlurFade delay={0.2} inView>
        <h1
          className="max-w-[900px] text-[#0C0E16] font-light leading-[1.02] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(56px, 7.5vw, 108px)" }}
        >
          Testing that
          <br />
          <span className="inline-block relative overflow-hidden align-bottom" style={{ height: "1.02em" }}>
            <span
              className="flex flex-col"
              style={{ animation: "word-rotate 6s cubic-bezier(0.16,1,0.3,1) infinite" }}
            >
              {WORDS.map((w) => (
                <span key={w} className="block italic text-[#2563EB]" style={{ height: "1.02em", lineHeight: "1.02" }}>
                  {w}
                </span>
              ))}
            </span>
          </span>
        </h1>
      </BlurFade>

      {/* Subtitle */}
      <BlurFade delay={0.3} inView>
        <p className="max-w-[520px] mt-7 text-[17.5px] text-[#64748B] leading-[1.75]"
          style={{ fontFamily: "var(--font-sans)" }}>
          The AI-native testing platform that writes, heals, and maintains your tests — so your team ships with complete confidence, every time.
        </p>
      </BlurFade>

      {/* CTAs */}
      <BlurFade delay={0.4} inView>
        <div className="flex gap-3 justify-center mt-11 flex-wrap">
          <VideoDialog
            videoId="EHssouxYkxE"
            title="Supatest AI — Full Product Demo"
            description="Watch how a team of 3 replaced their entire QA workflow in under 10 minutes."
            trigger={
              <ShimmerButton
                shimmerColor="rgba(255,255,255,0.18)"
                background="#0C0E16"
                className="px-8 py-3.5 text-[15px] font-bold rounded-[11px] cursor-pointer"
              >
                <span className="flex items-center gap-2 text-white">
                  <span className="text-[13px]">▶</span> Watch the demo
                </span>
              </ShimmerButton>
            }
          />
          <button className="px-7 py-3.5 text-[15px] font-semibold text-[#1E2340] rounded-[11px] border border-[rgba(14,20,40,.14)] bg-white/70 backdrop-blur-sm hover:border-[rgba(37,99,235,.3)] hover:text-[#2563EB] hover:bg-white/90 hover:-translate-y-px transition-all"
            style={{ fontFamily: "var(--font-sans)" }}>
            Start for free <span className="text-xs opacity-60">— no card needed</span>
          </button>
        </div>
      </BlurFade>

      {/* Social proof */}
      <BlurFade delay={0.5} inView>
        <div className="flex items-center gap-4 justify-center mt-12 flex-wrap">
          <div className="flex">
            {AVATARS.map((a, i) => (
              <Image key={a.alt}
                src={a.img}
                alt={a.alt}
                width={30}
                height={30}
                className="w-[30px] h-[30px] rounded-full border-2 border-white object-cover shadow-[0_1px_4px_rgba(0,0,0,.1)]"
                style={{ marginLeft: i === 0 ? 0 : "-10px" }}
              />
            ))}
          </div>
          <span className="text-[13.5px] text-[#64748B] font-medium" style={{ fontFamily: "var(--font-sans)" }}>
            <strong className="text-[#0C0E16]">500+</strong> teams shipping with confidence
          </span>
          <div className="w-px h-5 bg-[rgba(14,20,40,.07)]" />
          <span className="text-[#F59E0B] text-[13px] tracking-wide">★★★★★</span>
          <span className="text-[13.5px] text-[#64748B] font-medium" style={{ fontFamily: "var(--font-sans)" }}>4.9 on G2</span>
        </div>
      </BlurFade>

      {/* Browser mockup */}
      <BlurFade delay={0.6} inView className="w-full max-w-[980px] mt-20">
        <div className="relative">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[70%] h-[100px] rounded-full pointer-events-none"
            style={{ background: "rgba(37,99,235,.14)", filter: "blur(40px)" }} />
          <div className="bg-white/90 border border-[rgba(14,20,40,.09)] rounded-2xl overflow-hidden shadow-[0_2px_4px_rgba(14,20,40,.04),0_24px_80px_rgba(14,20,40,.12)]">
            {/* Topbar */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-[rgba(248,250,252,.95)] border-b border-[rgba(14,20,40,.07)]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 min-w-0 bg-[rgba(14,20,40,.05)] rounded-md px-2 sm:px-3 py-1.5 flex items-center gap-2 truncate"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#64748B" }}>
                <span className="text-[10px] font-bold text-[#16A34A]">●</span>
                <span className="truncate">app.supatest.ai / dashboard</span>
              </div>
              <span className="hidden sm:inline" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#94A3B8" }}>v2.0.4</span>
            </div>

            {/* Body */}
            <div className="flex min-h-[260px] md:min-h-[340px]">
              {/* Sidebar — hidden on mobile */}
              <div className="hidden md:block w-[220px] flex-shrink-0 bg-[rgba(248,250,252,.8)] border-r border-[rgba(14,20,40,.07)] p-4">
                <div className="mb-5">
                  <div className="text-[10px] uppercase tracking-[1.2px] text-[#94A3B8] font-semibold mb-2 px-1.5"
                    style={{ fontFamily: "var(--font-sans)" }}>Test Suites</div>
                  {[
                    { dot: "#16A34A", label: "Login Flow", active: true },
                    { dot: "#D97706", label: "Checkout" },
                    { dot: "#2563EB", label: "API Tests" },
                    { dot: "#94A3B8", label: "Onboarding" },
                  ].map((item) => (
                    <div key={item.label}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12.5px] font-medium cursor-pointer mb-0.5 transition-all ${item.active ? "bg-white text-[#0C0E16] shadow-[0_1px_2px_rgba(14,20,40,.04),0_4px_12px_rgba(14,20,40,.05)]" : "text-[#64748B] hover:bg-[rgba(14,20,40,.04)]"}`}
                      style={{ fontFamily: "var(--font-sans)" }}>
                      <span className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: item.dot }} />
                      {item.label}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[1.2px] text-[#94A3B8] font-semibold mb-2 px-1.5"
                    style={{ fontFamily: "var(--font-sans)" }}>AI Actions</div>
                  <div className="px-2 py-1.5 text-[12px] text-[#2563EB] cursor-pointer hover:bg-[rgba(37,99,235,.04)] rounded-lg transition-all"
                    style={{ fontFamily: "var(--font-sans)" }}>✦ Generate tests</div>
                  <div className="px-2 py-1.5 text-[12px] text-[#2563EB] cursor-pointer hover:bg-[rgba(37,99,235,.04)] rounded-lg transition-all"
                    style={{ fontFamily: "var(--font-sans)" }}>⚕ Heal selectors</div>
                </div>
              </div>

              {/* Main */}
              <div className="flex-1 min-w-0 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-5 gap-2">
                  <span className="text-[13px] sm:text-[14px] font-bold text-[#0C0E16]" style={{ fontFamily: "var(--font-sans)" }}>Login Flow — 8 tests</span>
                  <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[rgba(22,163,74,.08)] text-[#15803D] border border-[rgba(22,163,74,.15)] flex-shrink-0"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-[blink-dot_2s_ease_infinite]" />
                    Running live
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {TEST_ROWS.map((row) => (
                    <div key={row.name}
                      className="flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl border border-[rgba(14,20,40,.07)] bg-white/70 text-[11px] sm:text-[12.5px] hover:shadow-[0_1px_2px_rgba(14,20,40,.04),0_4px_16px_rgba(14,20,40,.06)] transition-shadow">
                      <span className="flex-shrink-0" style={{ color: row.iconColor }}>{row.icon}</span>
                      <span className="flex-1 min-w-0 font-medium text-[#1E2340] truncate" style={{ fontFamily: "var(--font-sans)" }}>{row.name}</span>
                      <span className={`px-1.5 sm:px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.5px] flex-shrink-0 ${row.tagCls}`}>{row.tag}</span>
                      <span className="text-[10px] sm:text-[11px] text-[#94A3B8] whitespace-nowrap hidden sm:inline" style={{ fontFamily: "var(--font-mono)" }}>{row.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 sm:mt-3.5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 bg-[rgba(37,99,235,.04)] border border-[rgba(37,99,235,.1)] rounded-[10px] flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-[12px]">
                  <span className="text-[14px] flex-shrink-0">⚕</span>
                  <span className="text-[#1E2340] flex-1 min-w-0" style={{ fontFamily: "var(--font-sans)" }}>
                    AI detected <strong className="text-[#2563EB]">selector drift</strong> in 1 test — auto-healing
                  </span>
                  <div className="text-[10px] sm:text-[11px] font-bold text-[#2563EB] px-2 sm:px-2.5 py-1 rounded-md border border-[rgba(37,99,235,.2)] hover:bg-[#2563EB] hover:text-white cursor-pointer transition-all flex-shrink-0"
                    style={{ fontFamily: "var(--font-sans)" }}>View fix</div>
                </div>
              </div>
            </div>

            {/* Footer bar */}
            <div className="flex items-center gap-3 sm:gap-5 px-3 sm:px-4 py-2 sm:py-2.5 bg-[rgba(248,250,252,.9)] border-t border-[rgba(14,20,40,.07)] text-[10px] sm:text-[11.5px] text-[#64748B] flex-wrap"
              style={{ fontFamily: "var(--font-sans)" }}>
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" /> 6 passed</div>
              <div className="w-px h-3.5 bg-[rgba(14,20,40,.07)]" />
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" /> 1 healing</div>
              <div className="w-px h-3.5 bg-[rgba(14,20,40,.07)]" />
              <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" /> 1 running</div>
              <span className="ml-auto hidden sm:inline" style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>Chrome 124 · macOS</span>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  )
}

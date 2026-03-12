import { BlurFade } from "@/components/ui/blur-fade"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import VideoDialog from "@/components/VideoDialog"

export default function CTA() {
  return (
    <div className="max-w-[1060px] mx-auto px-6 pb-36">
      <BlurFade inView>
        <div className="relative rounded-[28px] overflow-hidden text-center py-24 px-12"
          style={{ background: "#0C0E16" }}>
          {/* Radial blue glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(37,99,235,.35), transparent 70%)" }} />
          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
            }} />
          <div className="relative z-10">
            <h2 className="font-light leading-[1.05] tracking-[-0.03em] text-white max-w-[640px] mx-auto mb-4"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px,5vw,72px)", fontWeight: 300 }}>
              Stop maintaining tests.<br />
              <em className="italic text-[#93C5FD]">Start shipping features.</em>
            </h2>
            <p className="text-[17px] text-white/60 max-w-[440px] mx-auto mb-11"
              style={{ fontFamily: "var(--font-sans)" }}>
              Join 500+ engineering teams who automated their QA with Supatest AI.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <VideoDialog
                videoId="EHssouxYkxE"
                title="Supatest AI — Full Product Demo"
                description="Watch how a team of 3 replaced their entire QA workflow in 10 minutes."
                trigger={
                  <ShimmerButton
                    shimmerColor="rgba(255,255,255,0.15)"
                    background="white"
                    className="px-8 py-3.5 text-[15px] font-bold rounded-[11px] cursor-pointer"
                  >
                    <span className="text-[#0C0E16]">▶ Watch 9-min demo</span>
                  </ShimmerButton>
                }
              />
              <button className="px-7 py-3.5 text-[15px] font-semibold text-white/75 border border-white/15 rounded-[11px] hover:text-white hover:border-white/35 hover:bg-white/6 transition-all"
                style={{ fontFamily: "var(--font-sans)" }}>
                Start for free — no card needed
              </button>
            </div>
            <div className="mt-5 text-[13px] text-white/35" style={{ fontFamily: "var(--font-sans)" }}>
              ✓ 14-day trial &nbsp;·&nbsp; ✓ Cancel anytime &nbsp;·&nbsp; ✓ No credit card
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  )
}

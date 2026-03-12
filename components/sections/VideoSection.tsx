import { BlurFade } from "@/components/ui/blur-fade"
import VideoDialog from "@/components/VideoDialog"

const MINI_VIDEOS = [
  { dur: "▶ 2:30", title: "Auto-Healing Live", desc: "Watch tests fix themselves as we change the UI in real-time" },
  { dur: "▶ 1:45", title: "AI Test Generation", desc: "From plain English to a running test case in 60 seconds" },
  { dur: "▶ 3:10", title: "CI/CD Setup", desc: "Integrating Supatest into your GitHub Actions pipeline" },
]

export default function VideoSection() {
  return (
    <section id="demo" className="max-w-[1060px] mx-auto px-6 py-[120px] text-center">
      <BlurFade inView>
        <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#2563EB] uppercase tracking-[1.5px] mb-5 justify-center"
          style={{ fontFamily: "var(--font-sans)" }}>
          <span className="w-4 h-[1.5px] bg-[#2563EB]" /> See it live
        </div>
        <h2 className="font-light leading-[1.1] tracking-[-0.03em] text-[#0C0E16] max-w-[640px] mx-auto"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,4vw,58px)", fontWeight: 300 }}>
          Watch a team replace their<br /><em className="italic text-[#2563EB]">entire QA workflow.</em>
        </h2>
        <p className="text-[17px] text-[#64748B] max-w-[440px] mx-auto mt-4 leading-[1.75]"
          style={{ fontFamily: "var(--font-sans)" }}>
          3 engineers. 400 tests. 10 minutes. See exactly how it's done.
        </p>
      </BlurFade>

      {/* Main video */}
      <BlurFade delay={0.1} inView>
        <VideoDialog
          videoId="EHssouxYkxE"
          title="Supatest AI — Full Product Demo"
          description="Watch how a team of 3 replaced their entire QA workflow in under 10 minutes."
          trigger={
            <div className="cursor-pointer group relative max-w-[820px] mx-auto mt-14 rounded-[20px] overflow-hidden border border-[rgba(14,20,40,.07)] shadow-[0_2px_4px_rgba(14,20,40,.04),0_32px_80px_rgba(14,20,40,.1)] hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(14,20,40,.04),0_48px_100px_rgba(14,20,40,.15)] transition-all duration-400">
              <div className="aspect-video flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #E0ECFF 50%, #EDE9FE 100%)" }}>
                <div className="absolute inset-0"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(37,99,235,.15) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="relative z-10 text-center">
                  <div className="w-[72px] h-[72px] rounded-full bg-white shadow-[0_4px_24px_rgba(37,99,235,.2),0_1px_4px_rgba(0,0,0,.08)] flex items-center justify-center mx-auto mb-4 text-[26px] group-hover:scale-[1.08] group-hover:shadow-[0_8px_32px_rgba(37,99,235,.35)] transition-all duration-300">
                    ▶
                  </div>
                  <div className="text-[15px] font-bold text-[#1E2340]" style={{ fontFamily: "var(--font-sans)" }}>Full Product Walkthrough</div>
                  <div className="text-[12px] text-[#64748B] mt-1" style={{ fontFamily: "var(--font-sans)" }}>Supatest AI v2.0 — 9 minutes</div>
                </div>
              </div>
              <div className="bg-white border-t border-[rgba(14,20,40,.07)] px-5 py-3.5 flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold border border-[rgba(14,20,40,.07)] text-[#64748B]"
                  style={{ fontFamily: "var(--font-sans)" }}>Demo</span>
                <span className="text-[14px] font-semibold text-[#1E2340]" style={{ fontFamily: "var(--font-sans)" }}>
                  Supatest AI — End-to-end QA automation in 9 minutes
                </span>
                <span className="ml-auto text-[12px] text-[#94A3B8]" style={{ fontFamily: "var(--font-mono)" }}>9:14</span>
              </div>
            </div>
          }
        />
      </BlurFade>

      {/* Mini videos */}
      <BlurFade delay={0.2} inView>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-3.5">
          {MINI_VIDEOS.map((v) => (
            <VideoDialog
              key={v.title}
              videoId="EHssouxYkxE"
              title={v.title}
              description={v.desc}
              trigger={
                <div className="bg-white border border-[rgba(14,20,40,.07)] rounded-[14px] px-4 py-4 cursor-pointer text-left hover:shadow-[0_2px_4px_rgba(14,20,40,.04),0_20px_60px_rgba(14,20,40,.1)] hover:border-[rgba(37,99,235,.2)] hover:-translate-y-0.5 transition-all">
                  <div className="text-[11px] font-bold text-[#2563EB] mb-1.5" style={{ fontFamily: "var(--font-mono)" }}>{v.dur}</div>
                  <div className="text-[14px] font-bold text-[#0C0E16] mb-1" style={{ fontFamily: "var(--font-sans)" }}>{v.title}</div>
                  <div className="text-[12px] text-[#64748B] leading-[1.5]" style={{ fontFamily: "var(--font-sans)" }}>{v.desc}</div>
                </div>
              }
            />
          ))}
        </div>
      </BlurFade>
    </section>
  )
}

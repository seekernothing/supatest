import { BlurFade } from "@/components/ui/blur-fade"

const STEPS = [
  { icon: "🔗", label: "Step one", title: "Connect your app", desc: "Paste your URL. Supatest crawls your app and maps every user flow automatically in under 60 seconds." },
  { icon: "✦",  label: "Step two", title: "AI generates tests", desc: "Our AI analyzes your UI and generates comprehensive test cases covering all critical user paths." },
  { icon: "⚡", label: "Step three", title: "Run in parallel", desc: "Execute across browsers simultaneously. Get detailed reports with screenshots and traces instantly." },
  { icon: "⚕",  label: "Step four", title: "Auto-heal forever", desc: "As your UI evolves, Supatest adapts. Your tests stay green with zero maintenance from your team." },
]

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="border-t border-[rgba(14,20,40,.07)] bg-white/40">
      <div className="max-w-[1060px] mx-auto px-6 py-[120px]">
        <BlurFade inView className="text-center">
          <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#2563EB] uppercase tracking-[1.5px] mb-5 justify-center"
            style={{ fontFamily: "var(--font-sans)" }}>
            <span className="w-4 h-[1.5px] bg-[#2563EB]" /> Process
          </div>
          <h2 className="font-light leading-[1.1] tracking-[-0.03em] text-[#0C0E16] max-w-[640px] mx-auto"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,4vw,58px)", fontWeight: 300 }}>
            From zero tests to<br /><em className="italic text-[#2563EB]">full coverage in minutes.</em>
          </h2>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-7 h-px bg-gradient-to-r from-transparent via-[rgba(14,20,40,.07)] to-transparent"
              style={{ left: "calc(12.5% + 14px)", right: "calc(12.5% + 14px)" }} />

            {STEPS.map((step) => (
              <div key={step.title} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-white border border-[rgba(14,20,40,.07)] shadow-[0_1px_2px_rgba(14,20,40,.04),0_8px_32px_rgba(14,20,40,.06)] flex items-center justify-center mx-auto mb-5 text-lg transition-all duration-300 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:shadow-[0_4px_20px_rgba(37,99,235,.3)] group-hover:scale-[1.08]">
                  <span className="group-hover:grayscale-0">{step.icon}</span>
                </div>
                <div className="text-[13px] font-light italic text-[#94A3B8] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {step.label}
                </div>
                <div className="text-[16px] font-bold text-[#0C0E16] mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                  {step.title}
                </div>
                <div className="text-[13.5px] text-[#64748B] leading-[1.65]" style={{ fontFamily: "var(--font-sans)" }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

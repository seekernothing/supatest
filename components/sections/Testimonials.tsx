import { BlurFade } from "@/components/ui/blur-fade"
import SpotlightCard from "@/components/SpotlightCard"

const TESTIMONIALS = [
  { text: "We went from 2-day regression cycles to under 20 minutes. The auto-healing alone saves us 15+ hours a week of manual maintenance work.", name: "Aryan Kapoor", role: "Lead QA · Razorpay", initials: "AK", bg: "linear-gradient(135deg,#667EEA,#764BA2)", color: "#fff" },
  { text: "Our PMs can now write tests themselves. That's something I never thought possible. Supatest changed our entire culture around quality.", name: "Sofia Martinez", role: "VP Engineering · Shopify", initials: "SM", bg: "linear-gradient(135deg,#2563EB,#4F46E5)", color: "#fff" },
  { text: "Every PR now gets automated test coverage with zero manual effort. The GitHub integration is seamless — it genuinely feels like magic.", name: "Liam Turner", role: "Staff Engineer · Linear", initials: "LT", bg: "linear-gradient(135deg,#0EA5E9,#2563EB)", color: "#fff" },
  { text: "Switched from Selenium + Cypress. Maintenance overhead dropped 90%. Our QA team now focuses on exploratory testing, not firefighting.", name: "Nisha Patel", role: "Director of QA · Zomato", initials: "NP", bg: "linear-gradient(135deg,#F093FB,#F5576C)", color: "#fff" },
  { text: "The AI-generated bug reports are so detailed our devs fix issues in minutes. No more 'works on my machine' conversations in standups.", name: "Jake Kim", role: "CTO · Fern AI", initials: "JK", bg: "linear-gradient(135deg,#43E97B,#38F9D7)", color: "#000" },
  { text: "Best ROI of any dev tool we've bought this year. The time saved on maintenance alone pays for the annual plan every single month.", name: "Rachel Chen", role: "Eng Manager · Vercel", initials: "RC", bg: "linear-gradient(135deg,#FA709A,#FEE140)", color: "#000" },
]

export default function Testimonials() {
  return (
    <div className="border-t border-[rgba(14,20,40,.07)]">
      <div className="max-w-[1060px] mx-auto px-6 py-[120px]">
        <BlurFade inView className="text-center">
          <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#2563EB] uppercase tracking-[1.5px] mb-5 justify-center"
            style={{ fontFamily: "var(--font-sans)" }}>
            <span className="w-4 h-[1.5px] bg-[#2563EB]" /> Testimonials
          </div>
          <h2 className="font-light leading-[1.1] tracking-[-0.03em] text-[#0C0E16] max-w-[560px] mx-auto"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,4vw,58px)", fontWeight: 300 }}>
            What teams say after<br /><em className="italic text-[#2563EB]">switching to Supatest.</em>
          </h2>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
            {TESTIMONIALS.map((t) => (
              <SpotlightCard key={t.name} className="p-7">
                <div className="font-light text-[#2563EB]/20 leading-[0.8] mb-2.5"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "48px" }}>"</div>
                <p className="text-[14.5px] text-[#1E2340] leading-[1.75] mb-5" style={{ fontFamily: "var(--font-sans)" }}>
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0 border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,.08)]"
                    style={{ background: t.bg, color: t.color, fontFamily: "var(--font-sans)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#0C0E16]" style={{ fontFamily: "var(--font-sans)" }}>{t.name}</div>
                    <div className="text-[12px] text-[#64748B]" style={{ fontFamily: "var(--font-sans)" }}>{t.role}</div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

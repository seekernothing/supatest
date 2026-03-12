import { BlurFade } from "@/components/ui/blur-fade"
import SpotlightCard from "@/components/SpotlightCard"
import Image from "next/image"

const TESTIMONIALS = [
  { text: "We went from 2-day regression cycles to under 20 minutes. The auto-healing alone saves us 15+ hours a week of manual maintenance work.", name: "Aryan Kapoor", role: "Lead QA · Razorpay", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop&auto=format" },
  { text: "Our PMs can now write tests themselves. That's something I never thought possible. Supatest changed our entire culture around quality.", name: "Sofia Martinez", role: "VP Engineering · Shopify", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&auto=format" },
  { text: "Every PR now gets automated test coverage with zero manual effort. The GitHub integration is seamless — it genuinely feels like magic.", name: "Liam Turner", role: "Staff Engineer · Linear", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&auto=format" },
  { text: "Switched from Selenium + Cypress. Maintenance overhead dropped 90%. Our QA team now focuses on exploratory testing, not firefighting.", name: "Nisha Patel", role: "Director of QA · Zomato", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&auto=format" },
  { text: "The AI-generated bug reports are so detailed our devs fix issues in minutes. No more 'works on my machine' conversations in standups.", name: "Jake Kim", role: "CTO · Fern AI", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&auto=format" },
  { text: "Best ROI of any dev tool we've bought this year. The time saved on maintenance alone pays for the annual plan every single month.", name: "Rachel Chen", role: "Eng Manager · Vercel", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&auto=format" },
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
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={38}
                    height={38}
                    className="rounded-full object-cover border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,.08)] flex-shrink-0"
                  />
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

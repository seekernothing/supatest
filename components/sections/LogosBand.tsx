import { Marquee } from "@/components/ui/marquee"

const LOGOS = ["Vercel","Linear","Shopify","Stripe","Notion","Loom","Razorpay","Figma","Zomato","Framer","Atlassian","Cloudflare"]

export default function LogosBand() {
  return (
    <div className="py-14 border-t border-[rgba(14,20,40,.07)]">
      <p className="text-center text-[12px] font-semibold uppercase tracking-[1.5px] text-[#94A3B8] mb-9"
        style={{ fontFamily: "var(--font-sans)" }}>
        trusted by engineering teams at
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee pauseOnHover className="[--duration:30s]">
          {LOGOS.map((name) => (
            <div key={name}
              className="flex items-center gap-2 mx-8 text-[14px] font-bold text-[#94A3B8] opacity-70 hover:opacity-100 hover:text-[#2563EB] transition-all cursor-default"
              style={{ fontFamily: "var(--font-sans)" }}>
              <span className="text-base">◈</span> {name}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

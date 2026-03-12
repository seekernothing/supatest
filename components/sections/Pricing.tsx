"use client"
import { useState } from "react"
import { BlurFade } from "@/components/ui/blur-fade"
import { BorderBeam } from "@/components/ui/border-beam"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    name: "Starter", price: { m: 0, a: 0 }, period: "forever free",
    desc: "Perfect for solo devs and side projects exploring what Supatest can do.",
    features: [
      { yes: true, text: "500 test runs / month" },
      { yes: true, text: "AI generation (5 tests / day)" },
      { yes: true, text: "Chrome only" },
      { yes: true, text: "Basic bug reports" },
      { yes: false, text: "Auto-healing" },
      { yes: false, text: "CI/CD integration" },
    ],
    cta: "Get started free", featured: false,
  },
  {
    name: "Pro", price: { m: 49, a: 34 }, period: "per month",
    desc: "For growing teams who need full automation power, without enterprise complexity.",
    features: [
      { yes: true, text: "Unlimited test runs" },
      { yes: true, text: "Unlimited AI generation" },
      { yes: true, text: "All browsers + mobile" },
      { yes: true, text: "Auto-healing engine" },
      { yes: true, text: "Full CI/CD integration" },
      { yes: true, text: "Slack, Jira, GitHub sync" },
    ],
    cta: "Start free trial →", featured: true,
  },
  {
    name: "Enterprise", price: { m: null, a: null }, period: "volume pricing · custom SLA",
    desc: "Dedicated infra, SSO, audit logs, and a dedicated customer success team.",
    features: [
      { yes: true, text: "Everything in Pro" },
      { yes: true, text: "SSO / SAML" },
      { yes: true, text: "Audit logs" },
      { yes: true, text: "Dedicated CSM" },
      { yes: true, text: "Custom SLA & support" },
      { yes: true, text: "On-premise available" },
    ],
    cta: "Talk to sales →", featured: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="border-t border-[rgba(14,20,40,.07)] max-w-[1060px] mx-auto px-6 py-[120px]">
      <BlurFade inView className="text-center">
        <div className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#2563EB] uppercase tracking-[1.5px] mb-5 justify-center"
          style={{ fontFamily: "var(--font-sans)" }}>
          <span className="w-4 h-[1.5px] bg-[#2563EB]" /> Pricing
        </div>
        <h2 className="font-light leading-[1.1] tracking-[-0.03em] text-[#0C0E16] max-w-[500px] mx-auto"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px,4vw,58px)", fontWeight: 300 }}>
          Simple pricing.<br /><em className="italic text-[#2563EB]">No surprises.</em>
        </h2>
        <p className="text-[17px] text-[#64748B] max-w-[420px] mx-auto mt-4 leading-[1.75]"
          style={{ fontFamily: "var(--font-sans)" }}>
          One price, everything included. No seat taxes, no hidden limits.
        </p>
      </BlurFade>

      {/* Toggle */}
      <BlurFade delay={0.1} inView className="flex items-center gap-3.5 justify-center mt-8">
        <span className="text-[14px] text-[#64748B] font-medium" style={{ fontFamily: "var(--font-sans)" }}>Monthly</span>
        <button
          onClick={() => setAnnual(!annual)}
          className={cn("w-11 h-6 rounded-full relative transition-all duration-250",
            annual ? "bg-[rgba(37,99,235,.25)]" : "bg-[rgba(14,20,40,.1)]")}
        >
          <div className={cn("w-4 h-4 rounded-full bg-white absolute top-1 shadow-[0_1px_4px_rgba(0,0,0,.2)] transition-all duration-250",
            annual ? "left-6" : "left-1")} />
        </button>
        <span className="text-[14px] text-[#64748B] font-medium" style={{ fontFamily: "var(--font-sans)" }}>
          Annual <span className="text-[#16A34A] font-bold">save 30%</span>
        </span>
      </BlurFade>

      {/* Cards */}
      <BlurFade delay={0.2} inView>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 items-start">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className={cn(
                "relative rounded-[20px] p-9 overflow-hidden transition-all duration-300",
                "hover:-translate-y-1",
                plan.featured
                  ? "border border-[rgba(37,99,235,.3)] bg-white/90 shadow-[0_2px_4px_rgba(14,20,40,.04),0_24px_60px_rgba(37,99,235,.1)] hover:shadow-[0_2px_4px_rgba(14,20,40,.04),0_32px_80px_rgba(37,99,235,.15)]"
                  : "border border-[rgba(14,20,40,.07)] bg-white/75 shadow-[0_1px_2px_rgba(14,20,40,.04),0_8px_32px_rgba(14,20,40,.06)] hover:shadow-[0_2px_4px_rgba(14,20,40,.04),0_20px_60px_rgba(14,20,40,.1)] hover:border-[rgba(14,20,40,.12)]"
              )}>
              {plan.featured && (
                <>
                  <BorderBeam size={250} duration={6} />
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10.5px] font-extrabold uppercase tracking-[0.8px] px-3.5 py-1 rounded-b-[9px]"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    Most popular
                  </div>
                </>
              )}
              <div className={cn("text-[12px] font-bold uppercase tracking-[1.2px] text-[#94A3B8] mb-2.5",
                plan.featured && "mt-3.5")}
                style={{ fontFamily: "var(--font-sans)" }}>
                {plan.name}
              </div>
              <div className={cn("flex items-baseline gap-0.5 leading-none tracking-[-0.04em] mb-1",
                plan.featured ? "text-[#2563EB]" : "text-[#0C0E16]")}
                style={{ fontFamily: "var(--font-serif)", fontSize: "60px", fontWeight: 300 }}>
                {plan.price.m === null ? (
                  <span style={{ fontSize: "48px", letterSpacing: "-0.03em" }}>Custom</span>
                ) : (
                  <>
                    <sup style={{ fontSize: "24px", marginTop: "14px", alignSelf: "flex-start" }}>$</sup>
                    {annual && plan.price.a !== null ? plan.price.a : plan.price.m}
                  </>
                )}
              </div>
              <div className="text-[13px] text-[#64748B] mb-4.5" style={{ fontFamily: "var(--font-sans)" }}>
                {plan.price.m === 0 ? "forever free" : annual ? "per month · billed annually" : plan.period}
              </div>
              <p className="text-[14px] text-[#64748B] leading-[1.65] mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                {plan.desc}
              </p>
              <div className="h-px bg-[rgba(14,20,40,.07)] mb-5" />
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2.5 text-[13.5px] leading-[1.6]"
                    style={{ fontFamily: "var(--font-sans)" }}>
                    <span className={cn("flex-shrink-0 mt-0.5 text-[12px]", f.yes ? "text-[#2563EB]" : "text-[#94A3B8]")}>
                      {f.yes ? "✓" : "–"}
                    </span>
                    <span className={f.yes ? "text-[#1E2340]" : "text-[#94A3B8]"}>{f.text}</span>
                  </li>
                ))}
              </ul>
              {plan.featured ? (
                <ShimmerButton
                  shimmerColor="rgba(255,255,255,0.2)"
                  background="#2563EB"
                  className="w-full py-3 text-[14.5px] font-bold rounded-[10px] text-white"
                >
                  {plan.cta}
                </ShimmerButton>
              ) : (
                <button className="w-full py-3 text-[14.5px] font-bold rounded-[10px] border border-[rgba(14,20,40,.15)] text-[#1E2340] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[rgba(37,99,235,.04)] transition-all"
                  style={{ fontFamily: "var(--font-sans)" }}>
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  )
}

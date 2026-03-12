import { NumberTicker } from "@/components/ui/number-ticker"

const METRICS = [
  { value: 10, suffix: "k+", label: "Tests generated daily" },
  { value: 98, suffix: "%",  label: "Auto-heal success rate" },
  { value: 4,  suffix: "×",  label: "Faster QA cycles" },
  { value: 500, suffix: "+", label: "Teams worldwide" },
]

export default function Metrics() {
  return (
    <div className="border-t border-b border-[rgba(14,20,40,.07)] bg-white/50 backdrop-blur-sm">
      <div className="max-w-[1060px] mx-auto px-6 py-[72px] grid grid-cols-2 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div key={m.label} className={`px-8 text-center ${i < 3 ? "border-r border-[rgba(14,20,40,.07)]" : ""} ${i >= 2 ? "max-md:border-r-0 max-md:border-t max-md:border-[rgba(14,20,40,.07)] max-md:pt-10" : ""}`}>
            <div className="flex items-baseline justify-center gap-0.5 text-[#2563EB] leading-none tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-serif)", fontSize: "56px", fontWeight: 300 }}>
              <NumberTicker value={m.value} className="text-[#2563EB]" />
              <span>{m.suffix}</span>
            </div>
            <div className="text-[13px] text-[#64748B] mt-2 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

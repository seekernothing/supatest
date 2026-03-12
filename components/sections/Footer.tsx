const LINKS = {
  Product: ["Features","Pricing","Changelog","Roadmap"],
  Developers: ["Documentation","API Reference","CLI Guide","Integrations"],
  Company: ["About","Blog","Careers","Contact"],
}

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(14,20,40,.07)] max-w-[1060px] mx-auto px-6 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2.5 font-bold text-[17px] text-[#0C0E16] mb-3.5"
            style={{ fontFamily: "var(--font-sans)" }}>
            <div className="w-[26px] h-[26px] rounded-lg bg-[#2563EB] flex items-center justify-center text-white text-xs font-bold shadow-[0_2px_8px_rgba(37,99,235,.35)]">S</div>
            Supatest
          </div>
          <p className="text-[13.5px] text-[#64748B] leading-[1.7] max-w-[200px]" style={{ fontFamily: "var(--font-sans)" }}>
            The AI-native testing platform for teams who care about quality and shipping speed.
          </p>
        </div>
        {Object.entries(LINKS).map(([cat, items]) => (
          <div key={cat}>
            <div className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#94A3B8] mb-3.5" style={{ fontFamily: "var(--font-sans)" }}>{cat}</div>
            {items.map((item) => (
              <a key={item} href="#" className="block text-[14px] text-[#64748B] mb-2 hover:text-[#0C0E16] transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}>{item}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-[rgba(14,20,40,.07)] gap-4 text-[13px] text-[#94A3B8]"
        style={{ fontFamily: "var(--font-sans)" }}>
        <span>© 2026 Supatest AI, Inc.</span>
        <div className="flex gap-2.5">
          {["𝕏","in","gh"].map((s) => (
            <div key={s} className="w-8 h-8 rounded-lg border border-[rgba(14,20,40,.07)] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:text-[#2563EB] hover:border-[rgba(37,99,235,.3)] hover:bg-[rgba(37,99,235,.04)] cursor-pointer transition-all">
              {s}
            </div>
          ))}
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#0C0E16] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#0C0E16] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}

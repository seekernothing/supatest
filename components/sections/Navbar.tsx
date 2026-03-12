"use client"
import { useState } from "react"
import Image from "next/image"
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "Features", link: "#features" },
  { name: "How it works", link: "#how-it-works" },
  { name: "Demo", link: "#demo" },
  { name: "Pricing", link: "#pricing" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const Logo = () => (
    <a href="#" className="flex items-center gap-2.5 mr-4">
      <Image src="/supatest public/supatest logo.png" alt="Supatest" width={32} height={32} className="h-8 w-auto" />
      <span className="text-[17px] font-bold tracking-[-0.4px] text-[#0C0E16]" style={{ fontFamily: "var(--font-sans)" }}>Supatest AI</span>
    </a>
  );

  return (
    <ResizableNavbar className="fixed top-0 border-b-0">
      {/* Desktop View */}
      <NavBody className="mt-4 border border-[rgba(14,20,40,.07)] shadow-[0_4px_24px_rgba(14,20,40,.04)]">
        <Logo />
        <NavItems items={NAV_LINKS} className="hidden md:flex" />
        <div className="flex items-center gap-2.5">
          <button className="hidden md:block px-4 py-2 text-[13.5px] font-semibold text-[#64748B] rounded-lg hover:text-[#0C0E16] hover:bg-[rgba(14,20,40,.04)] transition-all">
            Log in
          </button>
          <NavbarButton variant="dark" className="bg-[#0C0E16] text-[13.5px] py-2 hover:bg-[#2563EB] transition-all hidden md:block">
            Start free →
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile View */}
      <MobileNav className="mt-2 text-center items-center">
        <MobileNavHeader className="px-4 py-2 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md rounded-full border border-[rgba(14,20,40,.07)]">
          <Logo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} className="mx-4 mt-2">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4 w-full">
            <button className="w-full px-4 py-2 text-[15px] font-semibold text-[#64748B] rounded-lg hover:text-[#0C0E16] hover:bg-[rgba(14,20,40,.04)] transition-all">
              Log in
            </button>
            <NavbarButton variant="dark" className="w-full bg-[#0C0E16] text-[15px] py-2 hover:bg-[#2563EB] transition-all">
              Start free →
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  )
}

"use client"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface VideoDialogProps {
  videoId?: string
  trigger: React.ReactNode
  title?: string
  description?: string
}

export default function VideoDialog({
  videoId = "EHssouxYkxE",
  trigger,
  title = "Supatest AI — Full Product Demo",
  description = "Watch how a team of 3 replaced their entire QA workflow in 10 minutes.",
}: VideoDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl border border-[rgba(14,20,40,.09)] bg-white shadow-[0_32px_80px_rgba(0,0,0,.3)] gap-0 [&>button]:hidden">
          {/* Browser chrome topbar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[rgba(248,250,252,.95)] border-b border-[rgba(14,20,40,.07)]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-xs font-mono text-[#94A3B8] tracking-tight">
              youtube.com / supatest-ai-demo
            </span>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center text-[#64748B] hover:bg-[rgba(14,20,40,.06)] hover:text-[#0C0E16] transition-all"
            >
              <X size={14} />
            </button>
          </div>

          {/* YouTube iFrame — autoplay on open */}
          {open && (
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}

          {/* Footer info */}
          <div className="px-5 py-4 border-t border-[rgba(14,20,40,.07)] bg-white">
            <div className="text-[15px] font-semibold text-[#1E2340] mb-0.5">{title}</div>
            <div className="text-[13px] text-[#64748B]">{description}</div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

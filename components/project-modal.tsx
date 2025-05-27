import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  link?: string
  type: string
  year: string
  logo?: string
  logoImage?: string
  motivation: string
  technologies?: string[]
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  // Trap focus and close on ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      // Trap focus
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Focus modal on open
  useEffect(() => {
    modalRef.current?.focus()
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-in-out backdrop-blur-xl bg-white/40 dark:bg-black/60 animate-in fade-in zoom-in-95">
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl mx-auto bg-transparent p-10 outline-none flex flex-col min-h-[60vh] transition-all duration-300 ease-in-out animate-in fade-in zoom-in-95"
        aria-modal="true"
        role="dialog"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-xl font-normal text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-white/60 dark:bg-zinc-800/60 hover:bg-white/80 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm backdrop-blur-md transition-all duration-200"
          aria-label="Close"
        >
          ×
        </button>

        {/* Project Type */}
        <div className="text-sm font-medium text-primary mb-8">
          {project.type}
        </div>

        {/* Title and Icon */}
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-3xl font-normal tracking-tight text-black dark:text-white">{project.title}</h2>
          {/* <div className="w-20 h-20 flex items-center justify-center overflow-hidden transition-all duration-300">
            {project.logoImage ? (
              <Image
                src={project.logoImage}
                alt={`${project.title} logo`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-4xl">{project.logo || "📦"}</span>
            )}
          </div> */}
        </div>

        {/* Motivation */}
        <div className="text-base font-light text-black dark:text-white mb-3">
          {project.motivation}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-300 dark:bg-zinc-800 my-4 opacity-100" />

        {/* Description */}
        <div className="text-base font-light text-black dark:text-white leading-relaxed">
          {project.description}
        </div>

        {/* External Link Button */}
        {project.link && (
          <div className="mt-8">
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-full"
              onClick={() => {
                const link = project.link as string
                if (link.startsWith("http")) {
                  window.open(link, "_blank", "noopener,noreferrer")
                } else {
                  window.location.href = link
                }
              }}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {project.link.startsWith("http") ? "Visit Project" : "View Project"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 
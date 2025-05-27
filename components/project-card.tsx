"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/translations"
import Image from "next/image"

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

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { t } = useTranslation()

  const isLocalLink = project.link && !project.link.startsWith("http")

  const content = (
    <div className="py-8 px-6">
      {/* Header section */}
      <div className="flex items-start gap-6">
        {/* Logo/Icon - can be emoji or image */}
        <div className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden bg-background/50 transition-transform duration-200 group-hover:scale-105">
          {project.logoImage ? (
            <Image
              src={project.logoImage || "/placeholder.svg"}
              alt={`${project.title} logo`}
              width={80}
              height={80}
              className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-110"
            />
          ) : (
            <span className="text-3xl transition-transform duration-200 group-hover:scale-110">{project.logo || "📦"}</span>
          )}
        </div>

        {/* Title, heading, and body */}
        <div className="flex flex-col justify-center space-y-1">
          <h3 className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-muted-foreground group-hover:text-primary/80 transition-colors">
            {project.motivation}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <button
      type="button"
      onClick={() => onSelect?.(project)}
      className="group block relative overflow-hidden rounded-2xl transition-all bg-card hover:bg-card/80 transform hover:scale-[1.02] duration-200 w-full text-left focus:outline-none border border-border/50 hover:border-border/80"
    >
      {content}
    </button>
  )
}

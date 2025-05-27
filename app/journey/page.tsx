"use client"

import { useTranslation } from "@/lib/translations"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, ArrowRight } from "lucide-react"

export default function StoryPage() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl mb-4"
          >
            my journey.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground max-w-[700px] mb-8 text-lg"
          >
            A timeline of how I've grown by building, learning, and getting things wrong.
          </motion.p>
        </motion.div>

        <div className="relative mt-2">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {/* Swift Student Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-normal">Apple Swift Student Challenge Winner</h2>
                <span className="text-sm text-muted-foreground block mt-1">April 2025</span>
                <p className="mt-2 text-black dark:text-white">
                  Won Apple's Swift Student Challenge with an interactive iPad app for learning screenwriting, earning a ticket to WWDC25 and recognition for innovative educational technology.
                </p>
              </div>
            </motion.div>

            {/* Master's Degree */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-normal">Master's in Computer Science</h2>
                <span className="text-sm text-muted-foreground block mt-1">September 2024</span>
                <p className="mt-2 text-black dark:text-white">
                  Starting advanced studies in Software Development & Technologies at the University of Camerino.
                </p>
              </div>
            </motion.div>

            {/* iOS Developer Internship */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-normal">iOS Developer Internship</h2>
                <span className="text-sm text-muted-foreground block mt-1">March - May 2024</span>
                <p className="mt-2 text-black dark:text-white">
                  Gained practical experience as an iOS Developer Intern at AppLoad SRL, working on real-world applications and industry projects.
                </p>
              </div>
            </motion.div>

            {/* Bachelor's Degree */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-normal">Bachelor's in Computer Science</h2>
                <span className="text-sm text-muted-foreground block mt-1">September 2021 - July 2024</span>
                <p className="mt-2 text-black dark:text-white">
                  Completed my undergraduate studies in Computer Science for Digital Communication at the University of Camerino, 
                  with in a thesis project about a binary sessions library in Swift.
                </p>
              </div>
            </motion.div>

            {/* Indie Development */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-normal">Indie iOS Development</h2>
                <span className="text-sm text-muted-foreground block mt-1">July 2020 - Present</span>
                <p className="mt-2 text-black dark:text-white">
                  I fulfilled a long-held dream by purchasing my first Mac and began learning Swift. This marked the start of my journey as an indie iOS developer, where I built my first apps and contributed to the open-source community.
                </p>
              </div>
            </motion.div>

            {/* High School */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-normal">High School Education</h2>
                <span className="text-sm text-muted-foreground block mt-1">September 2016 - June 2021</span>
                <p className="mt-2 text-black dark:text-white">
                  Completed my computer science education at I.T.T. "G. & M. Montani", where I developed my first iOS application 
                  and wrote a thesis that laid the groundwork for my future in software development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8"
        >
          <Alert className="bg-muted/50 border-none">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <AlertTitle className="text-base font-medium">Want to see my detailed experience?</AlertTitle>
                  <AlertDescription className="text-sm text-muted-foreground mt-1">
                    Check out my comprehensive resume for a detailed overview of my skills and professional journey.
                  </AlertDescription>
                </div>
              </div>
              <div className="flex justify-end">
                <Link 
                  href="/cv" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Resume <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Alert>
        </motion.div>
      </div>
    </div>
  )
} 
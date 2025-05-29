"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function RefinerPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-24 h-24 mb-8"
          >
            <Image
              src="/assets/images/projects/refiner.png"
              alt="refiner App Icon"
              fill
              className="object-contain drop-shadow-lg"
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl mb-4"
          >
            refiner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-[700px] mb-8 text-lg leading-relaxed"
          >
            An educational iPad app designed to guide users through the fundamentals of screenwriting in an interactive
            and engaging way.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide uppercase border border-black dark:border-white bg-transparent text-black dark:text-white rounded-3xl"
          >
            WWDC25 Swift Student Challenge Winner
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">The Idea</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>Ever dreamed of writing a movie?</strong> Many aspiring writers are intimidated by the complex formatting
                rules and structure required for professional screenplays. Traditional screenwriting software can be
                overwhelming and difficult to learn.
              </p>
              <p>
                Screenplay Genie was designed to solve this problem by creating an educational experience that makes
                learning screenwriting fundamentals accessible, interactive, and enjoyable for everyone.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">Key Features</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-medium">•</span>
                <div>
                  <strong>Interactive Lessons:</strong> Learn screenplay formatting and structure step by step through engaging mini-lessons focused on key screenplay elements.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-medium">•</span>
                <div>
                  <strong>Live Preview:</strong> See your script transform into a properly formatted screenplay in real-time, helping you understand professional styling.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-medium">•</span>
                <div>
                  <strong>Free Playground:</strong> Apply what you've learned in an unrestricted writing environment where you can create scenes and develop dialogue.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-medium">•</span>
                <div>
                  <strong>Fountain Markdown:</strong> Use the industry-standard lightweight markup language for screenwriting that's both powerful and easy to learn.
                </div>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">The Application</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/images/projects/refiner.png"
                  alt="Screenplay Genie"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Screenplay Genie guides users through a series of mini-lessons, each focusing on a key screenplay
                  element. After a quick explanation, users put their knowledge into practice by writing in Fountain
                  Markdown.
                </p>
                <p>
                  As users type, the Live Preview feature instantly transforms their text into a properly formatted
                  screenplay with professional styling—just like in Hollywood. This real-time feedback helps users
                  understand the connection between the markdown they write and the final formatted output.
                </p>
                <p>
                  Once all lessons are completed, users unlock the Playground where they can write without restrictions,
                  creating their own scenes, developing engaging dialogue, and bringing their stories to life using all
                  the skills they've learned.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">Educational Impact</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Screenplay Genie was created with the belief that <strong>creative skills should be accessible to everyone</strong>. By
                breaking down the complex rules of screenwriting into manageable, interactive lessons, the app empowers
                aspiring writers to focus on storytelling rather than getting lost in formatting details.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">The Story</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Behind every project is a story. I created Screenplay Genie for the Swift Student Challenge to combine my passion for coding with the one for cinema. The project allowed me to explore how technology can make creative skills more accessible to beginners.
              </p>
              <Button asChild className="rounded-full">
                <Link
                  href="https://alessiorubicini.substack.com/p/my-swift-student-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full story on Substack
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">The Code</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Screenplay Genie is built with <strong>Swift</strong> and <strong>SwiftUI</strong>, the latest native technologies from Apple.
              </p>
              <Button asChild className="rounded-full">
                <Link
                  href="https://github.com/sookask/refiner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

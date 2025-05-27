"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"
import { useEffect, useState } from "react"
import { Award } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container px-4 md:px-6 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-4">
      <div className="flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="relative w-32 h-32 mb-8 overflow-hidden rounded-full border-4 border-background bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50"
        >
          <Image
            src="/assets/images/alessio.jpeg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl mb-4"
        >
          Alessio Rubicini
        </motion.h1>
        {/*<motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-[700px] mb-4 text-lg"
        >
          Computer Science Student and iOS Developer. Passionate about creating intuitive, user-friendly applications that solve real-world problems.
        </motion.p>*/}
		<motion.p 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-black dark:text-white max-w-[700px] mb-4 text-base font-light"
        >
          iOS Developer and Computer Science Student. I build technology that amplifies human potential, removes friction, and creates space for creativity.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8 inline-flex items-center rounded-full border mt-2 px-4 py-1.5 text-sm font-medium bg-white/10 dark:bg-black/10 text-black dark:text-white border-black dark:border-white backdrop-blur-sm"
        >
          <Award className="mr-1.5 h-4 w-4" />
          Apple WWDC25 Swift Student Challenge Winner
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button 
            asChild 
            variant="outline" 
            size="icon" 
            className="rounded-full h-12 w-12 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-primary"
          >
            <Link href="https://github.com/sookask" target="_blank" aria-label="GitHub">
              <Github className="h-7 w-7" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="icon" 
            className="rounded-full h-12 w-12 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-primary"
          >
            <Link href="https://www.linkedin.com/in/sookask/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-7 w-7" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="icon" 
            className="rounded-full h-12 w-12 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-primary"
          >
            <Link href="mailto:sookask@icloud.com" aria-label="Email">
              <Mail className="h-7 w-7" />
            </Link>
          </Button>
        </motion.div>

        
      </div>
    </div>
  )
}


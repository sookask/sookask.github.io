"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function NowPage() {
	const [mounted, setMounted] = useState(false)
	
	useEffect(() => {
		setMounted(true)
	}, [])
	
	if (!mounted) {
		return null
	}

  return (
    <div className="container px-4 md:px-6 py-12 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center max-w-2xl">
	  <div className="flex flex-col items-center text-center">
        			<motion.h1 
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7 }}
						className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl mb-4 text-foreground"
					>
						now.
					</motion.h1>
        			<motion.p 
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="text-muted-foreground max-w-[700px] mb-8 text-lg"
					>
          				This is my "now" page, inspired by the <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nownownow movement</a>. It's a snapshot of what I'm currently focused on.
        			</motion.p>
      			</div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl font-normal mt-8 mb-4 text-foreground"
          >
            Currently 👨🏻‍💻
          </motion.h2>
          <motion.ul 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="list-disc pl-6 space-y-2"
          >
            <li className="text-black dark:text-white font-normal">Pursuing my master degree in Computer Science</li>
			<li className="text-black dark:text-white font-normal">Leveraging AI to improve my current open-source projects</li>
            <li className="text-black dark:text-white font-normal">Working on innovative projects for our local community in the Marche region 🤫</li>
          </motion.ul>

          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-2xl font-normal mt-8 mb-4 text-foreground"
          >
            Recent Achievements 🥇
          </motion.h2>
          <motion.ul 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="list-disc pl-6 space-y-2"
          >
            <li className="text-black dark:text-white font-normal">Won the Apple WWDC25 Swift Student Challenge!</li>
            <li className="text-black dark:text-white font-normal">Moved my blog to Substack for fresh new content</li>
          </motion.ul>

          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-2xl font-normal mt-8 mb-4 text-foreground"
          >
            Looking Forward 👀
          </motion.h2>
          <motion.ul 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="list-disc pl-6 space-y-2"
          >
		  	<li className="text-black dark:text-white font-normal">Participating in Apple's WWDC 2025 this June in Cupertino!</li>
			<li className="text-black dark:text-white font-normal">Studying and making projects in the fields of AI and Spatial Computing</li>
			<li className="text-black dark:text-white font-normal">Completing my master degree and starting my professional career</li>
          </motion.ul>

          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Last updated: May 13, 2025
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

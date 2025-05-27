"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function MissionPage() {
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
						className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl mb-8"
					>
						mission.
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="w-full mb-12"
					>
						<Image
							src="/assets/images/Rain-Steam-and-Speed-JMW.jpg"
							alt="Rain, Steam and Speed - The Great Western Railway by J.M.W. Turner"
							width={1200}
							height={800}
							className="w-full h-auto rounded-lg object-cover"
							priority
						/>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
							J.M.W. Turner's "Rain, Steam and Speed – The Great Western Railway" (1844). A powerful reminder of how technology can transform our world, just as the steam train once did.
						</p>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="text-muted-foreground text-lg leading-relaxed space-y-6 text-left"
					>
						<p>
							We live in a world that is fast, connected, and intelligent. Every part of our day is touched by technology. We carry more computing power in our pockets than ever before, yet we feel overwhelmed. We have more tools than ever, but less time to truly use them. More information, but less clarity. More opportunities, but less initiative.
						</p>
						<p>
							Our days are filled with calendars, notifications, and to-do lists that steal our attention. We adapt and survive, but too often we stop imagining. We stop creating. We stop building something of our own.
						</p>
						<p>
							I refuse to accept this as the norm.
						</p>
						<p>
							I believe every person carries within them a <strong>vast creative energy</strong>, too often held back by the noise and complexity of modern life. I believe technology shouldn't add more noise, but create space for silence, clarity, and possibility. Not just to optimize or entertain, but to activate. To remove friction and distractions, and give people back their time and agency.
						</p>
						<p>
							This is my obsession: to build things that lighten the load. That give back real time, not just productivity. That don't make people more efficient, but more free. More creative. More alive.
						</p>
						<p>
							I don't want to write just another app or follow trends. I want to go deeper. I want to build things that <strong>reignite the spark</strong>, that help people rediscover motivation and direction.
						</p>
						<p>
							I believe it's time to rethink how we interact with machines. Today's interfaces, made of screens, swipes, and endless taps, feel increasingly outdated. They chain us to repetitive gestures and scattered attention. We need a new kind of interface that is personal and alive. An extension of the self. Present when needed, silent when not. Always learning and aligned with who we are and what we want to become.
						</p>
						<p>
							I imagine an AI that is not just a tool that responds, but a quiet, intelligent, constant companion, a personal co-pilot, an amplifier of intent. Not something cold trapped behind a screen, but something human in its presence. A partner that automates, suggests, protects, without needing to be managed. That works with us, for us.
						</p>
						<p>
							I don't care about artificial intelligence as a show of power or as innovation for its own sake. I care about it as an <strong>extension of thought</strong>. An invisible ally that doesn't decide for you, but helps you decide better. Not a competitor, but a companion that completes what you can become.
						</p>
						<p>
							This is not just about technology. It's about vision. Ethics. Responsibility. I want to bring an artist's mindset to technological creation, driven by listening, care, and love for what genuinely improves people's lives, even in small ways.
						</p>
						<p>
							I'm a developer. But first, I'm a human being, watching the world, asking questions, refusing to settle for superficial answers.
						</p>
						<p>
							I'm doing this because I believe in it. Because I feel we're at a rare point in time where we have the chance to <strong>rethink how we live, work, and create</strong>. I don't want to be a spectator. I want to play an active role in this transition. I want to look back one day and say: I used my hands, my mind, and my vision to build things that left a mark.
						</p>
						<blockquote className="border-l-4 border-black dark:border-white pl-4 my-6 italic text-lg">
							<p>"We're here to put a dent in the universe. Otherwise why else even be here?"</p>
							<footer className="text-sm mt-2 not-italic">— Steve Jobs</footer>
						</blockquote>
						<p>
							I don't have all the answers yet. But I have a clear direction. Every day I study, build, make mistakes, and try again. This mission is my starting point.
						</p>
						<p>
							And if you, too, feel like time is short and potential is too vast to stay dormant,
							if you believe it's time to go beyond and build something truly new,
							then maybe, just maybe, we're looking for the same thing.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}


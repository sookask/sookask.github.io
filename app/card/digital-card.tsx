"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Download, Github, Linkedin, Mail, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function DigitalCard() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation with constraints to prevent extreme angles
    // and adjust sensitivity based on card size
    const sensitivity = Math.min(rect.width, rect.height) / 1000
    const maxRotation = 5

    let rotateX = (y - centerY) * sensitivity
    let rotateY = (centerX - x) * sensitivity

    // Apply constraints
    rotateX = Math.max(Math.min(rotateX, maxRotation), -maxRotation)
    rotateY = Math.max(Math.min(rotateY, maxRotation), -maxRotation)

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    // Smooth transition back to flat position
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  if (!isMounted) return null

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative w-full rounded-2xl transition-all duration-300 ease-out",
        "transform-gpu perspective-1000",
        isHovered ? "shadow-xl" : "shadow-md",
      )}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Card background with glassmorphism effect */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800",
          "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl",
          "transition-all duration-300",
          "p-6 md:p-8",
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(0px)",
        }}
      >
        {/* Inner content container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
          {/* Profile image with Italy flag badge */}
          <div className="relative">
            <div
              className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md"
              style={{
                transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
                transition: "transform 0.3s ease-out",
              }}
            >
              <Image
                src="/assets/images/alessio.jpeg"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Italy flag badge */}
            <div
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center border-2 border-white dark:border-gray-800 text-base"
              style={{
                transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
                transition: "transform 0.3s ease-out",
              }}
            >
              🇮🇹
            </div>
          </div>

          {/* Apple Swift Student Challenge badge */}
          <div
            className="absolute top-2 right-2 md:top-4 md:right-4 z-10 transform-gpu"
            
          >
            <div className="flex items-center gap-1 md:gap-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] xs:text-xs md:text-sm font-medium px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-md whitespace-nowrap">
              <svg
                className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="truncate">Swift Student Challenge Winner 2025</span>
            </div>
          </div>

          {/* Text content */}
          <div
            className="flex-1 text-center md:text-left"
            style={{
              transform: isHovered ? "translateZ(10px)" : "translateZ(0)",
              transition: "transform 0.3s ease-out",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-1">Alessio Rubicini</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-2">iOS Developer</p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 px-3 py-1 rounded-full text-sm font-medium text-blue-800 dark:text-blue-300">
                Swift
              </span>
              <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 px-3 py-1 rounded-full text-sm font-medium text-blue-800 dark:text-blue-300">
                SwiftUI
              </span>
              <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30 px-3 py-1 rounded-full text-sm font-medium text-blue-800 dark:text-blue-300">
                Open Source
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              iOS enthusiast focused on innovative SwiftUI interfaces and active open source contributor. Passionate
              about creating intuitive, user-friendly applications.
            </p>

            <div className="bg-gray-50/70 dark:bg-gray-800/40 rounded-lg p-3 mb-6 border border-gray-100 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-200 text-sm font-medium mb-1">Recent projects:</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Session Types Implementation in Swift, SF Symbols Picker for SwiftUI, Screenwriting Learning app for
                iPad
              </p>
            </div>

            {/* Contact icons */}
            <div
              className="flex justify-center md:justify-start gap-4"
              style={{
                transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
                transition: "transform 0.3s ease-out",
              }}
            >
              <ContactIcon icon={<Github className="h-5 w-5" />} href="https://github.com/sookask" />
              <ContactIcon icon={<Linkedin className="h-5 w-5" />} href="https://www.linkedin.com/in/sookask/" />
              <ContactIcon icon={<Mail className="h-5 w-5" />} href="mailto:sookask@icloud.com" />
              <ContactIcon icon={<Send className="h-5 w-5" />} href="https://t.me/sookask" />
			  <Button 
					className="rounded-full" 
					variant="outline"
					onClick={() => {
					const link = document.createElement("a");
					link.href = "/assets/docs/CV[ENG]-AlessioRubicini-Mar2025.pdf";
					link.download = "CV[ENG]-AlessioRubicini-Feb2025";
					link.click();
					}}
				>
					<Download className="mr-2 h-4 w-4"/> Download My CV
				</Button>
            </div>
          </div>
        </div>

        {/* Decorative elements with improved positioning */}
        <div
          className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl -z-10"
          style={{
            transform: `translate(${rotation.y * 1.5}px, ${rotation.x * 1.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-teal-100/40 to-blue-100/40 dark:from-teal-900/20 dark:to-blue-900/20 rounded-full blur-3xl -z-10"
          style={{
            transform: `translate(${-rotation.y * 1.5}px, ${-rotation.x * 1.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
      </div>
    </div>
  )
}

interface ContactIconProps {
  icon: React.ReactNode
  href: string
}

function ContactIcon({ icon, href }: ContactIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative group">
      <div className="absolute inset-0 bg-blue-100 dark:bg-blue-800/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
        {icon}
      </div>
    </a>
  )
}


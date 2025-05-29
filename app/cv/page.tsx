"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Confetti from 'react-confetti'
import ConfettiBoom from 'react-confetti-boom'

export default function EggPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set confetti dimensions
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
    // Trigger on load after delay
    const timer = setTimeout(() => setShowConfetti(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 p-4">
      {showConfetti && <Confetti width={dimensions.width} height={dimensions.height} recycle={false} numberOfPieces={200} />}
      <Card className="max-w-md w-full shadow-2xl border-0 bg-white/10 backdrop-blur-lg">
        <CardHeader>
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-4xl font-extrabold text-white text-center"
          >
            🎉 Surprise! 🎉
          </motion.h1>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white text-center"
          >
            You’ve discovered the hidden easter egg! 🎊
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ConfettiBoom />
          </motion.div>
          <Button
            variant="outline"
            className="text-white"
            onClick={() => setShowConfetti((prev) => !prev)}
          >
            {showConfetti ? 'Hide Confetti' : 'Show Confetti'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"

export default function T2Page() {
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
            rom-i jootmine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground max-w-[700px] mb-8 text-lg"
          >
            sinu ees on hästi põgus lühike ülevaade, kuidas peaks rom-i jootma.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert text-left"
        >

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full mb-12"
          >
            <video
              className="w-full h-auto rounded-lg"
              controls
              muted
              loop
            >
              <source src="/assets/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center italic">
              Video näitab rom-i jootmise protsessi.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl font-normal mt-8 mb-4 text-foreground"
          >
            Jooda kivi maha
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="list-disc pl-6 space-y-2"
          >
            <li className="text-black dark:text-white font-normal">Jäta meelde, kus on pin 1. Kivil on valge täpike selle märgistamiseks.</li>
            <li className="text-black dark:text-white font-normal">Pane rom-i ümber parajalt fluxi.</li>
            <li className="text-black dark:text-white font-normal">Sea temp 420° ja õhuvool 70% peale.</li>
            <li className="text-black dark:text-white font-normal">Anna kuuma, kuni näed, et kivi ümber olevatel komponentiel tina sulab.</li>
          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-2xl font-normal mt-8 mb-4 text-foreground"
          >
            Pane kivi tagasi
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="list-disc pl-6 space-y-2"
          >
            <li className="text-black dark:text-white font-normal">Kui oled romi-ga toimetused ära teinud siis lisa taas emaplaadile fluxi.</li>
            <li className="text-black dark:text-white font-normal">Veendu, et pin 1 on samas kohas, kus ta oli siis kui maha jootsid.</li>
            <li className="text-black dark:text-white font-normal">Pane rom silma järgi paika. Padid peavad olema mõlemal pool kivi võrdselt.</li>

          </motion.ul>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-2xl font-normal mt-8 mb-4 text-foreground"
          >
            Anna kuuma
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="list-disc pl-6 space-y-2"
          >
            <li className="text-black dark:text-white font-normal">Temperatuur 420°, kuid õhuvool seekord <strong>20%</strong> peale.</li>
            <li className="text-black dark:text-white font-normal">Kuumuta kivi, kuni näed, et ta tõmbab oma õige koha peale paika. Vajadusel puuduta õrnalt pintsettidega.</li>
            <li className="text-black dark:text-white font-normal">Kui oled veendunud, et sai paika siis tõsta õhk eemale, oota veidi ja kontrolli oma tööd.</li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8"
          >
            <Alert className="rounded-lg px-5 py-4 border 
							bg-[#fefbf3] border-[#966a22]
							dark:bg-[#291f04] dark:border-[#f4b942]">
              <div>
                <AlertTitle className="text-base font-medium text-[#966a22] dark:text-[#f4b942]">
                  Kasuta isikukaitsevahendeid!
                </AlertTitle>
                <AlertDescription className="text-base font-light mt-2 text-black dark:text-white leading-relaxed">
                  <p>Pane kindad kätte, et käed fluxiga kokku ei saaks!</p>
                  <p>Veendu ohutuses, kui kasutad kuumaõhujaama!</p>
                </AlertDescription>
              </div>
            </Alert>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Last updated: May 29, 2025
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

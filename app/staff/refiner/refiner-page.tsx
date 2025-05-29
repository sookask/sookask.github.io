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
            SwiftUI rakendus, mis aitab tehnikutel luua seerianumbreid ja hoida silma peal genereeritud seerianumbritel.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide uppercase border border-black dark:border-white bg-transparent text-black dark:text-white rounded-3xl"
          >
            Genereerib Mac seadmetele seerianumbreid
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">Põhimõte</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>Mis inspireeris selle rakenduse loomist?</strong> Aegade algusest oleme rakendanud seerianumbritele
                kolmanda sümboli muutmist. Sedasi oli võimalik seerianumber ära muuta, kuid probleem oli selles, et
                seade võis tunnistada end hoopis millegi muuna.
              </p>
              <p>
                refiner ongi loodud selleks, et seda probleemi vältida ning iga seade saaks ka korrapärase seerianumbri,
                mis vastaks seadme tüübile ja mudelile.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">Mida see teeb?</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-medium">•</span>
                <div>
                  <strong>Genereerib seerianumbrid:</strong> Võimaldab kasutajal lihtsasti genereerida seerianumbri seda vajavale seadmele.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-medium">•</span>
                <div>
                  <strong>Lai mudelivalik:</strong> Peaaegu kõik seadmed on toetatud, sealhulgas iMacid ja Mac minid.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-medium">•</span>
                <div>
                  <strong>Kasutajasõbralik:</strong> Võimaldab nupuvajutusega kopeerida lõikelauale. Kuvab QR-koodi, mida saab kiirelt skaneerida teise arvutiga.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-medium">•</span>
                <div>
                  <strong>Graafiline ajalugu:</strong> Kuvab detailse ülevaate kõigist genereeritud seerianumbritest, sealhulgas seadme tüübist ja mudelist.
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
              <h2 className="text-3xl font-medium tracking-tight">Äpp</h2>
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
                  Lisaks seerianumbrite genereerimisele, võimaldab refiner ka seadmete seerianumbrite eksportimist. See annab võimaluse
                  aasta jooksul genereeritud seerianumbrid kokku võtta ja analüüsida, kui palju see tulu tõi.
                </p>
                <p>
                  Rakendusse on lisatud ka info Mac seadmete tüüpvigade kohta, mis aitavad tehnikutel mõista, millised
                  seadmed võivad vajada erilist tähelepanu või parandusmeetmeid. See teave on kasulik, et vältida tulevikus probleeme ja
                  tagada seadmete pikk eluiga.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-medium tracking-tight">Kood</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                refiner on üles ehitatud <strong>Swift</strong> ja <strong>SwiftUI</strong> baasil.
              </p>
              <Button asChild className="rounded-full">
                <Link
                  href="https://github.com/sookask/refiner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lähtekood GitHubis
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

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, ArrowRight } from "lucide-react"

export default function SuggestionsPage() {
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
            näpunäited.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground max-w-[700px] mb-8 text-lg"
          >
            Mõned näpunäited ja tüüpvead, mis on aidanud mind tehnikuna.
          </motion.p>
        </motion.div>

        <div className="relative mt-2">
          {/* Suggestions timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {/* Faulty touchbar */}
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
                <h2 className="text-xl font-normal">TouchBar ei tule üles bootides nähtavale</h2>
                <span className="text-sm text-muted-foreground block mt-1">Kõik touchbariga masinad</span>
                <p className="mt-2 text-black dark:text-white">
                  Eelkõige WFP seadmed, millele on tellitud ka Touchbar. Sellise seadme puhul kindlasti kontrollida, kas sellel on küljes refurbitud ekraan.
                  Mingil põhjusel ei tule refurbitud ekraaniga masinatel TouchBar nähtavale. Kiire diagnostika oleks proovida testekraaniga touchbari tööd.
                </p>
              </div>
            </motion.div>

            {/* Black/dull screen */}
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
                <h2 className="text-xl font-normal">Black/dull screen</h2>
                <span className="text-sm text-muted-foreground block mt-1">Apple Silicon seadmed</span>
                <p className="mt-2 text-black dark:text-white">
                  Seadmed, mis justkui tunduvad olevat probleemideta, kuid ekraan on pime või tuhm viitavad Angle sensori probleemile.
                  Kontrolli kas trackpad klikib. Sellise seadme puhul ühenda angle sensor lahti ja proovi uuesti.
                </p>
              </div>
            </motion.div>

            {/* Angle sensor */}
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
                <h2 className="text-xl font-normal">Vigane angle sensor</h2>
                <span className="text-sm text-muted-foreground block mt-1">March - May 2024</span>
                <p className="mt-2 text-black dark:text-white">
                  Kui reservis angle sensorid otsas aga tunned end jootejaama taga julgelt siis võid proovida tõsta vanalt sensorit kivi ümber teisele sensorile.
                  Kui kõik õigesti teed siis ei pea seade WFP-sse minema.
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
                  <AlertTitle className="text-base font-medium">Lisan siia jooksvalt juurde</AlertTitle>
                  <AlertDescription className="text-sm text-muted-foreground mt-1">
                    Kui aga tunned, et tahaksid sügavamale sukelduda siis loe logi.wikit, seni kuni ma siia infot juurde lisan.
                  </AlertDescription>
                </div>
              </div>
              <div className="flex justify-end">
                <Link 
                  href="https://logi.wiki/index.php/Main_Page" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Logi wiki <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Alert>
        </motion.div>
      </div>
    </div>
  )
} 
"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SerialBarcode } from "@/components/serial-barcode"
import { generateSerial, type GeneratedSerial } from "@/lib/serial-generator"
import { refinerModelMap, refinerModels } from "@/lib/refiner-models"
import { AlertCircle, Check, Copy, RefreshCw } from "lucide-react"

const MODEL_STORAGE_KEY = "refiner-selected-model"

export default function RefinerPage() {
  const [selectedModelId, setSelectedModelId] = useState(refinerModels[0].id)
  const [generatedSerial, setGeneratedSerial] = useState<GeneratedSerial | null>(null)
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle")
  const [generateCount, setGenerateCount] = useState(0)

  const selectedModel = refinerModelMap[selectedModelId]
  const groupedModels = Object.entries(
    refinerModels.reduce<Record<string, typeof refinerModels>>((groups, model) => {
      if (!groups[model.family]) {
        groups[model.family] = []
      }

      groups[model.family].push(model)
      return groups
    }, {})
  )

  useEffect(() => {
    const savedModelId = window.localStorage.getItem(MODEL_STORAGE_KEY)
    if (savedModelId && refinerModelMap[savedModelId]) {
      setSelectedModelId(savedModelId)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(MODEL_STORAGE_KEY, selectedModelId)
    setGeneratedSerial(generateSerial(selectedModelId))
    setCopyState("idle")
  }, [selectedModelId])

  useEffect(() => {
    if (copyState === "idle") {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setCopyState("idle")
    }, 1600)

    return () => window.clearTimeout(timeoutId)
  }, [copyState])

  function handleGenerate() {
    setGeneratedSerial(generateSerial(selectedModelId))
    setCopyState("idle")
    setGenerateCount((count) => count + 1)
  }

  async function handleCopy() {
    if (!generatedSerial) {
      return
    }

    try {
      await navigator.clipboard.writeText(generatedSerial.serial)
      setCopyState("copied")
    } catch {
      setCopyState("error")
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-2 text-center"
        >
          <h1 className="text-4xl font-medium tracking-tighter sm:text-5xl">
            seerianumbri generaator
          </h1>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
            Vali mudel ja genereeri uus seerianumber.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <motion.section
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border bg-gradient-to-br from-card via-card to-slate-50/80 p-6 backdrop-blur sm:p-8 dark:to-slate-950/30"
          >
            <div className="flex flex-col gap-8">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Mudeli valik
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Vali seade, millele tahad uue seerianumbri teha.
                  </p>
                </div>
                <Select value={selectedModelId} onValueChange={setSelectedModelId}>
                  <SelectTrigger className="h-14 rounded-2xl border-border/70 bg-background/80 text-left text-base shadow-sm">
                    <SelectValue placeholder="Vali mudel" />
                  </SelectTrigger>
                  <SelectContent>
                    {groupedModels.map(([family, models]) => (
                      <SelectGroup key={family}>
                        <SelectLabel>{family}</SelectLabel>
                        {models.map((model) => (
                          <SelectItem key={model.id} value={model.id}>
                            {model.displayName}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-border/60 bg-background/75 p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Mudeli number
                  </p>
                  <p className="mt-3 text-lg font-medium text-foreground">
                    {selectedModel.modelNumber}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleGenerate}
                  className="h-12 rounded-full bg-foreground px-6 text-base text-background shadow-sm transition-transform hover:scale-[1.01] hover:bg-foreground/90"
                >
                  <motion.span
                    animate={{ rotate: generateCount * 360 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="mr-2 inline-flex"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </motion.span>
                  Genereeri
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCopy}
                  disabled={!generatedSerial}
                  className="h-12 rounded-full border-border/70 bg-background/70 px-6 text-base shadow-sm transition-colors"
                >
                  <motion.span
                    key={copyState}
                    initial={{ scale: 0.82, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="mr-2 inline-flex"
                  >
                    {copyState === "copied" ? (
                      <Check className="h-4 w-4" />
                    ) : copyState === "error" ? (
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-300" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </motion.span>
                  {copyState === "copied"
                    ? "Kopeeritud"
                    : copyState === "error"
                      ? "Kopeerimine ebaõnnestus"
                      : "Kopeeri"}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Toetatud on praegu ainult T2 seadmete valik.
              </p>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-card via-card to-slate-100/80 p-6 backdrop-blur sm:p-8 dark:to-slate-950/40"
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(84,132,255,0.14),transparent_72%)] dark:bg-[radial-gradient(circle_at_top,rgba(125,162,255,0.12),transparent_72%)]" />
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Uus seerianumber
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {selectedModel.displayName}
            </p>

            <button
              type="button"
              onClick={handleCopy}
              disabled={!generatedSerial}
              className="mt-5 block w-full rounded-[1.75rem] border border-border/60 bg-background/90 p-5 text-left shadow-sm transition-transform hover:scale-[1.01] disabled:cursor-default disabled:hover:scale-100"
            >
              <div className="break-all font-mono text-3xl font-medium tracking-tight sm:text-4xl">
              <span className="inline-flex flex-wrap gap-0.5">
                <AnimatePresence mode="popLayout">
                  {(generatedSerial?.serial ?? "Laen...").split("").map((char, index) => (
                    <motion.span
                      key={`${char}-${index}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22, ease: "easeOut", delay: index * 0.04 }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </span>
            </div>
            </button>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-background/70 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Tootmisaasta
                </p>
                <p className="mt-2 text-lg font-medium">{generatedSerial?.year ?? "—"}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/70 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Tootmisnädal
                </p>
                <p className="mt-2 text-lg font-medium">{generatedSerial?.week ?? "—"}</p>
              </div>
            </div>

            {generatedSerial && (
              <div className="mt-5 rounded-[1.75rem] border border-border/60 bg-background/80 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  RIBAKOOD
                </p>
                <SerialBarcode value={generatedSerial.serial} className="mt-3" />
              </div>
            )}
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

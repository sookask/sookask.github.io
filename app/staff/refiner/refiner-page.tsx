"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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
import { Copy, RefreshCw } from "lucide-react"

const MODEL_STORAGE_KEY = "refiner-selected-model"

export default function RefinerPage() {
  const [selectedModelId, setSelectedModelId] = useState(refinerModels[0].id)
  const [selectedYear, setSelectedYear] = useState(
    String(refinerModels[0].supportedYears[refinerModels[0].supportedYears.length - 1])
  )
  const [generatedSerial, setGeneratedSerial] = useState<GeneratedSerial | null>(null)
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle")

  const selectedModel = refinerModelMap[selectedModelId]
  const latestSupportedYear =
    selectedModel.supportedYears[selectedModel.supportedYears.length - 1]
  const resolvedYear = selectedModel.supportedYears.includes(Number(selectedYear))
    ? Number(selectedYear)
    : latestSupportedYear
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
    if (!selectedModel.supportedYears.includes(Number(selectedYear))) {
      setSelectedYear(String(latestSupportedYear))
    }
  }, [latestSupportedYear, selectedModel, selectedYear])

  useEffect(() => {
    window.localStorage.setItem(MODEL_STORAGE_KEY, selectedModelId)
    setGeneratedSerial(generateSerial(selectedModelId, { year: resolvedYear }))
    setCopyState("idle")
  }, [resolvedYear, selectedModelId])

  function handleGenerate() {
    setGeneratedSerial(generateSerial(selectedModelId, { year: resolvedYear }))
    setCopyState("idle")
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
          className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-background via-background to-slate-100/70 px-6 py-10 text-center sm:px-10 dark:to-slate-950/50"
        >
          <div className="absolute inset-y-0 left-0 w-40 bg-[radial-gradient(circle_at_top_left,rgba(84,132,255,0.10),transparent_72%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(125,162,255,0.10),transparent_72%)]" />
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-300/10" />
          <p className="relative text-xs uppercase tracking-[0.24em] text-muted-foreground">
            refiner
          </p>
          <h1 className="text-4xl font-medium tracking-tighter sm:text-5xl">
            seerianumbri generaator
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Vali menüüst mudel ja genereeri uus seerianumber.
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
                    Vali seade, mis vajab uut seerianumbrit.
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

              <div className="grid gap-4 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)]">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Aasta
                    </p>
                  </div>
                  <Select value={String(resolvedYear)} onValueChange={setSelectedYear}>
                    <SelectTrigger className="h-12 rounded-2xl border-border/70 bg-background/80 text-left text-base shadow-sm">
                      <SelectValue placeholder="Vali aasta" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedModel.supportedYears.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-[1.5rem] border border-border/60 bg-background/75 p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Mudeli number
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="text-lg font-medium text-foreground">
                      {selectedModel.modelNumber}
                    </p>
                    <span className="rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {selectedModel.family}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {selectedModel.displayName}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleGenerate}
                  className="h-12 rounded-full bg-foreground px-6 text-base text-background shadow-sm transition-transform hover:scale-[1.01] hover:bg-foreground/90"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Genereeri
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCopy}
                  disabled={!generatedSerial}
                  className="h-12 rounded-full border-border/70 bg-background/70 px-6 text-base shadow-sm"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  {copyState === "copied"
                    ? "Kopeeritud"
                    : copyState === "error"
                      ? "Kopeerimine ebaõnnestus"
                      : "Kopeeri"}
                </Button>
              </div>

              <Alert className="rounded-3xl border-none bg-muted/50">
                <AlertTitle className="text-base font-medium">
                  Võimekus on piiratud
                </AlertTitle>
                <AlertDescription className="mt-2 text-sm text-muted-foreground">
                  Toetatud on ainult T2 seadmete valik. Vanemate mudelite tarbeks
                  genereerimine ei ole täna enam vajalik.
                </AlertDescription>
              </Alert>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-card via-card to-slate-100/80 p-6 backdrop-blur sm:p-8 dark:to-slate-950/40"
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(84,132,255,0.14),transparent_72%)] dark:bg-[radial-gradient(circle_at_top,rgba(125,162,255,0.12),transparent_72%)]" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Uus seerianumber
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {selectedModel.displayName}
                </p>
              </div>
              <div className="flex gap-2">
                <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted-foreground shadow-sm">
                  {resolvedYear}
                </span>
                <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted-foreground shadow-sm">
                  n{generatedSerial?.week ?? "—"}
                </span>
                <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted-foreground shadow-sm">
                  {selectedModel.modelNumber}
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-[1.75rem] border border-border/60 bg-background/90 p-5 shadow-sm">
              <div className="absolute inset-x-8 top-[108px] h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
              <p className="break-all font-mono text-3xl font-medium tracking-tight sm:text-4xl">
                {generatedSerial?.serial ?? "Laen..."}
              </p>
            </div>

            {generatedSerial && (
              <div className="mt-5 rounded-[1.75rem] border border-border/60 bg-background/80 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Barcode
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

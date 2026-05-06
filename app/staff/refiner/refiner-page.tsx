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
          className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-background via-background to-muted/40 px-6 py-10 text-center sm:px-10"
        >
          <div className="absolute inset-y-0 left-0 w-40 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_70%)]" />
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-foreground/[0.04] blur-3xl dark:bg-white/[0.06]" />
          <h1 className="text-4xl font-medium tracking-tighter sm:text-5xl">
            seerianumbri generaator
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Vali menüüst mudel ja genereeri uus seerianumber.
            Vali toetatud Maci mudel ja genereeri sellele uus 12-kohaline
            seerianumber. Loogika järgib sama `macserial`-i formaati, mida kasutas
            sinu olemasolev refiner.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <motion.section
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border bg-card/70 p-6 backdrop-blur sm:p-8"
          >
            <div className="flex flex-col gap-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3 sm:col-span-2">
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      Mudeli valik
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Vali seade, mis vajab uut seerianumbrit.
                    </p>
                  </div>
                  <Select value={selectedModelId} onValueChange={setSelectedModelId}>
                    <SelectTrigger className="h-14 rounded-2xl text-left text-base">
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

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Aasta
                  </p>
                  <Select value={String(resolvedYear)} onValueChange={setSelectedYear}>
                    <SelectTrigger className="h-12 rounded-2xl text-left text-base">
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
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Mudeli ID
                  </p>
                  <p className="mt-2 font-mono text-sm text-foreground">
                    {selectedModel.id}
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Mudeli number
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {selectedModel.modelNumber}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleGenerate}
                  className="h-12 rounded-full px-6 text-base"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Genereeri
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCopy}
                  disabled={!generatedSerial}
                  className="h-12 rounded-full px-6 text-base"
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
                   Toetatud on ainult T2 seadmete valik. Vanemate mudelite tarbeks genereerimine ei ole täna enam vajalik.
                </AlertDescription>
              </Alert>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-card via-card to-muted/50 p-6 backdrop-blur sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_72%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_72%)]" />
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Uus seerianumber
            </p>
            <div className="mt-4 rounded-[1.5rem] border border-border/60 bg-background/80 p-5 shadow-sm">
              <p className="break-all font-mono text-3xl font-medium tracking-tight sm:text-4xl">
                {generatedSerial?.serial ?? "Laen..."}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Aasta
                </p>
                <p className="mt-2 text-lg font-medium">
                  {generatedSerial?.year ?? "—"}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Nädal
                </p>
                <p className="mt-2 text-lg font-medium">
                  {generatedSerial?.week ?? "—"}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Aastakood
                </p>
                <p className="mt-2 font-mono text-lg font-medium">
                  {generatedSerial?.yearCode ?? "—"}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Nädalakood
                </p>
                <p className="mt-2 font-mono text-lg font-medium">
                  {generatedSerial?.weekCode ?? "—"}
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

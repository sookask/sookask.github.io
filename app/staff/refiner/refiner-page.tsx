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
import { Copy, Cpu, RefreshCw } from "lucide-react"

const MODEL_STORAGE_KEY = "refiner-selected-model"

export default function RefinerPage() {
  const [selectedModelId, setSelectedModelId] = useState(refinerModels[0].id)
  const [generatedSerial, setGeneratedSerial] = useState<GeneratedSerial | null>(null)
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle")

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

  function handleGenerate() {
    setGeneratedSerial(generateSerial(selectedModelId))
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
          className="flex flex-col gap-4 text-center"
        >
          <div className="mx-auto inline-flex items-center rounded-full border border-black/10 bg-background/70 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur dark:border-white/15">
            <Cpu className="mr-2 h-4 w-4" />
            brauseri port sinu olemasolevast refinerist
          </div>
          <h1 className="text-4xl font-medium tracking-tighter sm:text-5xl">
            refiner
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Vali toetatud Maci mudel ja leht genereerib selle jaoks uue
            12-kohalise seerianumbri samade reeglitega, mida sinu macOS-i versioon
            kasutas `macserial` kaudu.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <motion.section
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border bg-card/60 p-6 backdrop-blur sm:p-8"
          >
            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Mudel
                </p>
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
                    Model Number
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {selectedModel.modelNumber}
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Tehasekood
                  </p>
                  <p className="mt-2 font-mono text-sm text-foreground">
                    {selectedModel.locationCode}
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Product Code
                  </p>
                  <p className="mt-2 font-mono text-sm text-foreground">
                    {selectedModel.productCode}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleGenerate}
                  className="h-12 rounded-full px-6 text-base"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Genereeri uus
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
                  Scope on meelega kitsas
                </AlertTitle>
                <AlertDescription className="mt-2 text-sm text-muted-foreground">
                  See port toetab praegu sama Intel/T2 mudelivalikut, mis sinu
                  olemasolev refineri andmestik. Ma ei toonud siia kogu
                  `macserial` mudelibaasi, sest see paisutaks GitHub Pagesi jaoks
                  lehe mõttetult suureks.
                </AlertDescription>
              </Alert>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[2rem] border bg-background/80 p-6 backdrop-blur sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Genereeritud seerianumber
            </p>
            <div className="mt-4 rounded-[1.5rem] border border-border/60 bg-card/70 p-5">
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
                  Year Code
                </p>
                <p className="mt-2 font-mono text-lg font-medium">
                  {generatedSerial?.yearCode ?? "—"}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Week Code
                </p>
                <p className="mt-2 font-mono text-lg font-medium">
                  {generatedSerial?.weekCode ?? "—"}
                </p>
              </div>
              <div className="col-span-2 rounded-2xl border border-border/60 bg-card/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Line
                </p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="font-mono text-lg font-medium">
                    {generatedSerial?.lineCode ?? "—"}
                  </p>
                  <p className="text-muted-foreground">
                    dekodeeritud joon: {generatedSerial?.line ?? "—"}
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

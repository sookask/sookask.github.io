import type { Metadata } from "next"
import ScreenplayGeniePage from "./screenplay-genie-page"

export const metadata: Metadata = {
  title: "Screenplay Genie • Alessio Rubicini",
  description:
    "Screenplay Genie - My project for the Swift Student Challenge 2025",
}

export default function ScreenplayGenie() {
  return <ScreenplayGeniePage />
}

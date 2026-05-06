import type { Metadata } from "next"
import GenekasPage from "./genekas-page"

export const metadata: Metadata = {
  title: "genekas • aabits",
  description:
    "Brauseripõhine seerianumbri generaator.",
}

export default function genekas() {
  return <GenekasPage />
}

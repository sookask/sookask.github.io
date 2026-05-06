import type { Metadata } from "next"
import GenekasPage from "./refiner-page"

export const metadata: Metadata = {
  title: "genekas • aabits",
  description:
    "Brauseripõhine seerianumbri generaator.",
}

export default function genekas() {
  return <GenekasPage />
}

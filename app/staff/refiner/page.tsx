import type { Metadata } from "next"
import RefinerPage from "./refiner-page"

export const metadata: Metadata = {
  title: "refiner • aabits",
  description:
    "Brauseripohine serial number generator toetatud Maci mudelitele.",
}

export default function refiner() {
  return <RefinerPage />
}

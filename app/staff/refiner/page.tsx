import type { Metadata } from "next"
import RefinerPage from "./refiner-page"

export const metadata: Metadata = {
  title: "refiner • aabits",
  description:
    "Brauseripõhine seerianumbri generaator.",
}

export default function refiner() {
  return <RefinerPage />
}

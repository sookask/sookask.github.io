import type { Metadata } from "next"
import RefinerPage from "./refiner-page"

export const metadata: Metadata = {
  title: "refiner • aabits",
  description:
    "refiner - serial number generator",
}

export default function refiner() {
  return <RefinerPage />
}

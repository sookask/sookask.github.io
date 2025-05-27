import type { Metadata } from "next"
import DigitalCard from "./digital-card"

export const metadata: Metadata = {
  title: "Digital Card | Alessio Rubicini",
  description: "Alessio Rubicini's digital card - iOS Developer & Computer Science Student",
}

export default function CardPage() {
  return (
    <div className="min-h-screen w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 -z-10"></div>

      {/* Decorative blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200/30 dark:bg-blue-500/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-purple-200/20 dark:bg-purple-500/10 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-teal-200/20 dark:bg-teal-500/10 blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          

          <div className="w-full max-w-3xl mx-auto">
            <DigitalCard />
          </div>
        </div>
      </div>
    </div>
  )
}


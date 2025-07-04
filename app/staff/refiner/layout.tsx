"use client"

import type React from "react"

import { useEffect } from "react"

export default function refinerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add a class to the html element for this specific layout
  useEffect(() => {
    // Add class for smooth scrolling
    document.documentElement.classList.add("refiner-page")

    // Hide the navbar by adding a class to the body
    document.body.classList.add("hide-navbar")

    return () => {
      document.documentElement.classList.remove("refiner-page")
      document.body.classList.remove("hide-navbar")
    }
  }, [])

  return <div className="min-h-screen">{children}</div>
}

"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

type Route = {
  href: string
  label: string
  active: boolean
  external?: boolean
  gradient?: boolean
}

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Close dropdown if window is resized to desktop (≥768px)
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  const routes: Route[] = [
    { href: "/", label: "Kodu", active: pathname === "/" },
    { href: "/dfu", label: "DFU", active: pathname === "/dfu/" },
    {
      href: "/staff",
      label: "Äpid",
      active: pathname === "/staff/" || pathname.startsWith("/staff/"),
    },
    { href: "/tugiliin", label: "Tugiliin", active: pathname === "/tugiliin/" },
    { href: "/t2", label: "T2", active: pathname === "/t2/" },
  ]

  return (
    // Keep <header> as the sticky container, but background/blur move inside
    <header className="sticky top-0 z-50 w-full">
      {/* ─── WRAPPER WITH BLUR + BACKGROUND ──────────────────────────────── */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* ─── TOP ROW ─────────────────────────────────────────────────── */}
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold">aabits</span>
          </Link>

          {/* RIGHT: Desktop links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-normal h-full">
            {routes.map((route) =>
              route.external ? (
                <a
                  key={route.href}
                  href={route.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "relative inline-flex items-center h-full",
                    route.active
                      ? "text-foreground before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {route.label}
                </a>
              ) : (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "relative inline-flex items-center h-full",
                    route.active
                      ? "text-foreground before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {route.label}
                </Link>
              )
            )}
          </nav>

          {/* MOBILE: Hamburger + chevron */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* ─── MOBILE DROPDOWN (inside same blur background) ─────────────── */}
        {isOpen && (
          <nav className="container mx-auto flex flex-col px-4 md:px-6 pb-2 pt-1 space-y-1 text-sm">
            {routes.map((route) =>
              route.external ? (
                <a
                  key={route.href}
                  href={route.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block py-2",
                    route.active
                      ? "text-foreground font-medium"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </a>
              ) : (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "block py-2",
                    route.active
                      ? "text-foreground font-medium"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              )
            )}
          </nav>
        )}
      </div>

      {/* ─── BOTTOM BORDER (under all of it) ───────────────────────────── */}
      <div className="border-b border-gray-200 dark:border-gray-700" />
    </header>
  )
}
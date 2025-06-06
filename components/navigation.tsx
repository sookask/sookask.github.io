"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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

  const routes: Route[] = [
    {
      href: "/",
      label: "Kodu",
      active: pathname === "/"
    },
    {
      href: "/dfu",
      label: "DFU",
      active: pathname === "/dfu/"
    },
    {
      href: "/staff",
      label: "Äpid",
      active: pathname === "/staff/" || pathname.startsWith("/staff/"),
    },
    {
      href: "/tugiliin",
      label: "Tugiliin",
      active: pathname === "/tugiliin/"
    },
    {
      href: "/t2",
      label: "T2",
      active: pathname === "/t2/"
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* LEFT: Title */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold">aabits</span>
        </Link>

        {/* RIGHT: Nav links (desktop only) */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-normal h-14">
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
                    ? "text-foreground before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-foreground"
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

        {/* MOBILE: Hamburger dropdown menu */}
        <div className="relative md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-background shadow-lg ring-1 ring-border z-50">
              <nav className="flex flex-col py-2">
                {routes.map((route) =>
                  route.external ? (
                    <a
                      key={route.href}
                      href={route.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "px-4 py-2 text-sm hover:bg-muted",
                        route.active ? "text-foreground font-medium" : "text-foreground/60"
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
                        "px-4 py-2 text-sm hover:bg-muted",
                        route.active ? "text-foreground font-medium" : "text-foreground/60"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  )
                )}
              </nav>
            </div>
          )}
        </div>

      </div>
    </header>
  )
}

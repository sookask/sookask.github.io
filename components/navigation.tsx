"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type Route = {
  href: string
  label: string
  active: boolean
  external?: boolean
}

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes: Route[] = [
    { href: "/",         label: "kodu",     active: pathname === "/" },
    { href: "/dfu",      label: "dfu",      active: pathname === "/dfu/" },
    { href: "/staff",    label: "äpid",     active: pathname.startsWith("/staff/") },
    { href: "/tugiliin", label: "tugiliin", active: pathname === "/tugiliin/" },
    { href: "/t2",       label: "t2",       active: pathname === "/t2/" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/*
        “Outer wrapper” is full‐width; it drives the sticky border/blurry bg.

        Inside, we create a centered “content box” of exactly 1024 px width (max-w-[1024px]),
        with 22 px left/right padding (px-[22px]), and a height of 52 px (h-[52px]).
        That gives us:
          • Width:    1024 px
          • Padding:  22 px on each side → inner content area = 980 px
          • Height:   52 px exactly
          • Left/right margins auto → if viewport is 1793 px, margin ≈ 384.5 px each side.
      */}
      <div className="mx-auto max-w-[1024px] w-full px-[22px] h-[52px] flex items-center justify-between">
        {/* ─── Logo (on the left, inside that 980×52 area) ─── */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight hover:opacity-80"
        >
          aabits
        </Link>

        {/*
          ─── Desktop navigation links (on the right inside that 980×52 area) ───
          We hide on sm and show from md upward. The “space‐x‐6” here is 1.5rem (24px) 
          which is roughly Apple’s inter‐link spacing. Tweak to “space‐x‐5” (20px) 
          or “space‐x‐4” (16px) if you want slightly tighter.
        */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {routes.map((route) =>
            route.external ? (
              <a
                key={route.href}
                href={route.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-opacity hover:opacity-100 opacity-70",
                  route.active && "opacity-100 font-semibold"
                )}
              >
                {route.label}
              </a>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-opacity hover:opacity-100 opacity-70",
                  route.active && "opacity-100 font-semibold"
                )}
              >
                {route.label}
              </Link>
            )
          )}

          {/*
            Optional “Download” button. Apple’s header uses a gradient 
            pill + a chevron. This is a simplified blue pill—tweak as needed.
          */}
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 rounded-full text-sm">
            Download
          </Button>
        </nav>

        {/*
          ─── Mobile menu toggle (shown when < md) ───
          We absolutely position it inside the same 22px‐padded container so that it
          lines up flush on the right within that 1024×52 content box.
        */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 text-lg font-medium">
                {routes.map((route) =>
                  route.external ? (
                    <a
                      key={route.href}
                      href={route.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "transition-opacity hover:opacity-100 opacity-70",
                        route.active && "opacity-100 font-semibold"
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
                        "transition-opacity hover:opacity-100 opacity-70",
                        route.active && "opacity-100 font-semibold"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

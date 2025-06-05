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
    { href: "/", label: "kodu", active: pathname === "/" },
    { href: "/dfu", label: "dfu", active: pathname === "/dfu/" },
    { href: "/staff", label: "äpid", active: pathname.startsWith("/staff/") },
    { href: "/tugiliin", label: "tugiliin", active: pathname === "/tugiliin/" },
    { href: "/t2", label: "t2", active: pathname === "/t2/" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Note: no justify-between here */}
      <div className="container mx-auto flex h-16 items-center px-8">
        {/* Logo (always on the left) */}
        <Link href="/" className="text-base font-semibold tracking-tight hover:opacity-80">
          aabits
        </Link>

        {/* ─── Desktop nav + CTA group ─── */}
        {/* ml-auto pushes this entire block all the way to the right */}
        <div className="hidden md:flex items-center ml-8 space-x-4 text-sm font-medium">
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
        </div>

        {/* ─── Mobile menu toggle ─── */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
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

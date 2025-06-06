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
    { href: "/", label: "kodu", active: pathname === "/" },
    { href: "/dfu", label: "dfu", active: pathname === "/dfu/" },
    {
      href: "/staff",
      label: "äpid",
      active: pathname === "/staff/" || pathname.startsWith("/staff/"),
    },
    { href: "/tugiliin", label: "tugiliin", active: pathname === "/tugiliin/" },
    { href: "/t2", label: "t2", active: pathname === "/t2/" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* LEFT: Title */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-base font-medium">aabits</span>
        </Link>

        {/* RIGHT: Nav links (desktop only) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-light">
          {routes.map((route) =>
            route.external ? (
              <a
                key={route.href}
                href={route.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "pb-1 border-b-2 transition-colors",
                  route.active
                    ? "border-foreground text-foreground"
                    : "border-transparent text-foreground/60 hover:border-foreground hover:text-foreground"
                )}
              >
                {route.label}
              </a>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "pb-1 border-b-2 transition-colors",
                  route.active
                    ? "border-foreground text-foreground"
                    : "border-transparent text-foreground/60 hover:border-foreground hover:text-foreground"
                )}
              >
                {route.label}
              </Link>
            )
          )}
        </nav>

        {/* MOBILE: Hamburger menu */}
        <div className="md:hidden">
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
                        route.active
                          ? "text-foreground"
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
                        route.active
                          ? "text-foreground"
                          : "text-foreground/60 hover:text-foreground"
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

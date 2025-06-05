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
  gradient?: boolean
}

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes: Route[] = [
    { href: "/",       label: "kodu",     active: pathname === "/" },
    { href: "/dfu",    label: "DFU",      active: pathname === "/dfu/" },
    { href: "/staff",  label: "äpid",     active: pathname.startsWith("/staff/") },
    { href: "/tugiliin", label: "tugiliin", active: pathname === "/tugiliin/" },
    { href: "/t2",     label: "t2",       active: pathname === "/t2/" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative mx-auto flex h-16 items-center px-4">
        <div className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 items-center">
          <Link href="/" className="text-base font-medium tracking-tight hover:opacity-80">
            aabits
          </Link>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          {routes.map((route) =>
            route.external ? (
              <a
                key={route.href}
                href={route.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  route.active ? "text-foreground" : "text-foreground/60",
                  route.gradient &&
                    "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent hover:from-red-600 hover:via-yellow-600 hover:to-purple-600"
                )}
              >
                {route.label}
              </a>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80 font-normal",
                  route.active ? "text-foreground" : "text-foreground/60",
                  route.gradient &&
                    "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent hover:from-red-600 hover:via-yellow-600 hover:to-purple-600"
                )}
              >
                {route.label}
              </Link>
            )
          )}
        </div>
        <div className="flex flex-1 justify-end items-center gap-2 md:hidden">
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
                        "transition-colors hover:text-foreground/80 font-normal",
                        route.active ? "text-foreground" : "text-foreground/60",
                        route.gradient &&
                          "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent hover:from-red-600 hover:via-yellow-600 hover:to-purple-600"
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
                        "transition-colors hover:text-foreground/80 font-normal",
                        route.active ? "text-foreground" : "text-foreground/60",
                        route.gradient &&
                          "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent hover:from-red-600 hover:via-yellow-600 hover:to-purple-600"
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

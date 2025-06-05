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
    {
      href: "/",
      label: "kodu",
      active: pathname === "/",
    },
    {
      href: "/dfu",
      label: "dfu",
      active: pathname === "/dfu/",
    },
    {
      href: "/staff",
      label: "äpid",
      active: pathname === "/staff/" || pathname.startsWith("/staff/"),
    },
    {
      href: "/tugiliin",
      label: "tugiliin",
      active: pathname === "/tugiliin/",
    },
    {
      href: "/t2",
      label: "t2",
      active: pathname === "/t2/",

    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-medium">aabits</span>
          </Link>
        </div>
        <div className="hidden md:flex justify-end pr-8">
          <nav className="flex items-center space-x-6 text-sm font-light">
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
                    route.gradient && "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent hover:from-red-600 hover:via-yellow-600 hover:to-purple-600"
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
                    route.gradient && "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent hover:from-red-600 hover:via-yellow-600 hover:to-purple-600"
                  )}
                >
                  {route.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Mobile menu trigger (no theme toggle) */}
        <div className="flex-1 flex justify-end items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
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
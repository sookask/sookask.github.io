"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslation } from "@/lib/translations"
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
  const { t } = useTranslation()

  const routes: Route[] = [
    {
      href: "/",
      label: "me",
      active: pathname === "/",
    },
	{
		href: "/dfu",
		label: "dfu",
		active: pathname === "/dfu/",
	},
    {
      href: "/things",
      label: "things",
      active: pathname === "/things/" || pathname.startsWith("/things/"),
    },
	{
		href: "https://alessiorubicini.substack.com/",
		label: "words",
		active: false,
		external: true,
	  },
    {
      href: "/journey",
      label: "journey",
      active: pathname === "/journey/",
    },
	{
		href: "/now",
		label: "now",
		active: pathname === "/now/",
		
	  }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-medium">Sookask</span>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
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
              ),
            )}
          </nav>
        </div>
        <div className="flex-1 flex justify-end items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
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
                        route.gradient && "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent hover:from-red-600 hover:via-yellow-600 hover:to-purple-600"
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
                        route.gradient && "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent hover:from-red-600 hover:via-yellow-600 hover:to-purple-600"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

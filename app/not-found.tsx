import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">404</h1>
      <h2 className="text-xl font-semibold text-muted-foreground">
        Page not found
      </h2>
      <p className="text-muted-foreground">
        The page you are looking for doesn't exist or has been moved. 🤔
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Return Home
      </Link>
    </div>
  )
} 
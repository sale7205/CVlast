import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border section-elevated">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/sale7205"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/0c0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
        
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Saleh Aldhafeeri. Built for technical portfolio review.
        </p>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { ArrowUpRight } from "lucide-react"

const links = [
  {
    label: "Email",
    value: "salehaldhafeeri@outlook.com",
    href: "mailto:salehaldhafeeri@outlook.com",
  },
  {
    label: "LinkedIn",
    value: "@salehaldhafeeri",
    href: "https://linkedin.com/in/0c0",
  },
  {
    label: "GitHub",
    value: "@salehaldhafeeri",
    href: "https://github.com/sale7205",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 section-dark">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Contact"
          title="Get in Touch"
        />

        <p className="mt-8 text-lg text-muted-foreground max-w-xl">
          If you would like to discuss a project, opportunity, or just say hello, 
          I am always open to connecting.
        </p>

        <div className="mt-12 space-y-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between py-4 border-b border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                {link.label}
              </span>
              <span className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                {link.value}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

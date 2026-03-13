import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

const experience = [
  {
    period: "Summer 2024",
    role: "Engineering Intern",
    company: "Saudia Technic",
    description: "Aircraft engineering, maintenance support, and airworthiness frameworks."
  },
  {
    period: "2021 - Present",
    role: "Research Assistant",
    company: "Penn State University",
    description: "Focused on autonomous vehicles, GNC and aerodynamic design."
  }
]

export function Resume() {
  return (
    <section id="resume" className="py-32 px-6 section-elevated">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Resume"
        />

        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <div key={item.role} className="group grid md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {item.period}
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.role} <span className="text-primary">@ {item.company}</span>
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link
              href="/resume/SalehAldhafeeriAerospaceCVV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link
              href="/resume/SalehAldhafeeriAerospaceCVV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4" />
              View Online
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

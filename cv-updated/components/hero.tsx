import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, Linkedin, Github } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden section-dark"
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl">
        {/* Left-aligned content like the inspiration */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Saleh Aldhafeeri
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-primary">
            Aerospace Engineering
          </p>
          
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I am a senior at Penn State with a passion for crafting reliable aerospace systems 
            and data-driven engineering solutions. My work lies at the intersection of systems engineering, 
            navigation algorithms, and aerodynamic design.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/sale7205"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/0c0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-24 left-0">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground gap-2"
          >
            <Link href="#about">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              <span className="text-xs uppercase tracking-widest">Scroll</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

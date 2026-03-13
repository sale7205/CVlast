interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeader({ label, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className="flex items-center gap-4 mb-4">
        <span className="w-12 h-px bg-primary" />
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}

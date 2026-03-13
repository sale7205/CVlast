import { SectionHeader } from "@/components/section-header"

const skills = [
  "MATLAB",
  "SolidWorks",
  "CFD Analysis",
  "Python",
  "Systems Engineering",
  "Technical Documentation",
]

export function About() {
  return (
    <section id="about" className="py-32 px-6 section-elevated">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="About"
          title="Background"
        />
        
        <div className="mt-12 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I am an Aerospace Engineering senior at Penn State with a focus on systems engineering, 
              technical modeling, and data-driven problem solving. My academic and project experience 
              spans spacecraft mission design, navigation algorithm development, and aerodynamic analysis.
            </p>
            <p>
              I have hands-on experience in aircraft engineering through my internship at{" "}
              <span className="text-foreground font-medium">Saudia Technic</span>, 
              where I contributed to airworthiness frameworks and maintenance support operations.
            </p>
            <p>
              I approach engineering challenges methodically, combining analytical rigor with 
              practical problem-solving skills to advance technology and innovation.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Tools & Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium text-foreground bg-secondary rounded-full border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

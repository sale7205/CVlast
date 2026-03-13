import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"   // ← replaces inline array

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 section-dark">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Work"
          title="Selected Projects"
          subtitle="Engineering projects and technical documentation"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Code, Database, Settings, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Legacy Desktop Application Upgrade",
    description: "Modernized a legacy desktop application originally developed in 2017 and upgraded it to meet current business requirements.",
    icon: Settings,
    highlights: [
      "Feature development",
      "Performance optimization",
      "SQL improvements",
      "Bug fixing",
      "Production deployment",
    ],
    tags: ["C#", ".NET", "SQL Server", "Windows Forms"],
  },
  {
    title: "Product & Warranty Management System",
    description: "Business platform for product and warranty lifecycle management with comprehensive tracking capabilities.",
    icon: Database,
    highlights: [
      "Warranty tracking",
      "Product management",
      "Reporting dashboards",
      "User management",
      "Business workflow support",
    ],
    tags: ["C#", ".NET", "SQL Server", "Business Logic"],
  },
  {
    title: "Employment Management System",
    description: "Employment and recruitment management platform streamlining HR processes.",
    icon: Code,
    highlights: [
      "Candidate management",
      "Recruitment workflows",
      "Administrative processes",
      "Comprehensive reporting",
    ],
    tags: ["C#", ".NET", "SQL Server", "HR System"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

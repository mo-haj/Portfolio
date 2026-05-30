"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Award, Briefcase, Shield, Target, TrendingUp } from "lucide-react"

const timelineEvents = [
  {
    year: "2022",
    title: "Started Computer Engineering Studies",
    description: "Began diploma program at Syrian Virtual University",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Began HTB Learning Journey",
    description: "Started intensive cybersecurity training through Hack The Box Academy",
    icon: BookOpen,
  },
  {
    year: "2023",
    title: "Earned HTB CWES Certification",
    description: "Achieved HTB Certified Web Exploitation Specialist certification",
    icon: Award,
  },
  {
    year: "2024",
    title: "Started Independent Security Research",
    description: "Began conducting independent penetration testing research and practice",
    icon: Shield,
  },
  {
    year: "2025",
    title: "Desktop Application Development",
    description: "Started working on legacy application modernization and development",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "IT Support Specialist Experience",
    description: "Gained hands-on IT support experience in healthcare environment",
    icon: Briefcase,
  },
  {
    year: "Nov 2025",
    title: "Graduated from Syrian Virtual University",
    description: "Completed Computer Engineering diploma with GPA 2.75",
    icon: GraduationCap,
    highlight: true,
  },
  {
    year: "2026",
    title: "Top 1% HTB Academy Ranking",
    description: "Achieved Top 1% ranking with 382+ targets compromised",
    icon: TrendingUp,
    highlight: true,
  },
]

export function TimelineSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Learning Timeline</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 ${
                  event.highlight ? "bg-primary" : "bg-muted-foreground"
                }`} />

                {/* Content */}
                <div className={`ml-16 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className={`bg-card border rounded-xl p-6 ${
                    event.highlight ? "border-primary" : "border-border"
                  }`}>
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "sm:flex-row-reverse" : ""
                    }`}>
                      <div className={`p-2 rounded-lg ${
                        event.highlight ? "bg-primary/20" : "bg-primary/10"
                      }`}>
                        <event.icon className={`h-4 w-4 ${
                          event.highlight ? "text-primary" : "text-primary"
                        }`} />
                      </div>
                      <span className={`text-sm font-bold ${
                        event.highlight ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {event.year}
                      </span>
                    </div>
                    <h3 className={`font-semibold mb-2 ${
                      event.highlight ? "text-primary" : "text-foreground"
                    }`}>
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

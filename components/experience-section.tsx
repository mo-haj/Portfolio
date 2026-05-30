"use client"

import { motion } from "framer-motion"
import { Briefcase, Shield, Code, Monitor } from "lucide-react"

const experiences = [
  {
    title: "Independent Security Researcher",
    period: "March 2024 – Present",
    icon: Shield,
    description: "Conducting independent security research and hands-on penetration testing practice.",
    responsibilities: [
      "Completed 380+ hands-on security labs",
      "Completed 50+ specialized security modules",
      "Simulated attack chains including privilege escalation and lateral movement",
      "Credential harvesting and Active Directory attacks",
      "Web application security testing and API exploitation",
      "Event log analysis and security telemetry review",
      "Offensive tooling and enumeration automation",
    ],
    achievement: "Achieved Top 1% HTB Academy Ranking",
  },
  {
    title: "Desktop Application Developer & Enhancement",
    period: "October 2025 – Present",
    icon: Code,
    description: "Modernizing and enhancing legacy desktop applications.",
    responsibilities: [
      "Legacy desktop application modernization",
      "C# and .NET development",
      "SQL optimization and database management",
      "Bug fixing and debugging",
      "Deployment management",
      "Feature enhancement and implementation",
      "Customer support and requirements gathering",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "Hospital Machghara",
    period: "September 2025 – December 2025",
    icon: Monitor,
    description: "Provided technical support in a healthcare environment.",
    responsibilities: [
      "User support and troubleshooting",
      "Windows and network troubleshooting",
      "DNS, DHCP, and TCP/IP configuration",
      "Endpoint management and security",
      "Account and access management",
      "Printer management and maintenance",
      "Healthcare IT environment support",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden sm:block border-4 border-background" />

                <div className={`${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:col-start-2"} pl-16 sm:pl-20 lg:pl-0`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                        <exp.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        {exp.company && (
                          <p className="text-primary text-sm font-medium">{exp.company}</p>
                        )}
                        <p className="text-muted-foreground text-sm">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {exp.achievement && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {exp.achievement}
                        </span>
                      </div>
                    )}
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

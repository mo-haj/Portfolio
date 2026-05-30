"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Monitor, Network, Code, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Offensive Security",
    icon: Shield,
    skills: [
      "Web Application Testing",
      "Active Directory Attacks",
      "Privilege Escalation",
      "Lateral Movement",
      "Enumeration",
      "Vulnerability Assessment",
      "Bug Bounty Methodology",
      "API Security",
      "Post Exploitation",
    ],
  },
  {
    title: "Defensive Security",
    icon: Eye,
    skills: [
      "Security Monitoring",
      "SIEM Fundamentals",
      "Windows Event Logs",
      "Incident Handling",
      "Detection Analysis",
      "Log Investigation",
      "MITRE ATT&CK",
    ],
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: [
      "Windows",
      "Windows Server",
      "Linux",
      "Kali Linux",
      "Ubuntu",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "VPN",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Development",
    icon: Code,
    skills: [
      "C#",
      ".NET",
      "SQL Server",
      "HTML/CSS",
      "JavaScript",
      "PHP",
      "React",
    ],
  },
  {
    title: "Security Tools",
    icon: Wrench,
    skills: [
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "SQLMap",
      "Hydra",
      "Ffuf",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
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

"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am a Cybersecurity Specialist who transitioned from a software development and IT support
              background into the security field. My journey has been driven by a passion for understanding
              how systems can be compromised and how to protect them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in offensive security, I specialize in web application penetration testing,
              Active Directory security assessments, and vulnerability analysis. My approach combines theoretical
              knowledge with practical skills gained through completing 380+ security labs and 50+ specialized modules.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on real-world attack scenarios, including privilege escalation, lateral movement,
              credential harvesting, and post-exploitation techniques. My continuous learning mindset keeps
              me updated with the latest security threats and defensive strategies.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                  <h4 className="text-lg font-medium text-foreground">
                    Diploma in Technological Institute of Computer
                  </h4>
                  <p className="text-primary font-medium mt-1">Syrian Virtual University</p>
                  <p className="text-muted-foreground text-sm mt-1">2022 – 2025</p>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground mb-3">Key Topics Studied:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "C#", "Java", "SQL Server", "Oracle", "ASP.NET",
                        "HTML/CSS", "PHP", "Android Development",
                        "Windows Administration", "Linux Administration"
                      ].map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

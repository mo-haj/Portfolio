"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, BadgeCheck } from "lucide-react"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
            
            <div className="p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Certificate Badge */}
                <div className="flex-shrink-0">
                  <div className="relative w-40 h-40 mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                    <div className="relative w-full h-full bg-secondary rounded-full flex items-center justify-center border-4 border-primary/30">
                      <Award className="h-20 w-20 text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      CERTIFIED
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Professional Certification</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    HTB Certified Web Exploitation Specialist
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">(HTB CWES)</p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A highly hands-on certification that assesses web application penetration testing 
                    and bug bounty hunting skills. Certification holders demonstrate technical competency 
                    in web application penetration testing at an intermediate level and can assess risks, 
                    compose commercial-grade reports, and provide actionable recommendations.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>December 15, 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs bg-secondary px-2 py-1 rounded">
                        HTBCERT-C056C22B7B
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {[
                      "Web Penetration Testing",
                      "Bug Bounty",
                      "Vulnerability Assessment",
                      "Security Reporting",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

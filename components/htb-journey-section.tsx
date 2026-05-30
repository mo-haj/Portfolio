"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, CheckCircle2, BookOpen } from "lucide-react"

const htbPaths = [
  {
    name: "Web Penetration Tester",
    difficulty: "Medium",
    moduleCount: 20,
    progress: 100,
    modules: [
      {
        name: "Introduction to Web Applications",
        description: "Fundamentals of web application architecture, technologies, and security concepts.",
      },
      {
        name: "Web Requests",
        description: "Understanding HTTP requests, headers, methods, and how web applications communicate.",
      },
      {
        name: "Information Gathering – Web Edition",
        description: "Active and passive reconnaissance techniques for web applications.",
      },
      {
        name: "Using Web Proxies",
        description: "Mastering Burp Suite and OWASP ZAP for intercepting and analyzing web traffic.",
      },
      {
        name: "Attacking Web Applications with Ffuf",
        description: "Web fuzzing and directory brute forcing techniques for discovering hidden content.",
      },
      {
        name: "SQL Injection Fundamentals",
        description: "Exploiting SQL injection vulnerabilities to bypass authentication and extract data.",
      },
      {
        name: "SQLMap Essentials",
        description: "Automated SQL injection detection and exploitation using SQLMap.",
      },
      {
        name: "Cross-Site Scripting (XSS)",
        description: "Identifying and exploiting XSS vulnerabilities for session hijacking and more.",
      },
      {
        name: "File Inclusion",
        description: "Local and Remote File Inclusion vulnerabilities and exploitation techniques.",
      },
      {
        name: "File Upload Attacks",
        description: "Exploiting insecure file upload functionality to achieve code execution.",
      },
      {
        name: "Command Injections",
        description: "Identifying and exploiting OS command injection vulnerabilities.",
      },
      {
        name: "Broken Authentication",
        description: "Attacking authentication mechanisms and session management flaws.",
      },
      {
        name: "Session Security",
        description: "Session hijacking, fixation, CSRF, and other session-based attacks.",
      },
      {
        name: "Web Attacks",
        description: "HTTP verb tampering, IDOR, and XXE vulnerabilities.",
      },
      {
        name: "Server-side Attacks",
        description: "SSRF, SSTI, and SSI injection attacks against backend systems.",
      },
      {
        name: "Web Service & API Attacks",
        description: "Identifying and exploiting vulnerabilities in web services and APIs.",
      },
      {
        name: "Hacking WordPress",
        description: "WordPress-specific enumeration and exploitation techniques.",
      },
      {
        name: "Bug Bounty Hunting Process",
        description: "Structured approach to bug bounty hunting and vulnerability reporting.",
      },
      {
        name: "Documentation & Reporting",
        description: "Professional vulnerability documentation and report writing.",
      },
    ],
  },
  {
    name: "Penetration Tester",
    difficulty: "Medium",
    moduleCount: 28,
    progress: 100,
    modules: [
      {
        name: "Linux Fundamentals",
        description: "Core Linux concepts, commands, and system administration for security professionals.",
      },
      {
        name: "Getting Started",
        description: "Introduction to penetration testing fundamentals and Hack The Box platform.",
      },
      {
        name: "Penetration Testing Process",
        description: "Understanding each stage of a professional penetration testing engagement.",
      },
      {
        name: "Network Enumeration with Nmap",
        description: "Network discovery, port scanning, and service enumeration with Nmap.",
      },
      {
        name: "Footprinting",
        description: "Information gathering techniques for common enterprise services.",
      },
      {
        name: "File Transfers",
        description: "Transferring files to and from compromised systems using various techniques.",
      },
      {
        name: "Using the Metasploit Framework",
        description: "Exploitation and post-exploitation using Metasploit.",
      },
      {
        name: "Vulnerability Assessment",
        description: "Identifying and assessing vulnerabilities in enterprise environments.",
      },
      {
        name: "Password Attacks",
        description: "Cracking passwords, hash attacks, and credential harvesting techniques.",
      },
      {
        name: "Shells & Payloads",
        description: "Creating and using shells and payloads for system access.",
      },
      {
        name: "Attacking Common Services",
        description: "Exploiting vulnerabilities in common network services.",
      },
      {
        name: "Attacking Common Applications",
        description: "Targeting CMS platforms, portals, and enterprise applications.",
      },
      {
        name: "Active Directory Enumeration & Attacks",
        description: "Comprehensive AD enumeration, attacks, and lateral movement techniques.",
      },
      {
        name: "Pivoting, Tunneling & Port Forwarding",
        description: "Moving through networks using pivoting and tunneling techniques.",
      },
      {
        name: "Documentation & Reporting",
        description: "Professional reporting for penetration testing engagements.",
      },
    ],
  },
  {
    name: "Local Privilege Escalation",
    difficulty: "Medium",
    moduleCount: 2,
    progress: 100,
    modules: [
      {
        name: "Linux Privilege Escalation",
        description: "Comprehensive techniques for escalating privileges on Linux systems including SUID exploitation, kernel vulnerabilities, and misconfiguration abuse.",
      },
      {
        name: "Windows Privilege Escalation",
        description: "Windows-specific privilege escalation techniques including service exploitation, token manipulation, and UAC bypasses.",
      },
    ],
  },
  {
    name: "Cracking Into Hack The Box",
    difficulty: "Easy",
    moduleCount: 3,
    progress: 100,
    modules: [
      {
        name: "Intro to Academy",
        description: "Getting started with HTB Academy platform and learning methodology.",
      },
      {
        name: "Getting Started",
        description: "Fundamentals of penetration testing and HTB platform navigation.",
      },
      {
        name: "HTB Platform Fundamentals",
        description: "Understanding the Hack The Box platform and completing your first machine.",
      },
    ],
  },
]

const additionalModules = [
  {
    name: "Security Monitoring & SIEM Fundamentals",
    description: "Understanding SIEM concepts and security monitoring best practices.",
    status: "completed",
  },
  {
    name: "Windows Event Logs & Finding Evil",
    description: "Analyzing Windows event logs to detect malicious activity.",
    status: "completed",
  },
  {
    name: "Incident Handling Process",
    description: "Security incident response methodology and procedures.",
    status: "in-progress",
    progress: 82,
  },
]

export function HTBJourneySection() {
  const [expandedPath, setExpandedPath] = useState<string | null>(null)
  const [expandedAdditional, setExpandedAdditional] = useState(false)

  return (
    <section id="htb-journey" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Hack The Box Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My continuous learning journey through Hack The Box Academy, covering offensive security, 
            penetration testing, and web exploitation.
          </p>
        </motion.div>

        {/* Learning Paths */}
        <div className="space-y-4 mb-12">
          {htbPaths.map((path, index) => (
            <motion.div
              key={path.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedPath(expandedPath === path.name ? null : path.name)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{path.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {path.moduleCount} Modules • {path.difficulty}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2">
                      <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-primary">{path.progress}%</span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedPath === path.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedPath === path.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border pt-4">
                        <div className="grid sm:grid-cols-2 gap-3">
                          {path.modules.map((module) => (
                            <div
                              key={module.name}
                              className="p-4 bg-secondary/50 rounded-lg"
                            >
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-medium text-foreground text-sm">
                                    {module.name}
                                  </h4>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {module.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Security Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedAdditional(!expandedAdditional)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Additional Security Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Defensive security and incident handling modules
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedAdditional ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </button>

            <AnimatePresence>
              {expandedAdditional && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <div className="space-y-3">
                      {additionalModules.map((module) => (
                        <div
                          key={module.name}
                          className="p-4 bg-secondary/50 rounded-lg"
                        >
                          <div className="flex items-start gap-3">
                            {module.status === "completed" ? (
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            ) : (
                              <div className="h-5 w-5 rounded-full border-2 border-primary shrink-0 mt-0.5 flex items-center justify-center">
                                <span className="text-xs text-primary font-medium">
                                  {module.progress}%
                                </span>
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-medium text-foreground text-sm">
                                {module.name}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {module.description}
                              </p>
                              {module.status === "in-progress" && (
                                <div className="mt-2 w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: `${module.progress}%` }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// data/skills.ts
import { SkillCategory } from "@/app/types";

export const skillsData: SkillCategory[] = [
  {
    title: "Software Development & DevOps",
    skills: [
      { label: "Languages", technologies: ["Java", "Golang", "JavaScript", "TypeScript", "Python", "Shell Script"] },
      { label: "Frameworks", technologies: ["Spring Boot","Gin", "Echo", "Vue.js", "React.js", "Next.js"] },
      { label: "Databases", technologies: ["MongoDB", "PostgreSQL", "MySQL"] },
      { label: "Testing", technologies: ["JUnit5", "Mockito", "Cypress", "Jest"] },
      { label: "Containers & Orchestration", technologies: ["Docker", "Kubernetes"] },
      { label: "Version Control", technologies: ["Git", "GitLab"] },
      { label: "Agile Methodologies", technologies: ["Scrum", "Kanban"] },
    ],
  },
  {
    title: "Network Infrastructure & Cybersecurity",
    skills: [
      { label: "Optical Networking", technologies: ["GPON", "XGS-PON (Configuration, Troubleshooting & Optimization)"] },
      { label: "Protocols", technologies: ["TCP/IP", "BGP", "OSPF", "DNS", "HTTP/HTTPS"] },
      { label: "Hardware", technologies: ["Firewalls (iptables)", "Routers", "Switches (Configuration & Management)"] },
      { label: "Monitoring and Analysis of Networks", technologies: ["Nagios", "Wireshark", "tcpdump"] },
      { label: "Offensive Security (Pentesting)", technologies: ["Kali Linux", "Parrot OS", "Metasploit", "Nmap", "OSINT"] },
      { label: "Defensive Security", technologies: ["Log Analysis", "Incident Response", "Cryptography (SSL/TLS, SSH)"] },
      { label: "Security Frameworks", technologies: ["OWASP Top 10", "NIST Cybersecurity Framework"] },
      { label: "Cloud", technologies: ["AWS", "Azure", "Google Cloud"] },
      { label: "CI/CD", technologies: ["Jenkins", "GitHub Actions"] },
      { label: "Monitoring", technologies: ["Prometheus", "Grafana", "Zabbix"] },
      { label: "Virtualization", technologies: ["VirtualBox", "VMware", "Hyper-V"] },
      
    ],
  },
  {
    title: "System & Plataform",
    skills: [
      { label: "Operating System", technologies: ["Linux", "Windows", "Windows Server"] },
      { label: "Voip", technologies: ["PABX", "FreePBX", "3CX", "Zoiper"] },
      { label: "Network", technologies: ["Cisco", "Juniper", "Huawei", "Datacom", "Alcatel-Lucent", "Furuwaka"] },
      { label: "others", technologies: ["Mikrotik", "Postman", "Insominia", "IDOR", "Charles", "Burp Suite", ] },
      {label: "Pentesting web", technologies: ["Burp Suite", "Metasploit", "Nmap", "OSINT", "Kali Linux", "Parrot OS"]},
      
    ],
  },
];
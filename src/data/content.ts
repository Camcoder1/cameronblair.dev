export const siteConfig = {
  name: "Cameron Blair",
  title: "Cloud Architect | AI/ML Engineer | DevOps Leader",
  tagline: "17+ years building the infrastructure that powers what's next.",
  email: "cameronwblair@outlook.com",
  github: "https://github.com/Camcoder1",
  linkedin: "https://linkedin.com/in/cameronblair5",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Vision", href: "#future" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "17+", label: "Years Experience" },
  { value: "3", label: "Major Clouds" },
  { value: "Enterprise", label: "Scale" },
  { value: "AI/ML", label: "Pipelines" },
];

export const about = {
  heading: "About",
  description: `Innovative and strategic IT leader with a distinguished career architecting, deploying,
and managing sophisticated public and private cloud environments. Specialized in leveraging GCP, AWS,
and Azure to drive operational efficiency, scalability, and innovation. I converge public and private
cloud architectures to create seamless, resilient, and agile IT infrastructures that support
organizational objectives — transforming technology landscapes through a harmonious blend of cloud
services that enhance flexibility, reduce costs, and optimize performance.`,
};

export const experiences = [
  {
    period: "2021 — Present",
    role: "Cloud & Infrastructure Architect | DevOps & AI/MLOps Manager",
    company: "Major Energy Infrastructure Company",
    highlights: [
      "Architected cloud and physical infrastructure at massive scale — spanning enterprise data centers, Cisco UCS/UCSX compute, Pure Storage, and multi-cloud across GCP, AWS, and Azure",
      "Owned end-to-end infrastructure architecture — from rack-and-stack hardware strategy to cloud landing zones, bridging thousands of on-prem workloads with public cloud services",
      "Pioneered hybrid cloud integration — designing GCP and VMware convergence with IaC through Ansible and Terraform for scalable hybrid operations",
      "Created the company's DevOps practice from scratch — repeatable playbooks, Ansible/Terraform CI/CD pipelines, automation-first culture across all engineering teams",
      "Established AI/MLOps on GCP Vertex AI — building pipelines for experimentation, training, and production model deployment powering predictive analytics",
      "Led cloud engineering practice unifying on-prem, cloud, and DevOps standards into a single framework — eliminating silos across infrastructure and development",
      "Mentored engineers and architecture teams on cloud architecture, DevOps, IaC, and MLOps — building a high-performing team independently driving innovation",
    ],
  },
  {
    period: "2018 — 2021",
    role: "Sr. Systems Engineer — Cloud Platform",
    company: "Global Location Technology Company",
    highlights: [
      "Focused on private & public cloud automation, improvement, compliance, and stability",
      "Installed and configured VMware vRA 7.6/8.2, vRO 7.6, vROps 7, Log Insight — full CMP stack",
      "Developed PowerShell, PowerCLI, REST, and Python scripts automating AWS, web, and VMware processes",
      "Designed and maintained Puppet OSF automation for many endpoints at scale",
      "Managed VMware vSphere platform — vCenter, ESXi, VUM, PowerCLI, vROps, vRA, vRO, Pure, UCS",
    ],
  },
  {
    period: "2017 — 2018",
    role: "Sr. Systems Engineer — Core Services",
    company: "Enterprise IT Services Provider",
    highlights: [
      "Platform stability, improvement, and automation for enterprise clients",
      "Designed and deployed 3D-accelerated VMware Horizon environment leveraging Nvidia Grid technologies",
      "Automated Windows Server IaaS deployment within VMware via PowerShell/PowerCLI",
      "Managed Cisco UCS host deployments, troubleshooting, and DaaS support",
    ],
  },
  {
    period: "2011 — 2017",
    role: "Data Center Operations Engineer III",
    company: "Global Healthcare & Diagnostics Company",
    highlights: [
      "VMware systems design, storage systems design, and technical escalation lead",
      "Managed VMware platform — ESXi, vSphere, View, vCenter, NSX, SRM, vRA",
      "Storage/SAN management across NetApp, EqualLogic, XIO, EMC, and Nutanix",
      "Deployed and validated Nutanix installation servicing multiple corporate customers",
      "Contributed to deploying multiple vBlocks globally serving private cloud",
    ],
  },
  {
    period: "2009 — 2011",
    role: "Systems Administrator",
    company: "National IT Staffing & Services Firm",
    highlights: [
      "Supported LANs, WANs, network segments, internet and intranet systems",
      "Managed network services including file servers, VPN gateways, and intrusion detection",
      "Maintained routing protocols, routing table configuration, and directory services authentication",
    ],
  },
  {
    period: "2008 — 2009",
    role: "Junior Network Administrator",
    company: "Healthcare Technology Solutions Provider",
    highlights: [
      "Managed backend infrastructure — servers, backup systems, email, databases, and file systems",
      "Administered Active Directory, Exchange, and SharePoint environments",
      "Implemented data protection procedures with viral/malware protection and backup systems",
    ],
  },
];

export const skillCategories = [
  {
    category: "Cloud",
    skills: ["GCP", "AWS", "Azure", "Cloud Run", "Cloud SQL", "VPC-SC"],
  },
  {
    category: "IaC & Automation",
    skills: ["Ansible", "Terraform", "PowerShell", "Python", "Jenkins", "GitHub Actions", "GitLab CI"],
  },
  {
    category: "Platforms",
    skills: ["VMware vSphere", "NSX-T", "vRA/vRO", "Tanzu", "Cisco UCS/UCSX", "Pure Storage"],
  },
  {
    category: "AI/ML & Data",
    skills: ["Vertex AI", "MLOps", "BigQuery", "Looker Studio", "Predictive Analytics"],
  },
  {
    category: "DevOps",
    skills: ["CI/CD", "Docker", "Kubernetes", "ArgoCD", "Helm", "OpenShift", "Git"],
  },
  {
    category: "Networking & Security",
    skills: ["NSX-T", "Palo Alto", "Infoblox", "F5", "Zero Trust"],
  },
];

export const projects = [
  {
    title: "Building AI Pipelines in the Cloud",
    description:
      "Designing end-to-end MLOps on GCP Vertex AI. From experimentation to production model deployment. Training pipelines that turn raw data into predictive intelligence.",
    tags: ["GCP", "Vertex AI", "MLOps", "Python"],
  },
  {
    title: "Infrastructure as Code at Enterprise Scale",
    description:
      "Ansible playbooks automating VMware provisioning across Cisco UCS and Pure Storage. Turning weeks of manual work into repeatable, version-controlled deployments.",
    tags: ["Ansible", "Terraform", "VMware", "IaC"],
  },
  {
    title: "Multi-Cloud Convergence",
    description:
      "Architecting hybrid frameworks that bridge on-prem VMware with GCP, AWS, and Azure. One unified operating model across every environment.",
    tags: ["GCP", "AWS", "Azure", "Hybrid"],
  },
  {
    title: "The DevOps Practice That Didn't Exist",
    description:
      "Building an organization's entire DevOps culture from zero. CI/CD pipelines, IaC standards, automation-first mindset — from nothing to a fully operational practice.",
    tags: ["CI/CD", "DevOps", "Culture", "Automation"],
  },
  {
    title: "AI-Driven Operations",
    description:
      "Leveraging machine learning for predictive analytics and operational insights. Moving from reactive to proactive infrastructure management.",
    tags: ["AI/ML", "Analytics", "Operations"],
  },
  {
    title: "Securing the Hybrid Edge",
    description:
      "Implementing zero-trust and compliance frameworks across multi-cloud environments. NSX-T microsegmentation, Palo Alto, Infoblox — making security an enabler, not a blocker.",
    tags: ["NSX-T", "Palo Alto", "Zero Trust", "Compliance"],
  },
];

export const futureThemes = [
  "IT as a business enabler, not a cost center",
  "AI/ML transforming operations and decision-making",
  "Cloud convergence eliminating silos",
  "Automation as the foundation of scale",
  "The engineer's role is evolving — from operator to architect of intelligent systems",
];

export const futureManifesto = `The future of IT isn't about managing servers. It's about
architecting intelligence. Every pipeline we build, every cloud we bridge, every model we
deploy — it's infrastructure for what's next. The organizations that win aren't the ones
with the most hardware. They're the ones whose technology thinks, adapts, and accelerates
the mission. That's the work I do. That's the future I'm building.`;

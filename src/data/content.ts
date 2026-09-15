// Central content for the sections that aren't project-specific.

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  { title: "Interfaces", items: ["React", "Next.js", "TypeScript", "Responsive UI", "Design systems"] },
  { title: "Product Systems", items: ["Admin dashboards", "Multi-step workflows", "Payments", "User management", "Reporting"] },
  { title: "Integrations", items: ["REST APIs", "Supabase", "Paystack", "FundraiseUp", "Analytics", "Sentry"] },
  { title: "Quality", items: ["Vitest", "Testing Library", "Jest", "Error monitoring", "Performance"] },
];

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Explore", desc: "Understand the user, workflow, and constraints before implementation." },
  { step: "02", title: "Plan", desc: "Break complex requirements into clear states, components, and API contracts." },
  { step: "03", title: "Confirm", desc: "Align on behavior and expected outcomes before implementation expands." },
  { step: "04", title: "Test", desc: "Define critical behavior and failure paths before production changes." },
  { step: "05", title: "Build", desc: "Implement reusable interfaces with maintainability in mind." },
  { step: "06", title: "Validate", desc: "Check functionality, edge cases, responsiveness, and production behavior." },
  { step: "07", title: "Ship", desc: "Deploy, monitor, and iterate from real usage." },
];

export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  desc: string;
}

export const experience: TimelineItem[] = [
  {
    title: "Frontend Engineer",
    company: "Sabiqun Tech",
    period: "2025 — Present",
    desc: "Build React frontends end-to-end for client products, including the Human Development Fund's (HDF) Grant Portal and MyGiving donor platform. Own frontend implementation from requirements through production — application and admin workflows, complex forms and validation, REST API integration, and reusable component systems.",
  },
  {
    title: "Frontend Developer",
    company: "Big Gorilla Apps",
    period: "Dec 2023 — 2025",
    desc: "Managed and maintained company and client websites. Developed and launched new websites and landing pages tailored to client requirements. Worked with CRM platforms and customised WordPress solutions.",
  },
  {
    title: "Frontend Engineer",
    company: "Carburrant Technology",
    period: "Jan 2022 — Present",
    desc: "Partnered with UX/UI designers and backend engineers to implement responsive interfaces across desktop, tablet, and mobile as part of the product team. Leveraged HTML5, CSS3, and JavaScript to develop dynamic features and integrated RESTful APIs.",
  },
];

export const education: TimelineItem[] = [
  {
    title: "B.Sc. Computer Science",
    company: "University of Benin",
    period: "2018 — 2023",
    desc: "Bachelor of Science in Computer Science, building a strong foundation in programming, problem-solving, software development, and web technologies.",
  },
];

export const journey = {
  headline: "From building interfaces to shipping full products end-to-end.",
  body: "Robert started with client websites and frontend development focused on responsive interfaces. Over time, his work moved deeper into production frontend systems — dashboards, authentication, payments, data-heavy workflows, analytics, and operational tooling — then into owning complex product workflows end-to-end as a frontend engineer. With Zitu, he took that further, building a product completely on his own: frontend, Supabase-backed data and auth, and Paystack payments. Today, he is most interested in frontend engineering roles where UI quality and product thinking matter equally.",
  milestones: [
    { period: "2022", label: "Frontend Engineer, Carburrant Technology", desc: "Responsive interfaces, RESTful API integration." },
    { period: "2023", label: "Frontend Developer, Big Gorilla Apps", desc: "Client sites, CRM platforms, WordPress solutions." },
    { period: "2025", label: "Frontend Engineer, Sabiqun Tech", desc: "End-to-end frontend ownership — production dashboards, payments, operational tooling." },
  ],
};

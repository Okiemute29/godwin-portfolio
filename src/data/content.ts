// Central content for the sections that aren't project-specific.

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  { title: "Core Stack", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { title: "State & Tooling", items: ["Redux Toolkit", "Tailwind CSS", "REST APIs", "Git/GitHub"] },
  { title: "Backend & Data", items: ["Supabase", "WebSockets", "Sanity"] },
  { title: "Testing & Other Tools", items: ["Jest", "Vitest", "Figma", "WordPress", "Squarespace"] },
];

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Explore", desc: "Look at what's already there and understand the problem before touching code." },
  { step: "02", title: "Plan", desc: "Break the work into clear states, components and API contracts." },
  { step: "03", title: "Confirm", desc: "Check the direction makes sense before the implementation grows." },
  { step: "04", title: "Write Tests", desc: "Write tests for the behavior that actually matters, before building it out." },
  { step: "05", title: "Implement", desc: "Build it, keeping components reusable where it makes sense." },
  { step: "06", title: "Validate", desc: "Check edge cases, responsiveness, and how it behaves in production-like conditions." },
  { step: "07", title: "Commit", desc: "Commit the change and move on to the next thing." },
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
    desc: "I build frontend for client products here, including the Human Development Fund's Grant Portal and MyGiving donor platform. I own the frontend end-to-end, from requirements through production, rather than just building screens.",
  },
  {
    title: "Frontend Developer",
    company: "Big Gorilla Apps",
    period: "Dec 2023 — 2025",
    desc: "Built and maintained websites for the company and its clients — new sites, landing pages, and ongoing updates, mostly on WordPress and Squarespace, plus some CRM work.",
  },
  {
    title: "Frontend Engineer",
    company: "Carburrant Technology",
    period: "Jan 2022 — Present",
    desc: "I work on frontend features here as part of a team — responsive interfaces, reusable components, and connecting the UI to backend APIs, alongside designers and backend engineers.",
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
  body: "I started out building client websites and simple interfaces. Over time that turned into production frontend work — dashboards, authentication, payments, and admin tooling for real users. At Sabiqun Tech, I've been owning frontend work end-to-end rather than just building screens. With Zitu, I went further and built a product on my own — frontend, Supabase and Paystack included. These days I'm mostly interested in frontend engineering roles where the UI quality and the product thinking both matter.",
  milestones: [
    { period: "2022", label: "Frontend Engineer, Carburrant Technology", desc: "Responsive interfaces, RESTful API integration." },
    { period: "2023", label: "Frontend Developer, Big Gorilla Apps", desc: "Client sites on WordPress and Squarespace, plus CRM platforms." },
    { period: "2025", label: "Frontend Engineer, Sabiqun Tech", desc: "Owning frontend work end-to-end — dashboards, payments, admin tooling." },
  ],
};

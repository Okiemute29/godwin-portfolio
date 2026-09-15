// Central data layer for all project content.
// All facts here come directly from Robert's own account of the work (brief + direct
// confirmation). Nothing here is an invented metric, responsibility, or technology.

import billingSuiteImg from "@/assets/project-1.png";
import payBondImg from "@/assets/project-2.png";
import maitpImg from "@/assets/project-3.webp";
import zituHeroImg from "@/assets/zitu-1.jpg";
import zituRsvpImg from "@/assets/zitu-2.jpg";
import zituVouchersImg from "@/assets/zitu-3.jpg";
import grantPortalDashboardImg from "@/assets/grant-portal-1.jpg";
import grantPortalGrantsImg from "@/assets/grant-portal-2.jpg";
import myGivingSignInImg from "@/assets/mygiving-1.jpg";
import myGivingDashboardImg from "@/assets/mygiving-2.jpg";

export interface ProjectImage {
  src?: string; // omitted => render a placeholder slot sized for this project
  alt: string;
}

export interface CaseStudySection {
  context: string;
  problem: string;
  myRole: string;
  whatIBuilt: string[];
  keyChallenges: string[];
  engineeringDecision?: {
    heading: string;
    body: string;
  };
  result: string;
  stack: string[];
}

export interface FlagshipProject {
  slug: string;
  number: string;
  title: string;
  org?: string;
  storyHeadline: string;
  context: string;
  contribution: string[];
  stackLabel: string[];
  images: ProjectImage[];
  liveUrl?: string;
  liveLabel?: string;
  progression?: string[];
  caseStudy: CaseStudySection;
}

export interface SecondaryProject {
  slug: string;
  title: string;
  org: string;
  type: string;
  tech: string[];
  link: string;
  image: ProjectImage;
}

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "grant-portal",
    number: "01",
    title: "HDF Grant Portal",
    org: "Sabiqun Tech",
    storyHeadline: "Making complex grant operations easier to manage.",
    context:
      "A production grant-management platform built at Sabiqun Tech for the Human Development Fund (HDF), with workflows across applications, KYC, approvals, payments, reporting, permissions, and admin operations.",
    contribution: [
      "Built the frontend end-to-end",
      "Application & admin workflows",
      "Complex forms, validation & dashboards",
      "Role-based interfaces",
      "REST API integration",
      "Reusable component library",
      "Responsive behavior & performance",
      "Production debugging & improvements",
    ],
    stackLabel: ["React", "REST APIs", "Role-based access", "Analytics", "Testing"],
    images: [
      { src: grantPortalDashboardImg, alt: "HDF Grant Portal — admin dashboard overview" },
      { src: grantPortalGrantsImg, alt: "HDF Grant Portal — available grants listing" },
    ],
    caseStudy: {
      context:
        "HDF Grant Portal is a production grant-management platform built at Sabiqun Tech for the Human Development Fund (HDF) — used to run applications, KYC, approvals, disbursement, and reporting for HDF's grant programs. It's a system with real operational weight — the people using it daily are reviewing applicants, approving payments, and running compliance checks.",
      problem:
        "Grant operations involve many interlocking states: an application can be in review, awaiting KYC, approved, split across multiple payments, or flagged for a region-specific rule. Admin staff needed to move through these states quickly and accurately, without the interface getting in the way or letting mistakes slip through — especially around payments and KYC.",
      myRole:
        "Frontend Engineer at Sabiqun Tech, owning the frontend implementation for HDF's Grant Portal end-to-end — from requirements and design through to production. Worked directly with backend engineers and product to turn grant-operations requirements into interfaces admin staff could rely on day to day.",
      whatIBuilt: [
        "The entire frontend, end-to-end — application and admin workflows, from first screen through production",
        "Complex forms, validation, filtering, dashboards, and role-based interfaces for admin and reviewer workflows",
        "Admin profile workflows for managing reviewer and applicant-facing accounts",
        "Split-payment validation to catch inconsistent or invalid payment splits before submission",
        "KYC flow improvements to reduce friction and error in identity verification",
        "Region filtering for programs that operate across different geographies",
        "Reporting views and access-control refinements tied to admin roles",
        "REST API integration connecting the frontend to grant, payment, and KYC data",
        "Reusable frontend components shared across the admin and applicant experience",
        "Transactional email templates for application and payment status updates",
        "Responsive behavior, performance work, debugging, and production improvements",
      ],
      keyChallenges: [
        "Keeping a multi-stage review workflow (application → KYC → approval → payment → reporting) legible in one interface without overwhelming admins",
        "Validating split-payment scenarios on the client before they ever reach the backend, to prevent bad data from entering a financial workflow",
        "Building filtering, dashboards, and access control that respect role-based permissions without adding friction for day-to-day review work",
        "Owning the full frontend surface area alone — from complex forms to admin dashboards — while keeping the codebase consistent and maintainable",
      ],
      result:
        "The frontend shipped into production and is in active use by HDF's grant operations team for day-to-day review, approval, and reporting work.",
      stack: ["React", "REST APIs", "Role-based access control", "Analytics", "Testing"],
    },
  },
  {
    slug: "mygiving",
    number: "02",
    title: "HDF MyGiving",
    org: "Sabiqun Tech",
    storyHeadline: "A better sponsorship experience for donors.",
    context:
      "A donor-facing sponsorship experience built at Sabiqun Tech for the Human Development Fund (HDF), connected to the orphan sponsorship platform.",
    contribution: [
      "Built the frontend end-to-end",
      "Donor & sponsorship interfaces",
      "Authentication & session flows",
      "Payment & receipt flows",
      "REST API integration",
      "Reusable component library",
      "Responsive layouts",
      "Production fixes & improvements",
    ],
    stackLabel: ["React", "REST APIs", "Authentication", "Payments"],
    images: [
      { src: myGivingDashboardImg, alt: "HDF MyGiving — donor dashboard and giving summary" },
      { src: myGivingSignInImg, alt: "HDF MyGiving — donor sign-in" },
    ],
    caseStudy: {
      context:
        "MyGiving is the donor-facing side of HDF's orphan sponsorship platform, built at Sabiqun Tech — where a sponsor manages their sponsorship, sees who they support, and handles payments and receipts.",
      problem:
        "For a donor, this experience needs to feel simple and trustworthy: finding a sponsorship, understanding its status, making a payment, and getting a receipt, with no confusion about what's happened. Getting the list/detail flow and the payment/receipt loop right mattered more here than raw feature count.",
      myRole:
        "Frontend Engineer at Sabiqun Tech, owning the donor-facing frontend end-to-end — from UI and application flows through authentication, API integration, and production fixes.",
      whatIBuilt: [
        "The entire donor-facing frontend, end-to-end",
        "Sponsorship list and detail views wired to the underlying sponsorship API",
        "Payment and receipt flows for donors managing an active sponsorship, including sponsorship and payment-related workflows",
        "Authentication and session flows for donor account access",
        "Responsive layouts and reusable components used across the donor experience",
        "REST API integration connecting the frontend to sponsorship and payment data",
        "Frontend production fixes and usability improvements identified from real usage",
      ],
      keyChallenges: [
        "Making sponsorship status and payment history easy to scan for a non-technical donor audience",
        "Keeping the payment-to-receipt loop clear and trustworthy, since this is a donation flow, not a generic transaction",
        "Building and maintaining authentication and session handling for a donor-facing account experience",
        "Fixing usability friction as it surfaced in production, without destabilizing a live donor-facing product",
      ],
      result:
        "Shipped to production as part of HDF's donor sponsorship experience, currently used by sponsors managing active sponsorships.",
      stack: ["React", "REST APIs", "Authentication", "Payments"],
    },
  },
  {
    slug: "billing-suite",
    number: "03",
    title: "Billing Suite",
    org: "Carburrant Technology",
    storyHeadline: "Building interfaces around financial workflows.",
    context:
      "A billing and invoicing product (GetBilling / Billing Plus) built at Carburrant Technology, covering structured, data-heavy financial workflows in a production interface. Built as part of the frontend/product team.",
    contribution: [
      "Frontend/product team contribution",
      "Responsive interfaces & reusable components",
      "API-connected billing workflows",
      "Collaboration with designers & backend engineers",
    ],
    stackLabel: ["React", "JavaScript", "REST APIs"],
    images: [{ src: billingSuiteImg, alt: "Billing Suite — product dashboard screenshot" }],
    liveUrl: "https://suite.getbilling.co/",
    liveLabel: "Visit Live Site",
    caseStudy: {
      context:
        "Billing Suite (shipped as GetBilling / Billing Plus) is a billing and invoicing web application built at Carburrant Technology — the kind of structured, business-critical interface where getting the data model right on screen matters as much as how it looks.",
      problem:
        "Billing workflows are dense by nature: line items, statuses, totals, and history all need to stay legible without turning the interface into a spreadsheet.",
      myRole:
        "Frontend Engineer at Carburrant Technology, contributing to Billing+ as part of the frontend/product team — working alongside designers, backend engineers, and other frontend developers to build and improve the product.",
      whatIBuilt: [
        "Responsive interfaces for core billing and invoicing workflows, built and improved as part of the frontend team",
        "Reusable frontend components shared across the product",
        "REST API integration connecting the interface to billing and invoice data",
        "Production-facing interface refinements based on real usage, developed alongside backend engineers and designers",
      ],
      keyChallenges: [
        "Presenting billing data — line items, statuses, totals — clearly without overwhelming the user",
        "Coordinating frontend work with backend engineers, designers, and other frontend developers on a shared codebase",
        "Keeping the interface reliable as a business-critical, production-facing tool",
      ],
      result: "Live in production as Carburrant Technology's billing product, built and maintained by a frontend/product team.",
      stack: ["React", "JavaScript", "REST APIs"],
    },
  },
  {
    slug: "zitu",
    number: "04",
    title: "ZITU Pop-Up Experience",
    org: "Full-Stack / Product Developer",
    storyHeadline: "What started as an e-invite became an event operations platform.",
    context:
      "The original requirement was a premium digital invitation for a fashion pop-up. As event requirements became clearer, the product expanded into registration, payment verification, voucher fulfilment, guest check-in, and event-day operations. Built end-to-end — frontend, Supabase, and Paystack — as a full-stack, self-directed product.",
    contribution: [
      "Built end-to-end — frontend, Supabase & Paystack",
      "Supabase auth, data & storage integration",
      "Paystack payment integration",
      "Full application flow & UI ownership",
      "Individual RSVP system",
      "One-email-per-attendee rule",
      "Human-readable RSVP references",
      "RSVP QR confirmation & check-in",
      "Server-side payment verification",
      "Voucher generation & QR redemption",
      "Resend transactional emails",
      "Admin guest & payment operations",
      "Payment reconciliation workflows",
    ],
    stackLabel: ["React", "Supabase", "Paystack", "QR / Email automation"],
    progression: [
      "E-Invite",
      "RSVP",
      "Transactional Email",
      "QR Check-in",
      "Payments",
      "Digital Vouchers",
      "QR Redemption",
      "Admin Operations",
    ],
    images: [
      { src: zituHeroImg, alt: "ZITU Pop-Up Experience — event microsite hero" },
      { src: zituRsvpImg, alt: "ZITU Pop-Up Experience — RSVP form" },
      { src: zituVouchersImg, alt: "ZITU — admin voucher and payment tracking dashboard" },
    ],
    liveUrl: "https://popup.zituclothing.com/",
    liveLabel: "Visit Live Site",
    caseStudy: {
      context:
        "ZITU Pop-Up Experience started as a single, well-defined ask: a premium digital invitation for a fashion pop-up event. As the event's real requirements surfaced, the scope grew into a full event-operations platform — registration, payment, voucher fulfilment, guest check-in, and day-of admin operations. Built end-to-end as a full-stack product: frontend, Supabase-backed data and auth, and Paystack payments.",
      problem:
        "A one-off invite doesn't need transactional infrastructure. An event with paid entry, printed-style vouchers, and a physical check-in line does. The product had to grow from a microsite into something that could reliably verify a payment, issue a redeemable voucher, and let event staff check guests in at the door — without the scope creep turning into an unreliable system.",
      myRole:
        "Full-Stack / Product Developer — built Zitu end-to-end, including the frontend, Supabase integration, backend data workflows/services, and Paystack payment integration. Owned the invitation microsite, the RSVP and payment flow, the voucher and QR system, and the admin tooling used to run the event, from first line of code through production.",
      whatIBuilt: [
        "The complete frontend, end-to-end",
        "Supabase setup and integration — authentication, database, and storage",
        "Backend data workflows and services built on Supabase",
        "Paystack integration for transaction initialization and payments",
        "A premium event microsite for the invitation itself",
        "An individual RSVP system with a one-email-per-attendee rule to keep guest records clean",
        "Human-readable RSVP references so guests and staff could confirm attendance without scanning anything",
        "QR-based RSVP confirmation and check-in",
        "Server-side payment verification before any voucher was issued",
        "Digital voucher generation, redeemable via QR at the event",
        "Resend-based transactional emails for confirmations and vouchers",
        "Admin tooling for guest management, payment status, and reconciliation",
        "Validation, error states, and production behavior across the application",
      ],
      keyChallenges: [
        "Extending a simple invite product into paid registration and voucher fulfilment without a full platform rebuild",
        "Designing the Supabase data model and access rules to support registration, payments, vouchers, and admin operations from a single backend",
        "Guaranteeing that a voucher was only ever issued after a payment was actually verified",
        "Giving event-day staff a check-in flow that worked quickly under real foot traffic, using QR codes for both RSVP and voucher redemption",
        "Reconciling payments and guest records after the event for accurate reporting",
      ],
      engineeringDecision: {
        heading: "Why transaction initialization + server-side verification, not static Paystack Payment Pages",
        body:
          "A static Paystack Payment Page can take a payment, but it can't be trusted on its own to decide what happens next. It has no reliable way to tie a completed payment back to a specific guest, prevent a voucher from being issued off an unverified or reused payment reference, or let the backend make the final call before anything of value — a voucher, a confirmed spot — is handed out. Initializing the transaction server-side and verifying it server-side after payment closes that gap: the backend generates the reference, and only a verified, matching transaction ever triggers voucher generation. For an event with paid entry and redeemable vouchers, that verification step isn't optional — it's what keeps the voucher system honest.",
      },
      result:
        "Built and shipped end-to-end as a full-stack product — the platform ran the pop-up's full guest journey front to back: invitation, paid RSVP, Supabase-backed data and auth, Paystack payments, check-in, and voucher redemption, handling the event's registration and on-site operations in production.",
      stack: ["React", "Supabase", "Paystack", "REST APIs", "QR code generation/scanning", "Transactional email (Resend)"],
    },
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    slug: "paybond",
    title: "PayBond",
    org: "Carburrant Technology",
    type: "Web App",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://paybond-staging.vercel.app/",
    image: { src: payBondImg, alt: "PayBond product screenshot" },
  },
  {
    slug: "martial-arts-in-the-park",
    title: "Martial Arts In The Park",
    org: "Carburrant Technology",
    type: "Website",
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
    link: "https://carburant.io/portfolio/maitp/",
    image: { src: maitpImg, alt: "Martial Arts In The Park website screenshot" },
  },
];

export const additionalClientWork: { name: string; link?: string }[] = [
  { name: "RGW USA" },
  { name: "HDFund.org", link: "https://hdfund.org" },
  { name: "EquallyAble" },
  { name: "ADAMS Center" },
];

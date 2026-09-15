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
      "The Grant Portal is one of the larger products I've worked on. It handles grant applications, reviews, approvals, payments, reporting and different user roles for the Human Development Fund (HDF). I built the frontend end-to-end at Sabiqun Tech.",
    contribution: [
      "Built the frontend end-to-end",
      "Multi-step forms & validation",
      "Admin & role-based dashboards",
      "API integrations",
      "Reports & filters",
      "Loading & error states",
      "Reusable components",
      "Production bug fixes",
    ],
    stackLabel: ["React", "REST APIs", "Role-based access", "Analytics", "Testing"],
    images: [
      { src: grantPortalDashboardImg, alt: "HDF Grant Portal — admin dashboard overview" },
      { src: grantPortalGrantsImg, alt: "HDF Grant Portal — available grants listing" },
    ],
    caseStudy: {
      context:
        "HDF Grant Portal is a production grant-management platform I worked on at Sabiqun Tech, built for the Human Development Fund (HDF). It runs applications, KYC, approvals, disbursement and reporting for HDF's grant programs — real operational software, used daily by people reviewing applicants, approving payments and running compliance checks.",
      problem:
        "Grant operations involve a lot of interlocking states: an application can be in review, waiting on KYC, approved, split across multiple payments, or flagged for a region-specific rule. Admin staff needed to move through these states quickly and accurately, without the interface getting in the way or letting mistakes slip through — especially around payments and KYC.",
      myRole:
        "Frontend Engineer at Sabiqun Tech. I built the frontend end-to-end — from requirements through production — working directly with backend engineers and product to turn grant-operations requirements into interfaces admin staff could actually rely on.",
      whatIBuilt: [
        "The frontend end-to-end — application and admin workflows, from first screen through production",
        "Complex multi-step forms, validation, dashboards, filters and role-based interfaces",
        "Admin profile workflows for managing reviewer and applicant-facing accounts",
        "Split-payment validation to catch inconsistent or invalid payment splits before submission",
        "KYC flow improvements to reduce friction and error in identity verification",
        "Region filtering for programs that operate across different geographies",
        "Reporting views and access-control refinements tied to admin roles",
        "API integrations connecting the frontend to grant, payment and KYC data",
        "Reusable components used across admin and applicant workflows",
        "Loading and error states, and the production bugs and fixes that came after launch",
      ],
      keyChallenges: [
        "Keeping a multi-stage review workflow (application → KYC → approval → payment → reporting) understandable in one interface without overwhelming admins",
        "Validating split-payment scenarios on the client before they ever reached the backend, so bad data never entered a financial workflow",
        "Building dashboards, filters and access control that respected role-based permissions without slowing down day-to-day review work",
        "Keeping large, multi-step forms manageable as new requirements kept getting added",
      ],
      result:
        "The frontend shipped to production and is used daily by HDF's grant operations team for review, approval and reporting work.",
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
      "MyGiving gives donors one place to see and manage their sponsorships and related activity, for the Human Development Fund (HDF). I built the frontend at Sabiqun Tech.",
    contribution: [
      "Built the frontend end-to-end",
      "Donor & sponsorship interfaces",
      "Payment & receipt flows",
      "API integrations",
      "Responsive layouts",
      "Reusable components",
      "Authentication flows",
      "Production fixes",
    ],
    stackLabel: ["React", "REST APIs", "Authentication", "Payments"],
    images: [
      { src: myGivingDashboardImg, alt: "HDF MyGiving — donor dashboard and giving summary" },
      { src: myGivingSignInImg, alt: "HDF MyGiving — donor sign-in" },
    ],
    caseStudy: {
      context:
        "MyGiving is the donor-facing side of HDF's orphan sponsorship platform, built at Sabiqun Tech. It's where a sponsor manages their sponsorship, sees who they support, and handles payments and receipts.",
      problem:
        "For a donor, this needs to feel simple and trustworthy — finding a sponsorship, understanding its status, making a payment and getting a receipt, with nothing confusing along the way. Getting the list/detail flow and the payment-to-receipt loop right mattered more here than adding more features.",
      myRole:
        "Frontend Engineer at Sabiqun Tech. I built the frontend, including the sponsorship views, donor-facing flows, responsive layouts, API integration and reusable components. Some of the more interesting work was making data from different services feel like one consistent experience for the donor.",
      whatIBuilt: [
        "The donor-facing frontend, including sponsorship list and detail views",
        "Payment and receipt flows for donors managing an active sponsorship",
        "Authentication and session handling for donor account access",
        "Responsive layouts and reusable components used across the donor experience",
        "API integrations connecting the frontend to sponsorship and payment data",
        "Fixes and usability improvements that came up after launch",
      ],
      keyChallenges: [
        "Making sponsorship status and payment history easy to scan for a non-technical donor audience",
        "Keeping the payment-to-receipt loop clear and trustworthy, since this is a donation flow, not a generic transaction",
        "Pulling data from more than one backend service and presenting it as one consistent experience",
        "Fixing usability issues as they came up in production, without breaking a live donor-facing product",
      ],
      result:
        "Shipped to production as part of HDF's donor sponsorship experience — donors use it to manage active sponsorships.",
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
      "Billing+ is a business platform with financial and operational workflows. I worked on it as part of a team at Carburrant Technology.",
    contribution: [
      "Worked on frontend features",
      "Responsive interfaces",
      "Reusable components",
      "Connected UI to backend APIs",
    ],
    stackLabel: ["React", "JavaScript", "REST APIs"],
    images: [{ src: billingSuiteImg, alt: "Billing Suite — product dashboard screenshot" }],
    liveUrl: "https://suite.getbilling.co/",
    liveLabel: "Visit Live Site",
    caseStudy: {
      context:
        "Billing+ (shipped as GetBilling / Billing Plus) is a billing and invoicing platform built at Carburrant Technology. It's a structured, data-heavy interface — the kind where getting the data model right on screen matters as much as how it looks.",
      problem:
        "Billing workflows are dense by nature — line items, statuses, totals and history all need to stay legible without the interface turning into a spreadsheet.",
      myRole:
        "Frontend Engineer at Carburrant Technology. My work focused on frontend features, responsive interfaces, reusable components and connecting the UI to backend APIs. I worked alongside other developers and team members as the product evolved.",
      whatIBuilt: [
        "Responsive interfaces for core billing and invoicing workflows",
        "Reusable frontend components shared across the product",
        "API integrations connecting the interface to billing and invoice data",
        "Production fixes and interface improvements, worked on alongside backend engineers and designers",
      ],
      keyChallenges: [
        "Presenting billing data — line items, statuses, totals — clearly without overwhelming the user",
        "Coordinating frontend work with backend engineers, designers and other developers on a shared codebase",
        "Keeping the interface reliable as a business-critical, production tool",
      ],
      result: "Live in production as Carburrant Technology's billing product, built and maintained by a team I was part of.",
      stack: ["React", "JavaScript", "REST APIs"],
    },
  },
  {
    slug: "zitu",
    number: "04",
    title: "ZITU Pop-Up Experience",
    org: "Full-Stack / Product Developer",
    storyHeadline: "What started as an invite became an event operations platform.",
    context:
      "Zitu started as a way to handle event invitations, but the project grew into something much bigger. I built the product end-to-end, from the interface and application flows to the backend setup with Supabase. I also integrated Paystack for payments and handled the data, authentication, storage and application logic needed to make the product work.",
    contribution: [
      "Built end-to-end — frontend, Supabase & Paystack",
      "Supabase auth, data & storage",
      "Paystack payment integration",
      "Full application flow & UI",
      "RSVP & guest management",
      "QR check-in & voucher redemption",
      "Admin tooling & reconciliation",
      "Validation & error handling",
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
        "Zitu started as a way to handle event invitations for a fashion pop-up. As the real requirements surfaced, the project grew into a full event-operations platform — registration, payment, digital vouchers, guest check-in and day-of admin operations. I built it end-to-end: frontend, Supabase-backed data and auth, and Paystack payments.",
      problem:
        "A one-off invite doesn't need any of that. An event with paid entry, redeemable vouchers, and a real check-in line does. The product had to grow from a simple microsite into something that could reliably verify a payment, issue a voucher, and let event staff check guests in at the door — without turning into something unreliable.",
      myRole:
        "Full-Stack / Product Developer. I built Zitu end-to-end — the frontend, the Supabase setup, and the Paystack integration. That included the invitation microsite, the RSVP and payment flow, the voucher and QR system, and the admin tooling used to run the event, from the first line of code through production.",
      whatIBuilt: [
        "The frontend, end-to-end",
        "Supabase setup — authentication, database and storage",
        "Backend data workflows on top of Supabase",
        "Paystack integration for transaction initialization and payments",
        "The event microsite and invitation flow",
        "An RSVP system with one email per attendee, so guest records stayed clean",
        "Human-readable RSVP references, so guests and staff could confirm attendance without scanning anything",
        "QR-based RSVP confirmation and check-in",
        "Server-side payment verification before any voucher was issued",
        "Digital voucher generation, redeemable by QR at the event",
        "Transactional emails (Resend) for confirmations and vouchers",
        "Admin tooling for guest management, payment status and reconciliation",
      ],
      keyChallenges: [
        "Extending a simple invite product into paid registration and voucher fulfilment without rebuilding the whole thing",
        "Designing the Supabase data model so registration, payments, vouchers and admin operations could all run off one backend",
        "Making sure a voucher was only ever issued after a payment was actually verified",
        "Giving event staff a check-in flow that held up under real foot traffic, using QR codes for both RSVP and voucher redemption",
        "Reconciling payments and guest records after the event so the numbers actually added up",
      ],
      engineeringDecision: {
        heading: "Why transaction initialization + server-side verification, not static Paystack Payment Pages",
        body:
          "A static Paystack Payment Page can take a payment, but it can't be trusted on its own to decide what happens next. It has no reliable way to tie a completed payment back to a specific guest, or stop a voucher from being issued off an unverified or reused payment reference. Initializing the transaction server-side and verifying it server-side afterward closes that gap: the backend generates the reference, and only a verified, matching transaction ever triggers voucher generation. For an event with paid entry and redeemable vouchers, that verification step isn't optional — it's what keeps the voucher system honest.",
      },
      result:
        "The platform ran the pop-up's full guest journey front to back — invitation, paid RSVP, check-in and voucher redemption — in production. Building Zitu meant making decisions across the whole product instead of only the frontend. It gave me a much better sense of what it actually takes to get an idea from a screen to something people use.",
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

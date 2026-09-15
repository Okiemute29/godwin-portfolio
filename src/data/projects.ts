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
    org: "Human Development Fund",
    storyHeadline: "Making complex grant operations easier to manage.",
    context:
      "A production grant-management platform with workflows across applications, KYC, approvals, payments, reporting, permissions, and admin operations.",
    contribution: [
      "Admin profile workflows",
      "Review-stage filtering",
      "Split-payment validation",
      "KYC improvements",
      "Region filtering",
      "Reports & access controls",
      "Transactional email templates",
      "Production UI refinements",
    ],
    stackLabel: ["React", "REST APIs", "Role-based access", "Analytics", "Testing"],
    images: [
      { src: grantPortalDashboardImg, alt: "HDF Grant Portal — admin dashboard overview" },
      { src: grantPortalGrantsImg, alt: "HDF Grant Portal — available grants listing" },
    ],
    caseStudy: {
      context:
        "HDF Grant Portal is a production grant-management platform used to run applications, KYC, approvals, disbursement, and reporting for the Human Development Fund's grant programs. It's a system with real operational weight — the people using it daily are reviewing applicants, approving payments, and running compliance checks.",
      problem:
        "Grant operations involve many interlocking states: an application can be in review, awaiting KYC, approved, split across multiple payments, or flagged for a region-specific rule. Admin staff needed to move through these states quickly and accurately, without the interface getting in the way or letting mistakes slip through — especially around payments and KYC.",
      myRole:
        "Frontend development on the admin side of the platform, working directly with backend and product to turn grant-operations requirements into interfaces admin staff could rely on day to day.",
      whatIBuilt: [
        "Admin profile workflows for managing reviewer and applicant-facing accounts",
        "Review-stage filtering so admins can find applications by status quickly",
        "Split-payment validation to catch inconsistent or invalid payment splits before submission",
        "KYC flow improvements to reduce friction and error in identity verification",
        "Region filtering for programs that operate across different geographies",
        "Reporting views and access-control refinements tied to admin roles",
        "Transactional email templates for application and payment status updates",
      ],
      keyChallenges: [
        "Keeping a multi-stage review workflow (application → KYC → approval → payment → reporting) legible in one interface without overwhelming admins",
        "Validating split-payment scenarios on the client before they ever reach the backend, to prevent bad data from entering a financial workflow",
        "Building filtering and access control that respects role-based permissions without adding friction for day-to-day review work",
      ],
      result:
        "The improvements shipped into production and are in active use by HDF's grant operations team for day-to-day review, approval, and reporting work.",
      stack: ["React", "REST APIs", "Role-based access control", "Analytics", "Testing"],
    },
  },
  {
    slug: "mygiving",
    number: "02",
    title: "HDF MyGiving",
    org: "Human Development Fund",
    storyHeadline: "A better sponsorship experience for donors.",
    context:
      "A donor-facing sponsorship experience connected to the orphan sponsorship platform.",
    contribution: [
      "Sponsorship list/detail integration",
      "Payment & receipt flows",
      "API integration",
      "Authentication improvements",
      "Production usability fixes",
    ],
    stackLabel: ["React", "REST APIs", "Authentication", "Payments"],
    images: [
      { src: myGivingDashboardImg, alt: "HDF MyGiving — donor dashboard and giving summary" },
      { src: myGivingSignInImg, alt: "HDF MyGiving — donor sign-in" },
    ],
    caseStudy: {
      context:
        "MyGiving is the donor-facing side of HDF's orphan sponsorship platform — where a sponsor manages their sponsorship, sees who they support, and handles payments and receipts.",
      problem:
        "For a donor, this experience needs to feel simple and trustworthy: finding a sponsorship, understanding its status, making a payment, and getting a receipt, with no confusion about what's happened. Getting the list/detail flow and the payment/receipt loop right mattered more here than raw feature count.",
      myRole:
        "Frontend integration work connecting the donor-facing UI to the sponsorship platform's APIs, plus authentication and usability fixes discovered in production.",
      whatIBuilt: [
        "Sponsorship list and detail views wired to the underlying sponsorship API",
        "Payment and receipt flows for donors managing an active sponsorship",
        "API integration work connecting the frontend to sponsorship and payment data",
        "Authentication improvements for donor account access",
        "Usability fixes identified from real production usage",
      ],
      keyChallenges: [
        "Making sponsorship status and payment history easy to scan for a non-technical donor audience",
        "Keeping the payment-to-receipt loop clear and trustworthy, since this is a donation flow, not a generic transaction",
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
    org: "Carburant",
    storyHeadline: "Building interfaces around financial workflows.",
    context:
      "A billing and invoicing product (GetBilling / Billing Plus) built for Carburant, covering structured, data-heavy financial workflows in a production interface.",
    contribution: [
      "Product UI built in React",
      "REST API integration for billing data",
      "Production interface refinements",
    ],
    stackLabel: ["React", "JavaScript", "REST APIs"],
    images: [{ src: billingSuiteImg, alt: "Billing Suite — product dashboard screenshot" }],
    liveUrl: "https://suite.getbilling.co/",
    liveLabel: "Visit Live Site",
    caseStudy: {
      context:
        "Billing Suite (shipped as GetBilling / Billing Plus) is a billing and invoicing web application built at Carburant — the kind of structured, business-critical interface where getting the data model right on screen matters as much as how it looks.",
      problem:
        "Billing workflows are dense by nature: line items, statuses, totals, and history all need to stay legible without turning the interface into a spreadsheet.",
      myRole:
        "Frontend development on the product, building the interface in React and integrating it with the underlying REST APIs.",
      whatIBuilt: [
        "Core product UI in React",
        "REST API integration for billing and invoice data",
        "Production-facing interface refinements based on real usage",
      ],
      keyChallenges: [
        "Presenting billing data — line items, statuses, totals — clearly without overwhelming the user",
        "Keeping the interface reliable as a business-critical, production-facing tool",
      ],
      result: "Live in production as Carburant's billing product.",
      stack: ["React", "JavaScript", "REST APIs"],
    },
  },
  {
    slug: "zitu",
    number: "04",
    title: "ZITU Pop-Up Experience",
    org: "Independent / Client",
    storyHeadline: "What started as an e-invite became an event operations platform.",
    context:
      "The original requirement was a premium digital invitation for a fashion pop-up. As event requirements became clearer, the product expanded into registration, payment verification, voucher fulfilment, guest check-in, and event-day operations.",
    contribution: [
      "Premium event microsite",
      "Individual RSVP system",
      "One-email-per-attendee rule",
      "Human-readable RSVP references",
      "RSVP QR confirmation & check-in",
      "Paystack transaction initialization",
      "Server-side payment verification",
      "Voucher generation",
      "Voucher QR redemption",
      "Resend transactional emails",
      "Admin guest & payment operations",
      "Payment reconciliation workflows",
    ],
    stackLabel: ["React", "Paystack", "REST APIs", "QR / Email automation"],
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
        "ZITU Pop-Up Experience started as a single, well-defined ask: a premium digital invitation for a fashion pop-up event. As the event's real requirements surfaced, the scope grew into a full event-operations platform — registration, payment, voucher fulfilment, guest check-in, and day-of admin operations.",
      problem:
        "A one-off invite doesn't need transactional infrastructure. An event with paid entry, printed-style vouchers, and a physical check-in line does. The product had to grow from a microsite into something that could reliably verify a payment, issue a redeemable voucher, and let event staff check guests in at the door — without the scope creep turning into an unreliable system.",
      myRole:
        "End-to-end frontend and product-flow ownership: the invitation microsite, the RSVP and payment flow, the voucher and QR system, and the admin tooling used to run the event.",
      whatIBuilt: [
        "A premium event microsite for the invitation itself",
        "An individual RSVP system with a one-email-per-attendee rule to keep guest records clean",
        "Human-readable RSVP references so guests and staff could confirm attendance without scanning anything",
        "QR-based RSVP confirmation and check-in",
        "Paystack transaction initialization for paid entry",
        "Server-side payment verification before any voucher was issued",
        "Digital voucher generation, redeemable via QR at the event",
        "Resend-based transactional emails for confirmations and vouchers",
        "Admin tooling for guest management, payment status, and reconciliation",
      ],
      keyChallenges: [
        "Extending a simple invite product into paid registration and voucher fulfilment without a full platform rebuild",
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
        "The platform ran the pop-up's full guest journey end to end — invitation, paid RSVP, check-in, and voucher redemption — handling the event's registration and on-site operations in production.",
      stack: ["React", "Paystack", "REST APIs", "QR code generation/scanning", "Transactional email (Resend)"],
    },
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    slug: "paybond",
    title: "PayBond",
    org: "Carburant",
    type: "Web App",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://paybond-staging.vercel.app/",
    image: { src: payBondImg, alt: "PayBond product screenshot" },
  },
  {
    slug: "martial-arts-in-the-park",
    title: "Martial Arts In The Park",
    org: "Carburant",
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

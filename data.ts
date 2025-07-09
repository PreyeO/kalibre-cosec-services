import { Facebook, Instagram, Linkedin, Search, Twitter } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about_us" },
  {
    name: "Services",
    href: "#services",
    children: [
      {
        name: "ESG & SUSTAINABILITY ADVISORY",
        href: "/services/esg_advisory",
      },
      {
        name: "Corporate Governance Advisory & Board Effectiveness",
        href: "/services/governance-advisory",
      },
      {
        name: "Company Secretarial & Business Support",
        href: "/services/secretarial-support",
      },
      {
        name: "Investor Readiness & Deal Structuring",
        href: "/services/investor-readiness",
      },
      {
        name: "Compliance & Regulatory Solutions",
        href: "/services/compliance",
      },
      {
        name: "Board & C-Suites Training",
        href: "/services/board-training",
      },
      {
        name: "Outsourcing Services",
        href: "/services/outsourcing",
      },
    ],
  },
  { name: "Careers", href: "/careers" },
  { name: "Resources", href: "/resources" },
];

export const slides = [
  { src: "/hero-image.svg", alt: "Hero Image 1" },
  { src: "/hero-image.svg", alt: "Hero Image 2" },
];
export const values = [
  {
    value: "Integrity & Accountability",
    details:
      "We uphold the highest standards of ethical conduct, transparency and accountability,  in how we serve clients, structure solutions and engage with stakeholders across jurisdictions.",
    digit: "01",
  },
  {
    value: "Excellence & Expertise",
    details:
      "Our work reflects deep domain expertise, operational precision and a relentless pursuit of excellence. We bring strategic insight to every mandate, from ESG and governance to transactions and compliance.",
    digit: "02",
  },
  {
    value: "Impact-Driven",
    details:
      "We do not just advise, we deliver solutions that enhance enterprise value, investor confidence and long-term business sustainability.",
    digit: "03",
  },
];

export const serviceIntro = [
  {
    service: "ESG & SUSTAINABILITY ADVISORY",
    details:
      "End-to-end ESG advisory, from maturity assessments and strategy design to policy development, reporting and in-house sustainability enablement.",
  },
  {
    service: "CORPORATE GOVERNANCE ADVISORY & BOARD EFFECTIVENESS",
    details:
      "End-to-end ESG advisory, from maturity assessments and strategy design to policy development, reporting and in-house sustainability enablement.",
  },
];

export const serviceSlides = [
  {
    src: "/service-slide1.jpg",
    alt: "Service image",
    span: "ESG Maturity",
    title: " & Sustainability Assessment",
  },
  {
    src: "/service-slide2.jpg",
    alt: "Service image",
    span: "Corporate Governance Advisory",
    title: " & Board Effectiveness",
  },
  {
    src: "/service-slide3.jpg",
    alt: "Service image",
    span: "Company Secretarial",
    title: " & Business Support",
  },
  {
    src: "/service-slide1.jpg",
    alt: "Service image",
    span: "Investor Readiness",
    title: " & Deal Structuring",
  },
  {
    src: "/service-slide2.jpg",
    alt: "Service image",
    span: "Compliance ",
    title: "& Regulatory Solutions",
  },
  {
    src: "/service-slide3.jpg",
    alt: "Service image",
    span: "Board",
    title: " & C-Suites Training",
  },
  {
    src: "/service-slide1.jpg",
    alt: "Service image",
    span: "Outsourcing",
    title: " Services",
  },
];

export const clientTestimonials = [
  {
    src: "https://github.com/shadcn.png",
    alt: "Jane Doe",
    name: "Jane Doe",
    position: "Head of Legal, Fountain Meds",
    review:
      "The guidance we got from Kalibre CoSec helped us tighten our operational setup and prepare better for partner audits. They made the process easy to understand and more importantly, relevant to our kind of business.",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "Funpe Osobu",

    name: "Funpe sobu",
    position: "CEO, Sleek6ix",
    review:
      "We’re not your typical corporate setup, so getting legal clarity for our creative business was a bit daunting. Kalibre CoSec helped us understand what actually matters and how to structure without killing our flexibility.",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "Sijibomi Ogundele",
    name: "Sijibomi Ogundele",
    position: "CEO, Sujimoto Group",
    review:
      "For real estate investment, governance and compliance can’t be an afterthought. Kalibre CoSec helped us rethink our internal governance architecture and supported better policy alignment across business units. Their perspective is both strategic and grounded.",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "Daniel Owuna",
    name: "Daniel Owuna",
    position: "CEO, Autstrip",
    review:
      "Easy to work with, always on time and understood exactly what we needed, even before we did. Kalibre CoSec made our business setup painless.",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "Daniel Owuna,",
    name: "Daniel Owuna,",
    position: "CEO, Autstrip",
    review:
      "Easy to work with, always on time and understood exactly what we needed, even before we did. Kalibre CoSec made our business setup painless.",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "John Doe",
    name: "John Doe",
    position: "VP Legal, FairMoney",
    review:
      "Kalibre CoSec’s advisory support around board structure, licensing readiness and ESG policy reviews helped us meet the demands of a fast-changing fintech landscape. Their pan-African understanding and precision are hard to come by",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "Jane Doe",
    name: "Jane Doe",
    position: "Co-founder, Wallet.ng",
    review:
      "Before we entered new markets, Kalibre helped us understand what clean governance and documentation could do for investor confidence. They broke it down without legal jargon and that made a big difference.",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "John Doe",
    name: "John Doe",
    position: "CEO, Mono",
    review:
      "Kalibre CoSec gets startups. They balanced investor needs with our reality on the ground, no fluff, just real value",
  },
];

export const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/yourhandle",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://instagram.com/yourhandle",
  },
  {
    name: "X",
    icon: Twitter,
    href: "https://instagram.com/yourhandle",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://instagram.com/yourhandle",
  },
];

export const quickLinks = [
  {
    title: "About Us",
    href: "/",
  },
  {
    title: "Services",
    href: "/",
  },
  {
    title: "Careers",
    href: "/",
  },
  {
    title: "Resources",
    href: "/",
  },
];

export const legalLinks = [
  {
    title: "Privacy Policy",
    href: "/",
  },
  {
    title: "Terms and Conditions",
    href: "/",
  },
];

export const sectors = [
  {
    name: "Telecommunications",
    src: "/telephone.svg",
  },
  {
    name: "Capital Markets",
    src: "/capital.svg",
  },
  { name: "Oil and Gas", src: "/rig.svg" },
  {
    name: "Power and Energy",
    src: "/power.svg",
  },
  {
    name: "Insurance Brokage",
    src: "/insurance.svg",
  },
  {
    name: "Financial Services",
    src: "/wallet.svg",
  },
  {
    name: "Hospitality",
    src: "/people.svg",
  },
  {
    name: "agriculture",
    src: "/food.svg",
  },
];

export const solutions = [
  {
    title: "ESG Maturity & Materiality Assessments",
    icon: Search,
    description:
      "We assess your ESG maturity and identify what matters most to your stakeholders, operations and long-term goals. Through benchmarking, diagnostics and leadership workshops, we uncover ESG gaps and strategic opportunities. The output informs prioritisation, improves decision-making and ensures resources are allocated to the most material and value-driving ESG areas.",
  },
  {
    title: "ESG Strategy & Roadmap Development",
    icon: Search,
    description:
      "Moving from ambition to execution requires a focused ESG roadmap. Kalibre develops strategies that connect ESG themes with business goals, investor expectations and compliance triggers. With clear timelines,  leadership alignment, defined accountabilities and measurable outcomes, we enable implementation that is scalable, credible and responsive to evolving global and local demands.",
  },
  {
    title: " Sustainability & ESG Reporting",
    icon: Search,
    description:
      "We help you design ESG reporting that meets international standards and stakeholder expectations. Our support includes defining oversight roles, codifying ESG charters and aligning disclosures to strategy. Whether you are early-stage or listed, we ensure your reporting is credible, comparable and positioned to drive trust across investors, regulators and the public.",
  },
  {
    title: "ESG Frameworks Design & Policy Support",
    icon: Search,
    description:
      "We work with your leadership to establish ESG structures that balance regulatory compliance with strategic clarity. Our approach includes codifying oversight responsibilities, formalising ESG policies and embedding cross-functional coordination. The result is a governance foundation that enables effective board oversight, executive ownership and consistent ESG execution across your organisation.",
  },
  {
    title: " ESG Board & Executive Training",
    icon: Search,
    description:
      "Kalibre equips directors and executives with strategic ESG insights, tools, global reporting trends and regulatory developments. Our sessions are tailored to your industry, your organization's long-term goals and risk profile, enabling oversight bodies to engage ESG issues confidently and align decisions with corporate purpose and resilience.",
  },
];

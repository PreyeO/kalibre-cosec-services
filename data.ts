import { Facebook, Instagram, Linkedin, Search, Twitter } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about_us" },
  {
    name: "Services",
    href: "#services",
    children: [
      {
        name: "ESG & Sustainability Advisory",
        href: "/services/esg_advisory",
      },
      {
        name: "Corporate Governance Advisory & Board Effectiveness",
        href: "/services/corporate_governance_advisory",
      },
      {
        name: "Company Secretarial & Entity Management",
        href: "/services/company_secretarial_support",
      },
      {
        name: "Investment Readiness & Capital Advisory",
        href: "/services/investment_advisory",
      },
      {
        name: "Compliance & Regulatory Solutions",
        href: "/services/compliance_support",
      },
      {
        name: "Board & C-Suites Training",
        href: "/services/board_training",
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
    href: "/services/esg_advisory",
    alt: "Service image",
    span: "ESG Maturity",
    title: " & Sustainability Assessment",
  },
  {
    src: "/service-slide2.jpg",
    alt: "Service image",
    span: "Corporate Governance Advisory",
    title: " & Board Effectiveness",
    href: "/services/corporate_governance_advisory",
  },
  {
    src: "/service-slide3.jpg",
    alt: "Service image",
    span: "Company Secretarial",
    title: " & Business Support",
    href: "/services/company_secretarial_support",
  },
  {
    src: "/service-slide1.jpg",
    alt: "Service image",
    span: "Investor Readiness",
    title: " & Deal Structuring",
    href: "/services/investment_advisory",
  },
  {
    src: "/service-slide2.jpg",
    alt: "Service image",
    span: "Compliance ",
    title: "& Regulatory Solutions",
    href: "/services/compliance_support",
  },
  {
    src: "/service-slide3.jpg",
    alt: "Service image",
    span: "Board",
    title: " & C-Suites Training",
    href: "/services/board_training",
  },
  {
    src: "/service-slide1.jpg",
    alt: "Service image",
    span: "Outsourcing",
    title: " Services",
    href: "/services/outsourcing",
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
    href: "/privacy_policy",
  },
  {
    title: "Terms and Conditions",
    href: "/terms_conditions",
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

export const esgSolutions = [
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

export const esgServiceSteps = [
  {
    title: "Discovery & ESG Gap Assessment",
    digit: "01",
    description:
      "Understand your current ESG maturity, risks and stakeholder expectations.",
  },
  {
    title: "Strategy Design",
    digit: "02",
    description:
      "Co-develop a roadmap, materiality focus and approach aligned to your growth stage.",
  },
  {
    title: "Implementation Support",
    digit: "03",
    description:
      "Provide hands-on execution support through templates, training, advisory services and ESG policy rollout.",
  },
  {
    title: "Ongoing Advisory & Board Engagement",
    digit: "04",
    description:
      " Offer training, reporting reviews and board support to help embed ESG long-term.",
  },
];

export const corporateSolutions = [
  {
    title: " Board & Committee Effectiveness Assessments",
    icon: Search,
    description:
      "We assess board and committee performance through peer reviews, benchmarking and analytics. Our evaluations identify performance gaps, governance risks and areas for improvement. Findings are benchmarked against global standards and delivered with clear, investor-ready recommendations to strengthen oversight, enhance leadership effectiveness and support long-term value creation and stakeholder confidence.",
  },
  {
    title: " Corporate Governance Evaluation",
    icon: Search,
    description:
      "We evaluate governance structures for alignment with transparency, accountability and sustainability principles. Our reviews apply global frameworks and regulatory benchmarks tailored to your growth trajectory and risk profile. The goal is to ensure governance maturity supports strategy execution, decision-making quality and trust among investors, regulators and other key stakeholders.",
  },
  {
    title: "Director Selection & Nominee Services",
    icon: Search,
    description:
      "We help structure effective boards by identifying independent directors or providing nominee and shareholder services. Our approach addresses diversity, regulatory alignment, independence requirements and strategic capabilities. By tailoring board composition to your organizational needs, we help build effective oversight structures aligned with long-term growth, resilience and stakeholder expectations.",
  },
  {
    title: " Codification of Governance Frameworks",
    icon: Search,
    description:
      "We design and document governance frameworks through clear charters, protocols and policy structures. These frameworks ensure regulatory alignment, clarify oversight responsibilities and embed best practices across your organization. Codification supports investor trust, improves accountability and builds governance systems that grow with the company and adapt to shifting stakeholder expectations.",
  },
  {
    title: "Remuneration Benchmarking & Policy Advisory",
    icon: Search,
    description:
      "We benchmark director and executive compensation using market-aligned data to ensure fairness, performance alignment and stakeholder confidence. Our advisory services deliver tailored policies and disclosures that meet regulatory expectations. We focus on transparency, retention and reward structures that incentivize leadership and drive sustainable, long-term value creation for your enterprise.",
  },
  {
    title: "Whistleblowing Infrastructure Setup",
    icon: Search,
    description:
      "We implement secure whistleblowing systems to strengthen internal accountability and regulatory compliance. Our services include policy drafting, reporting channels, case management protocols and optional hosting support. These confidential mechanisms help reinforce ethical culture, protect against misconduct and satisfy global governance and ESG reporting expectations through tested, scalable frameworks.",
  },
];

export const corporateServiceSteps = [
  {
    title: "Discovery & Governance Review",
    digit: "01",
    description:
      " A comprehensive review of governance structures, board composition and policy landscape to identify gaps and opportunities.",
  },
  {
    title: "Strategic Advisory",
    digit: "02",
    description:
      "A tailored plan addressing board structure, governance processes and policy enhancements based on specific organisational needs.",
  },
  {
    title: "Implementation Support",
    digit: "03",
    description:
      "Codification of charters, execution of evaluations and director onboarding to embed governance practices across operations.",
  },
  {
    title: "Ongoing Governance Advisory",
    digit: "04",
    description:
      "Continual advisory support through policy updates, board performance reviews and compliance alignment as regulations evolve.",
  },
];

export const secreterailSolutions = [
  {
    title: "Entity Formation & Corporate Structuring",
    icon: Search,
    description:
      "We support corporations with seamless company incorporation, ensuring full regulatory registration and compliant entity structuring. Our comprehensive services include shareholder documentation, directorship appointments, regulatory liaison and strategic guidance on designing legal entities that support scalable growth, efficient operations and align with your long-term business objectives and compliance requirements.",
  },
  {
    title: "Meeting Support",
    icon: Search,
    description:
      "We provide end-to-end professional support for board, shareholders and committee meetings, including scheduling, agenda preparation, minute-taking, resolution drafting and follow-up tracking. Our service ensures governance continuity, accurate documentation, compliance with legal requirements and smooth facilitation of all corporate decision-making processes.ng governance continuity and compliance with relevant legal frameworks.",
  },
  {
    title: "Entity Lifecycle Management",
    icon: Search,
    description:
      "We manage the full lifecycle of your corporate entities, including formation, registration, restructuring and reorganizations. Our team expertly handles share capital adjustments, directorship changes, registered office updates and ensures timely, accurate and compliant filings across multiple jurisdictions, enabling seamless corporate governance, operational agility and alignment with evolving regulatory requirements.",
  },
  {
    title: "Corporate Records & Registers Management",
    icon: Search,
    description:
      "We maintain accurate, up-to-date statutory registers, shareholder ledgers, director logs and other essential corporate records. Our secure management system ensures strict compliance with legal standards, facilitates audit readiness, enhances corporate transparency and supports organizations in meeting regulatory requirements efficiently across multiple jurisdictions, reducing risk and improving governance outcomes.",
  },
  {
    title: "Statutory Compliance & Regulatory Filings (Local & Cross-Border)",
    icon: Search,
    description:
      "We provide comprehensive management of statutory compliance and regulatory filings with local and international authorities. This includes annual returns, post-incorporation updates, share structure amendments and coordination of multi-jurisdictional filings, ensuring timely compliance and minimizing regulatory risks across borders.",
  },
  {
    title: "Digital Solutions",
    icon: Search,
    description:
      "We deliver technology-enabled corporate secretarial services, including secure digital record-keeping, electronic signatures, virtual board meeting facilitation and real-time compliance monitoring. These solutions enhance operational efficiency, improve governance transparency and support remote collaboration across distributed teams and jurisdictions.",
  },
];

export const secreterialServiceSteps = [
  {
    title: "Onboarding & Legal Review",
    digit: "01",
    description:
      "A thorough assessment of entity structure, registration history and statutory obligations identifies key compliance priorities.",
  },
  {
    title: "Compliance & Filings Setup",
    digit: "02",
    description:
      "A customized compliance calendar is set up to align governance activities with regulatory deadlines and updates records as required.",
  },
  {
    title: "Ongoing Support & Advisory",
    digit: "03",
    description:
      " Clients receive responsive, on-demand support for meeting administration, filings and governance record management.",
  },
  {
    title: "Optional Retainery",
    digit: "04",
    description:
      "We offer quarterly or annual retainers for companies requiring continuous company secretarial oversight and governance tracking.",
  },
];

export const investmentSolutions = [
  {
    title: "Investor Network Access",
    icon: Search,
    description:
      "We facilitate curated introductions to venture capital firms, angel investors and private equity funds that align with your startup’s sector, growth stage and capital goals. Our selective approach ensures that founders engage with the right investors at the right time to unlock capital, strategic guidance and long-term business value.",
  },
  {
    title: "Cap Table & Documentation Clean-Up",
    icon: Search,
    description:
      "We optimize your capital structure and prepare critical investor-facing documents to ensure alignment with investor expectations. Our team prepares and refines key documents including shareholder agreements, investor rights frameworks and equity terms. The goal is to support credible negotiations, reduce legal friction and present a clean, investor-ready profile to the market.",
  },
  {
    title: "Due Diligence Readiness",
    icon: Search,
    description:
      "We prepare you for investor scrutiny by conducting mock due diligence, identifying gaps and assembling comprehensive, well-structured data rooms. Our process anticipates investor expectations and presents your business in a clear, organized and defensible format that accelerates decision-making and increases confidence in your operational, financial and legal readiness.",
  },
  {
    title: "Pitch & Internal Alignment",
    icon: Search,
    description:
      "We align your investor-facing narrative with the actual structure and governance of your company. From pitch decks to policy frameworks, we ensure consistency across messaging, ownership, risk posture and execution. This alignment enhances credibility during investor conversations and builds trust from early engagement through deal negotiation and post-close integration.",
  },
  {
    title: "Governance & ESG Integration",
    icon: Search,
    description:
      "We build tailored governance frameworks that evolve with your company’s growth stage and funding lifecycle. From Seed to Series C and beyond, we design governance that is scalable, founder-friendly and investment-grade. ESG considerations are integrated early to meet investor priorities, enhance transparency and support long-term commercial and regulatory resilience.",
  },
  {
    title: "Deal Structuring & Closing Support",
    icon: Search,
    description:
      "We guide founders through the full deal lifecycle, from understanding term sheets to negotiating investor rights and closing documents. Our support ensures that deal terms are commercially sound, legally robust and strategically aligned with long-term growth goals. We protect founder interests while facilitating successful closings with speed and clarity.",
  },
];

export const investmentServiceSteps = [
  {
    title: "Discovery",
    digit: "01",
    description:
      " A comprehensive assessment of investor documentation, governance frameworks and capital structure to identify strengths and gaps.",
  },
  {
    title: "Strategic Roadmap & Action Plan",
    digit: "02",
    description:
      "Development of a tailored roadmap to align equity and compliance frameworks with investor expectations.",
  },
  {
    title: "Documentation & Deal Execution Support",
    digit: "03",
    description:
      "Preparation and review of key agreements, capital structure alignment and guidance throughout deal execution phases.",
  },
  {
    title: "Post-Investment Support",
    digit: "04",
    description:
      "Ongoing advisory to scale effectively and compliance systems in line with business growth and subsequent funding rounds.",
  },
];

export const complianceSolutions = [
  {
    title: "Compliance Framework Design & Implementation",
    icon: Search,
    description:
      "We help companies build or formalize compliance functions by establishing clear internal policies, reporting procedures and controls documentation. Tailored compliance frameworks are designed to fit each business’ unique needs, enabling effective risk management, regulatory adherence and a strong foundation for ongoing compliance across all operational areas and jurisdictions.",
  },
  {
    title: "AML/CPT/CFT & KYC Program Support",
    icon: Search,
    description:
      "We support financial institutions, fintechs and other regulated companies in designing and enhancing AML, CPT, CFT and KYC programs. Our services cover policy development, staff training, regulator documentation and risk-based compliance practices that strengthen defenses against financial crime and ensure compliance with global and local regulatory requirements.",
  },
  {
    title: "Data Protection & Privacy Compliance",
    icon: Search,
    description:
      "As a licensed Data Protection Compliance Organisation, we help businesses navigate complex data protection laws and regulations. Our services include translating privacy principles into operational policies, developing privacy notices, managing data subject requests, conducting impact assessments and providing board and executive training to ensure accountability and compliance.",
  },
  {
    title: "Licensing & Regulatory Approvals",
    icon: Search,
    description:
      "Assisting businesses with obtaining and renewing essential licenses, permits and registrations required for lawful operation across multiple markets. Services include managing application processes, preparing regulatory submissions and compliance documentation, ensuring timely approvals and renewals to maintain uninterrupted business operations and adherence to diverse local, regional and international regulatory requirements.",
  },
  {
    title: "Training & Awareness Programs",
    icon: Search,
    description:
      "Delivering tailored training programs for staff and leadership designed to embed a strong compliance culture. Sessions enhance understanding of regulatory requirements, risk management and ethical business practices. Empowering teams to uphold corporate standards, identify potential risks early and proactively address compliance challenges across all levels of the organisation.",
  },
  {
    title: "Regulatory Reporting & Liaison",
    icon: Search,
    description:
      "Managing regulatory filings and reporting obligations with accuracy and promptness. Serving as a trusted liaison between businesses and regulatory authorities to ensure clear communication, address issues swiftly and maintain compliance. Supporting ongoing adherence to legal requirements and fostering positive relationships with regulators across all operational jurisdictions.",
  },
];

export const complianceServiceSteps = [
  {
    title: "Regulatory Assessment & Risk Mapping",
    digit: "01",
    description:
      "Review of your operations, licenses and exposure areas to flag jurisdictional gaps and regulatory risk points.",
  },
  {
    title: "Compliance Framework Design",
    digit: "02",
    description:
      "A tailored compliance program is developed covering licensing, AML/CFT, data protection and internal policy controls.",
  },
  {
    title: "Implementation & Monitoring",
    digit: "03",
    description:
      " Align workflows with regulatory calendars, manage filings and embed controls that support readiness for audits and reviews.",
  },
  {
    title: "Ongoing Advisory",
    digit: "04",
    description:
      "Clients may engage us on a project or retained basis to handle regulatory responses, licensing updates or coordination.",
  },
];

export const trainings = [
  {
    title: "Governance Fundamentals for Boards",
    digit: "01",
  },
  {
    title: "ESG Strategy & Oversight for Leadership",
    digit: "02",
  },
  {
    title: "Compliance & Risk Management Training",
    digit: "03",
  },
  {
    title: "Board Performance & Effectiveness Workshops",
    digit: "04",
  },
  {
    title: "Custom Sessions Based on Client Needs",
    digit: "05",
  },
];

export const deliveries = [
  {
    title:
      "Board and executive retreats, senior leadership teams, C-suite engagements",
    span: "In-person: ",
  },
  {
    title: " Live, interactive 60–90 minute sessions",
    span: "Virtual Workshops:",
  },
  {
    title: " Flexible sessions designed for internal leadership programs",
    span: "Modular:",
  },
  {
    title:
      "Board Onboarding: Specialized training for newly appointed directors",
    span: "04",
  },
];

export const outsourceSolutions = [
  {
    title: "Payroll & Benefits Administration",
    icon: Search,
    description:
      "End-to-end payroll processing, benefits structuring and statutory compliance across multiple jurisdictions. Designed to meet investor-grade standards, ensuring timely disbursements, accurate reporting and full alignment with local labor and tax regulations.",
  },
  {
    title: "HR Advisory, Payroll & Employer of Record Services",
    icon: Search,
    description:
      "We draft and maintain compliant employment contracts, handbooks and HR frameworks tailored to local labor laws. We support staff onboarding and offboarding, full EOR services, personnel file audits and internal controls that reduce employment-related risk.",
  },
  {
    title: "Finance & Accounting Support",
    icon: Search,
    description:
      "We provide finance function support, including bookkeeping, reconciliations, cashflow tracking, statutory filings and internal financial reporting. Our team helps you maintain audit-ready records and meet tax and regulatory obligations without growing your in-house finance team prematurely.",
  },
  {
    title: "Business Operations Support",
    icon: Search,
    description:
      "Day-to-day support across key operational tasks, including vendor coordination, document management and internal policy implementation. Ideal for lean teams needing structured back-office support without the overhead of building an in-house function.",
  },
];
export const dataCollectionList = [
  "Delivering and managing the services and products you request",

  "Communicating important updates, responding to inquiries and providing customer support",

  "Meeting legal and regulatory obligations, including tax and reporting requirements",

  "Conducting risk assessments, fraud prevention and security measures",

  "Enhancing and personalizing your experience on our website and services",

  "Marketing communications, where permitted by law and your consent",

  "Research and analysis to improve our offerings and business operations",
];

export const privacyListSeven = [
  "Access and receive a copy of your personal data held by us",
  "Rectify inaccurate or incomplete data",
  "Erase your data in certain circumstances",
  "Restrict or object to processing of your data",
  "Request portability of your data to another providers",
  "Withdraw consent where processing is based on consent",
  "Lodge complaints with relevant data protection authorities",
];

export const termsList = [
  {
    title:
      " refers to any individual or legal entity engaging Kalibre’s services.",
    span: "Client",
  },
  {
    title:
      " means any professional or digital services provided by Kalibre including but not limited to corporate governance advisory, company secretarial services, compliance, investor readiness, outsourcing solutions, and investor matchmaking.",
    span: " Services",
  },
  {
    title:
      "  means all non-public business or technical information shared during the engagement.",
    span: "Confidential Information",
  },
  {
    title:
      " means any data, documents, intellectual property, or other materials provided by the Client for use in connection with Kalibre’s Services.",
    span: "Client Materials",
  },
];

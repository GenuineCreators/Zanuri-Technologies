export type Service = {
  slug: string;
  title: string;
  headline: string;
  short: string;
  description: string;
  image: string;
  icon: string;
  bestFor: string[];
  deliverables: string[];
  outcomes: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    headline:
      "Mobile products that feel premium, perform smoothly, and help your business stay in your customer’s pocket.",
    short:
      "Native-feeling mobile apps for Android and iOS, built for growth, usability, and real business outcomes.",
    description:
      "We design and build mobile apps that go beyond looking good. Zanuri creates mobile experiences that help businesses sell better, serve customers faster, streamline operations, and create stronger loyalty. Whether you need a customer app, a service booking platform, an internal field operations tool, or a membership platform, we plan the product carefully, build for scale, and polish every detail so the app feels trustworthy from the first tap.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    icon: "Smartphone",
    bestFor: [
      "Customer-facing apps for startups and established companies",
      "Booking, delivery, marketplace, and membership applications",
      "Internal apps for teams, field agents, logistics, or service operations",
    ],
    deliverables: [
      "Product strategy and feature planning",
      "UX flows, wireframes, and polished UI screens",
      "Frontend mobile app development",
      "Backend integration and API connection",
      "Testing, bug fixing, and launch support",
      "App maintenance, monitoring, and iteration roadmap",
    ],
    outcomes: [
      "Stronger customer engagement through a better user experience",
      "Improved operational speed and less manual coordination",
      "A launch-ready product designed for future updates and scaling",
    ],
    process: [
      {
        title: "Discovery and product planning",
        description:
          "We clarify business goals, user journeys, key features, and launch priorities before writing code.",
      },
      {
        title: "Experience design",
        description:
          "We design an interface that is clear, modern, and easy for your users to adopt.",
      },
      {
        title: "Development and integrations",
        description:
          "We build the app, connect it to your systems, and prepare the product for real usage.",
      },
      {
        title: "Testing and release support",
        description:
          "We test performance, polish the flow, and help prepare the app for production launch.",
      },
    ],
    faqs: [
      {
        question: "Can you build both Android and iPhone apps?",
        answer:
          "Yes. We plan the product so you can reach both platforms efficiently while keeping quality high and the experience consistent.",
      },
      {
        question: "Can you also design the app before development?",
        answer:
          "Yes. Zanuri handles strategy, user flows, wireframes, interface design, and the actual build so the product feels cohesive from start to finish.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    headline:
      "Fast, modern websites and web platforms that look sharp, communicate clearly, and convert attention into action.",
    short:
      "Marketing websites, customer portals, dashboards, and web platforms built with performance and clarity in mind.",
    description:
      "Your website should do more than exist online. It should communicate your value, make your brand feel credible, and move visitors toward the next step. Zanuri builds websites and web applications that are strategic, responsive, and conversion-focused. From company websites and landing pages to secure dashboards and custom client portals, we build digital experiences that match your business goals and support long-term growth.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    icon: "Globe",
    bestFor: [
      "Corporate websites and product marketing sites",
      "Custom dashboards, admin panels, and portals",
      "Business platforms that need speed, flexibility, and scale",
    ],
    deliverables: [
      "Information architecture and page strategy",
      "High-quality responsive UI design",
      "Frontend and backend web development",
      "CMS or content editing setup where needed",
      "Technical SEO and performance best practices",
      "Launch support and future enhancement planning",
    ],
    outcomes: [
      "A stronger online presence that feels credible and current",
      "Improved user journeys for leads, customers, and internal teams",
      "Better conversion potential through clear structure and messaging",
    ],
    process: [
      {
        title: "Structure the message",
        description:
          "We define what the website must communicate, who it serves, and how visitors should move through it.",
      },
      {
        title: "Design the interface",
        description:
          "We create a visual system that reflects your brand and makes each page feel intentional.",
      },
      {
        title: "Develop for performance",
        description:
          "We build responsive pages, fast components, and scalable web architecture.",
      },
      {
        title: "Launch and refine",
        description:
          "We prepare the site for production and keep improving based on feedback and business goals.",
      },
    ],
    faqs: [
      {
        question: "Do you only build marketing websites?",
        answer:
          "No. We also build web applications, dashboards, portals, and platforms that support operations, customers, and internal workflows.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can refresh the design, improve the content structure, optimize performance, and rebuild the experience on a stronger technical foundation.",
      },
    ],
  },
  {
    slug: "payments-and-integrations",
    title: "Payments & Integrations",
    headline:
      "Connect the systems your business depends on and remove friction from the way money, data, and workflows move.",
    short:
      "Payment flows and business integrations that reduce manual work and create smoother customer journeys.",
    description:
      "When payments and systems do not talk to each other properly, the result is delays, lost visibility, and frustrated users. Zanuri helps businesses connect payment gateways, communication tools, CRMs, analytics tools, internal systems, and third-party platforms so operations feel seamless. We design integrations with reliability, security, and business continuity in mind so your team can work smarter while your customers enjoy a more dependable experience.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    icon: "CreditCard",
    bestFor: [
      "Online payments and checkout flows",
      "Connecting apps to CRMs, ERPs, or internal systems",
      "Automating repetitive data transfer and notifications",
    ],
    deliverables: [
      "Integration architecture planning",
      "Payment gateway setup and implementation",
      "API integration with third-party services",
      "Webhook handling and event-driven workflows",
      "Error logging and monitoring setup",
      "Testing for transaction and sync reliability",
    ],
    outcomes: [
      "Less manual work and fewer processing mistakes",
      "Smoother payments and stronger user trust",
      "Better visibility across your business systems",
    ],
    process: [
      {
        title: "System mapping",
        description:
          "We review your current tools, data flow, and business dependencies before defining the right integration model.",
      },
      {
        title: "Secure connection design",
        description:
          "We structure APIs, authentication, and events to keep your data and transactions dependable.",
      },
      {
        title: "Implementation and testing",
        description:
          "We connect the systems, simulate edge cases, and verify that workflows remain stable under real usage.",
      },
      {
        title: "Monitoring and support",
        description:
          "We help your team monitor failures, retry rules, and future expansion points.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate local and international payment systems?",
        answer:
          "Yes. We can assess your payment requirements and implement a suitable integration strategy based on your market, product, and customer journey.",
      },
      {
        question: "Can you connect new systems to our existing software?",
        answer:
          "Yes. We can work with existing platforms where practical and design a clean integration layer around them.",
      },
    ],
  },
  {
    slug: "backend-and-databases",
    title: "Backend & Databases",
    headline:
      "Reliable backend systems and clean database architecture that give your product the stability to grow with confidence.",
    short:
      "Scalable server-side systems, APIs, and database design for robust digital products and business platforms.",
    description:
      "A polished interface means little without a dependable backend behind it. Zanuri designs backend systems and database structures that support performance, security, maintainability, and long-term product evolution. We create APIs, admin logic, authentication flows, and structured data models that keep your platform responsive and your information organized. The result is a stronger technical foundation that makes future improvements faster and safer.",
    image:
      "https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=1200&q=80",
    icon: "Database",
    bestFor: [
      "Startups building custom digital products",
      "Growing businesses replacing fragile spreadsheets or manual processes",
      "Companies that need stable APIs and secure data management",
    ],
    deliverables: [
      "Database schema design and optimization",
      "Backend logic and API development",
      "Authentication, roles, and permissions",
      "Admin workflows and business rules",
      "Security and performance improvements",
      "Documentation for maintainability and handover",
    ],
    outcomes: [
      "Cleaner operations and more dependable product behavior",
      "Data structures that support reporting and future features",
      "Reduced technical risk as usage grows over time",
    ],
    process: [
      {
        title: "Technical architecture",
        description:
          "We define the right backend shape based on your users, data relationships, and product complexity.",
      },
      {
        title: "Core build",
        description:
          "We implement APIs, data models, permissions, and background logic in a clean and scalable way.",
      },
      {
        title: "Hardening",
        description:
          "We review security, optimize queries, and improve performance for real-world usage.",
      },
      {
        title: "Documentation and readiness",
        description:
          "We document key logic and prepare the system for a smoother handover or future expansion.",
      },
    ],
    faqs: [
      {
        question: "Can you work on a backend without redesigning the whole product?",
        answer:
          "Yes. We can improve or rebuild server-side layers while preserving the parts of your product that already work well.",
      },
      {
        question: "Do you also handle admin dashboards and permissions?",
        answer:
          "Yes. We can build the backend logic for role-based access, internal dashboards, and operational workflows.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    headline:
      "Interfaces that make your business look more credible and products that feel easier to understand, trust, and use.",
    short:
      "Strategic product design and interface systems that improve usability, adoption, and perceived quality.",
    description:
      "Great design is not decoration. It is how users understand your product, trust your brand, and complete the actions that matter. Zanuri designs websites, apps, dashboards, and product flows with a strong focus on clarity, experience, and conversion. We combine user thinking with modern visual design so your platform feels polished, intuitive, and aligned with your business goals from the first interaction.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    icon: "Palette",
    bestFor: [
      "Businesses launching a new product or refreshing an old one",
      "Companies that want stronger conversion and usability",
      "Teams that need a more consistent design system across platforms",
    ],
    deliverables: [
      "Research-informed product structure",
      "Wireframes and user journey mapping",
      "High-fidelity interface design",
      "Design systems and reusable component thinking",
      "Responsive layouts for web and mobile",
      "Developer-ready screens and handoff guidance",
    ],
    outcomes: [
      "A more intuitive product experience for users",
      "Stronger brand perception and visual consistency",
      "Less friction during development thanks to clearer design decisions",
    ],
    process: [
      {
        title: "Research and alignment",
        description:
          "We learn about your users, your market, and the business goals the design must support.",
      },
      {
        title: "Flow and structure",
        description:
          "We simplify the journey, organize content, and shape the experience around user confidence.",
      },
      {
        title: "Visual design",
        description:
          "We build a premium interface language with clarity, consistency, and modern aesthetics.",
      },
      {
        title: "Handoff and refinement",
        description:
          "We support implementation with clear files, design notes, and iterative polish where needed.",
      },
    ],
    faqs: [
      {
        question: "Can you redesign only part of our product?",
        answer:
          "Yes. We can improve a single flow, a specific screen set, or an entire product experience depending on your priority.",
      },
      {
        question: "Do you design for developers too?",
        answer:
          "Yes. Our design process considers implementation reality, reusable patterns, and a smoother developer handoff.",
      },
    ],
  },
  {
    slug: "business-analysis",
    title: "Business Analysis",
    headline:
      "Sharper product decisions, clearer requirements, and better project direction before expensive assumptions turn into costly mistakes.",
    short:
      "Business analysis that turns ideas, pain points, and stakeholder needs into clear product direction and requirements.",
    description:
      "Many digital projects fail because the underlying business thinking was not clarified early enough. Zanuri helps businesses define scope, map workflows, analyze pain points, and translate ideas into practical digital requirements. Our business analysis support brings structure to what you want to build, who it serves, what success should look like, and how to prioritize the work. This reduces confusion, strengthens alignment, and increases the odds of building the right solution the first time.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    icon: "Briefcase",
    bestFor: [
      "Businesses turning manual workflows into software",
      "Teams with complex stakeholder needs or unclear scope",
      "Founders who need sharper feature priorities before building",
    ],
    deliverables: [
      "Discovery workshops and requirement gathering",
      "Workflow analysis and process mapping",
      "Feature prioritization and scope framing",
      "User stories and business rules",
      "Solution recommendations and project framing",
      "Clear documentation for design and development teams",
    ],
    outcomes: [
      "Reduced project risk through better clarity before development",
      "Stronger alignment between business teams and technical teams",
      "A more focused roadmap based on value, not guesswork",
    ],
    process: [
      {
        title: "Understand the business",
        description:
          "We learn your operations, constraints, users, and goals in practical business language.",
      },
      {
        title: "Map current and future workflows",
        description:
          "We identify gaps, duplication, inefficiencies, and opportunities for better digital support.",
      },
      {
        title: "Define requirements",
        description:
          "We turn findings into structured requirements that are clear enough to guide design and development.",
      },
      {
        title: "Prioritize the build",
        description:
          "We help shape an MVP, phase plan, or delivery roadmap that matches your budget and urgency.",
      },
    ],
    faqs: [
      {
        question: "Do we need business analysis even if we already have an idea?",
        answer:
          "Yes. A strong idea still needs structure, requirements, and decision clarity so the product solves the right problem and avoids unnecessary build waste.",
      },
      {
        question: "Can business analysis be a standalone service?",
        answer:
          "Yes. We can support analysis as a separate engagement or as the first phase of a larger delivery project.",
      },
    ],
  },
  {
    slug: "enterprise-apps",
    title: "Enterprise Apps",
    headline:
      "Internal systems that help serious organizations manage complexity with more control, visibility, and efficiency.",
    short:
      "Custom business software for approvals, operations, reporting, teams, and enterprise workflows.",
    description:
      "As organizations grow, off-the-shelf tools often stop fitting the way work actually happens. Zanuri develops enterprise applications that support approvals, operations, reporting, workflow management, internal communication, and specialized business processes. We focus on structure, permissions, reliability, and usability so your teams can work inside a system that matches the real shape of your business instead of forcing your business to adapt to poor software.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    icon: "Building2",
    bestFor: [
      "Organizations with multi-step internal workflows",
      "Teams managing approvals, reporting, or compliance-heavy operations",
      "Companies that need role-based enterprise software tailored to their process",
    ],
    deliverables: [
      "Workflow and permission architecture",
      "Custom admin panels and internal interfaces",
      "Reporting dashboards and records management",
      "Integration with existing enterprise systems where needed",
      "Security-aware user and data controls",
      "Rollout guidance and support materials",
    ],
    outcomes: [
      "Better control across departments and business functions",
      "Less dependence on disconnected spreadsheets and manual follow-up",
      "More reliable reporting and operational visibility",
    ],
    process: [
      {
        title: "Operational assessment",
        description:
          "We map the workflows, approvals, and records that matter most to your organization.",
      },
      {
        title: "System architecture",
        description:
          "We design a secure, role-aware system structure that fits your hierarchy and processes.",
      },
      {
        title: "Phased delivery",
        description:
          "We build in practical phases so your organization gets value earlier while reducing rollout risk.",
      },
      {
        title: "Adoption support",
        description:
          "We prepare the platform for use with clear workflows, sensible training support, and future enhancement paths.",
      },
    ],
    faqs: [
      {
        question: "Can enterprise apps connect to our current tools?",
        answer:
          "Yes. Where possible, we can integrate with existing systems so your team does not have to restart from zero.",
      },
      {
        question: "Can you build with role-based access and approvals?",
        answer:
          "Yes. Enterprise software is strongest when permissions, accountability, and workflow rules are built in from the start.",
      },
    ],
  },
  {
    slug: "testing-and-qa",
    title: "Testing & QA",
    headline:
      "Quality assurance that protects your reputation, reduces avoidable issues, and helps your product feel dependable in the real world.",
    short:
      "Structured quality assurance to uncover usability, logic, performance, and release risks before they affect users.",
    description:
      "Customers rarely forgive software that feels broken, confusing, or inconsistent. Zanuri provides testing and quality assurance support to help teams launch with more confidence. We review user flows, edge cases, system behavior, and release readiness so issues are caught early rather than after reputational damage. Good QA improves product trust, reduces rework, and gives your team a stronger foundation for steady growth.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    icon: "ShieldCheck",
    bestFor: [
      "Teams preparing for launch or major release updates",
      "Products with complex flows and multiple user roles",
      "Businesses that want more confidence before going live",
    ],
    deliverables: [
      "Test planning and scenario design",
      "Manual QA on critical user flows",
      "Bug documentation and issue prioritization",
      "Regression testing support",
      "Release readiness reviews",
      "Recommendations for improving product reliability",
    ],
    outcomes: [
      "Fewer avoidable user-facing issues at launch",
      "A smoother product experience and stronger trust",
      "Better development focus through clearer bug reporting",
    ],
    process: [
      {
        title: "Risk review",
        description:
          "We identify the journeys, features, and system dependencies that matter most before testing begins.",
      },
      {
        title: "Scenario execution",
        description:
          "We test realistic user flows, variations, and problem points to uncover instability and friction.",
      },
      {
        title: "Defect reporting",
        description:
          "We organize issues clearly so your team knows what to fix first and why it matters.",
      },
      {
        title: "Release confidence",
        description:
          "We re-test critical fixes and help assess whether the product is ready for deployment.",
      },
    ],
    faqs: [
      {
        question: "Can QA help even if our product is already live?",
        answer:
          "Yes. QA can improve current flows, support upcoming releases, and help you reduce recurring user complaints.",
      },
      {
        question: "Do you only do technical testing?",
        answer:
          "No. We also review the experience from a user perspective so the product is not just functional, but also understandable and trustworthy.",
      },
    ],
  },
  {
    slug: "maintenance-and-support",
    title: "Maintenance & Support",
    headline:
      "Ongoing technical support that keeps your product useful, current, and dependable after launch.",
    short:
      "Post-launch support, issue resolution, performance care, and iteration guidance for digital products that need continuity.",
    description:
      "Launching is important, but staying stable and improving over time is what keeps a digital product valuable. Zanuri provides maintenance and support for websites, apps, portals, and business systems that need continuous care. We help fix issues, monitor system health, support updates, and guide next improvements so your platform remains a business asset rather than a growing technical burden.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    icon: "Wrench",
    bestFor: [
      "Businesses that need a dependable technical partner after launch",
      "Products that require updates, fixes, and iterative improvements",
      "Teams without a full in-house engineering function",
    ],
    deliverables: [
      "Issue diagnosis and bug fixing",
      "Performance checks and ongoing technical care",
      "Security and dependency review guidance",
      "Feature enhancement support",
      "Content or operational change assistance where relevant",
      "Technical partner continuity for future growth",
    ],
    outcomes: [
      "Reduced downtime risk and better product continuity",
      "Faster response when issues or changes arise",
      "A healthier product that stays aligned with your evolving business",
    ],
    process: [
      {
        title: "Support onboarding",
        description:
          "We review the current system, major dependencies, and the most important business-critical areas.",
      },
      {
        title: "Stabilization",
        description:
          "We fix key issues, reduce recurring pain points, and prioritize the most meaningful improvements.",
      },
      {
        title: "Ongoing monitoring",
        description:
          "We stay engaged with the product and help track maintenance priorities over time.",
      },
      {
        title: "Iteration planning",
        description:
          "We help your business decide what to improve next so support stays aligned with growth.",
      },
    ],
    faqs: [
      {
        question: "Can you maintain software built by another team?",
        answer:
          "Yes. We can assess the current system, identify risk areas, and take over support in a structured way where practical.",
      },
      {
        question: "Is maintenance only for bugs?",
        answer:
          "No. Maintenance also includes updates, performance care, improvements, technical guidance, and product evolution support.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    headline:
      "Growth-focused digital marketing that helps the right people find your business, understand your value, and take action.",
    short:
      "Digital growth support covering campaigns, messaging, landing pages, content direction, and measurable customer acquisition.",
    description:
      "Building software is powerful, but growth requires visibility too. Zanuri supports businesses with digital marketing that is tied to strategy, content clarity, and conversion. We help position your offer, sharpen messaging, improve landing pages, support campaigns, and connect traffic efforts to business outcomes. Our approach focuses on relevance and credibility so your marketing does not simply create noise, but brings more qualified attention to what you offer.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    icon: "Megaphone",
    bestFor: [
      "Businesses launching a new offer or service",
      "Companies that want stronger digital visibility and conversion",
      "Teams that need better alignment between marketing and product experience",
    ],
    deliverables: [
      "Offer messaging and campaign direction",
      "Landing page and conversion recommendations",
      "Content and channel planning support",
      "Performance-oriented digital campaign setup guidance",
      "Marketing analytics thinking and reporting structure",
      "Improvement ideas based on audience and funnel behavior",
    ],
    outcomes: [
      "Better visibility with more strategic messaging",
      "Stronger conversion potential from digital traffic",
      "Improved alignment between marketing promises and product delivery",
    ],
    process: [
      {
        title: "Positioning and audience clarity",
        description:
          "We define your message, audience, and conversion priorities before campaigns start.",
      },
      {
        title: "Campaign and content structure",
        description:
          "We shape landing pages, messaging angles, and growth assets that support business goals.",
      },
      {
        title: "Execution support",
        description:
          "We help connect channels, creative direction, and tracking to create a stronger growth engine.",
      },
      {
        title: "Review and optimize",
        description:
          "We assess what is working, what needs refinement, and where the next growth opportunity sits.",
      },
    ],
    faqs: [
      {
        question: "Do you only market software products?",
        answer:
          "No. We support service businesses and other growing brands too, especially where strong digital experience and lead conversion matter.",
      },
      {
        question: "Can marketing be combined with a website or app project?",
        answer:
          "Yes. In many cases that combination creates a stronger result because the message, design, and conversion path are aligned from the start.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

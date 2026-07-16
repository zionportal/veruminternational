import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  Phone,
  Send,
  FileCheck,
  Mail,
  Menu,
  Shield,
  Target,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import heroField from "./assets/hero-field.jpg";
import pitchAerial from "./assets/pitch-aerial.jpg";
import playerTraining from "./assets/player-training.jpg";
import logo from "./assets/verum-logo.png";
import pathwayMap from "./assets/pathway-map.svg";
import evaluationBoard from "./assets/evaluation-board.svg";
import familyCompass from "./assets/family-compass.svg";
import processRoute from "./assets/process-route.svg";

const navItems = [
  { label: "The Verum Pathway", href: "/how-it-works" },
  { label: "Player Evaluation", href: "/player-evaluation" },
  { label: "Programs", href: "/programs/european-academy-program" },
];

const trustIndicators = [
  { icon: Users, value: "Ages 13–23", label: "committed players" },
  { icon: FileCheck, value: "Evaluation-led", label: "entry" },
  { icon: Target, value: "Player-specific", label: "development" },
  { icon: Shield, value: "Parent communication", label: "included" },
];

const programs = [
  {
    title: "European Academy Program",
    image: pitchAerial,
    imageAlt: "European city and stadium atmosphere representing football pathway opportunities",
    text: "A structured European football experience for committed players seeking stronger training environments, development standards, and education-aware support.",
    href: "/programs/european-academy-program",
    cta: "Review the Academy Program",
  },
  {
    title: "Trials and Showcases",
    image: heroField,
    imageAlt: "Stadium pitch under floodlights for football showcase preparation",
    text: "Preparation and support for players who may be ready to perform in evaluation settings.",
    href: "/programs/trials-and-showcases",
    cta: "Understand Trials and Showcases",
  },
  {
    title: "High-Performance Development",
    image: playerTraining,
    imageAlt: "Football player training with focus and intensity",
    text: "Player development focused on the demands athletes must meet before pursuing more competitive environments.",
    href: "/high-performance-development",
    cta: "View Development Support",
  },
];

const faqs = [
  {
    question: "Who is Verum International for?",
    answer: "Verum International supports committed footballers ages 13–23 and their families who want an honest evaluation, player-specific development planning, and credible guidance before pursuing European football opportunities.",
  },
  {
    question: "What happens after a player applies?",
    answer: "Verum International reviews the player’s background, age, goals, current level, timeline, and family priorities before recommending an evaluation conversation or next step.",
  },
  {
    question: "What does the player evaluation include?",
    answer: "The evaluation reviews the player profile, strengths, development priorities, readiness, academic and timeline considerations, recommended pathway, and a ninety-day action plan.",
  },
  {
    question: "Does Verum guarantee trials, contracts, scholarships, or placements?",
    answer: "No. Verum International does not guarantee trials, contracts, scholarships, placements, or professional selection. The process is designed to improve preparation, fit, and decision-making.",
  },
  {
    question: "What happens when a player is not ready?",
    answer: "Verum International identifies the gaps that should be addressed first and can recommend a development-focused next step rather than placing the player in an environment that is not yet a good fit.",
  },
  {
    question: "How are parents involved?",
    answer: "Parents and guardians remain informed about the program, responsibilities, costs, risks, expectations, safeguarding, communication, and next steps throughout the pathway process.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Verum International home">
        <img src={logo} alt="Verum International" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button button-gold nav-cta" href="/apply-for-evaluation" data-event="nav_apply_now">
        Book a Player Evaluation
      </a>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button-gold" href="/apply-for-evaluation" onClick={() => setOpen(false)} data-event="nav_apply_now">
            Book a Player Evaluation
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <>
      <section id="top" className="hero section-dark">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Football pathways for committed players ages 13–23</p>
            <h1>A Clear Football Pathway From Evaluation to Europe</h1>
            <p className="hero-text">
              Verum International helps committed footballers understand their current level, develop for stronger environments, and pursue credible European football experiences—with their families informed throughout the process.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="/apply-for-evaluation" data-event="hero_start_pathway">
                Book a Player Evaluation <ArrowRight size={18} />
              </a>
              <a className="button button-outline" href="/how-it-works">
                See the Verum Pathway <ArrowRight size={18} />
              </a>
            </div>
            <p className="trust-note">Evaluation first. Development second. Opportunity when the player is ready.</p>
          </div>
          <div className="hero-player">
            <img className="hero-player-image" src={heroField} alt="Football pitch under stadium lights" />
          </div>
        </div>
      </section>
      <div className="container stat-bar" aria-label="Verum International process indicators">
        {trustIndicators.map((indicator) => (
          <div className="stat" key={indicator.value}>
            <indicator.icon size={30} aria-hidden="true" />
            <div>
              <strong>{indicator.value}</strong>
              <span>{indicator.label}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function SectionIntro({ label, title, text, light = false }: { label: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? "section-intro-light" : ""}`}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      <span className="gold-rule" aria-hidden="true" />
    </div>
  );
}

function CompetitiveDifference() {
  return (
    <section id="about" className="section split-preview split-preview-light">
      <div className="container split-preview-grid">
        <div className="split-preview-copy">
          <p className="eyebrow">A better starting point</p>
          <h2>Most Programs Begin With a Destination. Verum Begins With the Player.</h2>
          <p>A camp, academy, showcase, or international experience is only valuable when it fits the player’s level, goals, maturity, education, and stage of development. Verum International begins by understanding the player before recommending the next investment.</p>
          <a className="button button-gold" href="/how-it-works">Understand the Verum Process <ArrowRight size={18} /></a>
        </div>
        <figure className="split-preview-media">
          <img src={pathwayMap} alt="Verum pathway map connecting development, exposure, opportunity, and the next step" loading="lazy" />
          <figcaption>Destination follows preparation.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Pathway() {
  return (
    <section id="pathway" className="section light-section pathway-section split-preview">
      <div className="container split-preview-grid split-preview-reverse">
        <figure className="split-preview-media">
          <img src={processRoute} alt="Five-stage Verum process route from evaluation to review and the next step" loading="lazy" />
          <figcaption>A clear process before the next step.</figcaption>
        </figure>
        <div className="split-preview-copy">
          <p className="eyebrow">The Verum Pathway</p>
          <h2>Your Pathway Should Be Clear Before the Journey Begins</h2>
          <p>Verum International does not begin by selling a trip, academy, trial, or showcase. We begin by understanding the player and determining which next step makes sense.</p>
          <a className="button button-gold" href="/how-it-works">
            See How the Process Works <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function EvaluationPreview() {
  return (
    <section id="player-evaluation" className="section section-dark split-preview split-preview-dark">
      <div className="container split-preview-grid">
        <div className="split-preview-copy">
          <p className="eyebrow">The starting point</p>
          <h2>Every Pathway Begins With an Honest Player Evaluation</h2>
          <p>
            Before Verum recommends a program, trial, showcase, or international experience, we review the player’s current level, goals, development needs, maturity, academic priorities, timeline, and family expectations.
          </p>
          <p className="supporting-statement">An honest evaluation helps the player and family make a better decision—not simply hear the answer they want.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="/apply-for-evaluation" data-event="player_evaluation_request">
              Book a Player Evaluation <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <figure className="split-preview-media">
          <img src={evaluationBoard} alt="Player evaluation board showing readiness, priorities, and a recommended next step" loading="lazy" />
          <figcaption>Evaluation first. Development second. Opportunity when the player is ready.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="section section-dark programs-section">
      <div className="container">
        <SectionIntro
          light
          label="Possible routes"
          title="Programs Selected Around the Player—not the Other Way Around"
          text="The appropriate route depends on the player’s level, needs, age, timeline, education, and goals."
        />
        <div className="program-grid four-program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.title}>
              <img src={program.image} alt={program.imageAlt} loading="lazy" />
              <div className="program-body">
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <a className="text-link" href={program.href} data-event="program_card_click">{program.cta} <ArrowRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Parents() {
  return (
    <section id="parents" className="section light-section split-preview">
      <div className="container split-preview-grid split-preview-reverse">
        <figure className="split-preview-media">
          <img src={familyCompass} alt="Family pathway compass showing the questions to review before commitment" loading="lazy" />
          <figcaption>Families stay informed throughout the process.</figcaption>
        </figure>
        <div className="split-preview-copy">
          <p className="eyebrow">Built for family confidence</p>
          <h2>A Football Pathway Parents Can Understand</h2>
          <p>
            International football decisions affect more than the player. Verum International keeps parents and guardians informed so families understand the program, responsibilities, costs, risks, expectations, and next steps before making a commitment.
          </p>
          <a className="button button-gold" href="/for-parents">Read the Parent Guide <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">Parent and player questions</p>
          <h2>Questions Families Should Ask Before Choosing a Football Pathway</h2>
          <a className="button button-gold" href="/faq">View All Questions <ArrowRight size={18} /></a>
        </div>
        <div className="faq-list">
          {faqs.slice(0, 3).map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="cta-band section-dark">
      <div className="container final-cta">
        <div>
          <p className="eyebrow">Start with clarity</p>
          <h2>Know the Right Next Step Before the Next Investment</h2>
          <p>Begin with a player evaluation to understand the player’s current level, development priorities, and most realistic path forward.</p>
        </div>
        <div className="hero-actions">
          <a className="button button-gold" href="/apply-for-evaluation" data-event="final_cta_start_pathway">Book a Player Evaluation <ArrowRight size={18} /></a>
          <a className="text-link final-cta-secondary" href="/for-parents">Ask a Parent Question <CircleHelp size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src={logo} alt="Verum International" />
          <p>Evaluation-led football development and pathway support for committed players and families.</p>
        </div>
        <div>
          <h3>Pathway</h3>
          <a href="/how-it-works">How It Works</a>
          <a href="/player-evaluation">Player Evaluation</a>
          <a href="/apply-for-evaluation">Apply for Evaluation</a>
          <a href="/contact"><Mail size={16} /> Contact</a>
        </div>
        <div>
          <h3>Pathways</h3>
          <a href="/player-evaluation">Player Evaluation</a>
          <a href="/programs/european-academy-program">European Academy Program</a>
          <a href="/programs/trials-and-showcases">Trials and Showcases</a>
          <a href="/high-performance-development">High-Performance Development</a>
          <a href="/education-and-university-pathways">Education and University Pathways</a>
        </div>
        <div>
          <h3>Families</h3>
          <a href="/for-parents">For Parents</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/faq">FAQ</a>
          <a href="/resources">Resources</a>
          <a href="/player-stories">Player Stories</a>
        </div>
        <div>
          <h3>Company & Legal</h3>
          <a href="/coaches-and-leadership">Coaches and Leadership</a>
          <a href="/network-and-partners">Network and Partners</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
          <a href="/program-policies">Program Policies</a>
          <a href="/safeguarding">Safeguarding</a>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Verum International. All rights reserved.</span>
        <span>Verum International provides evaluation-led football development and pathway support. Participation does not guarantee trials, scholarships, contracts, placements, or professional selection.</span>
      </div>
    </footer>
  );
}

type InnerConfig = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  sections: { title: string; text: string; items?: string[] }[];
};

const innerConfigs: Record<string, InnerConfig> = {
  "/player-evaluation": {
    eyebrow: "The starting point",
    title: "Every Pathway Begins With an Honest Player Evaluation",
    lead: "Understand the player before choosing the next investment. Verum reviews level, goals, readiness, education, timeline, and family priorities before recommending a route.",
    image: playerTraining,
    imageAlt: "Football player training with focus and intensity",
    sections: [
      { title: "What the evaluation examines", text: "The evaluation creates a clearer picture of the player and the decisions ahead.", items: ["Current player profile", "Strengths and development priorities", "Readiness for stronger environments", "Academic and timeline considerations", "Recommended pathway", "Ninety-day action plan"] },
      { title: "A practical next step", text: "An honest evaluation may lead to development support, program selection, trial preparation, or a recommendation to wait and prepare further. The goal is fit, not pressure." },
    ],
  },
  "/for-parents": {
    eyebrow: "Built for family confidence",
    title: "Your Child. Our Priority.",
    lead: "International football decisions affect the whole family. This guide explains how Verum supports communication, safety, expectations, and informed decisions throughout the pathway.",
    image: pitchAerial,
    imageAlt: "Football stadium environment representing family-supported pathway planning",
    sections: [
      { title: "How we support your family", text: "Parents and guardians remain informed about the program, responsibilities, costs, risks, expectations, safeguarding, communication, and next steps.", items: ["Safety and safeguarding", "Clear communication", "Transparent process", "Education-aware planning", "Family decision support", "International standards"] },
      { title: "Questions parents should ask", text: "The parent guide covers readiness, supervision, accommodation, transportation, medical procedures, education, cancellation terms, and what happens when a player is not ready." },
    ],
  },
  "/education-and-university-pathways": {
    eyebrow: "Education-aware planning",
    title: "Football Development Should Not Close Doors",
    lead: "Players and families deserve a pathway that considers football development alongside academic priorities, timing, and future options.",
    image: playerTraining,
    imageAlt: "Player training in an organized football environment",
    sections: [
      { title: "Plan the full pathway", text: "Education considerations belong in the conversation before a family commits to an international program or longer-term football plan.", items: ["Academic priorities", "Timeline and eligibility", "Education continuity", "Family expectations", "Practical next steps"] },
      { title: "Find the right fit", text: "Verum can help families identify questions to ask and factors to review before choosing an education-aware football environment." },
    ],
  },
  "/player-stories": {
    eyebrow: "Development in context",
    title: "Real Players. Real Development. Real Next Steps.",
    lead: "Useful player stories should explain where a player started, what was evaluated, what development was recommended, what experience followed, and what the player is working toward now.",
    image: heroField,
    imageAlt: "Football pitch under stadium lights",
    sections: [
      { title: "Stories will be evidence-led", text: "Player stories are being prepared for publication as information is reviewed and approved. Verum will not use vague outcomes or imply guaranteed selection." },
      { title: "What each story should show", text: "A useful story connects the starting point, evaluation, preparation, experience, and current next step in a way families can understand." },
    ],
  },
  "/coaches-and-leadership": {
    eyebrow: "People and standards",
    title: "The Team Behind the Pathway",
    lead: "Families should understand who is involved, what experience is relevant, and how responsibilities are handled before they commit to a program.",
    image: playerTraining,
    imageAlt: "Football training environment",
    sections: [
      { title: "Credentials should be visible", text: "Coach credentials, staff roles, safeguarding responsibilities, and program involvement will be published as information is verified and approved." },
      { title: "Professional, player-first standards", text: "Verum’s approach centers evaluation, preparation, communication, and realistic expectations rather than promises of professional outcomes." },
    ],
  },
  "/network-and-partners": {
    eyebrow: "Network and environments",
    title: "The Right Network Starts With the Right Fit",
    lead: "International opportunities should be considered in context. Verum evaluates whether an environment fits the player’s level, goals, readiness, and family priorities.",
    image: pitchAerial,
    imageAlt: "Football stadium representing international pathway environments",
    sections: [
      { title: "No implied partnerships", text: "Verified locations, clubs, staff, and partner environments will be identified clearly. Verum will not use unexplained logos or imply an affiliation that has not been approved." },
      { title: "Preparation before exposure", text: "A network matters most when the player is prepared to enter a relevant environment with realistic expectations and a clear next step." },
    ],
  },
  "/resources": {
    eyebrow: "Player and family resources",
    title: "Prepare Before You Commit",
    lead: "Use practical questions, planning tools, and pathway guidance to make a more informed football decision.",
    image: playerTraining,
    imageAlt: "Football player preparing during training",
    sections: [
      { title: "Resource library", text: "Resources will be added as they are reviewed and approved.", items: ["Player evaluation preparation", "Parent questions before travel", "Program comparison checklist", "Education and timeline planning", "Trial and showcase readiness"] },
      { title: "Start with a conversation", text: "If you are unsure which resource or pathway fits your situation, begin with an evaluation conversation." },
    ],
  },
};

const programDetails: Record<string, InnerConfig> = {
  "/programs/european-academy-program": {
    eyebrow: "Program service",
    title: "European Academy Program",
    lead: "A structured European football experience for committed players seeking stronger training environments, development standards, and education-aware support.",
    image: pitchAerial,
    imageAlt: "Football training ground in a European stadium environment",
    sections: [
      { title: "Development through experience", text: "The European Academy Program is designed for players seeking a professional training environment while adapting to a new culture and level of football.", items: ["Evaluation-led entry", "Training environment preparation", "Family communication", "Education-aware planning", "Post-program review"] },
      { title: "Is this program right for you?", text: "The right fit depends on age, level, goals, readiness, timeline, and the player’s ability to commit to the standards of the environment." },
      { title: "What happens next", text: "Begin with an evaluation conversation before requesting program information. Specific inclusions, costs, responsibilities, and policies should be reviewed before commitment." },
    ],
  },
  "/programs/trials-and-showcases": {
    eyebrow: "Program service",
    title: "Trials and Showcases",
    lead: "Preparation and support for players who may be ready to perform in evaluation settings, with realistic expectations about selection and next steps.",
    image: heroField,
    imageAlt: "Stadium pitch under floodlights for football showcase preparation",
    sections: [
      { title: "Prepare before exposure", text: "A trial or showcase should follow an honest review of readiness, goals, performance habits, and the demands of the environment.", items: ["Readiness review", "Performance preparation", "Player profile support", "Feedback and next steps", "No guaranteed selection"] },
      { title: "The right setting matters", text: "Verum helps families consider whether an evaluation environment is relevant to the player’s current stage and preparation." },
      { title: "No guaranteed outcomes", text: "Participation does not guarantee trials, contracts, scholarships, placements, or professional selection." },
    ],
  },
  "/high-performance-development": {
    eyebrow: "Player development",
    title: "High-Performance Development",
    lead: "Player development focused on the demands athletes must meet before pursuing more competitive environments.",
    image: playerTraining,
    imageAlt: "Football player training with focus and intensity",
    sections: [
      { title: "Build the foundation", text: "Development may include the technical, tactical, physical, mental, and professional areas that need attention.", items: ["Technical development", "Tactical understanding", "Physical preparation", "Mental performance", "Professional habits"] },
      { title: "Progress with purpose", text: "The goal is not to rush exposure. It is to help the player understand what the next environment demands and prepare responsibly." },
    ],
  },
};

function InnerHero({ config }: { config: InnerConfig }) {
  return (
    <section className="inner-hero section-dark">
      <div className="container inner-hero-grid">
        <div>
          <p className="eyebrow">{config.eyebrow}</p>
          <h1>{config.title}</h1>
          <p className="inner-hero-lead">{config.lead}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="/apply-for-evaluation">Book a Player Evaluation <ArrowRight size={18} /></a>
            <a className="button button-outline" href="/contact">Ask a Question <CircleHelp size={18} /></a>
          </div>
        </div>
        <figure className="inner-hero-media">
          <img src={config.image} alt={config.imageAlt} />
          <figcaption>Evaluation first. Development second. Opportunity when the player is ready.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function InnerSections({ sections }: { sections: InnerConfig["sections"] }) {
  return (
    <div className="inner-sections container">
      {sections.map((section, index) => (
        <section className={`inner-content-section ${index % 2 ? "inner-content-section-tint" : ""}`} key={section.title}>
          <div>
            <p className="eyebrow">{index === 0 ? "Pathway overview" : "A clearer next step"}</p>
            <h2>{section.title}</h2>
          </div>
          <div>
            <p>{section.text}</p>
            {section.items && <ul className="inner-checklist">{section.items.map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}</ul>}
          </div>
        </section>
      ))}
    </div>
  );
}

function ProcessPage() {
  const steps = [
    ["1", "Player Evaluation", "Understand the player’s current level, goals, maturity, academic priorities, and development needs."],
    ["2", "Development Plan", "Identify the technical, tactical, physical, mental, and professional areas that need attention."],
    ["3", "Program Match", "Determine which next step fits the player’s stage, goals, readiness, and family priorities."],
    ["4", "Prepare and Experience", "Enter the selected environment with preparation, realistic expectations, and communication."],
    ["5", "Review and Next Step", "Document development and determine the next responsible move."],
  ];
  return (
    <>
      <InnerHero config={{ eyebrow: "The Verum pathway", title: "A Clear Process Before the Next Investment", lead: "We evaluate the player, clarify the priorities, recommend a route based on fit, and review what happens next.", image: playerTraining, imageAlt: "Football player preparing in a focused training environment", sections: [] }} />
      <section className="process-section section light-section"><div className="container"><SectionIntro label="How it works" title="The Player Comes Before the Program" text="Each step is designed to make the next decision clearer." /><div className="process-grid">{steps.map(([number, title, text]) => <article className="process-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    </>
  );
}

function ApplyPage() {
  return (
    <>
      <InnerHero config={{ eyebrow: "Start with clarity", title: "Apply for a Player Evaluation", lead: "Share the information that helps Verum understand the player, the family’s goals, and the questions that need to be answered first.", image: heroField, imageAlt: "Football pitch under stadium lights", sections: [] }} />
      <section className="form-section section"><div className="container form-layout"><div><p className="eyebrow">Player-first intake</p><h2>Begin the pathway conversation</h2><p>The evaluation process starts with context. Tell us about the player, goals, timeline, and priorities so the next conversation can be useful.</p><ul className="inner-checklist"><li><ClipboardCheck size={18} />Player profile and current level</li><li><Clock3 size={18} />Goals and timeline</li><li><HeartHandshake size={18} />Family priorities and questions</li></ul></div><form className="lead-form"><label>Parent or guardian name<input name="parentName" required /></label><label>Email address<input name="email" type="email" required /></label><label>Player name<input name="playerName" required /></label><label>Player age<input name="playerAge" type="number" min="13" max="23" required /></label><label>What would you like to understand?<textarea name="message" rows={5} required /></label><button className="button button-gold" type="submit">Request Evaluation Conversation <Send size={18} /></button><p className="form-note">Your information should be handled according to the approved privacy policy and intake process.</p></form></div></section>
    </>
  );
}

function FAQPage() {
  return <><InnerHero config={{ eyebrow: "Parent and player questions", title: "Questions Families Should Ask", lead: "Clear answers help families understand the process before choosing a football pathway.", image: pitchAerial, imageAlt: "Football stadium representing pathway questions", sections: [] }} /><section className="section faq-section"><div className="container inner-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section></>;
}

function ContactPage() {
  return <><InnerHero config={{ eyebrow: "Speak with Verum", title: "Start With a Better Question", lead: "Contact Verum International about player evaluation, programs, parent questions, or the next responsible step.", image: heroField, imageAlt: "Football pitch under stadium lights", sections: [] }} /><section className="section"><div className="container contact-grid"><div><p className="eyebrow">Contact options</p><h2>Choose the conversation you need</h2><p>Use the form to share enough context for a useful response. For evaluation questions, include the player’s age, goals, current level, and timeline.</p><div className="contact-details"><span><Mail size={20} />info@veruminternational.com</span><span><Phone size={20} />Contact details to be confirmed</span><span><MapPin size={20} />Operating locations to be confirmed</span></div></div><form className="lead-form"><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Reason for contacting us<select name="reason" defaultValue="evaluation"><option value="evaluation">Player evaluation</option><option value="program">Program information</option><option value="parent">Parent question</option><option value="other">Other question</option></select></label><label>Message<textarea name="message" rows={6} required /></label><button className="button button-gold" type="submit">Send Message <Send size={18} /></button></form></div></section></>;
}

function PolicyPage({ type }: { type: "privacy" | "terms" | "programs" | "safeguarding" }) {
  const content = {
    privacy: ["Privacy Policy", "This page explains how information may be collected and used when families contact Verum International or request pathway information.", "Only collect information needed for the stated conversation. Do not publish or share player or family information without an approved purpose and appropriate consent.", "The final policy should be reviewed and approved for the jurisdictions in which Verum operates before launch."],
    terms: ["Terms and Conditions", "These terms describe the general expectations for using the Verum International website and requesting information about programs or evaluations.", "Program details, costs, responsibilities, eligibility, cancellation terms, and participation requirements should be reviewed in the applicable written agreement before commitment.", "This page is a structured draft and is not legal advice. Obtain approved legal language before publishing."],
    programs: ["Program Policies", "Program-specific policies should make responsibilities, inclusions, exclusions, costs, timelines, travel, communication, cancellation, and next steps clear before a family commits.", "Policies should be provided for review in the relevant program agreement and should not be replaced by assumptions made from a marketing page.", "Approved policy language should be added by the program owner before launch."],
    safeguarding: ["Safeguarding", "Verum International should maintain clear safeguarding expectations for players, families, staff, coaches, accommodation, transportation, and communication.", "Concerns should have a documented reporting route, a responsible contact, and an appropriate response process. Player safety and well-being must remain central to every pathway decision.", "Specific safeguarding contacts and procedures require owner approval before publication."],
  }[type];
  return <><InnerHero config={{ eyebrow: "Information and accountability", title: content[0], lead: content[1], image: pitchAerial, imageAlt: "Football stadium environment", sections: [] }} /><section className="section policy-section"><div className="container"><article><h2>What this page covers</h2><p>{content[2]}</p><h2>Approval status</h2><p>{content[3]}</p></article><aside><LockKeyhole size={28} /><strong>Clarity before commitment</strong><p>Policies should be reviewed carefully before a player or family makes a high-stakes decision.</p></aside></div></section></>;
}

function InnerPage({ path }: { path: string }) {
  if (path === "/how-it-works") return <ProcessPage />;
  if (path === "/apply-for-evaluation") return <ApplyPage />;
  if (path === "/faq") return <FAQPage />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/privacy-policy") return <PolicyPage type="privacy" />;
  if (path === "/terms" || path === "/terms-and-conditions") return <PolicyPage type="terms" />;
  if (path === "/program-policies") return <PolicyPage type="programs" />;
  if (path === "/safety-and-safeguarding" || path === "/safeguarding") return <PolicyPage type="safeguarding" />;
  const config = programDetails[path] || innerConfigs[path] || innerConfigs["/resources"];
  return <><InnerHero config={config} /><InnerSections sections={config.sections} /><section className="inner-cta section-dark"><div className="container"><h2>Know the right next step</h2><p>Begin with a player evaluation before the next investment.</p><a className="button button-gold" href="/apply-for-evaluation">Book a Player Evaluation <ArrowRight size={18} /></a></div></section></>;
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path !== "/") {
    return <><Header /><InnerPage path={path} /><Footer /></>;
  }
  return (
    <>
      <Header />
      <Hero />
      <CompetitiveDifference />
      <Pathway />
      <Programs />
      <EvaluationPreview />
      <Parents />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;

import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleHelp,
  Compass,
  FileCheck,
  GraduationCap,
  Mail,
  Menu,
  Shield,
  Target,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import heroField from "./assets/hero-field.jpg";
import pitchAerial from "./assets/pitch-aerial.jpg";
import playerTraining from "./assets/player-training.jpg";
import logo from "./assets/verum-logo.png";

const navItems = [
  { label: "The Verum Pathway", href: "#pathway" },
  { label: "Player Evaluation", href: "#player-evaluation" },
  { label: "Programs", href: "#programs" },
];

const trustIndicators = [
  { icon: Users, value: "Ages 13–23", label: "committed players" },
  { icon: FileCheck, value: "Evaluation-led", label: "entry" },
  { icon: Target, value: "Player-specific", label: "development" },
  { icon: Shield, value: "Parent communication", label: "included" },
];

const pathwayStages = [
  {
    icon: FileCheck,
    title: "Player Evaluation",
    text: "Understand the player’s current level, goals, maturity, academic priorities, and development needs.",
  },
  {
    icon: Target,
    title: "Development Plan",
    text: "Identify the technical, tactical, physical, mental, and professional areas that need attention.",
  },
  {
    icon: Compass,
    title: "Program Selection",
    text: "Determine whether the next step is development, an academy experience, trial preparation, a showcase, or education-focused support.",
  },
  {
    icon: Trophy,
    title: "Football Experience",
    text: "Enter the selected environment with preparation, realistic expectations, and family communication.",
  },
  {
    icon: ChevronRight,
    title: "Next-Step Review",
    text: "Review the experience, document development, and determine the next responsible move.",
  },
];

const objectives = [
  {
    icon: FileCheck,
    title: "I Need an Honest Player Evaluation",
    text: "I want to understand my current level, strengths, development priorities, and realistic options.",
    href: "/player-evaluation",
  },
  {
    icon: Trophy,
    title: "I Want to Prepare for European Football",
    text: "I need stronger development standards and a plan before entering an international environment.",
    href: "/high-performance-development",
  },
  {
    icon: Target,
    title: "I Am Looking for Trials or Showcases",
    text: "I want to understand whether I am prepared for an evaluation setting and how to perform effectively.",
    href: "/trials-and-showcases",
  },
  {
    icon: GraduationCap,
    title: "I Am Comparing Football and Education Options",
    text: "I need to protect my academic future while pursuing serious football development.",
    href: "/education-and-university-pathways",
  },
  {
    icon: Users,
    title: "I Am a Parent Trying to Understand the Process",
    text: "I need clear information about safety, travel, costs, communication, expectations, and outcomes.",
    href: "/for-parents",
  },
];

const programs = [
  {
    title: "European Academy Program",
    image: pitchAerial,
    imageAlt: "European city and stadium atmosphere representing football pathway opportunities",
    text: "A structured European football experience for committed players seeking stronger training environments, development standards, and education-aware support.",
    points: ["Evaluation-led entry", "Training environment preparation", "Parent communication", "Post-program review", "Ages 13–23"],
    href: "/programs/european-academy-program",
    cta: "Review the Academy Program",
  },
  {
    title: "Trials and Showcases",
    image: heroField,
    imageAlt: "Stadium pitch under floodlights for football showcase preparation",
    text: "Preparation and support for players who may be ready to perform in evaluation settings.",
    points: ["Readiness review", "Performance preparation", "Player profile support", "Feedback and next steps", "No guaranteed selection"],
    href: "/programs/trials-and-showcases",
    cta: "Understand Trials and Showcases",
  },
  {
    title: "High-Performance Development",
    image: playerTraining,
    imageAlt: "Football player training with focus and intensity",
    text: "Player development focused on the demands athletes must meet before pursuing more competitive environments.",
    points: ["Technical development", "Tactical understanding", "Physical preparation", "Mental performance", "Professional habits"],
    href: "/high-performance-development",
    cta: "View Development Support",
  },
];

const evaluationDeliverables = [
  "Current player profile",
  "Strengths and development priorities",
  "Readiness assessment",
  "Academic and timeline considerations",
  "Recommended pathway",
  "Ninety-day action plan",
];

const parentConcerns = [
  "Supervision",
  "Housing",
  "Transportation",
  "Meals",
  "Medical and emergency procedures",
  "Communication frequency",
  "Education considerations",
  "Travel documentation",
  "Player safeguarding",
  "Cancellation and refund terms",
  "What happens when a player is not ready",
  "What happens after the player returns",
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
  const commonApproach = [
    "Choose a program first.",
    "Assume exposure creates advancement.",
    "Treat every player as if they need the same route.",
    "Focus on the trip more than preparation.",
    "Leave families uncertain about what follows.",
  ];
  const verumApproach = [
    "Evaluate the player first.",
    "Identify development priorities.",
    "Recommend a route based on fit.",
    "Prepare the player for the environment.",
    "Review what happened and determine the next step.",
  ];

  return (
    <section id="about" className="section split-section">
      <div className="container">
        <SectionIntro
          label="A better starting point"
          title="Most Programs Begin With a Destination. Verum Begins With the Player."
          text="A camp, academy, showcase, or international experience is only valuable when it fits the player’s level, goals, maturity, education, and stage of development. Verum International begins by understanding the player before recommending the next investment."
        />
        <div className="comparison-grid">
          <article className="comparison-card common-approach">
            <p className="card-kicker">The common approach</p>
            <h3>Destination first</h3>
            <ul>
              {commonApproach.map((point) => <li key={point}><Check size={17} aria-hidden="true" />{point}</li>)}
            </ul>
          </article>
          <article className="comparison-card verum-approach">
            <p className="card-kicker">The Verum approach</p>
            <h3>Player first</h3>
            <ul>
              {verumApproach.map((point) => <li key={point}><Check size={17} aria-hidden="true" />{point}</li>)}
            </ul>
          </article>
        </div>
        <a className="button button-gold centered-button" href="/how-it-works">
          Understand the Verum Process <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Pathway() {
  return (
    <section id="pathway" className="section light-section">
      <div className="container">
        <SectionIntro
          label="The Verum Pathway"
          title="Your Pathway Should Be Clear Before the Journey Begins"
          text="Verum International does not begin by selling a trip, academy, trial, or showcase. We begin by understanding the player and determining which next step makes sense."
        />
        <div className="pathway-grid five-stage-grid">
          {pathwayStages.map((stage, index) => (
            <article className="pathway-card" key={stage.title}>
              <stage.icon size={32} aria-hidden="true" />
              <span className="step-number">{index + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
              {index < pathwayStages.length - 1 && <ChevronRight className="step-arrow" size={34} aria-hidden="true" />}
            </article>
          ))}
        </div>
        <a className="button button-gold centered-button" href="/how-it-works">
          See How the Process Works <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function ObjectiveSelector() {
  return (
    <section className="section split-section objective-selector">
      <div className="container">
        <SectionIntro label="Start from where you are" title="Where Are You in Your Football Development?" text="Select the situation that most closely matches what you need now." />
        <div className="objective-grid">
          {objectives.map((objective) => (
            <a className="objective-card" href={objective.href} key={objective.title}>
              <objective.icon size={30} aria-hidden="true" />
              <h3>{objective.title}</h3>
              <p>{objective.text}</p>
              <span className="text-link">Explore this pathway <ArrowRight size={16} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvaluationPreview() {
  return (
    <section id="player-evaluation" className="section section-dark evaluation-section">
      <div className="container split-grid">
        <div>
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
        <div className="deliverable-panel">
          <p className="card-kicker">Player Evaluation</p>
          <h3>What Your Evaluation Includes</h3>
          <p className="card-intro">Your family receives a practical pathway plan—not just an opinion.</p>
          <ul>
            {evaluationDeliverables.map((item) => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
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
                <ul>{program.points.map((point) => <li key={point}><Check size={16} aria-hidden="true" />{point}</li>)}</ul>
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
    <section id="parents" className="section light-section">
      <div className="container split-grid parent-grid">
        <div>
          <p className="eyebrow">Built for family confidence</p>
          <h2>A Football Pathway Parents Can Understand</h2>
          <p>
            International football decisions affect more than the player. Verum International keeps parents and guardians informed so families understand the program, responsibilities, costs, risks, expectations, and next steps before making a commitment.
          </p>
          <a className="button button-gold" href="/for-parents">Read the Parent Guide <ArrowRight size={18} /></a>
        </div>
        <div className="parent-concerns">
          {parentConcerns.map((concern) => <div className="reason" key={concern}><Check size={18} aria-hidden="true" /><span>{concern}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function EvidenceAndStories() {
  return (
    <section id="player-stories" className="section split-section">
      <div className="container">
        <div className="evidence-block">
          <SectionIntro label="Trust should be visible" title="Clear Evidence. Honest Expectations." text="Families should be able to understand who is involved, what is being provided, and what the player must still earn. Verum International does not rely on vague promises, unexplained logos, or guaranteed-result language." />
          <div className="evidence-grid">
            {["Coach credentials", "Program locations", "Real training footage", "Program schedules", "Evaluation examples", "Parent interviews", "Player case studies", "Partner explanations", "Documented outcomes"].map((item) => <div className="evidence-item" key={item}><Shield size={18} aria-hidden="true" />{item}</div>)}
          </div>
          <p className="pending-note">Verified program, staff, and player information will be published as it is approved.</p>
        </div>
        <div className="stories-preview">
          <p className="eyebrow">Development in context</p>
          <h2>Real Players. Real Development. Real Next Steps.</h2>
          <p>A useful player story should explain where the player started, what was evaluated, what development was recommended, what experience followed, and what the player is working toward now.</p>
          <div className="pending-story">Player stories are currently being prepared for publication. Each story will include the player’s starting point, evaluation, development process, experience, and current next step.</div>
          <a className="text-link" href="/player-stories">View Player Stories <ArrowRight size={16} /></a>
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
          {faqs.map((faq, index) => (
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
          <a className="button button-outline" href="/for-parents">Ask a Parent Question <CircleHelp size={18} /></a>
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
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/coaches-and-leadership">Coaches and Leadership</a>
          <a href="/player-stories">Player Stories</a>
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
          <a href="/safety-and-safeguarding">Safety and Safeguarding</a>
        </div>
        <div>
          <h3>Legal</h3>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/program-policies">Program Policies</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Verum International. All rights reserved.</span>
        <span>Verum International provides evaluation-led football development and pathway support. Participation does not guarantee trials, scholarships, contracts, placements, or professional selection.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompetitiveDifference />
      <Pathway />
      <ObjectiveSelector />
      <EvaluationPreview />
      <Programs />
      <Parents />
      <EvidenceAndStories />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;

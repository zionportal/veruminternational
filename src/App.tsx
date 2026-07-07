import {
  ArrowRight,
  Check,
  ChevronRight,
  Compass,
  GraduationCap,
  Mail,
  Map,
  Menu,
  Plane,
  Shield,
  Star,
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
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Pathway", href: "#pathway" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { icon: Map, value: "Global", label: "football pathway guidance" },
  { icon: Shield, value: "13-23", label: "player age range" },
  { icon: Target, value: "Evaluation", label: "before opportunity planning" },
  { icon: Users, value: "Family", label: "communication built in" },
];

const pathway = [
  {
    icon: Users,
    title: "Develop",
    text: "Build technical, tactical, physical, and mental readiness for stronger football environments.",
  },
  {
    icon: Target,
    title: "Expose",
    text: "Understand when a player is ready for relevant evaluation, showcase, or club-adjacent settings.",
  },
  {
    icon: Trophy,
    title: "Opportunities",
    text: "Map realistic next steps around age, level, goals, education, and family expectations.",
  },
  {
    icon: Compass,
    title: "Achieve",
    text: "Move forward with a clearer plan, better preparation, and honest pathway guidance.",
  },
];

const programs = [
  {
    title: "Europe Academy Program",
    image: pitchAerial,
    imageAlt: "European city and stadium atmosphere representing football pathway opportunities",
    text: "A development-centered European football experience for committed players who need structure, standards, and education-aware planning.",
    points: ["Evaluation-led planning", "Training environment guidance", "Parent communication", "Ages 13-23"],
  },
  {
    title: "Trials & Showcases",
    image: heroField,
    imageAlt: "Stadium pitch under floodlights for football showcase preparation",
    text: "Short-term opportunities for players who are prepared to perform in evaluation settings and receive practical feedback.",
    points: ["Readiness review", "Performance preparation", "Feedback and next steps", "No guaranteed outcomes"],
  },
  {
    title: "Pathway Guidance",
    image: playerTraining,
    imageAlt: "Football player training with focus and intensity",
    text: "A practical planning service for families comparing academies, camps, trials, education options, and international football routes.",
    points: ["Player-specific planning", "Family decision support", "Opportunity fit review", "Ongoing guidance"],
  },
];

const reasons = [
  "Truthful pathway guidance without guaranteed-contract claims.",
  "Player-first planning around age, level, goals, and readiness.",
  "A premium football environment that respects family trust.",
  "Clear communication before families invest in the wrong opportunity.",
];

const faqs = [
  {
    question: "Who is Verum International for?",
    answer:
      "Verum International supports committed footballers ages 13-23 and their families who want clearer development planning, European football experience, and honest guidance before pursuing trials, academies, showcases, or pathway opportunities.",
  },
  {
    question: "Does Verum International guarantee trials, scholarships, or contracts?",
    answer:
      "Verum International does not guarantee trials, scholarships, contracts, or professional placement. The organization focuses on evaluation-led preparation, pathway clarity, and opportunity readiness where the player's level and goals make sense.",
  },
  {
    question: "What happens after a player applies?",
    answer:
      "After a player applies, Verum International reviews the player's age, background, goals, current level, and family priorities. The next step is a pathway conversation or evaluation plan that explains realistic options before any larger commitment is made.",
  },
  {
    question: "Can parents be involved in the process?",
    answer:
      "Parents and guardians are central to the Verum International pathway process. Families receive direct communication so football decisions can be made with better context, clearer expectations, and a practical view of the player's next stage.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Verum International home">
        <img src={logo} alt="Verum International" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button button-gold nav-cta" href="#contact" data-event="nav_apply_now">
        Apply Now
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
          <a className="button button-gold" href="#contact" onClick={() => setOpen(false)} data-event="nav_apply_now">
            Apply Now
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-dark">
      <img className="hero-bg" src={heroField} alt="Football pitch under stadium lights" />
      <div className="hero-shade" />
      <Header />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Europe opportunities for talented footballers ages 13-23</p>
          <h1>Your Talent. Our Network. Global Opportunities.</h1>
          <p className="hero-text">
            Verum International helps committed footballers pursue clearer development, credible European football experiences, and purposeful next steps.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#contact" data-event="hero_start_pathway">
              Start Your Pathway <ArrowRight size={18} />
            </a>
            <a className="button button-outline" href="#programs">
              Explore Programs <ArrowRight size={18} />
            </a>
          </div>
          <p className="trust-note">Player-first pathway guidance for committed footballers and families.</p>
        </div>
        <div className="hero-player" aria-hidden="true">
          <div className="kit-card">
            <Shield size={42} />
            <span>VERUM</span>
            <strong>7</strong>
          </div>
        </div>
      </div>
      <div className="container stat-bar" aria-label="Verum International trust indicators">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <stat.icon size={30} aria-hidden="true" />
            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
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

function Pathway() {
  return (
    <section id="pathway" className="section light-section">
      <div className="container">
        <SectionIntro
          label="The Verum Pathway"
          title="More Than Football. We Build Futures."
          text="Verum International provides a clear pathway for dedicated players to develop, compete, and understand the next practical step."
        />
        <div className="pathway-grid">
          {pathway.map((step, index) => (
            <article className="pathway-card" key={step.title}>
              <step.icon size={32} aria-hidden="true" />
              <span className="step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < pathway.length - 1 && <ChevronRight className="step-arrow" size={34} aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section split-section">
      <div className="container split-grid">
        <div>
          <p className="eyebrow">Player and family clarity</p>
          <h2>Development first. Opportunity follows preparation.</h2>
          <p>
            Verum International is an international football development and pathway organization that helps committed footballers ages 13-23 pursue player evaluation, high-performance development, European football experiences, and education-aware opportunity planning.
          </p>
          <div className="reason-list">
            {reasons.map((reason) => (
              <div className="reason" key={reason}>
                <Check size={18} aria-hidden="true" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="image-panel">
          <img src={playerTraining} alt="Focused football player preparing for a higher performance environment" />
          <div className="panel-caption">
            <Star size={18} />
            <span>Built around readiness, maturity, and the right next step.</span>
          </div>
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
          label="Our Programs"
          title="Programs Designed for Your Success"
          text="Flexible pathways for serious players. Choose your direction and Verum International will help you review the route with honesty and purpose."
        />
        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.title}>
              <img src={program.image} alt={program.imageAlt} loading="lazy" />
              <div className="program-body">
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <ul>
                  {program.points.map((point) => (
                    <li key={point}>
                      <Check size={16} aria-hidden="true" /> {point}
                    </li>
                  ))}
                </ul>
                <a className="text-link" href="#contact" data-event="program_card_click">
                  Request program information <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Opportunities() {
  return (
    <section id="opportunities" className="section light-section proof-section">
      <div className="container">
        <SectionIntro
          label="Real players. Real decisions."
          title="Opportunity Planning Without Empty Promises."
          text="Verum International helps players and parents make better football decisions before chasing an academy, trial, showcase, or international route."
        />
        <div className="proof-grid">
          <article className="proof-card">
            <GraduationCap size={32} />
            <h3>Education-aware guidance</h3>
            <p>Football planning should account for school, age, timeline, family priorities, and long-term options.</p>
          </article>
          <article className="proof-card featured-proof">
            <Plane size={32} />
            <h3>European experience review</h3>
            <p>Players receive practical guidance about whether a European football experience fits their current stage.</p>
          </article>
          <article className="proof-card">
            <Shield size={32} />
            <h3>Parent-safe expectations</h3>
            <p>Verum avoids guaranteed outcome language and keeps the process grounded in readiness and fit.</p>
          </article>
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
          <h2>Clear Answers Before the Next Step.</h2>
          <p>
            These answers are written to help families understand Verum International's football pathway process before applying.
          </p>
          <a className="button button-gold" href="#contact" data-event="player_evaluation_request">
            Book a Player Evaluation <ArrowRight size={18} />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} open={faq.question === faqs[0].question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="cta-band section-dark">
      <div className="container cta-grid">
        <div>
          <img className="footer-logo" src={logo} alt="Verum International" />
          <h2>Ready to Take the Next Step?</h2>
          <p>Start with a player pathway conversation and learn which route may fit your current level, goals, and timeline.</p>
        </div>
        <form className="contact-form" action="mailto:info@veruminternational.com" method="post" encType="text/plain">
          <label>
            Player or parent name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Player age
            <input name="playerAge" type="text" inputMode="numeric" required />
          </label>
          <label>
            What are you looking for?
            <textarea name="message" rows={4} placeholder="Evaluation, Europe academy program, trials, pathway guidance, or another question" />
          </label>
          <button className="button button-gold" type="submit" data-event="contact_form_submit">
            Apply Now <ArrowRight size={18} />
          </button>
          <p className="form-note">Do not include private medical, passport, or financial information in this first message.</p>
        </form>
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
          <p>Your journey starts here. The world is waiting for your talent.</p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#about">About Us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Programs</h3>
          <a href="#programs">Europe Academy Program</a>
          <a href="#programs">Trials & Showcases</a>
          <a href="#programs">Pathway Guidance</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:info@veruminternational.com" data-event="email_click">
            <Mail size={16} /> info@veruminternational.com
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Verum International. All rights reserved.</span>
        <span>Player pathways are evaluation-led and do not guarantee contracts, scholarships, trials, or placements.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Hero />
      <About />
      <Pathway />
      <Programs />
      <Opportunities />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

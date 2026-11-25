const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    period: "2023 — PRESENT",
    role: "Independent Designer",
    company: "Freelance",
    details:
      "Partnering with people and small teams to shape thoughtful brands and digital experiences from first idea to final detail.",
  },
  {
    period: "2021 — 2023",
    role: "Digital Designer",
    company: "Company Name",
    details:
      "Designed clear, approachable web experiences and helped turn complex ideas into useful products.",
  },
  {
    period: "2019 — 2021",
    role: "Junior Designer",
    company: "Studio Name",
    details:
      "Built a strong foundation in visual design, collaboration, and bringing creative concepts to life.",
  },
];

function NavigationLinks() {
  return (
    <>
      {navigation.map((item) => (
        <a key={item.label} href={item.href}>
          {item.label}
        </a>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Angeline, home">
          <span className="wordmark-mark">A.</span>
          <span className="wordmark-name">Angeline</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <NavigationLinks />
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <NavigationLinks />
          </nav>
        </details>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy" id="about">
          <p className="eyebrow"><span /> AVAILABLE FOR SELECT PROJECTS</p>
          <h1>
            Thoughtful
            <br />
            design, <span>made</span>
            <br />
            to matter.
          </h1>
          <p className="hero-description">
            I&apos;m Angeline, a designer and creative developer building
            considered digital experiences for people and brands.
          </p>
          <a className="text-link" href="#work">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <a className="feature-card" id="work" href="#contact" aria-label="Get in touch about a project">
          <div className="card-topline">
            <span>DESIGN THAT FEELS LIKE YOU</span>
            <span>01 / 03</span>
          </div>
          <div className="artwork" aria-hidden="true">
            <div className="artwork-orbit orbit-one" />
            <div className="artwork-orbit orbit-two" />
            <div className="artwork-disc" />
            <span className="artwork-caption">A little more human.</span>
          </div>
          <div className="card-bottomline">
            <span>Independent by design.</span>
            <span className="round-arrow" aria-hidden="true">↗</span>
          </div>
        </a>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-heading">
          <div>
            <p className="section-eyebrow">A LITTLE ABOUT MY JOURNEY</p>
            <h2>Experience</h2>
          </div>
          <div className="experience-counter" aria-label={`${experiences.length} experience entries`}>
            <span className="counter-number">{String(experiences.length).padStart(2, "0")}</span>
            <span className="counter-label">CAREER<br />CHAPTERS</span>
          </div>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.role}>
              <span className="experience-index">0{index + 1}</span>
              <p className="experience-period">{experience.period}</p>
              <div className="experience-role">
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
              </div>
              <p className="experience-details">{experience.details}</p>
            </article>
          ))}
        </div>
        <p className="experience-note">Sample experience — update titles, dates, and details to make this yours.</p>
      </section>

      <footer className="page-footer" id="contact">
        <span>DESIGNING WITH INTENTION</span>
        <a href="mailto:hello@example.com">HAVE A PROJECT IN MIND? <span aria-hidden="true">↗</span></a>
        <span>© 2026 ANGELINE</span>
      </footer>
    </main>
  );
}

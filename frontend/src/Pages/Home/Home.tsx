import { useState } from "react";
import {
  FiActivity,
  FiArrowDownRight,
  FiArrowUpRight,
  FiCamera,
  FiCheck,
  FiCpu,
  FiCrosshair,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiSettings,
  FiShield,
  FiTruck,
  FiX,
} from "react-icons/fi";
import { GiMedicinePills, GiRobotGolem } from "react-icons/gi";
import { MdPrecisionManufacturing } from "react-icons/md";
import machineImage from "../../assets/cnc_milling.jpg";
import "./Home.css";

const services = [
  {
    icon: FiCamera,
    title: "AI vision inspection",
    description: "Catch surface defects and dimensional variation before they reach your customer.",
  },
  {
    icon: GiRobotGolem,
    title: "Robotic integration",
    description: "Connect vision systems with robots and PLCs for a hands-free production line.",
  },
  {
    icon: FiCrosshair,
    title: "Measurement & OCR",
    description: "Read dimensions, labels, codes and traceability data with confidence.",
  },
  {
    icon: FiActivity,
    title: "Real-time analytics",
    description: "Turn inspection results into clear reports and better production decisions.",
  },
];

const benefits = [
  "AI-powered accuracy on every shift",
  "Real-time inspection at line speed",
  "Reduce rejection and unplanned downtime",
  "Integrates with your existing systems",
  "Scalable, future-ready solutions",
  "Expert support from setup to production",
];

const industries = [
  { icon: FiTruck, name: "Automotive" },
  { icon: FiCpu, name: "Electronics" },
  { icon: FiLayers, name: "Packaging" },
  { icon: MdPrecisionManufacturing, name: "Metal & machining" },
  { icon: GiMedicinePills, name: "Pharma" },
  { icon: FiSettings, name: "Food & beverage" },
];

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Why Veloce", href: "#why-veloce" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="factory-site">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Veloce Factory home" onClick={closeMenu}>
          <img className="brand-logo" src="/veloce-wordmark.svg" alt="Veloce Factory" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`main-navigation${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-quote" href="#contact" onClick={closeMenu}>
            Talk to an expert <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Vision · Automation · Excellence</p>
          <h1>Intelligent<br /><em>vision inspection</em><br />for industrial excellence.</h1>
          <p className="hero-description">
            We help manufacturers build <strong>zero-defect production</strong> with AI-powered vision inspection and automation that works on your factory floor.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Explore a solution <FiArrowUpRight aria-hidden="true" /></a>
            <a className="text-link" href="#solutions">See what we do <FiArrowDownRight aria-hidden="true" /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon"><FiShield aria-hidden="true" /></div>
            <p><strong>Built for the factory floor</strong><span>Reliable inspection. Measurable quality.</span></p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Precision machining under inspection">
          <img src={machineImage} alt="Precision CNC machine inspecting a machined metal component" />
          <div className="visual-topline"><span>VF / INSPECTION SYSTEM 04</span><span className="live-dot">LIVE</span></div>
          <div className="scan-line" aria-hidden="true" />
          <div className="inspection-card">
            <div className="inspection-heading"><span>Inspection result</span><FiCrosshair aria-hidden="true" /></div>
            <div className="inspection-status"><strong>OK</strong><span className="status-check"><FiCheck aria-hidden="true" /></span></div>
            <div className="inspection-stats"><span>Defects <b>0</b></span><span>Score <b>99.8%</b></span></div>
          </div>
          <div className="visual-caption"><span>01</span> Precision, measured in milliseconds</div>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="section-heading">
          <div><p className="eyebrow">What we do</p><h2>Smarter systems.<br /><span>Stronger production.</span></h2></div>
          <p>One connected view of quality, from the first inspection to the final report.</p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article className="service-item" key={title}>
              <div className="service-topline"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section" id="why-veloce">
        <div className="why-intro">
          <p className="eyebrow">The Veloce difference</p>
          <h2>Quality control<br />that keeps up.</h2>
          <p>Move from reactive checks to confident, always-on inspection. We make advanced vision practical for real production environments.</p>
          <a className="button button-light" href="#contact">Plan your inspection <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit, index) => (
            <div className="benefit-row" key={benefit}>
              <span className="benefit-check"><FiCheck aria-hidden="true" /></span>
              <span>{benefit}</span>
              <span className="benefit-index">0{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="why-stamp" aria-hidden="true"><MdPrecisionManufacturing /><span>ENGINEERED<br />FOR INDUSTRY</span></div>
      </section>

      <section className="industries-section" id="industries">
        <div className="industry-heading"><p className="eyebrow">Made for your world</p><h2>Industries we serve</h2></div>
        <div className="industry-list">
          {industries.map(({ icon: Icon, name }) => (
            <div className="industry-item" key={name}><Icon aria-hidden="true" /><span>{name}</span></div>
          ))}
          <div className="industry-item industry-more"><span>And more<span className="orange-period">.</span></span><FiArrowUpRight aria-hidden="true" /></div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-callout"><p className="eyebrow">Ready for a closer look?</p><h2>Let’s build a smarter factory.</h2><a href="#contact" aria-label="Contact Veloce Factory about a solution"><FiArrowUpRight /></a></div>
          <div className="footer-contact">
            <a href="tel:+918767948130"><FiPhone aria-hidden="true" /><span><small>Call our team</small>+91 87679 48130</span></a>
            <a href="mailto:info@velocefactory.com"><FiMail aria-hidden="true" /><span><small>Write to us</small>info@velocefactory.com</span></a>
            <div><FiMapPin aria-hidden="true" /><span><small>Find us</small>Vasai East, Maharashtra</span></div>
          </div>
        </div>
        <div className="footer-bottom"><a className="footer-brand" href="#top">Veloce Factory<span>© 2026</span></a><p>Better inspection. Better quality. Better tomorrow.</p><a className="back-top" href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

export default Home;
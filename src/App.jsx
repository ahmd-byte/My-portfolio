import React, { useEffect, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  ChevronDown,
  Database,
  GitBranch,
  Layers3,
  Link2,
  Mail,
  MapPin,
  Menu,
  Moon,
  Server,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const profile = {
  name: "Ahmad Syafi",
  role: "Data Analyst & Data Engineer",
  tagline: "I design practical data projects that feel clear, credible, and visually memorable.",
  intro:
    "I turn messy datasets into useful stories, reliable workflows, and polished portfolio experiences with Python, SQL, React, and business-focused thinking.",
  about:
    "I care about more than dashboards alone. My work focuses on understanding the problem, cleaning the data, building dependable pipelines, and presenting the final insight in a way that feels professional and easy to trust.",
  email: "ahmadsyafi01@gmail.com",
  github: "https://github.com/ahmd-byte",
  linkedin: "https://linkedin.com/in/ahmad-syafi-rafiqi-rosli",
  resume: "#",
  location: "Based in Malaysia",
  availability: "Open to internships, junior roles, and freelance work",
};

const nav = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

const stats = [
  { label: "Focus", value: "Analytics + Data Engineering" },
  { label: "Tooling", value: "Python, SQL, React" },
  { label: "Approach", value: "Clear, useful, end-to-end" },
];

const strengths = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Explore trends, pressure-test assumptions, and surface metrics that inform real decisions.",
  },
  {
    icon: Database,
    title: "SQL & Modeling",
    desc: "Shape clean datasets, write dependable queries, and make reporting easier to maintain.",
  },
  {
    icon: Server,
    title: "ETL Pipelines",
    desc: "Build Python workflows that move from raw inputs to usable outputs without handholding.",
  },
  {
    icon: Brain,
    title: "Insight Communication",
    desc: "Present technical work with enough clarity that stakeholders can trust the outcome quickly.",
  },
];

const projects = [
  {
    title: "Sales Performance Analysis",
    tag: "Business Analytics",
    desc: "Analyzed regional, category, and monthly sales performance to pinpoint revenue drivers and where growth was stalling.",
    stack: ["Python", "Pandas", "SQL", "Matplotlib"],
    caseStudy: "#",
    github: "#",
  },
  {
    title: "Customer Churn Analysis",
    tag: "Retention Analytics",
    desc: "Segmented customer behavior, identified churn risk patterns, and highlighted opportunities for stronger retention strategy.",
    stack: ["Python", "Pandas", "Scikit-learn", "Visualization"],
    caseStudy: "#",
    github: "#",
  },
  {
    title: "PostgreSQL ETL Workflow",
    tag: "Data Engineering",
    desc: "Transformed raw operational data into analysis-ready tables using a repeatable ETL process built for reporting use.",
    stack: ["Python", "PostgreSQL", "SQLAlchemy", "ETL"],
    caseStudy: "#",
    github: "#",
  },
];

const processSteps = [
  "Understand the business question before touching the data.",
  "Clean, model, and validate the pipeline so results hold up.",
  "Present the output with enough polish that the work is easy to trust.",
];

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const staggerWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl lg:max-w-7xl xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`w-full ${centered ? "max-w-4xl mx-auto text-center flex flex-col items-center" : "max-w-2xl"}`}>
      <div className={`inline-flex items-center gap-2 rounded-full border border-[#d9c7a8] bg-[#fffaf2] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8b6a37] shadow-sm`}>
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="display-face mt-5 text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}

function PrimaryButton({ href, children, external = false, className = "", onClick }) {
  const handleClick = (e) => {
    if (href === "#") e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[image:var(--accent-gradient)] p-4 text-sm font-bold text-white shadow-(--shadow-glow) backdrop-blur-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_25px_50px_rgba(249,115,22,0.4)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-(--accent-primary)/30 ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, external = false, className = "", onClick }) {
  const handleClick = (e) => {
    if (href === "#") e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`secondary-button inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-(--glass-border-button) bg-(--glass-bg-button) backdrop-blur-xl px-6 py-3 text-sm font-bold text-(--text-button) shadow-lg hover:shadow-(--shadow-soft) transition-all duration-300 hover:scale-[1.02] hover:border-(--accent-primary)/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-(--accent-primary)/25 ${className}`}
    >
      {children}
    </a>
  );
}

function LinkTile({ href, label, value, icon, external = true }) {
  const TileIcon = icon;
  const isEmail = label.toLowerCase() === "email";

  const handleClick = (e) => {
    if (href === "#") e.preventDefault();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`link-tile group flex cursor-pointer items-center justify-between rounded-3xl border border-(--glass-border) bg-(--glass-bg) backdrop-blur-xl px-5 py-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-soft) hover:border-(--accent-gradient)/30 hover:bg-(--glass-bg-hover)`}
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isEmail ? 'bg-(--accent-primary)/15 border border-(--accent-primary)/20 text-(--accent-primary)' : 'bg-(--glass-bg) border border-(--glass-border) text-(--text-secondary) group-hover:text-(--text-primary)'} transition-colors`}>
          <TileIcon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-(--text-secondary) mb-0.5">{label}</div>
          <div className={`text-sm sm:text-base font-medium ${isEmail ? 'text-(--text-primary)' : 'text-(--text-secondary)'}`}>{value}</div>
        </div>
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-(--glass-bg) border border-(--glass-border) group-hover:bg-(--accent-primary) group-hover:border-(--accent-primary) transition-all duration-300">
        <ArrowUpRight className="h-4 w-4 text-(--text-secondary) group-hover:text-white transition-colors" />
      </div>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [typedText, setTypedText] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedText(profile.intro);
      return;
    }

    let i = 0;
    const text = profile.intro;
    const timer = setInterval(() => {
      setTypedText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const scrollToSection = (targetId) => (event) => {
    event.preventDefault();

    const section = document.getElementById(targetId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setMenuOpen(false);
  };

  useEffect(() => {
    const original = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = original;
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [menuOpen]);

  const enterAnimation = shouldReduceMotion
    ? { initial: false, animate: false, transition: undefined }
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
      };

  return (
    <div data-theme={theme} className="min-h-screen overflow-x-clip bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent-primary)/30 selection:text-(--text-primary)">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(178,138,85,0.14),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(201,130,75,0.14),transparent_22%),linear-gradient(to_bottom,var(--bg-primary),var(--bg-secondary)_40%,var(--bg-primary))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-size-[68px_68px] mask-[radial-gradient(circle_at_center,black,transparent_86%)]" />

      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <Container className="rounded-[1.6rem] border border-(--glass-border) bg-(--glass-bg) shadow-[0_18px_50px_rgba(20,29,45,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 py-4">
            <a href="#home" onClick={scrollToSection("home")} className="flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--accent-primary) text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Layers3 className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold tracking-[0.08em] text-(--text-primary) uppercase sm:text-base">
                  {profile.name}
                </div>
                <div className="truncate text-xs text-(--text-secondary) sm:text-sm">{profile.role}</div>
              </div>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {nav.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={scrollToSection(item.target)}
                  className="cursor-pointer text-sm font-medium text-(--text-secondary) transition hover:text-(--text-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-primary)"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <SecondaryButton href="#projects" onClick={scrollToSection("projects")}>
                View Projects
              </SecondaryButton>
              <PrimaryButton href="#contact" onClick={scrollToSection("contact")}>
                Let&apos;s Talk
              </PrimaryButton>
              <button
                onClick={toggleTheme}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-current bg-current/10 p-2 text-current transition-all hover:scale-110 focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-accent-primary"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-(--glass-border) bg-(--glass-bg) text-(--text-primary) shadow-sm transition hover:bg-(--glass-bg-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-primary) lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen ? (
            <div className="border-t border-[#decfb9] pb-4 pt-3 lg:hidden">
              <div className="grid gap-2">
                {nav.map((item) => (
                  <a
                    key={item.target}
                    href={`#${item.target}`}
                    onClick={scrollToSection(item.target)}
                    className="cursor-pointer rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#f2e7d8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b28a55]"
                  >
                    {item.label}
                  </a>
                ))}
                <PrimaryButton href="#contact" onClick={scrollToSection("contact")} className="mt-1 w-full">
                  Let&apos;s Talk
                </PrimaryButton>
              </div>
            </div>
          ) : null}
        </Container>
      </header>

      <main>
        <section id="home" className="scroll-mt-32 pb-18 sm:pb-24 pt-2 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-(--accent-gradient) opacity-20 animate-pulse blur-3xl" />
          <Container>
            <div className="flex flex-col items-center justify-center gap-12 lg:gap-16">
              <Motion.div {...enterAnimation} className="pt-2 sm:pt-4 lg:pt-4 xl:pt-6 flex flex-col items-center text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-(--glass-border) bg-(--glass-bg) backdrop-blur-xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] shadow-lg">
                  <MapPin className="h-3.5 w-3.5" />
                  {profile.location}
                </div>

                <h1 className="display-face gradient-text mt-8 max-w-[14ch] text-5xl leading-[0.92] font-bold tracking-tight drop-shadow-lg sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.2rem]">
                  Data work that looks sharp and reads clearly.
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-(--text-secondary) lg:text-xl typewriter-text">
                  {typedText || profile.intro}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
                  <PrimaryButton href="#projects" onClick={scrollToSection("projects")} className="w-full sm:w-auto sm:min-w-44 shadow-2xl hover:shadow-glow animate-pulse [animation-duration:2s]">
                    Explore Projects
                    <ArrowRight className="h-4 w-4" />
                  </PrimaryButton>
                  <SecondaryButton
                    href={profile.resume}
                    external={profile.resume.startsWith("http")}
                    className="w-full sm:w-auto sm:min-w-44 border-(--glass-border) bg-(--glass-bg) backdrop-blur-xl"
                  >
                    View Resume
                  </SecondaryButton>
                </div>

                <div className="mt-16 w-full text-left grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 max-w-5xl mx-auto">
                  {stats.map((stat, idx) => (
                    <Motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="group rounded-[1.75rem] border border-(--glass-border) bg-(--glass-bg) backdrop-blur-xl p-6 lg:p-7 shadow-lg hover:shadow-(--shadow-glow) transition-all duration-300"
                    >
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-(--text-secondary) group-hover:text-(--accent-primary)">
                        {stat.label}
                      </div>
                      <div className="mt-3 text-lg leading-6 font-bold gradient-text">{stat.value}</div>
                    </Motion.div>
                  ))}
                </div>
              </Motion.div>

              <Motion.div
                {...(shouldReduceMotion
                  ? { initial: false, animate: false }
                  : {
                      initial: { opacity: 0, y: 32 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.8, ease: "easeOut", delay: 0.08 },
                    })}
                className="relative w-full max-w-5xl mx-auto mt-6 sm:mt-12"
              >
                <div className="rounded-4xl border border-(--glass-border) bg-(--glass-bg) backdrop-blur-xl p-6 shadow-(--shadow-soft) sm:p-8 lg:p-9 xl:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#decfb9] pb-6">
                    <div className="max-w-sm">
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Portfolio Snapshot</div>
                      <div className="display-face mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">
                        {profile.tagline}
                      </div>
                    </div>
                    <div className="rounded-full bg-[#f4eadb] px-4 py-2 text-sm font-medium text-[#8f6d3b]">
                      {profile.availability}
                    </div>
                  </div>

                  <div className="grid gap-4 pt-6">
                    <div className="rounded-[1.75rem] bg-[#162235] p-6 text-white">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Main Focus
                          </div>
                          <div className="display-face mt-3 text-2xl leading-tight font-semibold sm:text-[2rem]">
                            End-to-end data projects with credible delivery.
                          </div>
                        </div>
                        <BriefcaseBusiness className="mt-1 h-6 w-6 text-[#d6b780]" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.75rem] border border-[#decfb9] bg-[#f4eadb] p-5">
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Current Direction</div>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          Analyst, BI, junior data engineering, and practical roles that connect business questions to implementation.
                        </p>
                      </div>
                      <div className="rounded-[1.75rem] border border-[#decfb9] bg-[#f4eadb] p-5">
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">Preferred Stack</div>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          Python, SQL, PostgreSQL, Pandas, React, and a presentation layer that feels deliberate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.div>


            </div>

            <Motion.a
              href="#about"
              onClick={scrollToSection("about")}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: [0, 8, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-12 lg:mt-16 mx-auto flex w-fit cursor-pointer items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b28a55]"
            >
              Scroll to explore
              <ChevronDown className="h-4 w-4" />
            </Motion.a>
          </Container>
        </section>

        <Motion.section
          id="about"
          className="scroll-mt-28 pt-2 pb-12 sm:pb-16 lg:pt-4 lg:pb-20"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
              <SectionHeading
                eyebrow="About"
                title="Built to show both analytical depth and implementation discipline."
                description={profile.about}
              />

              <div className="grid gap-5">
                <div className="rounded-4xl border border-[#decfb9] bg-[#fffaf2] p-6 shadow-sm sm:p-7">
                  <div className="text-sm font-semibold text-slate-950">What I bring</div>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    A mix of analysis, SQL thinking, ETL workflow building, and portfolio presentation that makes the work easier to understand quickly.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-4xl border border-[#decfb9] bg-[#f4eadb] p-6">
                    <div className="text-sm font-semibold text-slate-950">Working Style</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Structured, practical, and focused on making outputs reliable before making them look polished.
                    </p>
                  </div>
                  <div className="rounded-4xl border border-[#decfb9] bg-[#f4eadb] p-6">
                    <div className="text-sm font-semibold text-slate-950">What Matters</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Clean thinking, sensible tools, and communication that reduces ambiguity instead of adding noise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Motion.section>

        <Motion.section
          id="skills"
          className="scroll-mt-28 pt-2 pb-12 sm:pb-16 lg:pt-4 lg:pb-20"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15, once: true }}
        >
          <Container>
            <div className="mb-12 lg:mb-16 flex flex-col justify-center">
              <SectionHeading
                centered
                eyebrow="Skills"
                title="Strong fundamentals, arranged around practical project work."
                description="The goal here is clarity: analysis, querying, pipelines, and communication skills that support full project delivery."
              />
            </div>

            <Motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1, once: true }}
              className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-4 2xl:gap-10"
            >
              {strengths.map((skill) => {
                const Icon = skill.icon;

                return (
                  <Motion.div 
                    key={skill.title} 
                    variants={sectionFade}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateX: 5, 
                      rotateY: 5,
                      y: -10 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformPerspective: 1000 }}
                    className="group h-full rounded-4xl border border-(--glass-border) bg-(--glass-bg) backdrop-blur-xl p-6 lg:p-7 xl:p-8 shadow-xl hover:shadow-(--shadow-glow) hover:border-(--accent-primary)/30 transition-all duration-500"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--glass-bg)/50 backdrop-blur-xl group-hover:bg-(--accent-gradient)/20">
                      <Icon className="h-6 w-6 text-(--accent-primary) group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold gradient-text group-hover:scale-[1.02]">{skill.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-(--text-secondary)">{skill.desc}</p>
                  </Motion.div>
                );
              })}
            </Motion.div>
          </Container>
        </Motion.section>

        <Motion.section
          id="projects"
          className="scroll-mt-28 pt-2 pb-12 sm:pb-16 lg:pt-4 lg:pb-20"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.14, once: true }}
        >
          <Container>
            <div className="mb-4 lg:mb-8 flex flex-col items-center justify-center">
              <SectionHeading
                centered
                eyebrow="Projects"
                title="Selected work with both reasoning and technical execution."
                description="Each case highlights the problem, the workflow, and the business value instead of just showing a finished chart."
              />
            </div>

            <Motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3"
            >
              {projects.map((project, idx) => (
                <Motion.article 
                  key={project.title} 
                  variants={sectionFade}
                  whileHover={{ 
                    scale: 1.03, 
                    rotateX: 3, 
                    rotateY: 3,
                    y: -12 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{ transformPerspective: 1000 }}
                >
                  <div className="group flex h-full flex-col overflow-hidden rounded-4xl border border-(--glass-border) bg-(--glass-bg) backdrop-blur-xl shadow-2xl hover:shadow-(--shadow-glow) transition-all duration-500 hover:border-(--accent-gradient)/20">
                    <div className="border-b border-(--glass-border)/50 bg-(--glass-bg)/70 p-6 sm:p-7 backdrop-blur-xl">
                      <div className="flex items-start justify-between gap-4">
                        <span className="rounded-full bg-(--accent-gradient)/20 px-4 py-2 text-xs font-bold text-(--accent-primary) border border-(--accent-primary)/30">
                          {project.tag}
                        </span>
                        <span className="display-face text-xl font-black text-(--text-secondary) opacity-75">0{idx + 1}</span>
                      </div>
                      <h3 className="mt-5 text-xl leading-tight font-bold gradient-text drop-shadow-lg sm:text-2xl">{project.title}</h3>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-(--text-secondary)">{project.desc}</p>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="text-xs font-bold uppercase tracking-wider text-(--text-secondary) mb-4">Tech Stack</div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-(--glass-border) bg-(--glass-bg)/50 backdrop-blur-xl px-3 py-1.5 text-xs font-semibold text-(--text-primary) hover:bg-(--accent-primary) hover:text-white transition-all"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col gap-4 sm:flex-row">
                        <SecondaryButton href={project.caseStudy} external={project.caseStudy.startsWith("http")} className="flex-1">
                          Case Study
                        </SecondaryButton>
                        <PrimaryButton href={project.github} external={project.github.startsWith("http")} className="flex-1">
                          View Code <ArrowRight className="ml-1 h-4 w-4" />
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                </Motion.article>
              ))}
            </Motion.div>
          </Container>
        </Motion.section>

        <Motion.section
          id="contact"
          className="scroll-mt-28 pt-2 pb-16 sm:pb-20 lg:pt-4 lg:pb-24"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.12, once: true }}
        >
          <Container>
            <div className="rounded-[2.25rem] border border-(--accent-gradient)/30 bg-(--accent-gradient)/5 backdrop-blur-3xl p-2 shadow-(--shadow-glow) sm:p-3 relative overflow-hidden group">
              <div className="pointer-events-none absolute inset-0 bg-(--accent-gradient) opacity-10 group-hover:opacity-20 transition-opacity duration-1000 blur-3xl"></div>
              
              <div className="rounded-4xl bg-(--glass-bg) backdrop-blur-xl p-8 sm:p-10 lg:p-12 text-(--text-primary) shadow-2xl border border-(--glass-border) relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center xl:gap-16">
                  <div className="flex flex-col items-start justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-(--accent-primary)/30 bg-(--accent-gradient)/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-xl text-(--accent-primary)">
                      <Mail className="h-4 w-4" />
                      Get In Touch
                    </div>
                    <h2 className="display-face mt-6 text-4xl leading-tight font-black gradient-text sm:text-5xl lg:text-[3.5rem] tracking-tight">
                      Let's build something useful with data.
                    </h2>
                    <p className="mt-6 text-base sm:text-lg leading-relaxed text-(--text-secondary) max-w-lg">
                      I'm open to collaboration, learning opportunities, and roles where I can keep improving through practical work.
                    </p>
                    
                    <div className="mt-8 sm:mt-12">
                      <PrimaryButton href={profile.resume} className="px-8 py-4 shadow-(--shadow-glow) hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                        Download My Resume
                      </PrimaryButton>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:gap-6">
                    <LinkTile href={`mailto:${profile.email}`} label="Email" value={profile.email} icon={Mail} external={false} />
                    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                      <LinkTile href={profile.github} label="GitHub" value="@ahmd-byte" icon={GitBranch} />
                      <LinkTile href={profile.linkedin} label="LinkedIn" value="Connect professionally" icon={Link2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Motion.section>
      </main>

      <footer className="border-t border-[#decfb9] pt-6 pb-[30vh] lg:pb-[40vh]">
        <Container className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            (c) {year} {profile.name}. Built with React, Tailwind, Framer Motion, and a focus on clear data storytelling.
          </div>
          <div>Replace the placeholder links in the `profile` object before publishing.</div>
        </Container>
      </footer>
    </div>
  );
}

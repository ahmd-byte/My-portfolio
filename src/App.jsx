import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  ChevronDown,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  LineChart,
  Link2,
  Mail,
  Menu,
  Server,
  Sparkles,
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
  { label: "Tooling", value: "React, Python, SQL" },
  { label: "Approach", value: "Clear, useful, end-to-end" },
];

const skills = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Exploring trends, KPIs, and patterns that support practical business decisions.",
  },
  {
    icon: Database,
    title: "SQL & Modeling",
    desc: "Writing clear queries, shaping structured datasets, and organizing data for reporting.",
  },
  {
    icon: Server,
    title: "ETL Pipelines",
    desc: "Building Python workflows to extract, clean, transform, and load data reliably.",
  },
  {
    icon: Brain,
    title: "Insight Communication",
    desc: "Turning technical work into concise stories recruiters, clients, and teams can follow.",
  },
];

const projects = [
  {
    title: "Sales Performance Analysis",
    tag: "Business Analytics",
    desc: "Analyzed region, category, and monthly sales data to uncover revenue drivers and identify growth opportunities.",
    stack: ["Python", "Pandas", "SQL", "Matplotlib"],
    caseStudy: "#",
    github: "#",
  },
  {
    title: "Customer Churn Analysis",
    tag: "Retention Analytics",
    desc: "Explored churn behavior, customer risk segments, and retention opportunities using feature-based analysis.",
    stack: ["Python", "Pandas", "Scikit-learn", "Visualization"],
    caseStudy: "#",
    github: "#",
  },
  {
    title: "PostgreSQL ETL Workflow",
    tag: "Data Engineering",
    desc: "Built an ETL pipeline to transform raw operational data into clean, analysis-ready tables for reporting.",
    stack: ["Python", "PostgreSQL", "SQLAlchemy", "ETL"],
    caseStudy: "#",
    github: "#",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function GlowOrb({ className = "" }) {
  return (
    <div
      className={`absolute rounded-full bg-linear-to-r from-cyan-400 via-amber-300 to-orange-300 opacity-30 blur-3xl ${className}`}
    />
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}

function PrimaryButton({ href, children, external = false, className = "", onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-2xl bg-[#f2efe8] px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-white ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, external = false, className = "", onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 ${className}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

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
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#07111a] text-white selection:bg-cyan-300/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(251,191,36,0.16),transparent_24%),linear-gradient(to_bottom,#07111a,#0d1721,#121c26)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[52px_52px] mask-[radial-gradient(circle_at_center,black,transparent_85%)]" />

      <GlowOrb className="-left-32 top-12 h-56 w-56" />
      <GlowOrb className="-right-20 top-40 h-72 w-72" />
      <GlowOrb className="bottom-20 left-1/4 h-64 w-64" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111a]/78 backdrop-blur-xl">
        <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-6 py-5 lg:px-8 xl:px-10 2xl:px-12">
          <a
            href="#home"
            onClick={scrollToSection("home")}
            className="group inline-flex items-center gap-4 justify-self-start"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(34,211,238,0.12)] xl:h-14 xl:w-14">
              <Layers3 className="h-5 w-5 text-cyan-200 transition-transform group-hover:scale-110" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide text-white xl:text-xl">{profile.name}</div>
              <div className="text-sm text-slate-400 xl:text-base">{profile.role}</div>
            </div>
          </a>

          <nav className="hidden items-center justify-center gap-10 lg:flex xl:gap-12 2xl:gap-14">
            {nav.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={scrollToSection(item.target)}
                className="text-base font-medium text-slate-300 transition hover:text-white xl:text-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center justify-self-end gap-4 lg:flex">
            <SecondaryButton
              href="#projects"
              onClick={scrollToSection("projects")}
              className="px-8 py-4 text-base xl:text-lg"
            >
              View Projects
            </SecondaryButton>
            <PrimaryButton
              href="#contact"
              onClick={scrollToSection("contact")}
              className="px-8 py-4 text-base xl:text-lg"
            >
              Contact Me
            </PrimaryButton>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="justify-self-end inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-[#0b1620]/95 px-6 py-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3">
              {nav.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={scrollToSection(item.target)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <PrimaryButton href="#contact" className="w-full" onClick={scrollToSection("contact")}>
                Contact Me
              </PrimaryButton>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="relative scroll-mt-28 overflow-hidden">
          <div className="grid w-full min-h-[calc(100vh-5.5rem)] items-center gap-10 px-6 pb-8 pt-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(26rem,0.98fr)] lg:gap-10 lg:px-8 lg:pb-8 lg:pt-10 xl:gap-14 xl:px-10 2xl:px-12">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" />
                {profile.location}
              </div>

              <h1 className="max-w-[10.5ch] text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.4rem] lg:leading-[0.97] xl:text-[5.15rem] 2xl:text-[5.75rem]">
                Building data work that feels
                <span className="bg-linear-to-r from-[#fff8eb] via-cyan-100 to-amber-200 bg-clip-text text-transparent">
                  {" "}
                  sharp, trustworthy, and useful.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg xl:max-w-3xl xl:text-[1.05rem] xl:leading-8">
                {profile.intro}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <PrimaryButton
                    href="#projects"
                    onClick={scrollToSection("projects")}
                    className="min-h-16 px-10 py-5 text-lg font-semibold"
                  >
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </PrimaryButton>
                  <SecondaryButton
                    href={profile.resume}
                    external={profile.resume.startsWith("http")}
                    className="min-h-16 px-10 py-5 text-lg font-semibold"
                  >
                    View Resume
                  </SecondaryButton>
                </div>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-cyan-300/15 via-amber-200/10 to-transparent blur-2xl" />
              <div className="ml-auto w-full max-w-[40rem] xl:max-w-[42rem]">
                <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(2,8,23,0.55)] backdrop-blur-2xl">
                  <div className="p-6 sm:p-7 xl:p-8">
                    <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-md">
                        <div className="text-base font-semibold text-white">Portfolio Snapshot</div>
                        <div className="mt-2 text-sm leading-6 text-slate-400">{profile.tagline}</div>
                      </div>
                      <div className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs leading-5 text-emerald-300 md:max-w-[15rem]">
                        {profile.availability}
                      </div>
                    </div>

                    <div className="grid gap-5">
                      <div className="rounded-3xl border border-white/10 bg-[#09131c]/70 p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Main Focus</div>
                            <div className="mt-2 text-2xl font-semibold text-white xl:text-[2rem]">End-to-End Data Projects</div>
                          </div>
                          <LineChart className="h-8 w-8 text-cyan-200" />
                        </div>

                        <div className="mt-5 grid gap-3 text-center text-sm sm:grid-cols-3">
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="font-semibold text-white">Python</div>
                            <div className="mt-1 text-xs text-slate-400">Analysis</div>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="font-semibold text-white">SQL</div>
                            <div className="mt-1 text-xs text-slate-400">Modeling</div>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="font-semibold text-white">React</div>
                            <div className="mt-1 text-xs text-slate-400">Presentation</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Strength</div>
                          <div className="mt-2 text-xl font-semibold text-white">Analytics + Pipelines</div>
                          <p className="mt-3 text-sm leading-7 text-slate-300">
                            I like projects that move from raw data to insight, not just one isolated step.
                          </p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Presentation</div>
                          <div className="mt-2 text-xl font-semibold text-white">Clean & Intentional</div>
                          <p className="mt-3 text-sm leading-7 text-slate-300">
                            My portfolio is designed to communicate technical depth with a calm, premium first impression.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Motion.div
                  variants={staggerWrap}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 grid gap-3 sm:grid-cols-3"
                >
                  {stats.map((stat) => (
                    <Motion.div key={stat.label} variants={sectionFade}>
                      <div className="h-full min-h-[8.5rem] rounded-3xl border border-white/10 bg-[#09131c]/70 p-5 shadow-2xl shadow-cyan-950/10 backdrop-blur-xl">
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
                        <div className="mt-3 text-base font-semibold text-white">{stat.value}</div>
                      </div>
                    </Motion.div>
                  ))}
                </Motion.div>
              </div>
            </Motion.div>
          </div>

          <Motion.a
            href="#about"
            onClick={scrollToSection("about")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-3 flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            Scroll to explore
            <ChevronDown className="h-4 w-4" />
          </Motion.a>
        </section>

        <Motion.section
          id="about"
          className="w-full scroll-mt-28 px-6 py-24 lg:px-8 xl:px-10 2xl:px-12"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionHeading
              eyebrow="About"
              title="A portfolio built to show both analytical depth and implementation skill."
              description={profile.about}
            />

            <div className="grid gap-5">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="text-sm font-medium text-white">What I bring</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  A mix of Python-based analysis, SQL thinking, ETL workflow building, and portfolio presentation that makes the work easier to understand and trust.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="text-sm font-medium text-white">Current Direction</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Data Analyst, Business Intelligence, Junior Data Engineer, and end-to-end analytics roles.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="text-sm font-medium text-white">Preferred Stack</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    React, Tailwind, Python, Pandas, PostgreSQL, Jupyter, Streamlit, and GitHub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Motion.section>

        <Motion.section
          id="skills"
          className="w-full scroll-mt-28 px-6 py-24 lg:px-8 xl:px-10 2xl:px-12"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
        >
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Skills"
              title="Grounded in strong fundamentals and built for practical project work."
              description="These are the core strengths this portfolio is meant to signal quickly: analysis, querying, pipeline thinking, and clear communication."
            />
          </div>

          <Motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <Motion.div key={skill.title} variants={sectionFade}>
                  <div className="group h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner shadow-white/5">
                      <Icon className="h-5 w-5 text-cyan-200 transition group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{skill.desc}</p>
                  </div>
                </Motion.div>
              );
            })}
          </Motion.div>
        </Motion.section>

        <Motion.section
          id="projects"
          className="w-full scroll-mt-28 px-6 py-24 lg:px-8 xl:px-10 2xl:px-12"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
        >
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work that shows both reasoning and technical execution."
              description="Each project is framed to highlight the problem, the workflow, and the business value behind the final result."
            />
            <SecondaryButton href="#contact" onClick={scrollToSection("contact")} className="w-fit">
              Let&apos;s Connect
            </SecondaryButton>
          </div>

          <Motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.08 }}
            className="grid gap-6 xl:grid-cols-3"
          >
            {projects.map((project, idx) => (
              <Motion.div key={project.title} variants={sectionFade}>
                <div className="group h-full overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="relative border-b border-white/10 p-6">
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-300/10 via-amber-200/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                        {project.tag}
                      </div>
                      <div className="text-2xl font-semibold text-white">0{idx + 1}</div>
                      <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{project.desc}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4 text-xs uppercase tracking-[0.18em] text-slate-400">Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <SecondaryButton href={project.caseStudy} external={project.caseStudy.startsWith("http")}>
                        Case Study
                      </SecondaryButton>
                      <PrimaryButton href={project.github} external={project.github.startsWith("http")}>
                        GitHub
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.section>

        <Motion.section
          id="contact"
          className="w-full scroll-mt-28 px-6 pb-24 pt-10 lg:px-8 xl:px-10 2xl:px-12"
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.12 }}
        >
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl">
            <div className="relative p-8 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-300/10 via-amber-200/5 to-transparent" />
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                    <Mail className="h-3.5 w-3.5" />
                    Contact
                  </div>
                  <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Let&apos;s build something meaningful with data.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    I&apos;m open to collaboration, learning opportunities, and roles where I can keep growing through practical data work.
                  </p>
                </div>

                <div className="grid gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#09131c]/70 px-5 py-4 transition hover:border-cyan-300/30 hover:bg-[#0c1822]"
                  >
                    <div>
                      <div className="text-sm font-medium text-white">Email</div>
                      <div className="mt-1 text-sm text-slate-400">{profile.email}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </a>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#09131c]/70 px-5 py-4 transition hover:border-cyan-300/30 hover:bg-[#0c1822]"
                    >
                      <GitBranch className="h-4 w-4 text-slate-300" />
                      <span className="text-sm text-white">GitHub</span>
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#09131c]/70 px-5 py-4 transition hover:border-cyan-300/30 hover:bg-[#0c1822]"
                    >
                      <Link2 className="h-4 w-4 text-slate-300" />
                      <span className="text-sm text-white">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion.section>
      </main>

      <footer className="border-t border-white/10">
        <div className="flex w-full flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8 xl:px-10 2xl:px-12">
          <div>
            (c) {year} {profile.name}. Built with React, Tailwind, Framer Motion, and a love for clear data storytelling.
          </div>
          <div>Replace the placeholder links in the `profile` object before publishing.</div>
        </div>
      </footer>
    </div>
  );
}

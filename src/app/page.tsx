import AutoCarousel from "@/components/AutoCarousel";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ─── Navigation ─── */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <span className="text-xs font-bold tracking-widest uppercase text-foreground transition-all duration-300 hover:text-accent cursor-default">
            FA_2026
          </span>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-muted">
            <a href="#experience" className="inline-block hover:text-foreground hover:-translate-y-0.5 transition-all duration-300">
              Experience
            </a>
            <a href="#projects" className="inline-block hover:text-foreground hover:-translate-y-0.5 transition-all duration-300">
              Projects
            </a>
            <a href="#education" className="inline-block hover:text-foreground hover:-translate-y-0.5 transition-all duration-300">
              Education
            </a>
            <a
              href="#contact"
              className="inline-block text-accent hover:text-foreground hover:-translate-y-0.5 transition-all duration-300 font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1200px] px-6 pt-32 pb-20">
        {/* ─── Hero ─── */}
        <Reveal delay={100}>
          <section id="hero" className="mb-32 md:mb-40">
            <div className="mb-6 flex items-center gap-2 text-xs text-muted uppercase tracking-widest">
              <span className="inline-block h-2 w-2 rounded-none bg-accent" />
              <span className="inline-block h-2 w-2 rounded-none bg-accent opacity-50" />
              <span className="ml-2">→ // Portfolio</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              Fransiscus
              <br />
              Agustinus
            </h1>

            <p className="mt-6 text-lg md:text-xl font-bold uppercase tracking-wider text-accent">
              TECHNICAL CONSULTANT & SYSTEMS BUILDER
            </p>

            <p className="mt-6 max-w-[640px] text-base md:text-lg text-muted leading-relaxed">
              I bridge the gap between business operations and software architecture. Drawing from my background in operations management—where I engineered pricing systems that drove a 200% revenue increase—I specialize in building secure, high-performance web applications that solve real supply chain and data bottlenecks. By leveraging agentic AI workflows, I turn complex business logic into scalable, production-ready Next.js and PostgreSQL systems efficiently.
            </p>
          </section>
        </Reveal>

        {/* ─── Divider ─── */}
        <Reveal delay={200}>
          <hr className="border-border mb-24" />
        </Reveal>

        {/* ─── 01 // Work Experience ─── */}
        <Reveal delay={100}>
          <section id="experience" className="mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16">
              <div>
                <span className="text-xs text-muted uppercase tracking-widest block mb-2">
                  01 //
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
                  Experience
                </h2>
              </div>
              <div>
                {/* Timeline Item 1 */}
                <div className="timeline-item group relative">
                  <div className="group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
                        FULL-STACK DEVELOPER (FREELANCE)
                      </h3>
                      <span className="text-xs text-muted uppercase tracking-widest mt-1 sm:mt-0">
                        2025 — 2026
                      </span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                      DREAME INDONESIA
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      Architected a controller-less Next.js 16 and Supabase retail ERP. Directed AI coding agents to accelerate full-stack development. Engineered atomic PostgreSQL RPC transactions, dynamic multi-channel pricing, and strict Row Level Security (RLS) policies for multi-tenant data isolation.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="timeline-item group relative">
                  <div className="group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
                        Backend Developer Trainee
                      </h3>
                      <span className="text-xs text-muted uppercase tracking-widest mt-1 sm:mt-0">
                        2024
                      </span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                      Enigma Camp
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      Built robust backend services utilizing Golang, Docker,
                      PostgreSQL, and REST APIs.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="timeline-item group relative">
                  <div className="group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h3 className="text-lg font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
                        Operations Coordinator
                      </h3>
                      <span className="text-xs text-muted uppercase tracking-widest mt-1 sm:mt-0">
                        2020 — 2022
                      </span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                      Game Consign / PT. Inovasi Dunia Gim
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      Led daily operations for a 6-person team. Engineered a markup
                      pricing system that drove a 200% revenue increase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── Divider ─── */}
        <Reveal delay={100}>
          <hr className="border-border mb-24" />
        </Reveal>

        {/* ─── 02 // Projects ─── */}
        <Reveal>
          <section id="projects" className="mb-24 md:mb-32">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs text-muted uppercase tracking-widest block mb-2">
                  02 //
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                  Projects
                </h2>
              </div>
            </div>

            <div className="w-full relative">
              <Reveal delay={100}>
                <article
                  id="project-erp"
                  className="group rounded-none border border-border bg-card hover:-translate-y-2 hover:border-accent hover:shadow-[6px_6px_0_0_#4ade80] transition-all duration-500 h-full flex flex-col"
                >
                  <AutoCarousel
                    images={[
                      { src: "/images/project-1/1.jpg", alt: "ERP System Screenshot 1", label: "Dashboard Overview" },
                      { src: "/images/project-1/2.jpg", alt: "ERP System Screenshot 2", label: "Inventory Management" },
                      { src: "/images/project-1/3.jpg", alt: "ERP System Screenshot 3", label: "Dynamic Pricing Engine" },
                      { src: "/images/project-1/4.jpg", alt: "ERP System Screenshot 4", label: "Role-Based Settings" }
                    ]}
                  />
                  <div className="p-8 md:p-10 flex flex-col flex-1 border-t border-border group-hover:border-accent transition-colors duration-500">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3 md:mb-4">
                      Project_01
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-1">
                      OMNICHANNEL RETAIL ERP
                    </h3>
                    <p className="text-xs font-bold text-muted uppercase tracking-wider mb-8">
                      Client: INTERNAL RETAIL CLIENT
                    </p>

                    <div className="space-y-6 text-sm md:text-base text-muted leading-relaxed flex-1">
                      <div>
                        <span className="text-foreground font-semibold text-xs md:text-sm uppercase tracking-wider block mb-2">
                          Problem:
                        </span>
                        Marketing and supply chain teams managing high-frequency data entry, multi-tier channel pricing, and inventory routing across fragmented spreadsheets.
                      </div>
                      <div>
                        <span className="text-foreground font-semibold text-xs md:text-sm uppercase tracking-wider block mb-2">
                          Solution:
                        </span>
                        Developed a secure, full-stack dashboard utilizing Next.js Server Actions and Supabase. Implemented atomic database RPCs to prevent inventory race conditions, a custom fiscal calendar engine for automated performance reporting, and JWT-based Role-Based Access Control (RBAC) to enforce strict data isolation between staff and dealers.
                      </div>
                      <div>
                        <span className="text-foreground font-semibold text-xs md:text-sm uppercase tracking-wider block mb-2">
                          Stack:
                        </span>
                        Next.js 16, TypeScript, Supabase, PostgreSQL, Tailwind CSS v4, Zod.
                      </div>
                    </div>

                    <a
                      href="https://github.com/frans-agst/dreame-erp-showcase.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-1 text-xs md:text-sm font-bold uppercase tracking-widest text-accent hover:underline underline-offset-4 decoration-2"
                    >
                      → VIEW CASE STUDY (GITHUB)
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          </section>
        </Reveal>

        {/* ─── Divider ─── */}
        <Reveal delay={100}>
          <hr className="border-border mb-24" />
        </Reveal>

        {/* ─── 03 // Education & Credentials ─── */}
        <Reveal>
          <section id="education" className="mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16">
              <div>
                <span className="text-xs text-muted uppercase tracking-widest block mb-2">
                  03 //
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
                  Education
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Degree */}
                <Reveal delay={100}>
                  <div className="border border-border p-6 hover:bg-white/5 hover:border-accent transition-colors duration-300 h-full">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">
                      Degree
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">
                      Bachelor of Computer Science
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Gunadarma University
                    </p>
                    <p className="mt-1 text-xs text-muted uppercase tracking-widest">
                      2018 - 2023
                    </p>
                  </div>
                </Reveal>

                {/* Certification 1 */}
                <Reveal delay={200}>
                  <div className="border border-border p-6 hover:bg-white/5 hover:border-accent transition-colors duration-300 h-full">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">
                      Certification
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">
                      Certified Developer Generative AI
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Alibaba Cloud
                    </p>
                    <p className="mt-1 text-xs text-muted uppercase tracking-widest">
                      2025
                    </p>
                  </div>
                </Reveal>

                {/* Certification 2 */}
                <Reveal delay={300}>
                  <div className="border border-border p-6 md:col-span-2 hover:bg-white/5 hover:border-accent transition-colors duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-3">
                      Bootcamp
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">
                      Golang Backend Bootcamp
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Enigma Camp
                    </p>
                    <p className="mt-1 text-xs text-muted uppercase tracking-widest">
                      2024
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ─── Divider ─── */}
        <Reveal delay={100}>
          <hr className="border-border mb-24" />
        </Reveal>

        {/* ─── 04 // Technical Arsenal ─── */}
        <Reveal>
          <section id="technical-arsenal" className="mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16 items-start">
              <div>
                <span className="text-xs text-muted uppercase tracking-widest block mb-2">
                  04 //
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
                  Arsenal
                </h2>
              </div>
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                {[
                  "NEXT.JS",
                  "TYPESCRIPT",
                  "POSTGRESQL",
                  "SUPABASE",
                  "GOLANG",
                  "DOCKER",
                  "TAILWIND CSS",
                  "GIT",
                  "AGENTIC AI",
                ].map((tech, i) => (
                  <Reveal key={tech} delay={i * 50}>
                    <li
                      className="rounded-none border border-border px-4 py-2 text-xs font-medium uppercase tracking-widest text-muted hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-[2px_2px_0_0_#4ade80] transition-all duration-300 cursor-default inline-block"
                    >
                      {tech}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* ─── Divider ─── */}
        <Reveal delay={100}>
          <hr className="border-border mb-16" />
        </Reveal>

        {/* ─── Contact / Footer ─── */}
        <Reveal>
          <footer
            id="contact"
            className="pb-12 flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:fransiscus@example.com"
                className="inline-block text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300"
              >
                Email
              </a>
            </div>
            <p className="text-xs text-muted/50 uppercase tracking-widest">
              © 2025 Fransiscus Agustinus // Systems Architecture
            </p>
          </footer>
        </Reveal>
      </main>
    </>
  );
}

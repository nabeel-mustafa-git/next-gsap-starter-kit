"use client";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="pt-40 pb-20 px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 border-b border-black/10 pb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter italic">
              Documentation
            </h1>
            <p className="text-black/60 text-sm max-w-sm mx-auto font-medium">
              Everything you need to know to get started with the Nabe Starter
              Kit.
            </p>
          </div>

          {/* Overview */}
          <section className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black/40">
              Overview
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              Instantly spin up a fresh Next.js environment bundled with GSAP
              animation workflows and Lenis smooth scrolling. This kit is
              designed for engineers who want to skip the setup and jump
              straight into crafting high-end digital experiences.
            </p>
            <div className="pt-2">
              <a
                href="https://www.npmjs.com/package/gsap-starter-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                View on NPM →
              </a>
            </div>
          </section>

          {/* Installation */}
          <section className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black/40">
              Installation
            </h2>
            <div className="space-y-4">
              <p className="text-sm font-medium">
                Generate your app folder using npx:
              </p>
              <div className="bg-black/5 rounded-xl p-6 font-mono text-sm border border-black/5 relative group">
                <code className="text-black/80">
                  npx gsap-starter-kit your-project-name
                </code>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "npx gsap-starter-kit your-project-name",
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase font-bold tracking-widest bg-white border border-black/10 px-2 py-1 rounded"
                >
                  Copy
                </button>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black/40">
              What&apos;s Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  GSAP Workflows
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  Pre-configured timeline management and page transition
                  utilities ready for complex motion sequences.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Lenis Smooth Scroll
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  Integrated smooth scrolling that works seamlessly with GSAP
                  ScrollTrigger and layout animations.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Tailwind CSS v4
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  The latest utility-first styling with a minimalist
                  black-and-white design system built into the core.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  TypeScript Core
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  Strict type safety across the entire project, including
                  animation utilities and component props.
                </p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="space-y-8 border-t border-black/10 pt-12">
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black/40">
                Customization & Cleanup
              </h2>
              <p className="text-sm font-medium">
                The Nabe Starter Kit is designed to be modular. You can keep
                what you need and remove what you don&apos;t.
              </p>
            </div>

            <div className="space-y-8">
              {/* Contact Page */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Contact Page
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  A minimalist contact route with LinkedIn integration.
                </p>
                <div className="bg-black/5 rounded-lg p-3 font-mono text-[10px] text-black/40">
                  Delete the folder:{" "}
                  <span className="text-black/80">app/contact/</span>
                </div>
              </div>

              {/* Documentation Page */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Documentation Page
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  The current page you are viewing.
                </p>
                <div className="bg-black/5 rounded-lg p-3 font-mono text-[10px] text-black/40">
                  Delete the folder:{" "}
                  <span className="text-black/80">app/documentation/</span>
                </div>
              </div>

              {/* Hero Component */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Hero Section
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  The interactive canvas wave hero on the home page.
                </p>
                <div className="bg-black/5 rounded-lg p-3 font-mono text-[10px] text-black/40">
                  Remove <span className="text-black/80">&lt;Hero /&gt;</span>{" "}
                  from <span className="text-black/80">app/page.tsx</span> and
                  delete{" "}
                  <span className="text-black/80">app/Components/hero.tsx</span>
                </div>
              </div>

              {/* Navbar & Footer */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Navigation & Footer
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  Global navigation and site footer.
                </p>
                <div className="bg-black/5 rounded-lg p-3 font-mono text-[10px] text-black/40">
                  Remove <span className="text-black/80">&lt;Navbar /&gt;</span>{" "}
                  and <span className="text-black/80">&lt;Footer /&gt;</span>{" "}
                  from <span className="text-black/80">app/layout.tsx</span>
                </div>
              </div>

              {/* Home Page Content */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Home Page Content
                </h3>
                <p className="text-xs text-black/60 leading-relaxed">
                  The main entry point of your application.
                </p>
                <div className="bg-black/5 rounded-lg p-3 font-mono text-[10px] text-black/40">
                  Modify or clear the return statement in{" "}
                  <span className="text-black/80">app/page.tsx</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

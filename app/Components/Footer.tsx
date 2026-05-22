"use client";

import TransitionLink from "./transitionLink";

const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-black/10 bg-white relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold uppercase tracking-tighter text-black">
              ✦
            </h2>
            <p className="mn text-black/40 text-[10px] tracking-widest font-semibold uppercase">
              &copy; 2026 - ULTIMATE STARTER KIT
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <p className="mn text-[10px] uppercase opacity-30 font-bold tracking-widest">
                Platform
              </p>
              <ul className="space-y-2 font-semibold text-xs uppercase tracking-tight">
                <li>
                  <TransitionLink
                    href="/"
                    label="Home"
                    className="hover:opacity-60 transition-opacity"
                  />
                </li>
                <li>
                  <TransitionLink
                    href="/documentation"
                    label="Documentation"
                    className="hover:opacity-60 transition-opacity"
                  />
                </li>
                <li>
                  <TransitionLink
                    href="/contact"
                    label="Contact"
                    className="hover:opacity-60 transition-opacity"
                  />
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="mn text-[10px] uppercase opacity-30 font-bold tracking-widest">
                Social
              </p>
              <ul className="space-y-2 font-semibold text-xs uppercase tracking-tight">
                <li>
                  <a
                    href="https://www.linkedin.com/in/nabeel-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

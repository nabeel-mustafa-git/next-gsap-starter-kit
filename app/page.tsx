"use client";

import Navbar from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { ReactLenis } from "lenis/react";
import TransitionLink from "./Components/transitionLink";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="bg-white text-black">
        <Navbar />

        <Hero />

        <footer className="py-20 px-8 border-t border-black/10 bg-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="space-y-4">
                <h2 className="text-4xl italic font-bold">Nabe ✦</h2>
                <p className="mn text-black/40 text-sm tracking-widest font-semibold">
                  &copy; 2026 - ULTIMATE STARTER KIT
                </p>
                <div className="pt-4">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
                    Get in Touch
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
                <div className="space-y-4">
                  <p className="mn text-xs uppercase opacity-30 font-bold">
                    Platform
                  </p>
                  <ul className="space-y-2 font-semibold text-sm">
                    <li>
                      <TransitionLink href="/" label="Home" />
                    </li>
                    <li>
                      <TransitionLink href="/about" label="About" />
                    </li>
                    <li>
                      <TransitionLink href="/services" label="Services" />
                    </li>
                    <li>
                      <TransitionLink href="/contact" label="Contact" />
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="mn text-xs uppercase opacity-30 font-bold">
                    Social
                  </p>
                  <ul className="space-y-2 font-semibold text-sm">
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="mn text-xs uppercase opacity-30 font-bold">
                    Legal
                  </p>
                  <ul className="space-y-2 font-semibold text-sm">
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-black transition-colors"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ReactLenis>
  );
}

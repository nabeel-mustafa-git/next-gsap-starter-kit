"use client";

import React, { useState } from "react";
import TransitionLink from "./transitionLink";
import { MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Documentation", href: "/documentation" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-5 left-0 right-0 mx-auto w-full max-w-3xl px-4 transition-all duration-300 ${isMenuOpen ? "z-10000" : "z-999"}`}
      >
        <nav className="flex items-center justify-between rounded-full border border-black/10 bg-white/80 p-1 backdrop-blur-lg">
          {/* Logo */}
          <div className="flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-black/5">
            <p className="font-roboto-slab text-2xl font-bold uppercase tracking-tight text-black">
              <TransitionLink href={"/"} label={"✦"} />
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <div
                key={link.label}
                className="px-3 py-1.5 text-sm font-medium text-black/70 transition-colors hover:text-black"
              >
                <TransitionLink href={link.href} label={link.label} />
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:block">
              <TransitionLink href={"/documentation"} label={"Get Started"} />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex size-9 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-black/5 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="size-5 text-black" />
              ) : (
                <MenuIcon className="size-5 text-black" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9999] transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-8 pt-24">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <div
                key={link.label}
                className="text-3xl font-bold uppercase tracking-tighter text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                <TransitionLink href={link.href} label={link.label} />
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <div className="w-full rounded-full bg-primary py-4 text-lg font-bold uppercase text-white text-center">
              <TransitionLink href={"/documentation"} label={"Get Started"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

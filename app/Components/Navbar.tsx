"use client";

import React, { useState } from "react";
import TransitionLink from "./transitionLink";
import { MenuIcon, XIcon } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-[999] mx-auto w-full max-w-3xl px-4">
        <nav className="flex items-center justify-between rounded-full border border-black/10 bg-white/80 p-1 backdrop-blur-lg">
          {/* Logo */}
          <div className="flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-black/5">
            <p className="font-roboto-slab text-2xl font-bold uppercase tracking-tight text-black">
              ✦
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
            <button className="hidden rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:block">
              Login
            </button>

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
        className={`fixed inset-0 z-[9998] transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
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
            <button className="w-full rounded-full border border-black/10 py-4 text-lg font-bold uppercase text-black">
              Sign In
            </button>
            <button className="w-full rounded-full bg-primary py-4 text-lg font-bold uppercase text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

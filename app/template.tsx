"use client";

import { useEffect } from "react";
import { animatePageIn } from "./utils/animation";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();

    const handlePopState = () => {
      animatePageIn();
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        animatePageIn();
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-black z-[9999999] fixed top-0 left-0 w-1/8"
      ></div>
      <div
        id="banner-2"
        className="min-h-screen bg-black z-[9999999] fixed top-0 left-1/8 w-1/8"
      ></div>
      <div
        id="banner-3"
        className="min-h-screen bg-black z-[9999999] fixed top-0 left-2/8 w-1/8"
      ></div>
      <div
        id="banner-4"
        className="min-h-screen bg-black z-[9999999] fixed top-0 left-3/8 w-1/8"
      ></div>

      <div
        id="banner-5"
        className="min-h-screen bg-black z-[9999999] fixed top-0 left-4/8 w-1/8"
      ></div>
      <div
        id="banner-6"
        className="min-h-screen bg-black z-[9999999] fixed top-0 left-5/8 w-1/8"
      ></div>
      <div
        id="banner-7"
        className="min-h-screen bg-black z-[9999999] fixed top-0 left-6/8 w-1/8"
      ></div>
      <div
        id="banner-8"
        className="min-h-screen bg-black z-[9999999] fixed top-0 left-7/8 w-1/8"
      ></div>

      {children}
    </div>
  );
}

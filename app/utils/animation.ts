import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const bannerFive = document.getElementById("banner-5");
  const bannerSix = document.getElementById("banner-6");
  const bannerSeven = document.getElementById("banner-7");
  const bannerEight = document.getElementById("banner-8");

  if (
    bannerOne &&
    bannerTwo &&
    bannerThree &&
    bannerFour &&
    bannerFive &&
    bannerSix &&
    bannerSeven &&
    bannerEight
  ) {
    const banners = [
      bannerOne,
      bannerTwo,
      bannerThree,
      bannerFour,
      bannerFive,
      bannerSix,
      bannerSeven,
      bannerEight,
    ];

    gsap.killTweensOf(banners);

    const tl = gsap.timeline();

    tl.set(banners, {
      yPercent: 0,
    }).to(banners, {
      yPercent: 100,
      stagger: 0.04,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const bannerFive = document.getElementById("banner-5");
  const bannerSix = document.getElementById("banner-6");
  const bannerSeven = document.getElementById("banner-7");
  const bannerEight = document.getElementById("banner-8");

  if (
    bannerOne &&
    bannerTwo &&
    bannerThree &&
    bannerFour &&
    bannerFive &&
    bannerSix &&
    bannerSeven &&
    bannerEight
  ) {
    const banners = [
      bannerOne,
      bannerTwo,
      bannerThree,
      bannerFour,
      bannerFive,
      bannerSix,
      bannerSeven,
      bannerEight,
    ];

    gsap.killTweensOf(banners);

    const tl = gsap.timeline();

    tl.set(banners, {
      yPercent: -100,
    }).to(banners, {
      yPercent: 0,
      stagger: 0.04,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

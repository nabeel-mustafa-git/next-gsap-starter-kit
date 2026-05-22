import { ArrowRight, Sparkles, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TransitionLink from "./transitionLink";
import gsap from "gsap";

type Point = {
  x: number;
  y: number;
};

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const heroStats: { label: string; value: string }[] = [
  { label: "Performance", value: "100" },
  { label: "Motion", value: "60fps" },
  { label: "Ready to Use", value: "100%" },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const targetMouseRef = useRef<Point>({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    if (copied) return;

    navigator.clipboard.writeText("npx gsap-starter-kit your-project-name");

    const tl = gsap.timeline();

    // Smooth transition out
    tl.to(textRef.current, {
      opacity: 0,
      y: -5,
      duration: 0.2,
      ease: "power2.inOut",
      onComplete: () => {
        setCopied(true);
        gsap.set(textRef.current, { y: 5 });
      },
    }).to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Reset after 2 seconds
    setTimeout(() => {
      const tlReset = gsap.timeline();
      tlReset
        .to(textRef.current, {
          opacity: 0,
          y: -5,
          duration: 0.2,
          ease: "power2.inOut",
          onComplete: () => {
            setCopied(false);
            gsap.set(textRef.current, { y: 5 });
          },
        })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
    }, 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationId: number;
    let time = 0;

    const computeThemeColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);

      // Helper to convert any CSS color to a Canvas-compatible format
      const resolveColor = (variables: string[], alpha = 1) => {
        // Create a temporary element to get computed color
        const tempEl = document.createElement("div");
        tempEl.style.position = "absolute";
        tempEl.style.visibility = "hidden";
        tempEl.style.width = "1px";
        tempEl.style.height = "1px";
        document.body.appendChild(tempEl);

        let color = `rgba(255, 255, 255, ${alpha})`;

        for (const variable of variables) {
          const value = rootStyles.getPropertyValue(variable).trim();
          if (value) {
            // Try to set the background color using the CSS variable
            tempEl.style.backgroundColor = `var(${variable})`;
            const computedColor = getComputedStyle(tempEl).backgroundColor;

            if (computedColor && computedColor !== "rgba(0, 0, 0, 0)") {
              // Convert RGB to RGBA with alpha if needed
              if (alpha < 1) {
                const rgbMatch = computedColor.match(
                  /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/,
                );
                if (rgbMatch) {
                  color = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
                } else {
                  color = computedColor;
                }
              } else {
                color = computedColor;
              }
              break;
            }
          }
        }

        document.body.removeChild(tempEl);
        return color;
      };

      return {
        backgroundTop: resolveColor(["--white"], 1),
        backgroundBottom: resolveColor(["--white"], 0.95),
        wavePalette: [
          {
            offset: 0,
            amplitude: 70,
            frequency: 0.003,
            color: resolveColor(["--primary"], 0.8),
            opacity: 0.45,
          },
          {
            offset: Math.PI / 2,
            amplitude: 90,
            frequency: 0.0026,
            color: resolveColor(["--black"], 0.7),
            opacity: 0.35,
          },
          {
            offset: Math.PI,
            amplitude: 60,
            frequency: 0.0034,
            color: resolveColor(["--black"], 0.65),
            opacity: 0.3,
          },
          {
            offset: Math.PI * 1.5,
            amplitude: 80,
            frequency: 0.0022,
            color: resolveColor(["--black"], 0.25),
            opacity: 0.25,
          },
          {
            offset: Math.PI * 2,
            amplitude: 55,
            frequency: 0.004,
            color: resolveColor(["--black"], 0.2),
            opacity: 0.2,
          },
        ] satisfies WaveConfig[],
      };
    };

    let themeColors = computeThemeColors();

    const handleThemeMutation = () => {
      themeColors = computeThemeColors();
    };

    const observer = new MutationObserver(handleThemeMutation);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const mouseInfluence = prefersReducedMotion ? 10 : 70;
    const influenceRadius = prefersReducedMotion ? 160 : 320;
    const smoothing = prefersReducedMotion ? 0.04 : 0.1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const recenterMouse = () => {
      const centerPoint = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseRef.current = centerPoint;
      targetMouseRef.current = centerPoint;
    };

    const handleResize = () => {
      resizeCanvas();
      recenterMouse();
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      recenterMouse();
    };

    resizeCanvas();
    recenterMouse();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();

      for (let x = 0; x <= canvas.width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect =
          influence *
          mouseInfluence *
          Math.sin(time * 0.001 + x * 0.01 + wave.offset);

        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) *
            wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) *
            (wave.amplitude * 0.45) +
          mouseEffect;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 35;
      ctx.shadowColor = wave.color;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      time += 1;

      mouseRef.current.x +=
        (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y +=
        (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, themeColors.backgroundTop);
      gradient.addColorStop(1, themeColors.backgroundBottom);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      themeColors.wavePalette.forEach(drawWave);

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-white"
      role="region"
      aria-label="Glowing waves hero section"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-black/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center md:px-8 lg:px-12">
        <div className="w-full">
          <div className="mb-6 mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
            <Sparkles className="h-3 w-3 text-primary" aria-hidden="true" />
            v1.0 • Ultimate Starter Kit
          </div>

          <h1 className="mb-6 text-4xl font-semibold tracking-tighter text-black md:text-6xl lg:text-7xl ">
            Build Digital <br />
            <span className="bg-gradient-to-r from-primary via-black/60 to-black/80 bg-clip-text text-transparent italic">
              Excellence Faster
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-sm text-black/70 md:text-base font-medium">
            The definitive foundation for high-end web experiences. Engineered
            for speed, motion, and performance right out of the box.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              ref={buttonRef}
              onClick={copyToClipboard}
              className="group flex items-center justify-center rounded-full bg-black px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 cursor-pointer w-[400px] overflow-hidden"
            >
              <div
                ref={textRef}
                className="flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    Copied to clipboard
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    npx gsap-starter-kit project-name
                    <ArrowRight
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            </button>
            <TransitionLink
              href="/documentation"
              label="Documentation"
              className="flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-black/80 backdrop-blur transition-all hover:bg-white/70 cursor-pointer"
            />
          </div>

          <div className="grid gap-4 bg-white/60 p-6 backdrop-blur-sm sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-xs uppercase tracking-[0.3em] text-black/50 font-bold">
                  {stat.label}
                </div>
                <div className="text-2xl font-bold text-black italic">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="pt-40 pb-20 px-8 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter italic">
            Connect with me
          </h1>
          <p className="text-black/60 text-sm max-w-sm mx-auto font-medium">
            I&apos;m always open to new opportunities and collaborations. Reach
            out to me directly on LinkedIn.
          </p>
          <div className="pt-4">
            <a
              href="https://www.linkedin.com/in/nabeel-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

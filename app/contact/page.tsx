import Image from "next/image";
import Navbar from "../Components/Navbar";
import Transition from "../Components/transition";

export default function Home() {
  return (
    <div>
      <Transition />

      <div className="contact-page page">
        <Navbar />

        <section className="contact-trail-container py-32 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <div className="contact-card-header-left">
                <h1 className="text-6xl mb-8">Let&apos;s Connect</h1>

                <p className="text-black/60">
                  I&apos;m always open to discussing new projects, creative
                  ideas or opportunities to be part of your visions. Feel free
                  to reach out through the form or social links.
                </p>
              </div>

              <div className="contact-info mt-12 space-y-8">
                <div className="contact-info-item">
                  <p className="mn text-primary mb-2">Project Inquiries</p>
                  <p className="text-2xl font-bold">
                    <a
                      href="mailto:nabeelmustafaskp@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      nabeelmustafaskp@gmail.com
                    </a>
                  </p>
                </div>

                <div className="contact-info-item">
                  <p className="mn text-primary mb-2">Quick Chat</p>
                  <p className="text-2xl font-bold">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      @nabe_handle
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-black/5 p-8 rounded-2xl border border-black/10">
              <div className="form-header mb-8">
                <h2 className="text-3xl mb-2">Start a Project</h2>
                <p className="text-black/60">
                  Tell me about your vision and let&apos;s make it reality
                </p>
              </div>

              <form action="" id="contactForm" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="firstName"
                      className="mn text-xs uppercase opacity-50"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      required
                      className="bg-white border border-black/10 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="lastName"
                      className="mn text-xs uppercase opacity-50"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="bg-white border border-black/10 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="mn text-xs uppercase opacity-50"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@example.com"
                      required
                      className="bg-white border border-black/10 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="mn text-xs uppercase opacity-50"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="bg-white border border-black/10 rounded-lg p-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="projectType"
                    className="mn text-xs uppercase opacity-50"
                  >
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    id="projectType"
                    className="bg-white border border-black/10 rounded-lg p-3 outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select project type</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="graphic">Graphic Design</option>
                    <option value="branding">Branding</option>
                    <option value="marketing">Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="mn text-xs uppercase opacity-50"
                  >
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell me about your project, goals, timeline and budget..."
                    required
                    className="bg-white border border-black/10 rounded-lg p-3 outline-none focus:border-primary transition-colors min-h-[150px]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

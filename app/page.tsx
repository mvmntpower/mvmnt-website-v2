"use client";

import Navbar from "./components/Navbar";
import Projects from "../sections/Projects";
import WhyChooseUs from "../sections/WhyChooseUs";
import About from "../sections/About";
import CTA from "../sections/CTA";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Reviews from "../sections/Reviews";
import FAQ from "../sections/FAQ";
import Financing from "../sections/Financing";
import ServiceAreas from "../sections/ServiceAreas";
import WhyMVMNT from "../sections/WhyMVMNT";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* Hero */}
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
  >

    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero.jpg')",
      }}
    />

    <div className="absolute inset-0 bg-black/70" />

    <div className="relative z-10 px-6">

      <p className="uppercase tracking-[0.5em] text-yellow-500 mb-8">
        Maryland • Virginia • Pennsylvania • Delaware
      </p>

      <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight">
        MVM<span className="text-yellow-500">N</span>T
      </h1>

      <h2 className="text-3xl md:text-5xl mt-8 font-light">
        Moving Homes Forward.
      </h2>

      <p className="mt-10 max-w-3xl mx-auto text-center text-zinc-300 text-xl leading-10">
  We specialize in premium kitchen remodels, bathroom renovations,
  basement finishing, flooring, and complete home transformations
  across Maryland, Virginia, Pennsylvania, and Delaware.
</p>

      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">

  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="bg-yellow-500 text-black px-10 py-5 rounded-full font-semibold shadow-lg shadow-yellow-500/20 hover:scale-105 hover:shadow-yellow-500/50 transition-all duration-300"
  >
    Request Free Estimate
  </button>

  <button
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="border border-white/40 backdrop-blur-md bg-white/5 px-10 py-5 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
  >
    View Our Work
  </button>

</div>

<div className="mt-10 flex flex-wrap justify-center items-center gap-x-16 gap-y-4 text-sm uppercase tracking-[0.15em] text-zinc-300">

  <span>Licensed &amp; Insured</span>

  <span>Free Estimates</span>

  <span>Premium Craftsmanship</span>

  <span>Customer Focused</span>

</div>

    </div>

  </section>

        {/* Services */}
  <section
    id="services"
    className="py-24 px-6"
  >

          <h2 className="text-5xl font-bold text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-zinc-900 rounded-3xl p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4">Kitchen</h3>
              <p className="text-zinc-400">
                Custom kitchens, cabinetry, quartz countertops and luxury finishes.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4">Bathroom</h3>
              <p className="text-zinc-400">
                Modern showers, vanities, tile work and spa-inspired renovations.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4">Basement</h3>
              <p className="text-zinc-400">
                Transform unused space into offices, gyms and entertainment areas.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 hover:-translate-y-2 transition">
              <h3 className="text-2xl font-bold mb-4">Flooring</h3>
              <p className="text-zinc-400">
                Hardwood, LVP, tile and premium flooring installations.
              </p>
            </div>

          </div>

          </section>

        {/* Projects */}
  <Projects />

  <WhyChooseUs />

  <About />

  <CTA />

  <Testimonials />

  <Reviews />

  <Financing />

  <ServiceAreas />

  <WhyMVMNT />

  <FAQ />

  <Contact />

  <Footer />

      </main>
    </>
  );
}
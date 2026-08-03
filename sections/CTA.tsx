"use client";

export default function CTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-zinc-950 py-28 px-6">

      <div className="max-w-5xl mx-auto text-center bg-zinc-900 rounded-3xl p-20">

        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Transform Your Home?
        </h2>

        <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12">
          Whether you're planning a kitchen remodel, bathroom renovation,
          basement finishing, or new flooring, MVMNT is ready to bring your
          vision to life.
        </p>

        <button
          onClick={scrollToContact}
          className="bg-yellow-500 text-black px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300"
        >
          Request Your Free Estimate
        </button>

      </div>

    </section>
  );
}
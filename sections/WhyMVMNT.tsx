export default function WhyMVMNT() {
  const stats = [
    {
      number: "500+",
      title: "Projects Completed",
      description:
        "Delivering quality craftsmanship on every remodeling project.",
    },
    {
      number: "100%",
      title: "Customer Satisfaction",
      description:
        "Our goal is to exceed expectations from consultation to completion.",
    },
    {
      number: "Licensed",
      title: "& Fully Insured",
      description:
        "Giving homeowners confidence and peace of mind throughout every project.",
    },
    {
      number: "Free",
      title: "Estimates",
      description:
        "Professional consultations with no obligation and transparent pricing.",
    },
  ];

  return (
    <section className="bg-black py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
            Why Choose MVMNT
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Built On Quality. Driven By Trust.
          </h2>

          <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">
            Every remodeling project is completed with professionalism,
            attention to detail, and a commitment to craftsmanship that
            homeowners can rely on.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (

            <div
              key={stat.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-5xl font-bold text-yellow-500 mb-6">
                {stat.number}
              </h3>

              <h4 className="text-2xl font-semibold text-white mb-4">
                {stat.title}
              </h4>

              <p className="text-zinc-400 leading-8">
                {stat.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
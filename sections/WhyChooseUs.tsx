export default function WhyChooseUs() {
  const items = [
    {
      title: "Licensed & Insured",
      text: "Your home is protected from start to finish.",
      icon: "🛡️",
    },
    {
      title: "Premium Craftsmanship",
      text: "Quality workmanship with attention to every detail.",
      icon: "🏆",
    },
    {
      title: "On-Time & On Budget",
      text: "Reliable scheduling and transparent communication.",
      icon: "📅",
    },
    {
      title: "Customer First",
      text: "We treat every home like it's our own.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Why Choose MVMNT
        </h2>

        <p className="text-center text-zinc-400 mb-16">
          Premium remodeling backed by craftsmanship, communication, and integrity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => (

            <div
              key={item.title}
              className="bg-zinc-900 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
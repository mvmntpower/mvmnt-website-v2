export default function ServiceAreas() {
  const states = [
    {
      name: "Maryland",
      cities: "Baltimore • Annapolis • Columbia • Towson • Ellicott City",
    },
    {
      name: "Virginia",
      cities: "Northern Virginia • Alexandria • Arlington • Fairfax",
    },
    {
      name: "Pennsylvania",
      cities: "York • Lancaster • Harrisburg • Philadelphia",
    },
    {
      name: "Delaware",
      cities: "Wilmington • Newark • Middletown • Dover",
    },
  ];

  return (
    <section className="bg-zinc-950 py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
            Service Areas
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Proudly Serving The Mid-Atlantic
          </h2>

          <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">
            MVMNT provides high-quality remodeling services throughout
            Maryland, Virginia, Pennsylvania, and Delaware.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {states.map((state) => (

            <div
              key={state.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500 transition"
            >

              <h3 className="text-3xl font-bold text-white mb-6">
                {state.name}
              </h3>

              <p className="text-zinc-400 leading-8">
                {state.cities}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
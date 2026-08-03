export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-white text-center mb-4">
          What Homeowners Say
        </h2>

        <p className="text-zinc-400 text-center mb-16">
          Our reputation is built one project at a time.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-3xl p-8">
            <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>

            <p className="text-zinc-300 leading-8 mb-8">
              "The entire kitchen renovation exceeded every expectation.
              Professional, clean, and finished ahead of schedule."
            </p>

            <div>
              <h4 className="text-white font-bold">
                Sarah M.
              </h4>

              <p className="text-zinc-500">
                Kitchen Remodel
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>

            <p className="text-zinc-300 leading-8 mb-8">
              "Communication was incredible from start to finish.
              Our basement looks like a completely different home."
            </p>

            <div>
              <h4 className="text-white font-bold">
                James R.
              </h4>

              <p className="text-zinc-500">
                Basement Finish
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>

            <p className="text-zinc-300 leading-8 mb-8">
              "Beautiful craftsmanship, honest pricing, and an amazing
              crew. We'll definitely use MVMNT again."
            </p>

            <div>
              <h4 className="text-white font-bold">
                Emily T.
              </h4>

              <p className="text-zinc-500">
                Bathroom Remodel
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
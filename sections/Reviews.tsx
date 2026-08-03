export default function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      project: "Kitchen Remodel",
      date: "3 weeks ago",
      review:
        "The entire process was smooth from start to finish. The crew was professional, clean, and our kitchen turned out better than we imagined.",
    },
    {
      name: "James R.",
      project: "Basement Finish",
      date: "1 month ago",
      review:
        "Excellent communication, quality workmanship, and they stayed on schedule. I would absolutely recommend MVMNT.",
    },
    {
      name: "Emily T.",
      project: "Bathroom Remodel",
      date: "2 months ago",
      review:
        "Beautiful craftsmanship and attention to detail. The bathroom looks incredible and the team was fantastic.",
    },
  ];

  return (
    <section className="bg-black py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
            Customer Reviews
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Trusted By Homeowners
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
            Every project is built on quality craftsmanship, honest communication,
            and a commitment to exceeding our customers' expectations.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xl font-bold">
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-white font-semibold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    {review.date}
                  </p>

                </div>

              </div>

              <div className="text-yellow-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-zinc-300 leading-8">
                "{review.review}"
              </p>

              <div className="mt-8 pt-6 border-t border-zinc-800">

                <p className="text-yellow-400 font-semibold">
                  {review.project}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
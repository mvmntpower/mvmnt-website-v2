import Link from "next/link";

export default function Financing() {
  return (
    <section className="bg-black py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 p-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
                Financing Available
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Remodel Now.
                <br />
                Pay Over Time.
              </h2>

              <p className="text-zinc-400 text-lg mt-8 leading-8">
                Don't delay your dream renovation. We offer financing
                options for qualified homeowners, making it easier to
                start your kitchen, bathroom, basement, or whole-home
                remodeling project today.
              </p>

              <ul className="mt-10 space-y-4 text-zinc-300">

                <li>✔ Flexible Monthly Payments</li>

                <li>✔ Fast Approval Process</li>

                <li>✔ No Hidden Fees</li>

                <li>✔ Financing for Qualified Homeowners</li>

              </ul>

              <Link
                href="#contact"
                className="inline-block mt-10 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
              >
                Learn More
              </Link>

            </div>

            <div className="flex justify-center">

              <div className="w-80 h-80 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">

                <div className="text-center">

                  <div className="text-7xl mb-4">
                    💳
                  </div>

                  <h3 className="text-3xl font-bold">
                    Easy Financing
                  </h3>

                  <p className="text-zinc-400 mt-3">
                    Available for qualified homeowners
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
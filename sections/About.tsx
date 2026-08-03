import Image from "next/image";

export default function About() {
  return (
    <section
  id="about"
  className="bg-black py-28 px-6"
>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <p className="uppercase tracking-[0.4em] text-yellow-500 mb-6">
            About MVMNT
          </p>

          <h2 className="text-5xl font-bold text-white mb-8">
            Remodeling Homes
            <br />
            With Purpose.
          </h2>

          <p className="text-zinc-400 text-lg leading-8 mb-6">
            MVMNT was founded on one principle:
            deliver exceptional craftsmanship while making the remodeling
            experience simple, transparent, and stress-free.
          </p>

          <p className="text-zinc-400 text-lg leading-8 mb-10">
            Whether it's a luxury kitchen, spa-inspired bathroom,
            finished basement, or premium flooring installation,
            every project receives the same attention to detail.
          </p>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">100%</h3>
              <p className="text-zinc-400 mt-2">Customer Focused</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">4</h3>
              <p className="text-zinc-400 mt-2">States Served</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">Premium</h3>
              <p className="text-zinc-400 mt-2">Materials</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">Quality</h3>
              <p className="text-zinc-400 mt-2">Craftsmanship</p>
            </div>

          </div>

        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
  <Image
  src="/images/about/company/company.jpg"
  alt="MVMNT team"
  fill
  className="object-cover hover:scale-105 transition duration-700"
/>

  <div className="absolute inset-0 bg-black/20" />
</div>

      </div>
    </section>
  );
}
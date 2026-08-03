import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          <div>

            <h2 className="text-4xl font-bold text-white">
              MVM<span className="text-yellow-500">N</span>T
            </h2>

            <p className="text-zinc-400 mt-6 leading-8">
              Premium remodeling services specializing in kitchens,
              bathrooms, basements, flooring, exterior renovations,
              and complete home transformations.
            </p>

          </div>

          <div>

            <h3 className="text-white font-semibold text-xl mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>Kitchen Remodeling</li>

              <li>Bathroom Remodeling</li>

              <li>Basement Finishing</li>

              <li>Flooring Installation</li>

              <li>Deck Construction</li>

              <li>Exterior Remodeling</li>

            </ul>

          </div>

          <div>

            <h3 className="text-white font-semibold text-xl mb-6">
              Company
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="#about" className="text-zinc-400 hover:text-yellow-500 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="#projects" className="text-zinc-400 hover:text-yellow-500 transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link href="#contact" className="text-zinc-400 hover:text-yellow-500 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#faq" className="text-zinc-400 hover:text-yellow-500 transition">
                  FAQ
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-white font-semibold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-3 text-zinc-400">

              <p>(240) 284-6486</p>

              <p>info@mvmnt.llc</p>

              <p>
                Serving Maryland, Virginia,
                Pennsylvania & Delaware
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} MVMNT LLC. All Rights Reserved.
          </p>

          <p className="text-zinc-500 text-sm">
            Licensed • Insured • Free Estimates
          </p>

        </div>

      </div>

    </footer>
  );
}
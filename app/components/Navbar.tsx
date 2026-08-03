"use client";

import Image from "next/image";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "projects" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-xl border-b border-zinc-800">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

       <button
  onClick={() => scrollTo("home")}
  className="flex items-center text-4xl font-black tracking-[0.22em] select-none"
>
  <span className="text-white">MVM</span>
  <span className="text-yellow-500">N</span>
  <span className="text-white">T</span>

</button>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-10">

          {links.map((link) => (

            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white hover:text-yellow-500 transition-colors duration-300"
            >
              {link.name}
            </button>

          ))}

        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden lg:block bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition"
        >
          Free Estimate
        </button>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-7 h-0.5 bg-white"></span>
          <span className="w-7 h-0.5 bg-white"></span>
          <span className="w-7 h-0.5 bg-white"></span>
        </button>

      </div>

      {menuOpen && (

        <div className="lg:hidden bg-zinc-950 border-t border-zinc-800">

          {links.map((link) => (

            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left px-6 py-5 text-white hover:bg-zinc-900"
            >
              {link.name}
            </button>

          ))}

        </div>

      )}

    </nav>
  );
}
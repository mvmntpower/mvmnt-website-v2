"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "../app/components/GalleryModal";

const kitchenImages = [
  "/images/projects/kitchen/K1.jpg",
  "/images/projects/kitchen/K2.jpg",
  "/images/projects/kitchen/K3.jpg",
  "/images/projects/kitchen/K4.jpg",
  "/images/projects/kitchen/K5.jpg",
  "/images/projects/kitchen/K6.jpg",
  "/images/projects/kitchen/K7.jpg",
  "/images/projects/kitchen/K8.jpg",
];

const bathroomImages = [
  "/images/projects/bathroom/1.jpg",
  "/images/projects/bathroom/2.jpg",
  "/images/projects/bathroom/3.jpg",
  "/images/projects/bathroom/4.jpg",
  "/images/projects/bathroom/5.jpg",
  "/images/projects/bathroom/6.jpg",
  "/images/projects/bathroom/7.jpg",
];

const basementImages = [
  "/images/projects/basement/1.jpg",
  "/images/projects/basement/2.jpg",
  "/images/projects/basement/3.jpg",
  "/images/projects/basement/4.jpg",
];

const flooringImages = [
  "/images/projects/flooring/1.jpg",
  "/images/projects/flooring/2.jpg",
  "/images/projects/flooring/3.jpg",
  "/images/projects/flooring/4.jpg",
  "/images/projects/flooring/5.jpg",
  "/images/projects/flooring/6.jpg",
];

const projects = [
  {
    title: "Kitchen Remodeling",
    image: "/images/projects/kitchen/kitchen.jpg",
    gallery: kitchenImages,
  },
  {
    title: "Bathroom Remodeling",
    image: "/images/projects/bathroom/bathroom.jpg",
    gallery: bathroomImages,
  },
  {
    title: "Basement Finishing",
    image: "/images/projects/basement/basement.jpg",
    gallery: basementImages,
  },
  {
    title: "Flooring Installation",
    image: "/images/projects/flooring/flooring.jpg",
    gallery: flooringImages,
  },
];

export default function Projects() {
  const [gallery, setGallery] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="projects"
        className="bg-zinc-950 py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.35em] text-yellow-500 mb-4">
              Our Portfolio
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Featured Projects
            </h2>

            <p className="text-zinc-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
              Browse some of our recent remodeling projects throughout
              Maryland, Virginia, Pennsylvania, and Delaware.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project) => (

              <div
                key={project.title}
                onClick={() => {
                  setGallery(project.gallery);
                  setCurrent(0);
                  setOpen(true);
                }}
                className="group relative h-[430px] overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-zinc-300">
                    Click to view gallery
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {open && (
        <GalleryModal
          images={gallery}
          current={current}
          onClose={() => setOpen(false)}
          onNext={() =>
            setCurrent((current + 1) % gallery.length)
          }
          onPrev={() =>
            setCurrent(
              (current - 1 + gallery.length) %
                gallery.length
            )
          }
        />
      )}
    </>
  );
}
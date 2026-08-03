"use client";

import Image from "next/image";

type GalleryModalProps = {
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function GalleryModal({
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: GalleryModalProps) {
  return (
    <div
  className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center animate-fade"
    >
      <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-4 py-2 rounded-full">
  {current + 1} / {images.length}
</div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 bg-black/60 w-14 h-14 rounded-full flex items-center justify-center text-white text-4xl hover:bg-yellow-500 hover:text-black transition"
      >
        ‹
      </button>

      <div
        className="relative w-[90vw] h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt=""
          fill
          className="object-contain transition-all duration-500 hover:scale-105"
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 bg-black/60 w-14 h-14 rounded-full flex items-center justify-center text-white text-4xl hover:bg-yellow-500 hover:text-black transition"
      >
        ›
      </button>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 bg-black/60 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition"
      >
        ✕
      </button>
    </div>
  );
}
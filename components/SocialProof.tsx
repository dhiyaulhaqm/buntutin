"use client";

import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useRef } from "react";

const stories = [
  { title: "Lari sore bareng", detail: "Momen lari santai", color: "from-emerald-200 to-lime-100" },
  { title: "Teman di perjalanan", detail: "Cerita dari rute", color: "from-amber-100 to-orange-200" },
  { title: "Akhir pekan aktif", detail: "Lari bareng komunitas", color: "from-sky-100 to-cyan-200" },
  { title: "Satu putaran lagi", detail: "Keseruan sesi lari", color: "from-violet-100 to-fuchsia-200" },
  { title: "Pagi yang produktif", detail: "Mulai hari dengan lari", color: "from-rose-100 to-pink-200" },
  { title: "Lari tanpa buru-buru", detail: "Nikmati setiap langkah", color: "from-teal-100 to-emerald-200" },
  { title: "Rute favorit", detail: "Tempat seru untuk lari", color: "from-indigo-100 to-blue-200" },
  { title: "Lari bareng lagi", detail: "Sampai ketemu di sesi berikutnya", color: "from-orange-100 to-yellow-200" },
];

export function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: direction === "left" ? -trackRef.current.clientWidth * 0.8 : trackRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="section overflow-hidden bg-[#f3fcf6]">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="section-heading">
            <div className="eyebrow">Cerita bareng Buntutin</div>
            <h2>Lari jadi lebih asyik kalau ada teman.</h2>
            <p>Potongan momen dari lari bareng. Geser untuk melihat lebih banyak.</p>
          </div>
          <div className="flex gap-2 self-end">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Geser cerita ke kiri"
              className="grid size-11 place-items-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition hover:bg-emerald-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Geser cerita ke kanan"
              className="grid size-11 place-items-center rounded-full border border-emerald-200 bg-white text-emerald-800 transition hover:bg-emerald-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="relative left-1/2 mt-10 flex w-screen -translate-x-1/2 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-5 [scrollbar-width:thin] sm:px-8 lg:px-[max(32px,calc((100vw-1160px)/2))] [scrollbar-width:thin]"
          aria-label="Galeri cerita Buntutin"
        >
          {stories.map((story) => (
            <article key={story.title} className="w-[82vw] max-w-[340px] shrink-0 snap-start sm:w-[46vw] lg:w-[360px]">
              <div className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[28px] bg-gradient-to-br ${story.color}`}>
                <div className="absolute inset-4 rounded-[20px] border border-white/50" />
                <div className="relative grid size-16 place-items-center rounded-2xl bg-white/75 text-emerald-800 shadow-sm backdrop-blur">
                  <ImageIcon size={28} />
                </div>
                <span className="absolute bottom-7 left-7 rounded-full bg-white/85 px-3 py-1.5 text-xs font-bold text-emerald-900 backdrop-blur">
                  Foto menyusul
                </span>
              </div>
              <h3 className="mt-4 text-lg font-extrabold">{story.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{story.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
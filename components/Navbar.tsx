"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Navbar({ onBooking }: { onBooking: () => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Layanan", "#layanan"],
    // ["Layanan", "#paket"],
    ["Cara Kerja", "#cara-kerja"],
    ["Kontak", "#kontak"],
  ];
  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-emerald-900/10 bg-white/90 backdrop-blur-lg">
      <div className="container flex h-[74px] items-center justify-between">
        <button
          onClick={() => go("#top")}
          className="flex items-center gap-2 text-xl font-extrabold tracking-[-.05em]"
          aria-label="Kembali ke atas"
        >
          <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-emerald-600">
            <Image
              src="/buntutin.png"
              width={36}
              height={36}
              alt=""
              aria-hidden="true"
              className="size-full object-contain"
            />
          </span>
          Buntutin<span className="text-emerald-600">.</span>
        </button>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <button
              key={href}
              onClick={() => go(href)}
              className="text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          onClick={onBooking}
          className="btn btn-dark hidden min-h-[42px] px-5 text-sm sm:inline-flex"
        >
          Sini Ku Buntutin
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center rounded-full border border-slate-200 lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 shadow-lg lg:hidden">
          <nav className="container flex flex-col gap-1">
            {links.map(([label, href]) => (
              <button
                key={href}
                onClick={() => go(href)}
                className="rounded-xl px-3 py-3 text-left font-semibold text-slate-600 hover:bg-emerald-50"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onBooking();
              }}
              className="btn btn-dark mt-2"
            >
              Ajak Lari Bareng
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

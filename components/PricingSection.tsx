"use client";

import { Check, Sparkles } from "lucide-react";
import { formatRupiah, packages, PackageId } from "@/lib/config";

export function PricingSection({
  onBooking,
}: {
  onBooking: (packageId?: PackageId) => void;
}) {
  return (
    <section id="paket" className="section">
      <div className="container">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="section-heading">
            <div className="eyebrow">Teman lari fleksibel</div>
            <h2>Satu teman lari, bisa diatur sesuai maumu.</h2>
            <p>
              Temani lari santai sebagai layanan utama. Kalau ada kebutuhan
              tambahan, kita bicarakan dulu sebelum hari lari.
            </p>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-500">Harga final menyesuaikan durasi, lokasi, dan request. Semua dikonfirmasi dulu sebelum sesi.</p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.id}
              className={`card relative flex flex-col p-7 ${item.popular ? "border-emerald-500 ring-2 ring-emerald-100" : ""}`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-7 flex items-center gap-1 rounded-full bg-lime px-3 py-1 text-xs font-extrabold text-emerald-950">
                  <Sparkles size={13} /> PALING POPULER
                </div>
              )}
              <p className="text-sm font-extrabold uppercase tracking-widest text-emerald-700">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold">{item.name}</h3>
              <p className="mt-3 min-h-[50px] text-sm leading-6 text-slate-500">
                {item.description}
              </p>
              <div className="my-6 border-y border-slate-100 py-5">
                <span className="text-3xl font-extrabold tracking-tight">
                  {formatRupiah(
                  item.singlePrice,
                  )}
                </span>
                <span className="text-sm text-slate-500">
                  {" "}
                  / sesi
                </span>
              </div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                Yang kamu dapat:
              </p>
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li
                    className="flex gap-3 text-sm text-slate-600"
                    key={feature}
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-emerald-50 p-3 text-xs font-bold text-emerald-800">
                Cocok untuk: {item.suitableFor}
              </p>
              <button
                onClick={() => onBooking(item.id)}
                className={`btn mt-7 ${item.popular ? "btn-primary" : "btn-outline"}`}
              >
                Pilih Paket
              </button>
            </article>
          ))}
        </div>
          <p className="mt-6 text-center text-xs text-slate-400">
          Pilih layanan dasar untuk mulai ngobrol. Hidrasi, dokumentasi, target
          pace, atau kebutuhan lain bersifat opsional dan dibicarakan dulu.
        </p>
      </div>
    </section>
  );
}

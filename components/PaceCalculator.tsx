"use client";

import { ArrowRight, Calculator, Clock3 } from "lucide-react";
import { useMemo, useState } from "react";
import { formatRupiah, packages, PackageId } from "@/lib/config";
import {
  calculateDuration,
  formatDuration,
  parsePace,
  recommendPackage,
} from "@/lib/pace";

export function PaceCalculator({
  onBooking,
}: {
  onBooking: (packageId?: PackageId) => void;
}) {
  const [distance, setDistance] = useState("10");
  const [pace, setPace] = useState("6:00");
  const distanceNumber = Number(distance);
  const duration = useMemo(
    () => calculateDuration(distanceNumber, pace),
    [distanceNumber, pace],
  );
  const selected =
    packages.find((item) => item.id === recommendPackage(distanceNumber)) ||
    packages[1];
  const paceError = pace.length > 0 && !parsePace(pace);
  return (
    <section id="kalkulator" className="section bg-[#10231d] text-white">
      <div className="container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <div className="eyebrow text-lime">Pace calculator</div>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-tight tracking-[-.06em]">
            Tahu targetmu.
            <br />
            <span className="text-lime">Siapkan support-nya.</span>
          </h2>
          <p className="mt-5 max-w-[440px] leading-8 text-slate-300">
            Hitung estimasi waktu tempuh dan dapatkan rekomendasi paket yang
            sesuai dengan jarak lari kamu.
          </p>
        </div>
        <div className="rounded-[28px] bg-white p-6 text-ink shadow-2xl sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
              <Calculator size={21} />
            </span>
            <div>
              <h3 className="font-extrabold">Kalkulator pace</h3>
              <p className="text-xs text-slate-500">
                Tanpa reload, langsung dapat hasil.
              </p>
            </div>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold">
              Target jarak (KM)
              <input
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                type="number"
                min="0.1"
                step="0.1"
                className="mt-2 h-12 w-full rounded-xl border-slate-200"
                placeholder="Contoh: 10"
              />
            </label>
            <label className="text-sm font-bold">
              Target pace / KM
              <input
                value={pace}
                onChange={(e) => setPace(e.target.value)}
                className={`mt-2 h-12 w-full rounded-xl ${paceError ? "border-red-400" : "border-slate-200"}`}
                placeholder="MM:SS"
                inputMode="numeric"
              />
              <span
                className={`mt-1 block text-xs font-normal ${paceError ? "text-red-500" : "text-slate-400"}`}
              >
                {paceError
                  ? "Gunakan format MM:SS, antara 2:00–20:59."
                  : "Contoh: 6:00 per kilometer"}
              </span>
            </label>
          </div>
          <div className="mt-6 grid gap-4 rounded-2xl bg-emerald-50 p-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Estimasi waktu
              </p>
              <p className="mt-2 flex items-center gap-2 text-2xl font-extrabold">
                <Clock3 size={21} className="text-emerald-600" />
                {duration && distanceNumber > 0
                  ? formatDuration(duration)
                  : "—"}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Rekomendasi
              </p>
              <p className="mt-2 text-lg font-extrabold">
                {distanceNumber > 0
                  ? `${selected.eyebrow} — ${selected.name}`
                  : "Masukkan jarak"}
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
            <p className="max-w-[320px] text-xs leading-5 text-slate-500">
              Jarak {distanceNumber > 0 ? distanceNumber : "—"}K cocok untuk
              support {selected.eyebrow}. Harga mulai{" "}
              {formatRupiah(selected.singlePrice)}.
            </p>
            <button
              disabled={!duration}
              onClick={() => onBooking(selected.id)}
              className="btn btn-dark min-h-11 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Pesan Paket Ini <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

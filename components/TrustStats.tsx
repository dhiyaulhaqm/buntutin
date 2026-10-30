import { Star, Timer, Users } from "lucide-react";
export function TrustStats() {
  return (
    <section className="border-y border-emerald-100 bg-white">
      <div className="container grid grid-cols-1 divide-y divide-emerald-100 py-7 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="flex items-center justify-center gap-3 py-4 sm:py-1">
          <Timer className="text-emerald-600" />
          <div>
            <strong className="text-2xl font-extrabold">100+</strong>
            <p className="text-xs font-semibold text-slate-500">
              Teman sepanjang rute
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 py-4 sm:py-1">
          <Users className="text-emerald-600" />
          <div>
            <strong className="text-2xl font-extrabold">50+</strong>
            <p className="text-xs font-semibold text-slate-500">
              Lari dengan santai
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 py-4 sm:py-1">
          <Star className="fill-amber-400 text-amber-400" />
          <div>
            <strong className="text-2xl font-extrabold">4.9/5</strong>
            <p className="text-xs font-semibold text-slate-500">
              Sesuai gaya kamu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

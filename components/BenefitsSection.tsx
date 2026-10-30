import { Camera, ChevronRight, Droplets, Route, Bike } from "lucide-react";

const benefits = [
  {
    icon: Bike,
    title: "Ada teman di perjalanan",
    text: "Lari sendirian? Asikin aja nanti Aku yang temenin dengan suasana santai.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Route,
    title: "Aku Bantuin",
    text: "Males bawa barang barang? santay nanti aku bawain aja seperlunya",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Droplets,
    title: "Atur bareng-bareng",
    text: "Punya kebutuhan minum atau perlengkapan tertentu? Kasi tau aja, nanti kita bahas.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: Camera,
    title: "Momen lari kamu",
    text: "Kalau pengen dokumentasi foto atau video singkat, gampang bisa diatur nanti.",
    color: "bg-violet-100 text-violet-700",
  },
];
export function BenefitsSection() {
  return (
    <section id="layanan" className="section">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">Kenapa Buntutin?</div>
          <h2>Lari itu lebih seru kalau ada yang nemenin.</h2>
          <p>
            Pikir nanti target pace atau persiapan racemu. Ceritakan saja rencana
            larimu dulu, lalu kita atur pendampingan yang terasa pas.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, ...item }) => (
            <article
              className="card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              key={item.title}
            >
              <div
                className={`grid size-12 place-items-center rounded-2xl ${item.color}`}
              >
                <Icon size={23} />
              </div>
              <h3 className="mt-6 text-lg font-extrabold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.text}
              </p>
              <ChevronRight
                className="mt-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600"
                size={20}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

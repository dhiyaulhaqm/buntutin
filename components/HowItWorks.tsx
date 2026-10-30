import { CalendarDays, CheckCircle2, MessageCircle } from "lucide-react";
const steps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Ceritakan rencana lari",
    text: "Kabarin kapan dan di mana mau lari. Detail lainnya boleh menyusul.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Ngobrol dulu lewat WhatsApp",
    text: "Kita cek jadwal, lalu bahas rute dan bantuan tambahan kalau kamu perlu.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Yuk, lari bareng!",
    text: "Teman Buntutin datang sesuai kesepakatan dan menemani dengan santai.",
  },
];
export function HowItWorks() {
  return (
    <section id="cara-kerja" className="section bg-[#f3fcf6]">
      <div className="container">
        <div className="mx-auto max-w-[620px] text-center">
          <div className="eyebrow justify-center">Semudah itu</div>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-tight tracking-[-.055em]">
            Gampang, tinggal ngobrol.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Belum tahu butuh apa? Nggak apa-apa. Kita bisa atur bareng sebelum hari lari.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, ...step }, index) => (
            <div className="relative text-center" key={step.number}>
              {index < 2 && (
                <div className="absolute left-[65%] top-7 hidden h-px w-[70%] border-t border-dashed border-emerald-300 md:block" />
              )}
              <div className="relative mx-auto grid size-16 place-items-center rounded-2xl bg-white text-emerald-700 shadow-soft">
                <Icon size={26} />
                <span className="absolute -right-3 -top-3 grid size-7 place-items-center rounded-full bg-lime text-xs font-extrabold">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-extrabold">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-[290px] text-sm leading-7 text-slate-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

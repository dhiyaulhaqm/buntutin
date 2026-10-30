import { ArrowRight,  CircleCheck, Play, ShieldCheck } from "lucide-react";

export function HeroSection({ onBooking }: { onBooking: () => void }) {
  return (
    <section id="top" className="overflow-hidden bg-[#f3fcf6] pt-[122px]">
      <div className="container grid min-h-[650px] items-center gap-12 pb-16 lg:grid-cols-[1.03fr_.97fr] lg:pb-24">
        <div className="relative z-10">
          <div className="eyebrow">Teman lari di atas roda</div>
          <h1 className="mt-5 max-w-[650px] text-[clamp(2.9rem,6.5vw,5.7rem)] font-extrabold leading-[.98] tracking-[-.075em]">
            Lari bareng,
            <br />
            <span className="text-emerald-600">lebih seru.</span>
            <br />
            Biar ada yang buntutin.
          </h1>
          <p className="mt-7 max-w-[550px] text-lg leading-8 text-slate-600">
            Mau lari santai, ngobrol di jalan, atau sekadar ada teman yang menemani?
            Kami ikut sesuai gaya dan kebutuhanmu. Nggak harus punya target khusus.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={onBooking} className="btn btn-primary">
              Pesan Sekarang <ArrowRight size={18} />
            </button>
            <a href="#paket" className="btn btn-outline">
              Kenalan dengan layanan
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <CircleCheck size={17} className="text-emerald-600" />{" "}
              Santai sesuai gayamu
            </span>
            <span className="flex items-center gap-2">
              <CircleCheck size={17} className="text-emerald-600" />
              Kebutuhan ekstra bisa dibicarakan
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-8 top-12 size-40 rounded-full bg-lime/30 blur-2xl" />
          <div className="relative aspect-[.9] overflow-hidden rounded-[38px] bg-[#c3edcf] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,#fff9_0_8%,transparent_9%),linear-gradient(145deg,#d9f5df,#8bd5a2)]" />
            <div className="absolute bottom-0 left-[-8%] h-[48%] w-[120%] rounded-[50%_50%_0_0] bg-[#4b9b69]" />
            <div className="absolute bottom-[20%] left-[25%] h-40 w-16 rotate-[12deg] rounded-[45%] bg-[#17392d]" />
            <div className="absolute bottom-[15%] left-[35%] h-40 w-16 rotate-[-12deg] rounded-[45%] bg-[#f08b6b]" />
            <div className="absolute bottom-[9%] left-[21%] size-20 rounded-full border-[8px] border-[#172c26] shadow-[92px_0_0_-8px_#172c26]" />
            {/* <div className="absolute bottom-[38%] right-[12%] rounded-2xl bg-white/90 p-4 shadow-lg">
              <div className="flex items-center gap-2 text-sm font-extrabold">
                <span className="grid size-8 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Bike size={17} />
                </span>{" "}
                Teman lari
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Temani lari, bantu seperlunya
              </p>
            </div> */}
            <button
              className="absolute bottom-7 left-7 grid size-14 place-items-center rounded-full bg-white text-emerald-700 shadow-lg"
              aria-label="Lihat cerita Buntutin"
            >
              <Play size={19} fill="currentColor" />
            </button>
          </div>
          <div className="absolute -bottom-7 -left-7 rounded-2xl bg-white p-4 shadow-soft">
            <div className="flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                <ShieldCheck size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-500">Prioritas kami</p>
                <p className="font-extrabold">Lari lebih nyaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

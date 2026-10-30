import { ArrowUpRight,  Instagram } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#10231d] pb-8 pt-16 text-white">
      <div className="container">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-2xl font-extrabold tracking-[-.05em]">
             
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
             
              Buntutin<span className="text-lime">.</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Mari berlari dengan Buntutin.id, Lelah hari ini
              jaminan sehat hari esok. Biarin aku yang buntutin larimu
            </p>
            <div className="mt-6 flex gap-3">
              <a
                aria-label="Instagram Buntutin"
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="grid size-10 place-items-center rounded-full border border-white/15 hover:bg-white/10"
              >
                <Instagram size={18} />
              </a>
              
            </div>
          </div>
          <div>
            <h3 className="font-extrabold">Navigasi</h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <a href="#layanan" className="hover:text-lime">
                Layanan
              </a>
              <a href="#paket" className="hover:text-lime">
                Paket
              </a>
              <a href="#kalkulator" className="hover:text-lime">
                Cara Kerja
              </a>
              <a href="#faq" className="hover:text-lime">
                FAQ
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-extrabold">Hubungi kami</h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-lime"
              >
                {siteConfig.whatsappDisplay}
                <ArrowUpRight size={14} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-lime"
              >
                {siteConfig.email}
              </a>
              <p>{siteConfig.serviceArea}</p>
              <p>{siteConfig.serviceHours}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-7 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Buntutin.id</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
}

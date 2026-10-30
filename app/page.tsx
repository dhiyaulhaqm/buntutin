"use client";

import { useCallback, useState } from "react";
import { BookingModal } from "@/components/BookingModal";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
// import { PricingSection } from "@/components/PricingSection";
import { SocialProof } from "@/components/SocialProof";
// import { TrustStats } from "@/components/TrustStats";
import type { PackageId } from "@/lib/config";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [packageId, setPackageId] = useState<PackageId | undefined>();
  const openBooking = useCallback((id?: PackageId) => {
    setPackageId(id);
    setBookingOpen(true);
  }, []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);
  return (
    <>
      <Navbar onBooking={() => openBooking()} />
      <main>
        <HeroSection onBooking={() => openBooking()} />
        {/* <TrustStats />  {" "} */}
        <BenefitsSection />
        <HowItWorks />
        {/* <PricingSection onBooking={openBooking} /> */}
        <section id="kalkulator" className="section bg-[#10231d] text-white">
          <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="eyebrow text-lime">Punya target khusus?</div>
              <h2 className="mt-3 text-3xl font-extrabold">
                Bisa kita atur bareng.
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-300">
                Pace, jarak, hidrasi, atau persiapan race bukan keharusan. Kalau
                kamu perlu, ceritakan saja saat ngobrol dengan tim.
              </p>
            </div>
            <button
              onClick={() => openBooking()}
              className="btn btn-primary shrink-0"
            >
              Diskusikan kebutuhan
            </button>
          </div>
        </section>
        <SocialProof />
        <section className="section bg-emerald-50">
          <div className="container">
            <div className="relative overflow-hidden rounded-[32px] bg-emerald-700 px-7 py-12 text-white sm:px-14 sm:py-16">
              <div className="absolute -right-16 -top-24 size-72 rounded-full bg-lime/20 blur-2xl" />
              <div className="relative max-w-2xl">
                <div className="eyebrow text-lime">Siap lari bareng?</div>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-[-.06em]">
                  Kamu lari santai.
                  <br />
                  Kami <span className="text-lime">buntutin.</span>
                </h2>
                <p className="mt-5 max-w-lg leading-7 text-emerald-50">
                  Nggak perlu rencana sempurna. Ceritakan dulu ide lari kamu,
                  detailnya bisa kita obrolin.
                </p>
                <button
                  onClick={() => openBooking()}
                  className="btn btn-primary mt-7"
                >
                  Ajak Lari Bareng
                </button>
              </div>
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
      <BookingModal
        open={bookingOpen}
        initialPackage={packageId}
        onClose={closeBooking}
      />
    </>
  );
}

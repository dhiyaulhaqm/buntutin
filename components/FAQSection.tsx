"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs, siteConfig } from "@/lib/config";

export function FAQSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div className="section-heading">
          <div className="eyebrow">Punya pertanyaan?</div>
          <h2>Yang sering ditanyakan.</h2>
          <p>
            Belum menemukan jawaban yang kamu cari? Tim Buntutin siap membantu
            lewat WhatsApp.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline mt-6"
          >
            Tanya admin
          </a>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              className="rounded-2xl border border-slate-200"
              key={faq.question}
            >
              <button
                className="flex w-full items-center justify-between gap-5 p-5 text-left font-extrabold"
                onClick={() => setActive(active === index ? -1 : index)}
                aria-expanded={active === index}
              >
                {faq.question}
                <ChevronDown
                  size={19}
                  className={`shrink-0 transition ${active === index ? "rotate-180 text-emerald-600" : "text-slate-400"}`}
                />
              </button>
              {active === index && (
                <p className="px-5 pb-5 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

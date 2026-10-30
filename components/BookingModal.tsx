"use client";
import { useEffect, useState } from "react";
import {
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  X,
} from "lucide-react";
import { PackageId, siteConfig } from "@/lib/config";
import { parsePace } from "@/lib/pace";

type Form = {
  name: string;
  phone: string;
  date: string;
  time: string;
  route: string;
  pace: string;
  packageId: PackageId;
  distance: string;
  notes: string;
  consent: boolean;
};
const blank: Form = {
  name: "",
  phone: "",
  date: "",
  time: "",
  route: "",
  pace: "",
  packageId: "pro",
  distance: "",
  notes: "",
  consent: false,
};
const today = () => {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
};
export function BookingModal({
  open,
  initialPackage,
  onClose,
}: {
  open: boolean;
  initialPackage?: PackageId;
  onClose: () => void;
}) {
  const [form, setForm] = useState(blank),
    [errors, setErrors] = useState<Record<string, string>>({}),
    [sent, setSent] = useState(false);
  useEffect(() => {
    if (!open) return;
    setForm((f) => ({ ...f, packageId: initialPackage || f.packageId }));
    setErrors({});
    setSent(false);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener("keydown", key);
    };
  }, [open, initialPackage, onClose]);
  if (!open) return null;
  const set = (key: keyof Form, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));
  const validate = () => {
    const e: Record<string, string> = {};
    const phone = form.phone.replace(/\D/g, "");
    if (form.name.trim().length < 2)
      e.name = "Masukkan nama minimal 2 karakter.";
    if (!/^(?:62|0)8[1-9][0-9]{7,11}$/.test(phone))
      e.phone = "Nomor WhatsApp belum valid.";
    if (form.date && form.date < today())
      e.date = "Pilih tanggal hari ini atau setelahnya.";
    if (form.time && (
      !/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(form.time) ||
      +form.time.slice(0, 2) < 5 ||
      +form.time.slice(0, 2) > 21
    ))
      e.time = "Jam layanan: 05.00–21.00 WIB.";
    if (form.pace && !parsePace(form.pace))
      e.pace = "Gunakan format MM:SS, antara 2:00–20:59.";
    if (!form.consent) e.consent = "Persetujuan diperlukan.";
    setErrors(e);
    return !Object.keys(e).length;
  };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    const msg = [
      "Halo Buntutin! Saya tertarik ditemani lari. Boleh ngobrol dulu soal jadwal dan kebutuhannya?",
      "",
      `Nama: ${form.name}`,
      `No. WhatsApp: ${form.phone}`,
      form.date && `Rencana tanggal: ${form.date}`,
      form.time && `Perkiraan jam: ${form.time} WIB`,
      form.route && `Lokasi/rute (kalau sudah tahu): ${form.route}`,
      form.pace && `Target pace (opsional): ${form.pace}/km`,
      `Layanan: Teman Lari, detail dibicarakan dulu`,
      form.distance && `Target Jarak: ${form.distance} KM`,
      form.notes && `Catatan: ${form.notes}`,
      "",
      "Mohon info jadwal dan harga setelah kebutuhan saya dibicarakan. Terima kasih!",
    ]
      .filter(Boolean)
      .join("\\n");
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };
  const cls = (k: string) =>
    `mt-2 w-full rounded-xl border-slate-200 text-sm focus:border-emerald-500 focus:ring-emerald-500 ${errors[k] ? "border-red-400" : ""}`;
  const err = (k: string) =>
    errors[k] && (
      <span className="mt-1 block text-xs text-red-600">{errors[k]}</span>
    );
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="max-h-[94vh] w-full max-w-2xl overflow-y-auto rounded-t-[28px] bg-white p-5 shadow-2xl sm:rounded-[28px] sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
              <p className="eyebrow">Ngobrol soal lari bareng</p>
            <h2 id="booking-title" className="mt-3 text-2xl font-extrabold">
              Yuk, rencanakan lari bareng.
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Isi yang sudah kamu tahu. Yang belum, bisa dibicarakan lewat WhatsApp.
            </p>
          </div>
          <button
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full bg-slate-100"
            aria-label="Tutup booking"
          >
            <X size={19} />
          </button>
        </div>
        {sent ? (
          <div className="my-10 rounded-2xl bg-emerald-50 p-7 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-600 text-white">
              <Check />
            </span>
            <h3 className="mt-5 text-xl font-extrabold">
              Pesan WhatsApp sudah disiapkan
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Silakan kirim pesan yang terbuka di WhatsApp. Admin akan mengecek
              ketersediaan dan harga final.
            </p>
            <button onClick={onClose} className="btn btn-dark mt-6">
              Selesai
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">
                Nama lengkap
                <input
                  className={cls("name")}
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Nama kamu"
                />
                {err("name")}
              </label>
              <label className="text-sm font-bold">
                Nomor WhatsApp
                <input
                  className={cls("phone")}
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  inputMode="tel"
                />
                {err("phone")}
              </label>
              <label className="text-sm font-bold">
                <span className="flex items-center gap-1">
                  Tanggal lari <span className="font-normal text-slate-400">(opsional)</span> <CalendarDays size={14} />
                </span>
                <input
                  type="date"
                  min={today()}
                  className={cls("date")}
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                />
                {err("date")}
              </label>
              <label className="text-sm font-bold">
                <span className="flex items-center gap-1">
                  Jam mulai <span className="font-normal text-slate-400">(opsional)</span> <Clock3 size={14} />
                </span>
                <input
                  type="time"
                  className={cls("time")}
                  value={form.time}
                  onChange={(e) => set("time", e.target.value)}
                />
                {err("time")}
              </label>
            </div>
            <label className="block text-sm font-bold">
              <span className="flex items-center gap-1">
                Lokasi atau rute <span className="font-normal text-slate-400">(opsional)</span> <MapPin size={14} />
              </span>
              <input
                className={cls("route")}
                value={form.route}
                onChange={(e) => set("route", e.target.value)}
                placeholder="Contoh: GBK — Senayan"
              />
              {err("route")}
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">
                Target pace <span className="font-normal text-slate-400">(opsional)</span>
                <input
                  className={cls("pace")}
                  value={form.pace}
                  onChange={(e) => set("pace", e.target.value)}
                  placeholder="6:00"
                  inputMode="numeric"
                />
                {err("pace")}
              </label>
              <label className="text-sm font-bold">
                Target jarak{" "}
                <span className="font-normal text-slate-400">(opsional)</span>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  className={cls("distance")}
                  value={form.distance}
                  onChange={(e) => set("distance", e.target.value)}
                  placeholder="Contoh: 10 KM"
                />
              </label>
            </div>
            <p className="rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
              Teman lari santai adalah layanan utamanya. Hidrasi, dokumentasi,
              pace, atau kebutuhan lainnya bisa kamu request dan kita bicarakan
              dulu sebelum sesi.
            </p>
            <label className="block text-sm font-bold">
              Catatan tambahan{" "}
              <span className="font-normal text-slate-400">(opsional)</span>
              <textarea
                rows={2}
                className={cls("notes")}
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                placeholder="Kebutuhan khusus, link rute, dll."
              />
            </label>
            <label className="flex cursor-pointer gap-3 text-xs leading-5 text-slate-500">
              <input
                type="checkbox"
                className="mt-0.5 rounded border-slate-300 text-emerald-600"
                checked={form.consent}
                onChange={(e) => set("consent", e.target.checked)}
              />
              <span>
                Saya setuju detail ini digunakan untuk konfirmasi booking. Harga
                final dikonfirmasi admin.
              </span>
            </label>
            {err("consent")}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline"
              >
                Batal
              </button>
              <button type="submit" className="btn btn-primary">
                <MessageCircle size={18} /> Lanjut ke WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export type BillingMode = "single" | "monthly";

export type PackageId = "starter" | "pro" | "ultimate";

export type ServicePackage = {
  id: PackageId;
  name: string;
  eyebrow: string;
  description: string;
  singlePrice: number;
  monthlyPrice: number;
  features: string[];
  suitableFor: string;
  popular?: boolean;
};

export const siteConfig = {
  name: "Buntutin",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  email: "buntutin.id",
  serviceArea: "Yogyakarta",
  serviceHours: "Senin - Minggu, 06.00 - 23.00 WIB",
  instagram: "https://instagram.com/buntutin",
  tiktok: "https://tiktok.com/@buntutin.id",
};

export const packages: ServicePackage[] = [
  {
    id: "starter",
    name: "Teman Lari",
    eyebrow: "Layanan utama",
    description: "Teman bersepeda untuk menemani sesi lari santaimu.",
    singlePrice: 125000,
    monthlyPrice: 450000,
    features: ["Teman sepeda untuk menemani lari", "Rute dan waktu disepakati bersama", "Bantuan bawa barang kecil", "Suasana santai, tanpa target wajib"],
    suitableFor: "Lari santai, pemula, atau sekadar ingin ditemani",
  },
  {
    id: "pro",
    name: "Teman Lari + Request",
    eyebrow: "Bisa request",
    description: "Tambahkan bantuan sesuai kebutuhanmu setelah ngobrol dengan tim.",
    singlePrice: 225000,
    monthlyPrice: 800000,
    features: ["Semua dari layanan Teman Lari", "Hidrasi atau perlengkapan tambahan", "Foto/video singkat jika diminta", "Atur pace atau rute khusus bila perlu"],
    suitableFor: "Kebutuhan khusus yang dibicarakan sebelum sesi",
    popular: true,
  },
  {
    id: "ultimate",
    name: "Lari Bareng Rutin",
    eyebrow: "Untuk rutin",
    description: "Atur jadwal pendampingan berkala yang cocok dengan keseharianmu.",
    singlePrice: 450000,
    monthlyPrice: 1600000,
    features: ["Jadwal rutin sesuai kesepakatan", "Pendampingan santai yang konsisten", "Kebutuhan tambahan bisa dibahas", "Harga akhir dikonfirmasi admin"],
    suitableFor: "Yang ingin punya teman lari berkala",
  },
];

export const faqs = [
  { question: "Apakah harus punya target pace atau jarak?", answer: "Nggak harus. Lari santai tanpa target juga boleh. Kalau punya pace atau jarak tertentu, ceritakan saja supaya bisa kita sesuaikan." },
  { question: "Bantuan apa saja yang bisa diminta?", answer: "Kamu bisa bertanya soal membawa barang, hidrasi, dokumentasi, atau rute. Kebutuhan tambahan dibicarakan dulu dan dikonfirmasi sebelum sesi." },
  { question: "Apakah layanan tersedia untuk grup?", answer: "Saat ini paket dirancang untuk pendampingan personal. Untuk grup atau event, hubungi kami untuk penawaran khusus." },
  // { question: "Apa yang terjadi jika hujan?", answer: "Keselamatan tetap menjadi prioritas. Jika cuaca atau kondisi jalan tidak mendukung, jadwal dapat dibicarakan untuk reschedule." },
  // { question: "Apakah harga sudah termasuk transportasi?", answer: "Harga awal adalah estimasi layanan dasar. Biaya transportasi atau kebutuhan tambahan akan dibicarakan dan dikonfirmasi admin sebelum kamu memutuskan." },
  { question: "Belum tahu detail rute atau durasinya, boleh?", answer: "Boleh. Isi informasi yang sudah kamu tahu, nanti detail lainnya bisa dibicarakan lewat WhatsApp sebelum sesi." },
];

export const formatRupiah = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

export const metadata: Metadata = {
  title: "Buntutin — Teman Larimu yang Lebih Seru",
  description: "Teman untuk menemani lari santaimu. Ceritakan kebutuhanmu, detailnya bisa dibicarakan bareng Buntutin.",
  openGraph: { title: "Buntutin — Lari bareng, lebih seru", description: "Teman untuk menemani lari santaimu." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={jakarta.variable}>{children}</body></html>;
}

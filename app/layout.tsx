import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

export const metadata: Metadata = {
  title: "Aman",
  description: "Women-only ride-hailing platform in Jordan",
};
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans "bg-[#fbf9ff]`}>
        <ScrollToTop />
        <Navbar />
        <main className="bg-[#fbf9ff] pt-16 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Aman",
  description: "Women-only ride-hailing platform in Jordan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fbf9ff]">
        <Navbar />
        <main className="bg-[#fbf9ff] pt-16 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

"use client";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex h-16 max-w-7xl items-center justify-between px-6 gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#e069b3] shadow-md">
            <ShieldCheck size={16} className="text-white" />
          </span>
          <Link href="/" className="text-xl font-bold">
            Aman
          </Link>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
        </nav>

        <Link href="/become-driver" className="rounded-full bg-[#e069b3] px-5 py-2 text-sm font-semibold text-white">
          Apply now
        </Link>
      </div>
    </header>
  );
}

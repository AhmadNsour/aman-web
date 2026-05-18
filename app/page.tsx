// app/page.tsx
import Link from "next/link";
import { ShieldCheck, Star, Users } from "lucide-react";

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-12rem)] overflow-x-hidden bg-[#fbf9ff]">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#e069b3]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#e069b3]/15 blur-3xl" />
      <div className="relative mx-auto flex min-h-[calc(100vh-18rem)] max-w-6xl flex-col items-center justify-center px-6 py-10 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-[#e069b3] shadow-sm">
          <ShieldCheck size={16} />
          Women-only ride-hailing in Jordan
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-[#4e5a75] sm:text-5xl lg:text-5xl">
          Safe rides for women,
          <span className="text-[#e069b3]"> by women.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4e5a75] sm:text-lg">Aman is a trusted women-only ride-hailing platform built around safety, verification, and community.</p>

        <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Star size={16} className="fill-[#e069b3] text-[#e069b3]" />
            4.9 driver rating
          </span>

          <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Users size={16} className="text-[#e069b3]" />
            100+ drivers target
          </span>

          <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <ShieldCheck size={16} className="text-[#e069b3]" />
            Verified safety
          </span>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/become-driver" className="rounded-full bg-[#e069b3] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-700">
            Become a Driver
          </Link>

          <Link href="/about" className="rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-[#4e5a75] transition hover:border-purple-200 hover:bg-purple-50">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

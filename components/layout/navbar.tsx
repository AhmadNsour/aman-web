"use client";

import Link from "next/link";
import { Menu, ShieldCheck } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0f172a]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e069b3] shadow-md">
            <ShieldCheck size={18} className="text-white" />
          </span>

          <span className="text-xl font-bold text-[#4e5a75] dark:text-white">Aman</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-[#4e5a75] transition hover:text-[#e069b3] dark:text-white dark:hover:text-[#e069b3]">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/become-driver" className="rounded-full bg-[#e069b3] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d85aad]">
            Apply now
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-[#4e5a75] dark:border-white/10 dark:bg-[#111827] dark:text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-80 bg-white p-0 dark:bg-[#0f172a]">
            <SheetHeader className="border-b border-gray-100 px-6 py-5 dark:border-white/10">
              <SheetTitle className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e069b3] shadow-md">
                  <ShieldCheck size={18} className="text-white" />
                </span>

                <span className="text-xl font-bold text-[#4e5a75] dark:text-white">Aman</span>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col px-6 py-6">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link href={link.href} className="border-b border-gray-100 py-4 text-base font-semibold text-[#4e5a75] transition hover:text-[#e069b3] dark:border-white/10 dark:text-white">
                    {link.label}
                  </Link>
                </SheetClose>
              ))}

              <SheetClose asChild>
                <Link href="/become-driver" className="mt-6 rounded-full bg-[#e069b3] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#d85aad]">
                  Apply now
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

// components/layout/footer.tsx
import Link from "next/link";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-purple-600 shadow-md">
            <ShieldCheck size={16} className="text-white" />
          </span>

          <span className="text-lg font-bold tracking-tight text-gray-900">Aman</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-600">
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-purple-600" />
            +962 6 000 0000
          </span>

          <span className="flex items-center gap-1.5">
            <Mail size={14} className="text-purple-600" />
            drivers@aman.jo
          </span>

          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>

          <Link href="/support" className="hover:text-gray-900">
            Support
          </Link>

          <span>© 2026 Aman Technologies</span>
        </div>
      </div>
    </footer>
  );
}

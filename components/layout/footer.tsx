// components/layout/footer.tsx
import Link from "next/link";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#e069b3] shadow-md">
            <ShieldCheck size={16} className="text-white" />
          </span>

          <span className="text-lg font-bold tracking-tight text-[#4e5a75]">Aman</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#4e5a75]">
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-[#e069b3]" />
            +962 6 000 0000
          </span>

          <span className="flex items-center gap-1.5">
            <Mail size={14} className="text-[#e069b3]" />
            support@aman.jo
          </span>

          <Link href="/about" className="hover:text-[#4e5a75]">
            About
          </Link>

          <Link href="/support" className="hover:text-[#4e5a75]">
            Support
          </Link>
          <Link href="/privacy-policy" className="hover:text-[#4e5a75]">
            Privacy Policy
          </Link>

          <Link href="/terms-of-service" className="hover:text-[#4e5a75]">
            Terms of Service
          </Link>
          <span>© {new Date().getFullYear()} Aman Technologies</span>
        </div>
      </div>
    </footer>
  );
}

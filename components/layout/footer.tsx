// components/layout/footer.tsx
import Link from "next/link";
import { Mail, Phone, ShieldCheck } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e069b3] shadow-md">
              <ShieldCheck size={18} className="text-white" />
            </span>

            <span className="text-2xl font-bold tracking-tight text-[#4e5a75]">Aman</span>
          </Link>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex flex-col items-center gap-3 text-sm text-[#4e5a75] sm:flex-row sm:gap-6">
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-[#e069b3]" />
                +962 6 000 0000
              </span>

              <span className="flex items-center gap-2">
                <Mail size={16} className="text-[#e069b3]" />
                support@aman.jo
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-[#4e5a75] md:justify-end">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[#e069b3]">
                  {link.label}
                </Link>
              ))}
            </nav>

            <span className="text-sm text-[#4e5a75]/70">© {new Date().getFullYear()} Aman Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

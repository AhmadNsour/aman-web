// components/layout/footer.tsx
import Link from "next/link";
import { Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";

const companyLinks = [
  { href: "/about", label: "About Aman" },
  { href: "/support", label: "Support Center" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className=" border-t border-gray-200 bg-[#fbf9ff]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e069b3] shadow-md">
              <ShieldCheck size={18} className="text-white" />
            </span>

            <span className="text-xl font-bold tracking-tight text-[#4e5a75]">
              Aman
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#4e5a75]/75">A women-only ride-hailing platform in Jordan — built around safety, flexibility, and a community you can trust.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#4e5a75]">Support</h4>

          <ul className="mt-4 space-y-3 text-sm text-[#4e5a75]/75">
            <li>
              <a href="tel:+96260000000" className="flex items-center gap-2 transition hover:text-[#e069b3]">
                <Phone size={16} className="text-[#e069b3]" />
                +962 6 000 0000
              </a>
            </li>

            <li>
              <a href="mailto:drivers@aman.jo" className="flex items-center gap-2 transition hover:text-[#e069b3]">
                <Mail size={16} className="text-[#e069b3]" />
                drivers@aman.jo
              </a>
            </li>

            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-[#e069b3]" />
              Live chat 24/7
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#4e5a75]">Company</h4>

          <ul className="mt-4 space-y-3 text-sm text-[#4e5a75]/75">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#e069b3]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200/80 py-6 text-center text-xs text-[#4e5a75]/60">© {new Date().getFullYear()} Aman Technologies. Amman, Jordan.</div>
    </footer>
  );
}

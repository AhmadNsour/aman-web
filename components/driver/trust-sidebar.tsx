import { Lock, ShieldCheck, Sparkles, Users } from "lucide-react";

function TrustCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-purple-100 text-[#e069b3]">{icon}</div>

      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-[#4e5a75]">{description}</p>
      </div>
    </div>
  );
}

export function TrustSidebar() {
  return (
    <aside className="hidden space-y-4 lg:block">
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#e069b3]">
          <ShieldCheck size={14} />
          Why Aman
        </div>

        <h3 className="mt-4 text-lg font-bold">Built for women, by women.</h3>

        <p className="mt-2 text-sm leading-relaxed text-[#4e5a75]">Safety is not a feature — it is the foundation. Every step of your application is designed with your peace of mind in mind.</p>
      </div>

      <TrustCard title="Verified women-only" description="Every driver and rider passes our identity and background verification." icon={<ShieldCheck size={20} />} />

      <TrustCard title="End-to-end secure" description="Your documents are encrypted and protected." icon={<Lock size={20} />} />

      <TrustCard title="Supportive community" description="Join women earning safely across Jordan." icon={<Users size={20} />} />

      <TrustCard title="Flexible earnings" description="Drive on your schedule with transparent payouts." icon={<Sparkles size={20} />} />
    </aside>
  );
}

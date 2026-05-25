import Link from "next/link";
import { ShieldCheck, MapPin, Quote, ArrowRight, Target, Eye, Compass } from "lucide-react";
import { stats, values, founders, partners, timeline } from "./constants";

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-12rem)] overflow-hidden bg-[#fbf9ff]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#e069b3]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#e069b3]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-3 text-xs font-semibold text-[#e069b3] shadow-sm">
                <MapPin className="h-3.5 w-3.5" /> Made in Amman · Built for women
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4e5a75] sm:text-5xl lg:text-6xl">
                Mobility that finally <span className="text-[#e069b3]">feels safe</span>.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4e5a75] sm:text-lg">
                Aman is Jordan&apos;s women-only ride-hailing platform — a quiet revolution in how women move, work, and earn across the Kingdom. We&apos;re driven by two founders, backed by trusted
                partners, and powered by thousands of incredible women behind the wheel.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/become-driver"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e069b3] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-700"
                >
                  Become a driver <ArrowRight className="h-4 w-4" />
                </Link>

                <a href="#journey" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#4e5a75] transition hover:bg-purple-50">
                  Read our journey
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border bg-white/85 p-6 shadow-xl backdrop-blur sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e069b3] shadow-md">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#4e5a75]">Aman in numbers</p>
                      <p className="text-xs text-gray-500">Updated this quarter</p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Live</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 ">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg">
                      <p className="text-2xl font-bold text-[#4e5a75]">{stat.value}</p>
                      <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-purple-300/30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Mission",
              body: "Give every woman in the region a safer, more dignified way to move and to earn.",
            },
            {
              icon: Eye,
              title: "Vision",
              body: "A Middle East where women's mobility is never a question of safety — only of choice.",
            },
            {
              icon: Compass,
              title: "How we get there",
              body: "An all-women fleet, world-class verification, and technology that protects in real time.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-purple-50 text-[#e069b3]">
                <item.icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#4e5a75]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4e5a75]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-50/70 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#e069b3]">What we stand for</p>
            <h2 className="mt-2 text-3xl font-bold text-[#4e5a75] sm:text-4xl">Four values, every decision.</h2>
            <p className="mt-3 text-[#4e5a75]">They sit on the wall in our Amman office and at the top of every product spec.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e069b3] text-white shadow-md">
                  <value.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-[#4e5a75]">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4e5a75]">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#e069b3]">The founders</p>
            <h2 className="mt-2 text-3xl font-bold text-[#4e5a75] sm:text-4xl">Two founders. One vision. Building safer mobility for women.</h2>
          </div>

          <p className="text-sm text-[#4e5a75] sm:max-w-sm">Aman was founded in 2026 by two Jordanian men who met at a tech meet-up in Jabal Amman and never stopped building.</p>
        </div>

        <div className="mt-12 flex flex-wrap items-stretch justify-around gap-6">
          {founders.map((founder) => (
            <article key={founder.name} className="relative w-full max-w-md overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#e069b3] text-xl font-bold text-white shadow-md">{founder.initials}</div>

              <h3 className="mt-5 text-lg font-semibold text-[#4e5a75]">{founder.name}</h3>
              <p className="text-sm font-medium text-[#e069b3]">{founder.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4e5a75]">{founder.bio}</p>

              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100 blur-2xl" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-purple-50/70 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Quote className="mx-auto h-10 w-10 text-[#e069b3]" />
          <blockquote className="mt-6 text-2xl font-semibold leading-snug text-[#4e5a75] sm:text-3xl lg:text-4xl">
            &quot;We didn&apos;t build Aman to compete with the giants. We built it because the women in our lives — our sisters, mothers, daughters — deserved a ride home that didn&apos;t feel like a
            risk.&quot;
          </blockquote>
          <p className="mt-6 text-sm font-semibold text-[#4e5a75]">Ahmad Al Nsour</p>
          <p className="text-xs text-gray-500">Co-founder & CTO, Aman</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#e069b3]">Partners & ecosystem</p>
          <h2 className="mt-2 text-3xl font-bold text-[#4e5a75] sm:text-4xl">We don&apos;t move alone.</h2>
          <p className="mt-3 text-[#4e5a75]">Aman is built with the institutions, brands, and communities shaping the future of Jordan.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-purple-50 text-[#e069b3]">
                  <partner.icon className="h-5 w-5" />
                </div>

                <span className="rounded-full border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500">{partner.kind}</span>
              </div>

              <h3 className="mt-5 text-base font-semibold text-[#4e5a75]">{partner.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4e5a75]">{partner.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="bg-purple-50/70 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#e069b3]">Our journey</p>
            <h2 className="mt-2 text-3xl font-bold text-[#4e5a75] sm:text-4xl">From a sketch to a movement.</h2>
          </div>

          <ol className="relative mt-14 border-l border-purple-200 pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="mb-10 last:mb-0">
                <span className="absolute -left-[9px] grid h-4 w-4 rounded-full bg-[#e069b3] shadow-md" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#e069b3]">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-[#4e5a75]">{item.title}</h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-[#4e5a75]">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#e069b3] p-10 text-center shadow-xl sm:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_60%)]" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Drive with Aman. Move Jordan forward.</h2>

            <p className="mx-auto mt-3 max-w-xl text-white/90">Join thousands of women turning the wheel — literally — on the way we move.</p>

            <Link
              href="/become-driver"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#e069b3] shadow-sm transition hover:-translate-y-0.5"
            >
              Start your application <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

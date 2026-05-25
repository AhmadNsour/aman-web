"use client";

import Link from "next/link";
import { useState } from "react";
import { Car, ChevronDown, ChevronRight, Clock, Headphones, MapPin, Phone, Send } from "lucide-react";

import { contactCards, faqs, topics } from "./constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question} className="px-5 py-4">
            <button onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between text-left">
              <span className="text-sm font-semibold text-[#4e5a75]">{faq.question}</span>

              <ChevronDown size={16} className={`ml-3 shrink-0 text-[#e069b3] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && <p className="mt-3 text-sm leading-relaxed text-[#4e5a75]/70">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default function SupportPage() {
  return (
    <main className="min-h-[calc(100vh-12rem)] bg-[#fbf9ff]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#e069b3]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#e069b3]/15 blur-3xl" />

        <section className="relative">
          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 text-center sm:px-6 sm:pt-20 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-3 text-xs font-semibold text-[#e069b3] shadow-sm">
              <Headphones size={14} />
              We are here to help
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#4e5a75] sm:text-5xl lg:text-6xl">
              How can we <span className="text-[#e069b3]">assist you?</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#4e5a75]/75 sm:text-lg">
              Whether you are onboarding, on the road, or resolving an issue — our team is ready around the clock.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a key={card.title} href={card.href} className="group rounded-2xl border border-[#e069b3]/15 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-xl bg-[#e069b3]/10 p-3 text-[#e069b3]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-sm font-semibold text-[#4e5a75]">{card.title}</h3>
                  <p className="mt-1 text-base font-medium text-[#4e5a75]">{card.value}</p>
                  <p className="mt-1 text-xs text-[#4e5a75]/60">{card.subtitle}</p>

                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[#e069b3] group-hover:underline">
                    {card.action}
                    <ChevronRight size={16} className="ml-1" />
                  </span>
                </a>
              );
            })}
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#4e5a75] sm:text-3xl">Frequently asked questions</h2>
            <FAQSection />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-[#e069b3]/15 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-bold text-[#4e5a75]">Submit a ticket</h3>
              <p className="mt-1 text-sm text-[#4e5a75]/70">Cannot find your answer? We will get back fast.</p>

              <form className="mt-5 space-y-4">
                <input className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#e069b3]/30" placeholder="Full name" />
                <input className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#e069b3]/30" placeholder="Email address" />

                <select className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#e069b3]/30">
                  <option>General inquiry</option>
                  <option>Onboarding & documents</option>
                  <option>Payments & earnings</option>
                  <option>Safety & incidents</option>
                  <option>App technical issue</option>
                </select>

                <textarea
                  className="min-h-28 w-full resize-none rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#e069b3]/30"
                  placeholder="Describe your issue in detail..."
                />

                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e069b3] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#d458a7]">
                  <Send size={16} />
                  Send ticket
                </button>
              </form>
            </div>

            <div className="mt-4 rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-[#e069b3]/10 p-2 text-[#e069b3]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#4e5a75]">Aman Driver Center</p>
                  <p className="mt-0.5 text-sm text-[#4e5a75]/70">Al-Shmeisani, Amman, Jordan</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#4e5a75]/60">
                    <Clock size={14} />
                    Sun – Thu, 9am – 5pm
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-[#4e5a75] sm:text-3xl">Browse by topic</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <div key={topic.title} className="group rounded-2xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="inline-flex rounded-xl bg-[#e069b3]/10 p-2.5 text-[#e069b3] transition-colors group-hover:bg-[#e069b3] group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-[#4e5a75]">{topic.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4e5a75]/70">{topic.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20 rounded-3xl bg-[#e069b3] p-8 text-center text-white shadow-lg sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Still need help?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/90 sm:text-base">Our Driver Support team speaks Arabic and English. Reach out any time — we are fast, friendly, and here for you.</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+96260000000" className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/30">
              <Phone size={16} />
              Call support
            </a>

            <Link href="/become-driver" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#e069b3] shadow transition hover:bg-white/90">
              <Car size={16} />
              Apply to drive
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

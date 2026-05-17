function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-12rem)] bg-[#fbf9ff] pt-6">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />
      <section className="mx-auto max-w-4xl px-6 py-5">
        <h1 className="text-4xl font-bold text-gray-900">About us</h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">Aman is a women-only ride-hailing platform designed to provide safe, trusted, and reliable transportation for women in Jordan.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Card title="Women-only" text="Female drivers and female passengers only." />
          <Card title="Verified" text="Drivers and riders go through verification." />
          <Card title="Safety-first" text="Built around SOS, tracking, and trust." />
        </div>
      </section>
    </main>
  );
}

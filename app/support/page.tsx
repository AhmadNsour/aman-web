export default function SupportPage() {
  return (
    <main className="min-h-[calc(100vh-12rem)] bg-[#fbf9ff] pt-6">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />
      <section className="mx-auto max-w-4xl px-6 py-5">
        <h1 className="text-4xl font-bold text-gray-900">Support</h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-600">Need help with your driver application or have questions about Aman? Our support team is here to help.</p>

        <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
          <p className="text-sm text-gray-600">Email</p>
          <p className="mt-1 font-semibold text-gray-900">drivers@aman.jo</p>

          <p className="mt-6 text-sm text-gray-600">Phone</p>
          <p className="mt-1 font-semibold text-gray-900">+962 6 000 0000</p>

          <p className="mt-6 text-sm text-gray-600">Working Hours</p>
          <p className="mt-1 font-semibold text-gray-900">Sunday to Thursday, 9:00 AM – 6:00 PM</p>
        </div>
      </section>
    </main>
  );
}

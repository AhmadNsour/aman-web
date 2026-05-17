import { DriverRegistrationSection } from "@/components/driver/driver-registration-section";

export default function BecomeDriverPage() {
  return (
    <main className="min-h-screen bg-[#fbf9ff] pt-16">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />
      <DriverRegistrationSection />
    </main>
  );
}

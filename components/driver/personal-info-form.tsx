import { ArrowRight, ShieldCheck } from "lucide-react";
import { PersonalInfoFormProps } from "./types";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 block text-sm font-medium">
      {children} <span className="text-[#e069b3]">*</span>
    </span>
  );
}

function Input({ label, placeholder, type = "text", helper }: { label: string; placeholder?: string; type?: string; helper?: string }) {
  return (
    <label>
      <Label>{label}</Label>

      <input type={type} placeholder={placeholder} className="w-full rounded-xl border px-4 py-3 text-sm shadow-sm outline-none transition focus:ring-4 focus:ring-purple-100" />

      {helper && <span className="mt-1 block text-xs text-gray-500">{helper}</span>}
    </label>
  );
}

export function PersonalInfoForm({ onNext }: PersonalInfoFormProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#e069b3]">Step 1 · Personal Information</p>

        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Tell us about yourself</h2>

        <p className="mt-2 text-sm leading-relaxed text-[#4e5a75]">We use this information to verify your identity. Your details stay private and encrypted.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Full name" placeholder="As shown on your National ID" />
        <Input label="Date of birth" type="date" helper="You must be 21 or older." />
        <Input label="Email address" type="email" placeholder="you@email.com" />

        <label>
          <Label>Mobile number</Label>

          <div className="flex rounded-xl border bg-white shadow-sm focus-within:ring-4 focus-within:ring-purple-100">
            <div className="flex items-center gap-2 border-r px-3 text-sm font-medium">
              <span>🇯🇴</span> +962
            </div>

            <input className="w-full rounded-r-xl px-4 py-3 text-sm outline-none" placeholder="7X XXX XXXX" />
          </div>
        </label>

        <label>
          <Label>City / Area</Label>

          <select className="w-full rounded-xl border bg-white px-4 py-3 text-sm shadow-sm outline-none focus:ring-4 focus:ring-purple-100">
            <option>Select a city</option>
            <option>Amman</option>
            <option>Zarqa</option>
            <option>Irbid</option>
            <option>Aqaba</option>
            <option>Madaba</option>
            <option>Salt</option>
            <option>Jarash</option>
            <option>Ajloun</option>
            <option>Karak</option>
            <option>Tafilah</option>
            <option>Mafraq</option>
            <option>Ma'an</option>
          </select>
        </label>

        <Input label="National ID number" placeholder="9XXXXXXXXX" helper="10-digit Jordanian National ID." />
      </div>

      <div className="flex gap-3 rounded-2xl border border-purple-200 bg-purple-50 p-4">
        <ShieldCheck className="mt-0.5 flex-none text-[#e069b3]" size={22} />

        <p className="text-sm leading-relaxed text-gray-700">
          <strong className="text-[#4e5a75]">Women-only verified platform.</strong> Every driver and rider on Aman is identity-verified. Your data is encrypted end-to-end.
        </p>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-full bg-[#e069b3] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
        >
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

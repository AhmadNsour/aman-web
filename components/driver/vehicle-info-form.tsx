import { ArrowLeft, ArrowRight } from "lucide-react";
import { VehicleInfoFormProps } from "./types";

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label>
      <span className="mb-1.5 block text-sm font-medium">
        {label} <span className="text-purple-600">*</span>
      </span>
      <input placeholder={placeholder} className="w-full rounded-xl border px-4 py-3 text-sm shadow-sm outline-none focus:ring-4 focus:ring-purple-100" />
    </label>
  );
}

export function VehicleInfoForm({ onNext, onBack }: VehicleInfoFormProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">Step 3 · Vehicle Information</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Tell us about your vehicle</h2>
        <p className="mt-2 text-sm text-gray-600">Vehicle details help us complete your driver profile and safety checks.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Car Brand" placeholder="Toyota" />
        <Input label="Model" placeholder="Corolla" />
        <Input label="Year" placeholder="2022" />
        <Input label="Plate Number" placeholder="12-34567" />
        <Input label="Vehicle Color" placeholder="White" />
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold">
          <ArrowLeft size={16} /> Back
        </button>

        <button type="button" onClick={onNext} className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg">
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

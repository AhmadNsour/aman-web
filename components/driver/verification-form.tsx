import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { VerificationFormProps } from "./types";
import { uploads } from "./constants";

export function VerificationForm({ onNext, onBack }: VerificationFormProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#e069b3]">Step 2 · Driver Verification</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Upload your documents</h2>
        <p className="mt-2 text-sm text-[#4e5a75]">These documents help us verify your identity and eligibility to drive with Aman.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {uploads.map((item) => (
          <label
            key={item}
            className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-purple-200 bg-purple-50/50 p-6 text-center transition hover:bg-purple-50"
          >
            <Upload className="text-[#e069b3]" />
            <span className="mt-3 text-sm font-semibold">{item}</span>
            <span className="mt-1 text-xs text-gray-500">Click to upload file</span>
            <input type="file" className="hidden" />
          </label>
        ))}
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold">
          <ArrowLeft size={16} /> Back
        </button>

        <button type="button" onClick={onNext} className="inline-flex items-center gap-2 rounded-full bg-[#e069b3] px-7 py-3 text-sm font-semibold text-white shadow-lg">
          Continue <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

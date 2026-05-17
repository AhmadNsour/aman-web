import { ArrowLeft, CheckCircle } from "lucide-react";
import { AgreementFormProps } from "./types";
import { agreements } from "./constants";

export function AgreementForm({ onNext, onBack }: AgreementFormProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-600">Step 4 · Safety & Agreement</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Review and confirm</h2>
        <p className="mt-2 text-sm text-gray-600">Please confirm the required policies before submitting your application.</p>
      </div>

      <div className="space-y-3">
        {agreements.map((agreement) => (
          <label key={agreement} className="flex cursor-pointer items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
            <input type="checkbox" className="h-4 w-4 accent-purple-600" />
            <span className="text-sm font-medium">{agreement}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold">
          <ArrowLeft size={16} /> Back
        </button>

        <button type="button" onClick={onNext} className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg">
          Submit Application <CheckCircle size={16} />
        </button>
      </div>
    </section>
  );
}

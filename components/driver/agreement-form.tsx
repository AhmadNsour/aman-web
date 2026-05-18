import { ArrowLeft, CheckCircle } from "lucide-react";
import { AgreementFormProps } from "./types";
import { agreements } from "./constants";

export function AgreementForm({ onNext, onBack }: AgreementFormProps) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#e069b3]">Step 4 · Safety & Agreement</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Review and confirm</h2>
        <p className="mt-2 text-sm text-[#4e5a75]">Please confirm the required policies before submitting your application.</p>
      </div>

      <div className="space-y-3">
        {agreements.map((agreement) => (
          <label key={agreement} className="flex cursor-pointer items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
            <input type="checkbox" className="h-4 w-4 accent-[#e069b3]" />
            <span className="text-sm font-medium">{agreement}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#1f2937] shadow-sm sm:w-auto"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e069b3] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e069b3]/25 transition hover:bg-[#d85aad] sm:w-auto"
        >
          Submit Application
          <CheckCircle size={16} />
        </button>
      </div>
    </section>
  );
}

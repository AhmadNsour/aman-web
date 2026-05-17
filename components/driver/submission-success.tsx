import { CheckCircle } from "lucide-react";

export function SubmissionSuccess() {
  return (
    <section className="flex min-h-[420px] flex-col items-center justify-center text-center">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-purple-100 text-purple-600">
        <CheckCircle size={40} />
      </div>

      <h2 className="mt-6 text-3xl font-bold">Your application is under review.</h2>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">Our team will review your documents and contact you with the next steps.</p>

      <div className="mt-6 rounded-2xl border bg-purple-50 p-5 text-left text-sm text-gray-700">
        <p>
          <strong>Expected review time:</strong> 3–5 business days
        </p>
        <p className="mt-2">
          <strong>Training notification:</strong> You will receive training details after approval.
        </p>
        <p className="mt-2">
          <strong>Support:</strong> drivers@aman.jo
        </p>
      </div>
    </section>
  );
}

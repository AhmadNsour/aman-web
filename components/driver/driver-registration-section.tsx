"use client";

import { useState } from "react";
import { AgreementForm } from "./agreement-form";
import { DriverStepper } from "./driver-stepper";
import { PersonalInfoForm } from "./personal-info-form";
import { SubmissionSuccess } from "./submission-success";
import { TrustSidebar } from "./trust-sidebar";
import { VehicleInfoForm } from "./vehicle-info-form";
import { VerificationForm } from "./verification-form";

export function DriverRegistrationSection() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((current) => Math.min(current + 1, 5));
  const previousStep = () => setStep((current) => Math.max(current - 1, 1));

  return (
    <section className="mx-auto mt-8 grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-[1fr_320px]">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <DriverStepper currentStep={step} />

        <div className="px-6 py-8 sm:px-8 sm:py-9">
          {step === 1 && <PersonalInfoForm onNext={nextStep} />}
          {step === 2 && <VerificationForm onNext={nextStep} onBack={previousStep} />}
          {step === 3 && <VehicleInfoForm onNext={nextStep} onBack={previousStep} />}
          {step === 4 && <AgreementForm onNext={nextStep} onBack={previousStep} />}
          {step === 5 && <SubmissionSuccess />}
        </div>
      </div>

      <TrustSidebar />
    </section>
  );
}

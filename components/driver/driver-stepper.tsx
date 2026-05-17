import { DriverStepperProps } from "./types";
import { steps } from "./constants";

export function DriverStepper({ currentStep }: DriverStepperProps) {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="border-b px-8 py-6">
      <ol className="hidden items-center md:flex">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <li key={step} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-semibold ${
                    isActive || isCompleted ? "border-purple-600 bg-purple-100 text-purple-600" : "border-gray-200 bg-white text-gray-400"
                  }`}
                >
                  {stepNumber}
                </div>

                <span className={`mt-2 max-w-[120px] text-center text-xs ${isActive ? "text-gray-900" : "text-gray-400"}`}>{step}</span>
              </div>

              {index < steps.length - 1 && <div className="mx-3 mt-[-22px] h-[2px] flex-1 rounded bg-gray-200" />}
            </li>
          );
        })}
      </ol>

      <div className="md:hidden">
        <div className="flex justify-between text-xs">
          <span className="font-semibold text-purple-600">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-gray-500">{Math.round(progress)}%</span>
        </div>

        <div className="mt-2 h-2 rounded-full bg-gray-100">
          <div className="h-2 rounded-full bg-purple-600 transition-all" style={{ width: `${progress}%` }} />
        </div>

        <p className="mt-2 text-sm font-semibold">{steps[currentStep - 1]}</p>
      </div>
    </div>
  );
}

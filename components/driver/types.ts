export type DriverStepperProps = {
  currentStep: number;
};

export type PersonalInfoFormProps = {
  onNext: () => void;
};

export type AgreementFormProps = {
  onNext: () => void;
  onBack: () => void;
};

export type VehicleInfoFormProps = {
  onNext: () => void;
  onBack: () => void;
};

export type VerificationFormProps = {
  onNext: () => void;
  onBack: () => void;
};

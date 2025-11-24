import { useState } from "react";

export function useStep() {
  const [step, setStep] = useState(1);
  return { step, setStep };
}

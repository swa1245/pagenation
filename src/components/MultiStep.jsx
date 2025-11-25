import { useState } from "react";

export default function MultiStep() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <div className="p-10">
      <div className="flex items-center justify-center gap-2">
        <div
          className={` px-2  rounded-full ${
            step >= 1 ? "bg-blue-300" : "border border-black"
          } `}
        >
          1
        </div>
        <div
          className={`rounded-xl w-16 h-1 ${
            step > 1 ? "bg-blue-300" : "border border-black "
          }`}
        ></div>
        <div
          className={` px-2  rounded-full ${
            step >= 2 ? "bg-blue-300" : "border border-black"
          } `}
        >
          2
        </div>
        <div
          className={` rounded-xl w-16 h-1 ${
            step > 2 ? "bg-blue-300" : "border border-black"
          }`}
        ></div>
        <div
          className={` px-2  rounded-full ${
            step == 3 ? "bg-blue-300" : "border border-black"
          } `}
        >
          3
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 justify-center gap-2 ">
        {step == 1 && (
          <input
            type="text"
            className="border border-black text-center"
            placeholder="enter your email"
            
          />
        )}
        {step == 2 && (
          <input
            type="text"
            className="border border-black text-center"
            placeholder="enter your password"
          />
        )}
        {step == 3 && (
          <input
            type="text"
            className="border border-black text-center"
            placeholder="enter your location"
          />
        )}
      </div>
      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          className="px-3 py-1 border border-amber-200"
          onClick={prevStep}
          disabled={step === 1}
        >
          Back
        </button>
        <button
          className="px-3 py-1 border border-amber-200"
          onClick={nextStep}
          disabled={step === 3}
        >
          Next
        </button>
      </div>
    </div>
  );
}

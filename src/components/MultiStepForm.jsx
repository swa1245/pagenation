import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="p-10">

      {/* ------------ STEP INDICATOR ----------- */}
      <div className="flex items-center gap-4 mb-10 justify-center">

        {/* Step 1 */}
        <div className="flex items-center">
          <div
            className={`h-10 w-10 flex items-center justify-center rounded-full border-2 transition-all
            ${step >= 1 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-black"}
          `}
          >
            1
          </div>

          {/* Line 1 -> 2 */}
          <div
            className={`h-1 w-16 mx-2 transition-all 
            ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}
          `}
          ></div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div
            className={`h-10 w-10 flex items-center justify-center rounded-full border-2 transition-all
            ${step >= 2 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-black"}
          `}
          >
            2
          </div>

          {/* Line 2 -> 3 */}
          <div
            className={`h-1 w-16 mx-2 transition-all 
            ${step >= 3 ? "bg-blue-600" : "bg-gray-300"}
          `}
          ></div>
        </div>

        {/* Step 3 */}
        <div>
          <div
            className={`h-10 w-10 flex items-center justify-center rounded-full border-2 transition-all
            ${step >= 3 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-black"}
          `}
          >
            3
          </div>
        </div>
      </div>

      {/* ------------ MULTI-STEP FORMS ----------- */}
      <div className="p-6 border rounded-xl shadow-md max-w-lg mx-auto">

        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Step 1 - Personal Info</h2>
            <input
              type="text"
              placeholder="Enter Name"
              className="border p-2 w-full rounded"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Step 2 - Address</h2>
            <input
              type="text"
              placeholder="Enter Address"
              className="border p-2 w-full rounded"
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Step 3 - Summary</h2>
            <p>Review and submit your details.</p>
          </div>
        )}

        {/* ------------ BUTTONS ----------- */}
        <div className="flex justify-between mt-8">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-40"
            onClick={prevStep}
            disabled={step === 1}
          >
            Back
          </button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-40"
            onClick={nextStep}
            disabled={step === 3}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

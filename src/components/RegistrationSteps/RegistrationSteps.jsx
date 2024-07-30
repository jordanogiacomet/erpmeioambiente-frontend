// components/RegistrationSteps.js
import React, { useState } from 'react';
import { RegisterInitialForm } from '../../features/RegisterInitialForm/RegisterInitialForm';
import { RegisterEndForm } from '../../features/RegisterEndForm/RegisterEndForm';


export const RegistrationSteps = ({ onBackToLoginClick }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(2);
  const handleSubmit = () => {
    console.log("Oie");
  };

  return (
    <>
      {step === 1 && <RegisterInitialForm onBackToLoginClick={onBackToLoginClick} onNext={handleNext} />}
      {step === 2 && <RegisterEndForm onBackToLoginClick={onBackToLoginClick} onSubmit={handleSubmit} />}
    </>
  );
};


// components/RegistrationSteps.js
import React, { useState } from 'react';
import { RegisterInitialForm } from '../../features/RegisterInitialForm/RegisterInitialForm';
import { RegisterEndForm } from '../../features/RegisterEndForm/RegisterEndForm';
import { useRegister } from '../../hooks/useRegister';

export const RegistrationSteps = ({ onBackToLoginClick }) => {
  const [step, setStep] = useState(1);
  const { error, loading, handleSubmit } = useRegister();
  
  const handleNext = () => setStep(2);

  return (
    <>
      {step === 1 && <RegisterInitialForm onBackToLoginClick={onBackToLoginClick} onNext={handleNext} />}
      {step === 2 && <RegisterEndForm onBackToLoginClick={onBackToLoginClick} onSubmit={handleSubmit} loading={loading} error={error} />}
    </>
  );
};
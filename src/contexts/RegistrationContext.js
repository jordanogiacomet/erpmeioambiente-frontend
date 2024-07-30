import React, { createContext, useState, useContext } from 'react';

const RegistrationContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    contact: '',
    cnpj: '',
    address: '',
    cep: '',
  });

  const updateFormData = (newData) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <RegistrationContext.Provider value={{ formData, updateFormData }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
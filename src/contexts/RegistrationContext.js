import React, { createContext, useState, useContext } from 'react';

const RegistrationContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState(''); 
  const [cnpj, setCnpj] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
 
  return (
    <RegistrationContext.Provider value={{ email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, name, setName, contact, setContact, cnpj, setCnpj, address, setAddress, cep, setCep }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
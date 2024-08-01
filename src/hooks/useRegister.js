import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRegistration } from '../contexts/RegistrationContext';

export const useRegister = () => {
  const { email, password, confirmPassword, name, contact, cnpj, address, cep } = useRegistration();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Updated values:", { email, password, confirmPassword, name, contact, cnpj, address, cep });
  }, [email, password, confirmPassword, name, contact, cnpj, address, cep]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await api.post('/api/Auth/register', { 
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
        Nome: name,
        Contato: contact,
        CNPJ: cnpj,
        Endereco: address,
        CEP: cep,
       });
      navigate('/');
    } catch (error) {
      setError('Ocorreu um erro ao tentar registrar. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return {
   error, loading, handleSubmit,
  };
};

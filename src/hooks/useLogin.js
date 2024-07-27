// src/hooks/useLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('api/Auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Credencias inválidas, tente novamente.');
    } finally {
      setLoading(false);
    };
  };

  return {
    email, setEmail, password, setPassword, error, loading, handleSubmit,
  };
};

export default useLogin;
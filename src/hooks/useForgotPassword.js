import { useState } from 'react';
import axios from 'axios';

const useForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const response = await axios.post('/api/Auth/forgot-password', { email });
      if(response.data.isSuccess) {
        setError('');
      } else {
        setError(response.data.message);
      };
    } catch (error) {
      setError('Something went wrong. Please try again later');
    } finally {
      setLoading(false);
    };
  };
  return {
    email,
    setEmail,
    error,
    loading,
    handleSubmit,
  };
};

export default useForgotPassword;
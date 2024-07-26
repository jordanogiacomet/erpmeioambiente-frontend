import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import api from '../../services/api';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('api/Auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Credenciais inválidas, tente novamente.')
    };
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h2" size="big" colorDark={false}>Login In</Heading>
      <Input type="email" placeholder="Digite seu email" label="Email" icon="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Digite sua senha" label="Senha" icon="password" required minLength={5} maxLength={20} value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <Paragraph>{error}</Paragraph>}
      <Button text="Login In" type="submit" />
    </Form>
  );
};

export default Login;
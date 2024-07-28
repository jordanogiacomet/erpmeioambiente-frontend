import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import CheckboxInput from '../../components/Form/CheckboxInput';
import useLogin from '../../hooks/useLogin';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Login = () => {
  const { email, setEmail, password, setPassword, rememberMe, setRememberMe, error, loading, handleSubmit } = useLogin();

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h2" size="big" colorDark={false}>Login In</Heading>
      <Input type="email" placeholder="Digite seu email" label="Email" icon="email" required value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
      <Input type="password" placeholder="Digite sua senha" label="Senha" icon="password" required minLength={5} maxLength={20} value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
      <Wrapper>
        <CheckboxInput label="Lembre-se de mim" id="remember-me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
        <Button text="Esqueci minha senha" color="#FFFFFF" variant="forgot-password" />
      </Wrapper>
      <Button text={loading ? "Loading..." : "Login In"} type="submit" disabled={loading} />
      {error && <Paragraph>{error}</Paragraph>}
    </Form>
  );
};

export default Login;
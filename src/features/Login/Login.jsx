import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import { Input } from '../../components/Input';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import useLogin from '../../hooks/useLogin';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '../../components/Checkbox';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 24px;
  @media ${({ theme }) => theme.media.max.lg} {
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
`;

const Login = () => {
  const { email, setEmail, password, setPassword, rememberMe, setRememberMe, error, loading, handleSubmit } = useLogin();

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h2" size="big" colorDark={false}>Login In</Heading>
      <Input.Root>
        <Input.Label htmlFor='email' text='Email'/>
        <Input.Field id='email' placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input.Icon icon={faEnvelope}/>
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor='password' text='Password'/>
        <Input.Field id='password' type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input.Icon icon={faLock}/>
      </Input.Root>
      <Wrapper>
        <Checkbox.Root>
          <Checkbox.Field id="remember-me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
          <Checkbox.Label htmlFor="remember-me" text="Remember me"/>
        </Checkbox.Root>
        <Button text="Esqueci minha senha" color="#FFFFFF" variant="forgot-password" />
      </Wrapper>
      <Button text={loading ? "Loading..." : "Login In"} type="submit" disabled={loading} />
      {error && <Paragraph>{error}</Paragraph>}
      <Paragraph>Não possui uma conta? <Button color="#FFFFFF" variant="forgot-password" text="Registre-se"/></Paragraph>
    </Form>
  );
};

export default Login;
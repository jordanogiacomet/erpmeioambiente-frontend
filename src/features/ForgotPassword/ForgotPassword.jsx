import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import { Input } from '../../components/Input';
import { Heading } from '../../components/Heading/Heading';
import { Button } from '../../components/Button';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import useForgotPassword from '../../hooks/useForgotPassword';
import P from 'prop-types';

const Paragraph = styled.p`
color: ${({ theme }) => theme.colors.secondary};
`;

export const ForgotPassword = ({ onBackToLoginClick }) => {
  const { email, setEmail, error, loading, handleSubmit } = useForgotPassword();

  return(
    <Form onSubmit={handleSubmit}>
      <Heading as="h2" size="big" colorDark={false}>Esqueci minha Senha</Heading>
      <Input.Root>
        <Input.Label htmlFor="email-forgot" text="Email"/>
        <Input.Field id="email-forgot" placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input.Icon icon={faEnvelope}/>
      </Input.Root>
      <Button.Main text={loading ? "Carregando..." : "Envie o link para Reset"} type="submit" disabled={loading}/>
      {error && <Paragraph>{error}</Paragraph>}
      <Button.Main text="Volte para o Login" color="#FFFFFF" variant="forgot-password" onClick={onBackToLoginClick} type="button"/>
    </Form>
  );
};

ForgotPassword.propTypes = {
  onBackToLoginClick: P.func.isRequired,
};
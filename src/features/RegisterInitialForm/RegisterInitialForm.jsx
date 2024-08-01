// components/RegisterInitialForm.js
import React, { useState} from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import { Input } from '../../components/Input';
import { Heading } from '../../components/Heading/Heading';
import { Button } from '../../components/Button';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import P from 'prop-types';
import { useRegistration } from '../../contexts/RegistrationContext';


const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;


export const RegisterInitialForm = ({ onNext, onBackToLoginClick }) => {
  const { email, setEmail, password, setPassword, confirmPassword, setConfirmPassword } = useRegistration();
  const [passwordError, setPasswordError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_]).{5,20}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError('A senha deve ter entre 5-20 caracteres, conter pelo menos uma letra maiúscula e um símbolo.');
      return;
    };

    setPasswordError('');

    onNext();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h2" size="big" colorDark={false}>Registrar-se</Heading>
      <Input.Root>
        <Input.Label htmlFor="email-registration" text="Email" />
        <Input.Field
          type="email"
          id="email-registration"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input.Icon icon={faEnvelope} />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="password-registration" text="Senha" />
        <Input.Field
          id="password-registration"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern="(?=.*[A-Z])(?=.*[\W_]).{5,20}"
          minLength="5"
          maxLength="20"
          required
        />
        <Input.Icon icon={faLock} />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="password-confirmation" text="Confirme a Senha" />
        <Input.Field
          id="password-confirmation"
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          pattern="(?=.*[A-Z])(?=.*[\W_]).{5,20}"
          minLength="5"
          maxLength="20"
          required
        />
        <Input.Icon icon={faLock} />
      </Input.Root>
      {passwordError && <Paragraph>{passwordError}</Paragraph>}
      <Button.Main text="Registrar-se" type="submit" />
      <Paragraph>
        Já possui uma conta? <Button.Main text="Volte para o Login" color="#FFFFFF" variant="forgot-password" onClick={onBackToLoginClick} type="button" />
      </Paragraph>
    </Form>
  );
};

RegisterInitialForm.propTypes = {
  onNext: P.func.isRequired,
  onBackToLoginClick: P.func.isRequired,
};

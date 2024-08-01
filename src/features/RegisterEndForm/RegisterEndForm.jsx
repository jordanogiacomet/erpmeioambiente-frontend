// components/RegisterEndForm.js
import React from 'react';
import styled from 'styled-components';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading/Heading';
import P from 'prop-types';
import Form from '../../components/Form/Form';
import { useRegistration } from '../../contexts/RegistrationContext';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const RegisterEndForm = ({ onSubmit, onBackToLoginClick, loading, error }) => {
  const { name, setName, contact, setContact, cnpj, setCnpj, address, setAddress, cep, setCep } = useRegistration();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h2" size="big" colorDark={false}>
        Complete seus dados
      </Heading>
      <Input.Root>
        <Input.Label htmlFor="name" text="Nome" />
        <Input.Field
          type="text"
          id="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="contact" text="Contato" />
        <Input.Field
          type="text"
          id="contact"
          placeholder="Digite seu número de contato"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="cnpj" text="CNPJ" />
        <Input.Field
          type="text"
          id="cnpj"
          placeholder="Digite seu CNPJ"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
        />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="address" text="Endereço" />
        <Input.Field
          type="text"
          id="address"
          placeholder="Digite seu endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="cep" text="CEP" />
        <Input.Field
          type="text"
          id="cep"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </Input.Root>
      <Button.Main text={loading ? "Carregando..." : "Registrar-se"} type="submit" />
      {error && <Paragraph>{error}</Paragraph>}
      <Paragraph>
        Já possui uma conta? <Button.Main text="Volte para o Login" color="#FFFFFF" variant="forgot-password" onClick={onBackToLoginClick} type="button" />
      </Paragraph>
    </Form>
  );
};

RegisterEndForm.propTypes = {
  onSubmit: P.func.isRequired,
  onBackToLoginClick: P.func.isRequired,
  loading: P.bool.isRequired,
  error: P.string,
};
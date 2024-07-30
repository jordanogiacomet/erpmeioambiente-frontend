import React, { useState } from 'react';
import styled from 'styled-components';
import { useRegistration } from '../../contexts/RegistrationContext';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading/Heading';
import P from 'prop-types';
import Form from '../../components/Form/Form';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const RegisterEndForm = ({ onSubmit, onBackToLoginClick }) => {
  const { formData, updateFormData } = useRegistration();
  const [name, setName] = useState(formData.name || '');
  const [contact, setContact] = useState(formData.contact || '');
  const [cnpj, setCnpj] = useState(formData.cnpj || '');
  const [address, setAddress] = useState(formData.address || '');
  const [cep, setCep] = useState(formData.cep || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ name, contact, cnpj, address, cep });
    onSubmit(); 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading as="h2" size="big" colorDark={false}>
        Complete your infos
      </Heading>
      <Input.Root>
        <Input.Label htmlFor="name" text="Name" />
        <Input.Field
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="contact" text="Contact" />
        <Input.Field
          type="text"
          id="contact"
          placeholder="Enter your contact number"
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
          placeholder="Enter your CNPJ"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
        />
      </Input.Root>
      <Input.Root>
        <Input.Label htmlFor="address" text="Address" />
        <Input.Field
          type="text"
          id="address"
          placeholder="Enter your address"
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
          placeholder="Enter your CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </Input.Root>
      <Button.Main text="Registrar-se" type="submit" />
      <Paragraph>Já possui uma conta? <Button.Main text="Volte para o Login" color="#FFFFFF" variant="forgot-password" onClick={onBackToLoginClick} type="button"/></Paragraph>
    </Form>
  );
};

RegisterEndForm.propTypes = {
  onSubmit: P.func.isRequired,
  onBackToLoginClick: P.func.isRequired,
};



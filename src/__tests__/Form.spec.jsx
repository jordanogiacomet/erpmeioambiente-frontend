import React from 'react';
import renderTheme from '../styles/render-theme';
import 'jest-styled-components';
import Form from '../components/Form/Form';

describe('<Form />', () => {
  it('should render correctly with inputs', () => {
    const { container } = renderTheme(
      <Form>
        <Input label="Nome" />
        <Input label="Email" type="email" />
        <button type="submit">Registrar</button>
      </Form>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '30px');
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 4px 12px rgba(0,0,0,0.1)');
  });
});
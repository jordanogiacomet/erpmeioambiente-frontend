import Form from '../../components/Form/Form';
import * as Styled from './styles';
import Input from '../../components/Form/Input';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';

function Home() {
  return (
    <div className="App">
        <Styled.Container>
          <Form>
            <Heading as='h2' size='big' colorDark={false}>Login In</Heading>
            <Input type="email" placeholder="Digite seu email" label="Email" icon="email" required/>
            <Input type="password" placeholder="Digite sua senha" label="Senha" icon="password" required minLength={5} maxLength={20}/>
            <Button text="Login In"/>
        </Form>
        </Styled.Container>
    </div>
  );
}

export default Home;

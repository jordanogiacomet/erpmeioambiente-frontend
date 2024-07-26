import * as Styled from './styles';
import Login from '../../features/Login/Login';

function Home() {
  return (
    <div className="App">
        <Styled.Container>
          <Login />
        </Styled.Container>
    </div>
  );
}

export default Home;

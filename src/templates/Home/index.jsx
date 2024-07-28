import * as Styled from './styles';
import Login from '../../features/Login/Login';
import TextBlock from '../../components/TextBlock/TextBlock';

function Home() {
  return (
    <div className="App">
        <Styled.Container>
          <TextBlock title="Welcome" subtitle="ERPMeioAmbiente">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus optio aliquid sed laborum aliquam itaque quas soluta, nobis officia cum sint perspiciatis. Quo praesentium delectus quod maxime iste numquam.
          </TextBlock>
          <Login />
        </Styled.Container>
    </div>
  );
}

export default Home;

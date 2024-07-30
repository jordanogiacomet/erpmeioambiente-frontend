import React from 'react';
import * as Styled from './styles';
import { Login } from '../../features/Login/Login';
import { TextBlock } from '../../components/TextBlock';

function Home() {
  return (
    <div className="App">
      <Styled.Container>
        <TextBlock.Root>
          <TextBlock.Heading as="h1" size="big" colorDark={false}>
            Welcome
          </TextBlock.Heading>
          <TextBlock.Subtitle as="h2" size="medium">
            ERPMeioAmbiente
          </TextBlock.Subtitle>
          <TextBlock.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iste exercitationem hic facere. Molestiae dolor eum omnis minus quas voluptatibus expedita? Debitis ipsam dolorem nesciunt asperiores voluptatem ab iste commodi.
          </TextBlock.Paragraph>
        </TextBlock.Root>
        <Login />
      </Styled.Container>
    </div>
  );
}

export default Home;

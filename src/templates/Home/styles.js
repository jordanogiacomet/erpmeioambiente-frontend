import styled from 'styled-components';

export const Container = styled.section`
   background-color: black;
   display: flex;
   min-height: 100vh;
   align-items: center;
   justify-content: space-evenly;
   padding: 50px;
   box-sizing: border-box;
   gap: 50px;
   

   @media ${({ theme }) => theme.media.max.lg} {
      flex-direction: column;
   };
`;

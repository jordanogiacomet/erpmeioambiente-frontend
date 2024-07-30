import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as Styled from './styles';
import { Login } from '../../features/Login/Login';
import { ForgotPassword } from '../../features/ForgotPassword/ForgotPassword';
import { TextBlock } from '../../components/TextBlock';
import { MotionDiv } from './styles';
import { RegisterProvider } from '../../contexts/RegistrationContext';
import { RegistrationSteps } from '../../components/RegistrationSteps/RegistrationSteps';

function Home() {
  const [currentView, setCurrentView] = useState('login'); 

  const handleRegisterClick = () => setCurrentView('register');
  const handleBackToLoginClick = () => setCurrentView('login');
  const handleForgotPasswordClick = () => setCurrentView('forgot-password');

  return (
    <div className="App">
      <RegisterProvider>
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

          <AnimatePresence mode="wait">
            {currentView === 'login' && (
              <MotionDiv
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <Login
                  onForgotPasswordClick={handleForgotPasswordClick}
                  onRegisterClick={handleRegisterClick} // Adicione um manipulador para registro
                />
              </MotionDiv>
            )}
            {currentView === 'forgot-password' && (
              <MotionDiv
                key="forgot-password"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <ForgotPassword onBackToLoginClick={handleBackToLoginClick} />
              </MotionDiv>
            )}
            {currentView === 'register' && (
              <MotionDiv
                key="register"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <RegistrationSteps onBackToLoginClick={handleBackToLoginClick} />
              </MotionDiv>
            )}
          </AnimatePresence>
        </Styled.Container>
      </RegisterProvider>
    </div>
  );
}

export default Home;

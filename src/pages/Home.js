import { useState } from 'react';
import styled from 'styled-components';

import { theme } from '../theme';
import SignToggleBtn from '../components/SignToggleBtn';
import SignForm from '../components/SignForm';
import { HOME_TITLE, SIGN_UP } from '../utils/constants';

function Home() {
  const [signState, setSignState] = useState(SIGN_UP);

  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>{HOME_TITLE[signState]}</Title>
      <FormWrapper>
        <SignForm signState={signState} setSignState={setSignState} />
        <SignToggleBtn signState={signState} setSignState={setSignState} />
      </FormWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  background-color: white;
  width: 70%;
  height: 80%;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export default Home;

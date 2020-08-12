import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    height: calc(100vh - var(--bodyPaddingTop));
`;

function LoadingMain() {
  return <Main>Loading...</Main>;
}

export default LoadingMain;

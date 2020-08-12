import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    height: calc(100vh - var(--bodyPaddingTop));
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function LoadingMain() {
  return <Main>Loading...</Main>;
}

export default LoadingMain;

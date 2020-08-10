import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

function DefaultPage({ children, paddingAll }) {
  return (
    <>
      <Menu />

      <Main paddingAll={paddingAll}>
        { children }
      </Main>

      <Footer />
    </>
  );
}

// DefaultPage.defaultProps = {
//   children: [],
//   paddingAll: null,
// };

// DefaultPage.propTypes = {
//   children: PropTypes.array,
//   paddingAll: PropTypes.number,
// };

export default DefaultPage;

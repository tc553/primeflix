import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        <a href="https://www.linkedin.com/in/tarcisio-cortes/" target="_blank">LinkedIn</a>
        {' '}
        -
        {' '}
        <a href="http://www.tarcisiocortes.com" target="_blank">www.tarcisiocortes.com</a>
      </p>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

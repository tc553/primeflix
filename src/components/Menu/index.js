import React from 'react';
import Logo from '../../assets/img/primeflix.png';
import './Menu.css'
import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="PrimeFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="register/video">
                Novo vídeo
            </Button>
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
        </nav>
    );
}

export default Menu;
import React from 'react';
import Logo from '../../assets/img/primeflix.png';
import './Menu.css'
import Button from '../Button';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="PrimeFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/register/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
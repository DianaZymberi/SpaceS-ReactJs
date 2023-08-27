import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreebsd } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css';
import '../App.css';


function Navbar() {
    const [click, setclick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setclick(!click)
    const closeMobileMenu = () => setclick(false)
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    SpaceS <FontAwesomeIcon icon={faFreebsd} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                        </li>
                        <li>
                        <Link to='/aboutUs' className="nav-links" onClick={closeMobileMenu}>
                            About us
                        </Link>
                        </li>
                        <li>
                        <Link to='/contactUs' className="nav-links" onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                        </li>

                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
    );
}

export default Navbar;

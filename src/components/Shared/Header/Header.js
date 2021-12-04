import React from 'react';

import './Header.css'

import { ButtonGroup, Container, NavLink, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../../images/logo/vector-logo.png'
const Header = () => {

    return (
        <>

            <div className="row">
                <div className="col-md-12">

                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto mx-0">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                <Nav.Link href="/contact-us">About Us</Nav.Link>
                                <Nav.Link href="/contact-us">About Us</Nav.Link>
                                <Nav.Link href="/contact-us">About Us</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                    <br />


                </div>
            </div>

        </>
    );
};

export default Header;
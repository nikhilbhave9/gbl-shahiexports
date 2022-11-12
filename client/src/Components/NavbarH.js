import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsGear, BsPersonCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import styled from 'styled-components';

const StyledBrand = styled.h3`
    color: #0461c9;
`;

function NavbarH() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav>
                    <span className='p-3 mb-2'>
                        <GiHamburgerMenu />
                    </span>
                </Nav>
                <Navbar.Brand href="/">
                    <StyledBrand>
                        SHAHI
                    </StyledBrand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <div>
                        <span className='p-4'><BsGear /></span>  <span><BsPersonCircle /></span>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavbarH;
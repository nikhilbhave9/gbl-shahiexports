import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BsGear, BsPersonCircle } from 'react-icons/bs';

function NavbarH() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Brand href="#home">SHAHI</Navbar.Brand>
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
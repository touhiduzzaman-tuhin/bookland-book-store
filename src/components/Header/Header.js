import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <Navbar className="container" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to='/'>               
                <img style={{height: '30px'}} src={logo} alt=""/>
            </Navbar.Brand>
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                    <NavDropdown title="Menus" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to='/'>Menu 1</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/'>Menu 2</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/'>Menu 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to='/'>Menu 4</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <Form inline>
                        <FormControl type="text" placeholder="Search Books Here" className="mr-sm-2" />
                    </Form>
                    <Nav.Link as={Link} to='/bookDetails'>
                        <h5>Book Details Page</h5>
                    </Nav.Link>
                </Nav>

                
                <Button variant="light">Login</Button>
                <Button variant="warning" className="mx-2">Sign Up</Button>
                {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
import React, { useState } from 'react';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Menu(props) {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar 
        id="nav" 
        expanded={expanded} 
        expand="lg" 
        fixed="top" 
        variant="light"
        className="bg-smoke border-bottom">
            <Link href="/" scroll={false}>
                <a className="navbar-brand" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>
                    <span className="font-weight-bold">Mason</span>Media
                </a>
            </Link>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav">
                <span className="icon-bar top-bar"></span>
	            <span className="icon-bar middle-bar"></span>
	            <span className="icon-bar bottom-bar"></span>    
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link href="/about" scroll={false}>
                        <a className="nav-link" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>About</a>
                    </Link>
                    <Link href="/projects" scroll={false}>
                        <a className="nav-link" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>Projects</a>
                    </Link>
                    <Link href="/therapists" scroll={false}>
                        <a className="nav-link" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>Therapists</a>
                    </Link>
                    <Nav.Link href="mailto:doug@atherapy.ca">Contact
                    </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;

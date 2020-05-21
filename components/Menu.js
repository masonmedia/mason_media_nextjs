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
        variant={props.variant}
        bg={props.bg}
        className={props.navClass}>
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
                    {/* <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <Link href="/projects/warrenyen" scroll={false}>
                                <a onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>Warren Yen</a>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link href="/projects/jaxx" scroll={false}>
                                <a>Jaxx Liberty</a>
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link href="/projects/at" scroll={false}>
                                <a>Advance Therapy</a>
                            </Link>
                        </NavDropdown.Item>
                        
                    </NavDropdown> */}
                    <Link href="/therapists" scroll={false}>
                        <a className="nav-link" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>Therapists</a>
                    </Link>
                    <Nav.Link href="mailto:doug@atherapy.ca">Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;

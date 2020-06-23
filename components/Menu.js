import React, { useState } from 'react';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

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
        className="shadow fade-in-top">
            <Link href="/" scroll={false}>
                <a className="navbar-brand" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>
                    mason
                    <span className="font-weight-bold">media</span>
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

                    {/* <NavDropdown alignRight title="Projects" id="collasible-nav-dropdown">
                        <Link href="/projects">
                            <a className="dropdown-item pb-2 font-italic">Projects Home</a>
                        </Link>
                        <Link href="/projects/nw">
                            <a className="dropdown-item py-2  font-italic">Neil Whitford</a>
                        </Link>
                        <Link href="/projects/wy">
                            <a className="dropdown-item py-2  font-italic">Warren Yen</a>
                        </Link>
                        <Link href="/projects/jaxx">
                            <a className="dropdown-item py-2  font-italic">Jaxx Liberty</a>
                        </Link>
                        <Link href="/projects/decentral">
                            <a className="dropdown-item py-2  font-italic">Decentral</a>
                        </Link>
                        <Link href="/projects/at">
                            <a className="dropdown-item py-2  font-italic">Advance Therapy</a>
                        </Link>
                        <Link href="/projects/n2">
                            <a className="dropdown-item py-2  font-italic">N2</a>
                        </Link>
                        <Link href="/projects/bhs">
                            <a className="dropdown-item py-2  font-italic">BHS</a>
                        </Link>
                        <Link href="/projects/sfs">
                            <a className="dropdown-item py-2  font-italic">SFS</a>
                        </Link>
                        <Link href="/projects/copetin">
                            <a className="dropdown-item py-2  font-italic">Copetín</a>
                        </Link>
                    </NavDropdown> */}

                    <Link href="/projects" scroll={false}>
                        <a className="nav-link" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>Projects</a>
                    </Link>
                    <Link href="/writing" scroll={false}>
                        <a className="nav-link" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>Writing</a>
                    </Link>
                    {/* <Link href="/blog" scroll={false}>
                        <a className="nav-link" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>Blog</a>
                    </Link> */}
                    <Link href="/resume" scroll={false}>
                        <a className="nav-link" onClick={() => setTimeout(() => {setExpanded(false)}, 30)}>Resume</a>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;

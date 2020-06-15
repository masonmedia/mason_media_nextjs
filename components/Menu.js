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
        className="shadow">
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

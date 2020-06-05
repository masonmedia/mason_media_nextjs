import React, { useState } from 'react';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-reveal/Fade';

export function Menu(props) {

    const [expanded, setExpanded] = useState(false);

    return (
        <Fade down cascade>
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
                    {/* <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <Dropdown.Header>Dropdown header</Dropdown.Header>
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
        </Fade>
    )
}

export default Menu;

import React, { Component } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    render() {         
        return (
            <footer>
                <Container fluid className="p-0 relative">
                    <Row className="bg-primary p-0">
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <div className="display-4 font-weight-bold mb-0">↘</div>
                            <h3>Menu.</h3>
                            <div className="h3 m-0">―</div>
                            <ul className="list-unstyled blockquote">
                                <Link href="/">
                                    <a><li>Home</li></a>
                                </Link>
                                <Link href="/about">
                                    <a><li>About</li></a>
                                </Link>
                                <Link href="projects/">
                                    <a><li>Projects</li></a>
                                </Link>
                                <Link href="/">
                                    <a><li>Writing</li></a>
                                </Link>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <div className="display-4 font-weight-bold mb-0">↘</div>
                            <h3>Work.</h3>
                            <div className="h3 m-0">―</div>
                            <ul className="list-unstyled blockquote">
                                <Link href="/projects/warrenyen">
                                    <a><li>Warren Yen</li></a>
                                </Link>
                                <Link href="/projects/jaxx">
                                    <a><li>Jaxx Liberty</li></a>
                                </Link>
                                <Link href="/projects/at">
                                    <a><li>Advance Therapy</li></a>
                                </Link>
                                <Link href="/projects/bhs">
                                    <a><li>Big Horn Sheep</li></a>
                                </Link>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <div className="display-4 font-weight-bold mb-0">↘</div>
                            <h3>More.</h3>
                            <div className="h3 m-0">―</div>
                            <ul className="list-unstyled blockquote">
                                <a href="https://github.com/masonmedia" target="_blank"><li>Github</li></a>
                                <a href="https://www.behance.net/andrewmasonmedia" target="_blank"><li>Behance</li></a>
                                <a href="http://copy.andrewmasonmedia.com/" target="_blank"><li>Writing/Editing</li></a>
                                <Link href="/cv">
                                    <a><li>CV</li></a>
                                </Link>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} className="align-left-top px-5 pt-5 font-weight-bold">
                            <div className="display-4 font-weight-bold mb-0">↘</div>
                            <h3>Connect.</h3>
                            <div className="h3 m-0">―</div>
                            <ul className="list-unstyled blockquote">
                                <a href="https://www.linkedin.com/in/andrewmasonmedia/" target="_blank"><li>Linkedin</li></a>
                                <a href="https://www.facebook.com/andrewmasonmedia/" target="blank"><li>Facebook</li></a>
                                <a href="https://twitter.com/C_AndrewMason" target="_blank"><li>Twitter</li></a>
                                <a href="mailto:andrewmasonmedia@gmail.com"><li>Email</li></a>
                            </ul>
                        </Col>
                        <Col sm={12} className="align-center font-weight-bold pt-4 pb-5">
                        <p id="copyright" className="mb-0">
                            Mason Media | &copy; {this.state.date.getFullYear()}
                        </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;

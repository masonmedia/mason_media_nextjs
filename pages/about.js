import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Constants from '../components/Constants';
import Button from 'react-bootstrap/Button';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Parallax from 'react-rellax';

export class about extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        const toggler = document.querySelectorAll(".icon-bar");
        let i;
        for (i = 0; i < toggler.length; i++) {
          toggler[i].style.backgroundColor = "#fff";
        }
      }
    render() {
        return (
            <Layout
            metaTitle="About"
            metaD="I specialize in visual design, building websites, and UX copywriting. I help clients to build successful brands and engaging digital experiences."
            bg="black"
            variant="dark"
            >
                <Row className="bg-black">
                    <Col className="align-center min-100 p-5 bg-texture-6c">
                        <h1 className="site-title text-light drop-shadow">
                            about
                        </h1>
                        <h3 
                        className="site-subtitle relative text-light font-weight-bold text-lowercase">
                        What I do.
                        </h3>
                    </Col>
                </Row>

                <Row className="bg-black">
                    <Col xl={12} className="align-left min-100 p-5">
                        <h6 className="text-uppercase mt-5 pt-2 rainbow-text-3">About me</h6>
                        <h1 className="page_title rainbow-text-3 pb-3 mb-0">
                        Hi, I'm Andrew. I'm a passionate, multidisciplinary designer, developer, and writer. I specialize in visual design, building websites, and UX copywriting. I help build successful brands and create engaging digital experiences.
                        </h1>
                        <div className="page_title rainbow-text-3 font-weight-light">↓</div>
                    </Col>
                </Row>
                
                <Row className="bg-black">
                    <Col xl={12} className="bg-texture-6-og text-light align-left min-100 p-5"
                    style={{backgroundSize: '3000%', backgroundPosition: '50% 50%'}}>
                        <h6 className="text-uppercase drop-shadow">Coding + Development</h6>
                        <h1 className="page_title font-weight-bold drop-shadow text-shadow">I build websites with HTML5, CSS3, SASS, PHP, Javascript, jQuery, Bootstrap, Semantic UI, Wordpress and Webflow.</h1>
                        <div className="page_title font-weight-light drop-shadow">↓</div>
                    </Col>
                </Row>

                <Row className="bg-black">
                    <Col xl={12} className="align-left min-100 p-5">
                        <h6 className="text-uppercase rainbow-text-3">Frameworks + Animation</h6>
                        <h1 className="page_title rainbow-text-3 font-weight-bold ">I also create single page applications with React, Next.js, and Angular. I love web animation and use GSAP, AOS, Scroll Magic, Rellax.js, React-reveal, Framer, SWUP and more to create elegant user experiences.</h1>
                        <div className="page_title rainbow-text-3 font-weight-light">↓</div>
                    </Col>
                </Row>

                <Row className="bg-black">
                    <Col xl={12} className="text-light align-left min-100 p-5 bg-texture-6-og"
                     style={{backgroundSize: '30%', backgroundPosition: '100% 0%', backgroundRepeat: 'repeat-y'}}>
                        <h6 className="text-uppercase drop-shadow">Graphic + UI + UX Design</h6>
                        <h1 className="page_title font-weight-bold drop-shadow text-shadow">I design UIs + imagery for websites, social media, and print using Photoshop, Canva, Crello, Lunapic and other tools. I make logos, posters, invitations, and source the perfect project-specific photos.</h1>
                        <div className="page_title font-weight-light drop-shadow">↓</div>
                    </Col>
                </Row>

                <Row className="bg-black">
                    <Col xl={12} className="align-left min-100 p-5">
                        <h6 className="text-uppercase rainbow-text-3">Copywriting + Editing</h6>
                        <h1 className="page_title font-weight-bold rainbow-text-3">I write and edit copy for a wide variety of contexts. I strive for fast moving, easy-to-read content with humour and originality, while specializing in UX, SEO, and editing for web presentation.</h1>
                        <div className="page_title rainbow-text-3 font-weight-light">↓</div>
                    </Col>
                </Row>

                <Row className="bg-black">
                    <Col xl={12} className="bg-texture-6-og align-left text-light min-100 p-5"
                    style={{backgroundSize: '2000%', backgroundPosition: '30% 110%'}}>
                        <h6 className="text-uppercase drop-shadow">Tech Stack</h6>
                        <h1 className="page_title font-weight-bold drop-shadow text-shadow">This website is made with Next.js, React, React-Bootstrap, SASS, and Framer.</h1>
                        <Link href="/projects" scroll={false}>
                            <a>
                                <Button variant="outline-light mt-2">
                                    Projects
                                </Button>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default about;

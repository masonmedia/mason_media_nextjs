import React, { Component } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../components/Menu';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import * as Constants from '../components/Constants';
import CircleComponent from '../components/CircleComponent';
import Button from 'react-bootstrap/Button';

export class resume extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <motion.div
            initial="exit"
            animate="enter" 
            exit="exit"
            variants={Constants.imageVariants}>
                <Head>
                    <title>Andrew Mason | Resume</title>
                </Head>
                <Menu bg="black" variant="dark" />
                <Container fluid>
                    <Row className="bg-black">
                        <Col className="align-center min-100 p-5">
                            <CircleComponent
                            circle1="bg-turq right"
                            circle2="bg-turq" 
                            circle3="bg-yellow" 
                            circle4="bg-pink" 
                            circle5="bg-pink" 
                            circle6="bg-pink" 
                            />
                            <motion.div variants={Constants.textVariants}>
                            <h1 className="site-title text-light drop-shadow mr-3">
                                Resume
                            </h1>
                            </motion.div>
                            <motion.div variants={Constants.backVariants}>
                                <h5 className="text-uppercase font-weight-bold text-light drop-shadow">
                                Background</h5>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row className="bg-smoke">
                        <Col xl={12} className="align-left min-100 p-5">
                        <motion.div variants={Constants.textVariants}>
                            <h6 className="text-uppercase mt-5 pt-2">Profile</h6>
                            <h1 className="page_title relative pb-3 mb-0">Creative, experienced, hard working front-end developer, web/graphic designer and copywriter. I design & build modern scalable websites, create custom imagery, and write & edit multi-purpose copy for a wide variety of contexts.
                            </h1>
                            <div className="page_title font-weight-light">↓</div>
                            </motion.div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Education</h6>
                            <h1 className="page_title font-weight-bold ">MA, ENVIRONMENTAL STUDIES</h1>
                            <p className="">York University | 2005 - 2007</p>
                            <h1 className="page_title font-weight-bold ">BFA, MUSIC (HONS.)</h1>
                            <p className="">York University | 2002 - 2004</p>
                            <h1 className="page_title font-weight-bold ">DIPLOMA JAZZ STUDIES, (DEAN'S LIST)</h1>
                            <p className="">St. Francis Xavier University | 1996 - 1999</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-smoke align-left min-100 w-100 p-5">
                            <h6 className="text-uppercase">Experience</h6>
                            {/* accordion */}
                            <Accordion className="w-100">
                            <Card className="border-0 bg-trans">
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-0 bg-trans">
                                <h1 className="page_title font-weight-bold text-uppercase">WEB DEVELOPER</h1>
                                <p className="h5">Decentral Inc. | June 2018 - July 2019</p>
                                {/* read more */}
                                <div className="h5 font-weight-light pb-3 text-primary">read more.</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body className="pl-0 pt-1 pb-5">
                                    <span className="font-weight-bold h2">―</span>
                                    <span className="d-table">Lead website developer responsible for all company web properties [60-70k+ monthly views], UI/UX Design, coding, and maintenance of HTML/PHP/CSS/JS/Wordpress/Zendesk sites; Graphic design, social media asset creation; HTML email design/coding.</span>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            {/* mm */}
                            <Card className="border-0 bg-trans">
                                <Accordion.Toggle as={Card.Header} eventKey="1" className="p-0 bg-trans">
                                <h1 className="page_title font-weight-bold text-uppercase">Designer & Developer</h1>
                                <p className="h5">Mason Media | 2015 - Present</p>
                                {/* read more */}
                                <div className="h5 font-weight-light pb-3 text-primary">read more.</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body className="pl-0 pt-1 pb-5">
                                    <span className="font-weight-bold h2">―</span>
                                    <span className="d-table">Founder, designer, developer, and writer creating custom websites, graphic designs, and copywriting; Project art direction and branding; SEO; Project management; Client support/services.</span>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            {/* writing */}
                            <Card className="border-0 bg-trans">
                                <Accordion.Toggle as={Card.Header} eventKey="2" className="p-0 bg-trans">
                                <h1 className="page_title font-weight-bold text-uppercase">Copywriter</h1>
                                <p className="h5">Neighbourhood Buzz | 2017-2019 Foliovison.com | 2015-2017 Wikidee.org | 2014-2015</p>
                                {/* read more */}
                                <div className="h5 font-weight-light pb-3 text-primary">read more.</div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body className="pl-0 pt-1 pb-5">
                                    <span className="font-weight-bold h2">―</span>
                                    <span className="d-table">
                                    Wrote highly engaging copy and blog content creation; Experience writing on a wide variety of subjects; Edit existing copy for syntax and SEO; UX Copywriting.</span>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Professional Skills</h6>
                            <h1 className="page_title font-weight-bold">HTML5, CSS3, SASS, Bootstrap 4, Semantic UI, Atomic CSS, Javascript/jQuery, React, Angular, Node, npm, Parcel bundler, Webflow, Wordpress, VS Code, Brackets, Github, Bitbucket.</h1>
                            <div className="display-3 font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-smoke align-left min-100 p-5">
                            <h6 className="text-uppercase">Animation</h6>
                            <h1 className="page_title font-weight-bold">GSAP, AOS (animate on scroll), Scroll Magic, Lax.js, SWUP, animate.css, Rellax.js, React-reveal, Framer.</h1>
                            <div className="page_title font-weight-light">↓</div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Design</h6>
                            <h1 className="page_title font-weight-bold">Photoshop, Canva, Crello, Lunapic, Wireframe.cc, HTML email design & coding, Sendgrid, Mailchimp.</h1>
                            <div className="page_title font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-smoke align-left min-100 p-5">
                            <h6 className="text-uppercase">SEO, Writing, Communication</h6>
                            <h1 className="page_title font-weight-bold">SEO, Schema data, JSON-LD, google structured data, copy & content writing, copy editing, Slack, Zoom, Skype, Gmail, Google Drive, Wrike, Agile.</h1>
                            <div className="page_title font-weight-light">↓</div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                            <h6 className="text-uppercase">Contact</h6>
                            <h1 className="page_title font-weight-bold">Drop me a line on social or an email below to discuss your next project.</h1>
                            <a href="mailto:andrewmasonmedia@gmail.com">
                                <Button 
                                className="mt-2"
                                variant="outline-light">
                                    Get in touch
                                </Button>
                            </a>
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </motion.div>
        )
    }
}

export default resume;

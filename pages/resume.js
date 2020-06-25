import React, { Component } from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import * as Constants from '../components/Constants';
// import CircleComponent from '../components/CircleComponent';
import Button from 'react-bootstrap/Button';
import Parallax from 'react-rellax';

export class resume extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <Layout
            metaTitle="Resume"
            metaD="My background, experience, and skills."
            bg="black"
            variant="dark"
            >
                <Row className="bg-black">
                    <Col className="bg-texture-6-og align-center min-100 p-5"
                    style={{backgroundSize: '60%', backgroundPosition: '50% 50%'}}>
                        {/* <CircleComponent
                        circle1="bg-lime right"
                        circle2="bg-turq" 
                        circle3="bg-yellow" 
                        circle4="bg-red" 
                        circle5="bg-pink" 
                        circle6="bg-pink" 
                        /> */}
                        <Parallax speed={-2}>
                        <h1 className="site-title text-light drop-shadow mr-3">
                            Resume
                        </h1>
                        </Parallax>
                        <h3 
                        className="site-subtitle relative text-light font-weight-bold text-lowercase">
                        Background.
                        </h3>
                    </Col>
                </Row>

                <Row className="bg-smoke">
                    <Col xl={12} className="align-left min-100 p-5">
                        <h6 className="text-uppercase mt-5 pt-2">Profile</h6>
                        <h1 className="page_title relative pb-3 mb-0">Creative, experienced, hard working front-end developer, web/graphic designer and copywriter. I design & build modern scalable websites, create custom imagery, and write & edit multi-purpose copy for a wide variety of contexts.
                        </h1>
                        <div className="page_title font-weight-light">↓</div>
                    </Col>
                </Row>
                
                <Row className="bg-black">
                    <Col xl={12} className="bg-texture-6-og text-light align-left min-100 p-5"
                    style={{backgroundSize: '5000%', backgroundPosition: '50% 100%'}}>
                        <h6 className="text-uppercase">Education</h6>
                        <h1 className="page_title font-weight-bold drop-shadow ">MA, ENVIRONMENTAL STUDIES</h1>
                        <p className="">York University | 2005 - 2007</p>
                        <h1 className="page_title font-weight-bold drop-shadow ">BFA, MUSIC (HONS.)</h1>
                        <p className="">York University | 2002 - 2004</p>
                        <h1 className="page_title font-weight-bold drop-shadow">DIPLOMA JAZZ STUDIES, (DEAN'S LIST)</h1>
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
                                <span className="d-table">Lead website developer responsible for all company web properties [60-70k+ monthly views]; Redesigned the product and company websites from scratch (HTML, PHP, CSS, Bootstrap, Javascript, jQuery), redesigned the product customer support website (Zendesk, HTML, CSS, Curlybars), and redesigned two company Wordpress blogs; UI/UX Design; Daily maintenance and updating of all sites; Google analytics; Graphic design & social media asset creation; HTML email design/coding (Sendgrid).</span>
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
                                <span className="d-table">Founder, UI/UX/Graphic designer, front-end developer, and writer creating custom websites, graphic designs, and copywriting; Project art direction and branding; SEO; Project management; Client support/services; Hosting/server support and tutorials.</span>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        {/* writing */}
                        <Card className="border-0 bg-trans">
                            <Accordion.Toggle as={Card.Header} eventKey="2" className="p-0 bg-trans">
                            <h1 className="page_title font-weight-bold text-uppercase">Copywriter</h1>
                            <p className="h5">Neighbourhood Buzz | 2017-2019 • Foliovison.com | 2015-2017 • Wikidee.org | 2014-2015</p>
                            {/* read more */}
                            <div className="h5 font-weight-light pb-3 text-primary">read more.</div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body className="pl-0 pt-1 pb-5">
                                <span className="font-weight-bold h2">―</span>
                                <span className="d-table">
                                Wrote highly engaging short form copy, blog content, and restaurant reviews; Experience writing about and researching a wide variety of subjects (food/cuisine, fitness, sustainability, tech, best-of compilations, interior design, fashion); Edited existing copy for syntax and SEO; UX Copywriting.</span>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </Col>
                </Row>

                <Row className="bg-black">
                    <Col xl={12} className="bg-texture-6-og text-light align-left min-100 p-5"
                    style={{backgroundSize: '5000%', backgroundPosition: '50% 0%'}}>
                        <h6 className="text-uppercase drop-shadow">Professional Skills</h6>
                        <h1 className="page_title font-weight-bold drop-shadow">HTML5, CSS3, SASS, Bootstrap 4, Semantic UI, Atomic CSS, Javascript, jQuery, React, Next.js, Angular, Node, npm, Parcel bundler, Webflow, Wordpress, VS Code, Brackets, Github, Bitbucket.</h1>
                        <div className="page_title font-weight-light drop-shadow">↓</div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} className="bg-smoke align-left min-100 p-5">
                        <h6 className="text-uppercase">Animation</h6>
                        <h1 className="page_title font-weight-bold">GSAP, Animate On Scroll, Scroll Magic, Lax.js, SWUP, Animate.css, Animista, Rellax.js, React-reveal, Framer Motion.</h1>
                        <div className="page_title font-weight-light">↓</div>
                    </Col>
                </Row>
                
                <Row className="bg-black">
                    <Col xl={12} className="bg-texture-6-og text-light align-left min-100 p-5"
                    style={{backgroundSize: '1000%', backgroundPosition: '50% 0%'}}>
                        <h6 className="text-uppercase drop-shadow">Design</h6>
                        <h1 className="page_title font-weight-bold drop-shadow text-shadow">Photoshop, Canva, Crello, Lunapic, Wireframe.cc, HTML email design & coding, Sendgrid, Mailchimp.</h1>
                        <div className="page_title font-weight-light drop-shadow">↓</div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} className="bg-smoke align-left min-100 p-5">
                        <h6 className="text-uppercase">Writing & Communication</h6>
                        <h1 className="page_title font-weight-bold">SEO, Schema data, JSON-LD, google structured data, copy & content writing, copy editing, Slack, Zoom, Skype, Gmail, Google Drive, Wrike, Agile.</h1>
                        <div className="page_title font-weight-light">↓</div>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12} className="bg-black text-light align-left min-100 p-5">
                        <h6 className="text-uppercase">Contact</h6>
                        <h1 className="page_title font-weight-bold">Drop me an email to discuss your next project or say hello.</h1>
                        <a href="mailto:andrewmasonmedia@gmail.com">
                            <Button 
                            className="mt-3"
                            variant="outline-light">
                                Get in touch
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default resume;

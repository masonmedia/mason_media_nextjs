// import React, { Component } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Menu from '../../components/Menu';
// import { motion } from 'framer-motion';
// import * as Constants from '../../components/Constants';
// import Footer from '../../components/footer';
// import jaxx_1 from '../../images/jaxx-iphone.jpg';
// import jaxx_2 from '../../images/jaxx_laptop_coffee.jpg';
// import jaxx_3 from '../../images/jaxx_multi.jpg';
// import jaxx_4 from '../../images/jaxx_ipad.jpg';
// import jaxx_5 from '../../images/jaxx_2phones.jpg';
// import jaxx_6 from '../../images/jaxx_grafitti.jpg';
// import Button from 'react-bootstrap/Button';

// export class jaxx extends Component {
//     componentDidMount() {
//         window.scrollTo(0, 0);  
//     }
//     render() {
//         return (
//             <motion.div 
//             initial="initial"
//             animate="enter" 
//             exit="exit"
//             variants={Constants.aboutVariants}>
//                 <Head>
//                     <title>Andrew Mason | Jaxx Liberty</title>
//                 </Head>
//                 <Menu />
//                 <Container fluid className="bg-smoke">
//                     <Row>
//                         <Col xl={6} className="align-left min-100 p-5">
//                             <h6 className="display-1 font-weight-bold mb-0 mt-4">02.</h6>
//                             <h1 className="font-weight-bold text-uppercase">Jaxx Liberty</h1>
//                             <p className="py-2">Jaxx Liberty is a cryptocurrency wallet app made by Decentral Inc. In my role as Decentral's lead website designer and developer, I redesigned the Jaxx Liberty public facing website twice, modernized its branding, layout, and color palette, significantly improved SEO and engagement, and created hundreds of image assets. I also completely redesigned their Wordpress blog, and app support website (Zendesk). In this process, I revitalized the Jaxx brand, and helped increase user base and web presence.</p>
//                         </Col>

//                         <Col xl={6} className="p-0">
//                             <img src={jaxx_5} />
//                         </Col>
                        
//                         <Col xl={6} className="bg-red p-0">
//                             <img src={jaxx_2} />
//                         </Col>
//                         <Col xl={6} className="align-left min-100 bg-primary text-light p-5">
//                             <h6 className="text-uppercase">Jaxx Liberty</h6>
//                             <h1 className="font-weight-bold text-uppercase">Tech Stack</h1>
//                             <p className="py-2">I coded the product site from scratch using HTML5, PHP, CSS3, the SWUP library for AJAX animated page transitions, the GSAP animation library, and included a Zendesk help widget for support functionality and Cookie Consent/GDPR plugin by Insites. I also recreated this site using Angular 7/8 and incorporated market data, blockchain news, Zendesk support FAQ, and Jaxx blog APIs to reproduce the functionality of the Jaxx Liberty mobile app.</p>
//                         </Col>
//                         <Col xl={4} className="p-0">
//                             <img src={jaxx_6} />
//                         </Col>
//                         <Col xl={4} className="p-0">
//                             <img src={jaxx_3} />
//                         </Col>
//                         <Col xl={4} className="p-0">
//                             <img src={jaxx_4} />
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col xl={12} className="align-left min-50 p-5 my-5">
//                             <h6 className="text-uppercase">Jaxx Liberty</h6>
//                             <h1 className="page_title font-weight-bold ">Jaxx Liberty is currently unavailable.
//                             </h1>
//                             <p className="">*I do not maintain this site.</p>
//                             {/* pagination */}
//                             <div className="d-flex mt-2">
//                                 <Link href="/projects" scroll={false}>
//                                     <a><Button 
//                                     className="mr-2"
//                                     variant="outline-dark">Previous</Button></a>
//                                 </Link>
//                                 <Link href="/projects/jaxx" scroll={false}>
//                                     <a><Button 
//                                     variant="dark">Next</Button></a>
//                                 </Link>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//                 <Footer />
//             </motion.div>
//         )
//     }
// }

// export default jaxx;


import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from '../../components/Menu';
import { motion } from 'framer-motion';
import * as Constants from '../../components/Constants';
import Footer from '../../components/footer';
import jaxx_1 from '../../images/jaxx-iphone.jpg';
import jaxx_2 from '../../images/jaxx_laptop_coffee.jpg';
import jaxx_3 from '../../images/jaxx_multi.jpg';
import jaxx_4 from '../../images/jaxx_ipad.jpg';
import jaxx_5 from '../../images/jaxx_2phones.jpg';
import jaxx_6 from '../../images/jaxx_grafitti.jpg';
import Button from 'react-bootstrap/Button';

export class jaxx extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <motion.div 
            initial="initial"
            animate="enter" 
            exit="exit"
            variants={Constants.aboutVariants}>
                <Head>
                    <title>Andrew Mason | Jaxx Liberty</title>
                </Head>
                <Menu />
                <Container fluid className="bg-smoke">
                    <Row>
                        <Col xl={6} className="align-left min-100 p-5">
                            <h6 className="display-1 font-weight-bold mb-0 mt-4">02.</h6>
                            <h1 className="page_title text-lowercase">Jaxx Liberty</h1>
                            <p className="py-2">Jaxx Liberty is a cryptocurrency wallet app made by Decentral Inc. In my role as Decentral's lead website designer and developer, I completely redesigned the Jaxx Liberty public facing website, modernized its branding, layout, and color palette, significantly improved SEO and engagement, and created hundreds of image assets. I also redesigned their Wordpress blog and Jaxx support website (Zendesk). In this process, I revitalized the Jaxx brand, and helped increase user base and web presence.</p>
                        </Col>
                        <Col xl={6} className="p-0">
                            <img src={jaxx_5} />
                        </Col>
                        
                        <Col xl={6} className="bg-red p-0">
                            <img src={jaxx_2} />
                        </Col>
                        <Col xl={6} className="align-left min-100 bg-purple text-light p-5">
                            <h6 className="text-uppercase">Jaxx Liberty</h6>
                            <h1 className="page_title text-lowercase">Tech Stack</h1>
                            <p className="py-2">I coded the product site from scratch using HTML5, PHP, CSS3, the SWUP library for AJAX animated page transitions, GSAP for timeline and scroll animations, and included a Zendesk help widget for support functionality and Cookie Consent/GDPR plugin by Insites. I also recreated this site using Angular 7/8 and incorporated market data, blockchain news, Zendesk support FAQ, and Jaxx blog APIs to reproduce the functionality of the Jaxx Liberty mobile app.</p>
                        </Col>
                        <Col xl={6} className="p-0">
                            <img src={jaxx_6} />
                        </Col>
                        <Col xl={6} className="p-0">
                            <img src={jaxx_3} />
                        </Col>
                        <Col xl={12} className="p-0">
                            <img src={jaxx_4} />
                        </Col>
                        </Row>
                    {/* links */}
                    <Row>
                        <Col xl={12} className="align-left min-50 p-5 my-5">
                            <h6 className="text-uppercase">Jaxx Liberty</h6>
                            <a className="text-primary" href="https://github.com/masonmedia/warren_yen_portfolio" target="_blank">
                                <h1 className="page_title">code.</h1>
                            </a>
                            <a className="text-primary" href="https://www.behance.net/gallery/97181347/Warren-Yen-Website-Device-Mockups" target="_blank">
                                <h1 className="page_title">designs.</h1>
                            </a>
                            {/* pagination */}
                            <div className="d-flex mt-3">
                                <Link href="/projects/warrenyen" scroll={false}>
                                    <a><Button 
                                    className="mr-2"
                                    variant="outline-dark">Previous</Button></a>
                                </Link>
                                <Link href="/projects/jaxx" scroll={false}>
                                    <a><Button 
                                    variant="dark">Next</Button></a>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </motion.div>
        )
    }
}

export default jaxx;

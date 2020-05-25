import React, { Component } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Menu from '../../components/Menu';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import { motion } from 'framer-motion';
import * as Constants from '../../components/Constants';
import Footer from '../../components/footer';
import jaxx_1 from '../../images/jaxx-iphone.jpg';
import jaxx_2 from '../../images/jaxx_laptop_coffee.jpg';
import jaxx_3 from '../../images/jaxx_multi.jpg';
import jaxx_4 from '../../images/jaxx_ipad.jpg';
import jaxx_5 from '../../images/jaxx_2phones.jpg';
import jaxx_6 from '../../images/jaxx_grafitti.jpg';

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
                <Menu bg="smoke" />
                <Container fluid className="bg-smoke p-0">
                    <ProjectDetail 
                    metaTitle="Andrew Mason | Jaxx Liberty"
                    projectNumber="02."
                    numberClass="bg-orange"
                    projectLetter="J"
                    projectTitle="Jaxx Liberty"
                    projectDesc="Jaxx Liberty is a cryptocurrency wallet app made by Decentral Inc. In my role as Decentral's lead website designer/developer, I completely redesigned the Jaxx Liberty public facing website, modernized its branding, layout, and color palette, significantly improved SEO and engagement, and created hundreds of image assets. I also redesigned their Wordpress blog and customer support website (Zendesk). In this process, I revitalized the Jaxx brand and helped increase user base and web presence."
                    projectImg1={jaxx_5}
                    projectImg2={jaxx_2}
                    projecSubTitle2="Jaxx Liberty"
                    projectTitle2="Tech Stack"
                    projectDesc2="I coded the main product website using HTML5, PHP, CSS3, SWUP, GSAP, and included a Zendesk help widget for support functionality and a Cookie Consent/GDPR plugin by Insites. I also duplicated the site as a single page application using Angular 7/8, and incorporated market data, blockchain news, Zendesk support FAQ, and Jaxx blog APIs to reproduce the functionality of the Jaxx Liberty mobile app. 
                    *I do not maintain the current jaxx.io website. For confidentiality, the codebase link below is to an earlier version of jaxx.io, still designed and built by me."
                    projectDescCol="bg-yellow"
                    projectImg3={jaxx_6}
                    imgClass3="bg-purple"
                    projectImg4={jaxx_3}
                    imgClass4="bg-pink"
                    projectImg5={jaxx_4}
                    imgClass5="bg-pink"
                    >
                        <ProjectLinks 
                        projectTitle="Jaxx Liberty"
                        githubUrl="https://github.com/masonmedia/jaxx_revolutions_1"
                        behanceUrl="https://www.behance.net/gallery/93329099/Jaxx-Liberty"
                        siteClass="d-none"
                        prevHref="/projects/warrenyen"
                        nextHref="/projects/decentral"
                        />
                    </ProjectDetail>
                </Container>
                <Footer />
            </motion.div>
        )
    }
}

export default jaxx;


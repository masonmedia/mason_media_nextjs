import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Menu from '../../components/Menu';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import { motion } from 'framer-motion';
import * as Constants from '../../components/Constants';
import Footer from '../../components/Footer';
import dc_1 from '../../images/dc/dc_laptop.png';
import dc_2 from '../../images/dc/jaxx_imac.jpg';
import dc_3 from '../../images/dc/decentral_flatiron.jpeg';
import dc_4 from '../../images/dc/jaxx_hand_phone.jpg';
import dc_5 from '../../images/dc/jaxx_ipad_iphone.jpg';

export class decentral extends Component {
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
                <Menu bg="smoke" />
                <Container fluid className="bg-smoke p-0">
                    <ProjectDetail 
                    metaTitle="Decentral"
                    metaD="Website coding, graphic/UI design, SEO and user engagement for Jaxx Liberty, a cryptocurrency app made by Decentral Inc."
                    projectNumber="03."
                    numberClass="bg-black text-light"
                    projectLetter="DC"
                    projectTitle="Decentral Inc."
                    projectDesc="Jaxx Liberty is a cryptocurrency wallet app made by Decentral Inc. In my role as Decentral's lead website designer/developer, I completely redesigned the Jaxx Liberty public facing website, modernized its branding, layout, and color palette, significantly improved SEO and engagement, and created hundreds of image assets. I also redesigned their Wordpress blog and customer support website (Zendesk). In this process, I revitalized the Jaxx brand and helped increase user base and web presence."
                    projectImg1={dc_1}
                    imgClass1="bg-pink"
                    projectImg2={dc_2}
                    projecSubTitle2="Jaxx Liberty"
                    projectTitle2="Tech Stack"
                    projectDesc2="I coded the main product website using HTML5, PHP, CSS3, SWUP, GSAP, and included a Zendesk help widget for support functionality and a Cookie Consent/GDPR plugin by Insites. I also duplicated the site as a single page application using Angular 7/8, and incorporated market data, blockchain news, Zendesk support FAQ, and Jaxx blog APIs to reproduce the functionality of the Jaxx Liberty mobile app. 
                    *I do not maintain the current jaxx.io website. For confidentiality, the codebase link below is to an earlier version of jaxx.io, still designed and built by me."
                    projectDescCol="bg-yellow"
                    projectImg3={dc_3}
                    imgClass3="bg-purple"
                    projectImg4={dc_5}
                    imgClass4="bg-pink"
                    projectImg5={dc_4}
                    imgClass5="bg-pink"
                    >
                        <ProjectLinks 
                        projectTitle="Jaxx Liberty"
                        githubUrl="https://github.com/masonmedia/jaxx_revolutions_1"
                        behanceUrl="https://www.behance.net/gallery/93329099/Jaxx-Liberty"
                        siteClass="d-none"
                        prevHref="/projects/jaxx"
                        nextHref="/projects/decentral"
                        />
                    </ProjectDetail>
                </Container>
                <Footer />
            </motion.div>
        )
    }
}

export default decentral;


import React, { Component } from 'react';
import Menu from '../../components/Menu';
import { motion } from 'framer-motion';
import * as Constants from '../../components/Constants';
import Footer from '../../components/footer';
import at_1 from '../../images/at/at_laptop.png';
import at_2 from '../../images/at/at_iphones_black.png';
import at_3 from '../../images/at/at_iphone.jpg';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';

export class at extends Component {
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
            <Menu bg="pink" variant="light" />
            <ProjectDetail 
            metaTitle="Andrew Mason | Advance Therapy"
            projectNumber="02."
            projectLetter="A"
            projectTitle="Advance Therapy"
            projectDesc="Advance is a Guelph health services company specializing in brain injury rehabilitation. This project required a complete overhaul and redesign of the firm's previous website. Requirements included a simple, intuitive user interface, a low amount of scrolling while still presenting a large amount of content, a specific typeface, and the firm's previous logo."
            projectImg1={at_1}
            imgClass1="bg-pink"
            projectImg2={at_2}
            imgClass2="bg-turq"
            projecSubTitle2="Advance Therapy"
            projectTitle2="tech stack"
            projectDesc2="I redesigned the site again recently to modernize the layout and add new content. Having worked with React on numerous recent projects I was tired of the tooling and setup, so built a similar component-based architecture using PHP. The site employs reusable HTML components with PHP variables that allow for data-binding style customization. The site also uses SWUP, SASS, Bootstrap 4, AOS, Undraw illustations, and an expanded gradient color palette. Advance also required UX copywriting and editing."
            projectDescCol="bg-yellow"
            imgClass3="d-none"
            imgClass4="d-none"
            projectImg5={at_3}
              >
                <ProjectLinks 
                projectTitle="Advance Therapy"
                githubUrl="https://github.com/masonmedia/advance-therapy-2.0"
                behanceUrl="https://www.behance.net/gallery/94105429/Advance-Therapy"
                siteUrl="http://atherapy.ca"
                prevHref="/projects/jaxx"
                nextHref="/projects/warrenyen"
                />
             </ProjectDetail>
            <Footer />
        </motion.div>
        )
    }
}

export default at;

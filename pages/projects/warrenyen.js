import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Menu from '../../components/Menu';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import { motion } from 'framer-motion';
import * as Constants from '../../components/Constants';
import Footer from '../../components/footer';
import wy_thumb from '../../images/wy_macbookgold.png';
import wy_2 from '../../images/wy_about.png';
import wy_3 from '../../images/wy_iphone5.png';
import wy_4 from '../../images/wy_project.png';

export class warrenyen extends Component {
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
                    metaTitle="Warren Yen"
                    metaD="A website build for Toronto UX/UI Designer Warren Yen."
                    metaTitle="Warren Yen"
                    projectNumber="01."
                    numberClass="bg-turq"
                    projectLetter="W"
                    projectTitle="Warren Yen"
                    projectDesc="A website build for Toronto UX/UI Designer Warren Yen, this project required the development of a user interface and layout provided by the client. A central parameter for the project was to build the site in such a way that the client, with moderate coding ability, would be able to update and customize it himself. This posed certain challenges for architecture, which were solved by building all elements, sections, pages, and styles into clear, reuseable components that could be copied and edited as needed."
                    projectImg1={wy_thumb}
                    imgClass1="bg-turq"
                    projectImg2={wy_2}
                    imgClass2="bg-red"
                    projecSubTitle2="Warren Yen"
                    projectTitle2="tech stack"
                    projectDesc2="I was free to choose tech stack for the project and went with HTML5, PHP for reusable header/footer components, CSS3/SASS, the SWUP library for animated AJAX page transitions, AOS library for scroll animations, and Parcel as an application bundler. I added essential SEO meta tags, and also provided tech support to deploy the production site to the client's server. *I do not maintain this site."
                    projectDescCol="bg-yellow"
                    projectImg3={wy_3}
                    imgClass3="bg-purple"
                    projectImg4={wy_4}
                    imgClass4="bg-pink"
                    imgClass5="d-none"
                    >
                        <ProjectLinks 
                        projectTitle="Warren Yen"
                        githubUrl="https://github.com/masonmedia/warren_yen_portfolio"
                        behanceUrl="https://www.behance.net/gallery/97181347/Warren-Yen-Website-Device-Mockups"
                        siteUrl="https://warrenyen.com"
                        prevHref="/projects"
                        nextHref="/projects/jaxx"
                        />
                    </ProjectDetail>
                </Container>
                <Footer />
            </motion.div>
        )
    }
}

export default warrenyen;

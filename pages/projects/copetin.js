import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import copetin_1 from '../../images/copetin/copetin_iphone.jpg';
import copetin_2 from '../../images/copetin/copetin_ipad.jpg';
import copetin_3 from '../../images/copetin/copetin_macbook_black.jpg';
import copetin_4 from '../../images/copetin/copetin_desktop.jpg';
import copetin_5 from '../../images/copetin/copetin_pc.jpg';

export class copetin extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Copetín"
            metaD="Website coding, graphic/UI design."
            projectNumber="06."
            numberClass="bg-success text-light"
            projectLetter="copetin"
            projectTitle="Copetín"
            projectDesc="This project was a website mockup-makeover for Copetín, the now defunct gourmet restaurant of Toronto celebrity Chef Claudio Aprile. The project redesigned Copetín's minimal landing-page website to offer a much bolder, more modern layout, while expanding on the restaurant's existing branding, logo, and color themes. Goals were to take their existing content and elevate it into an elegant, stylish, one-page website that matched the restaurant's cachet and haute cuisine."
            projectImg1={copetin_2}
            projectImg2={copetin_3}
            projecSubTitle2="Copetín"
            projectTitle2="Tech Stack"
            projectDesc2="The design solution consisted of a responsive one-page layout with image carousel, full menu presentation, Open Table reservation API, social media integration, hours and contact information, with branding and colour themes extended creatively throughout. The site was built with HTML5, CSS3, Bootstrap 3, Flexbox, and Javascript for smooth anchor scrolling, and incorporated custom typography. While the project didn't move forward, it was a huge improvement on their existing site and was instructive in designing for the restaurant industry."
            projectDescCol="bg-black text-light"
            projectImg3={copetin_4}
            projectImg4={copetin_1}
            projectImg5={copetin_5}
            >
                <ProjectLinks 
                projectTitle="Decentral Inc."
                githubUrl="https://github.com/masonmedia/big-horn-sheep"
                behanceUrl="https://www.behance.net/gallery/97962231/Big-Horn-Sheep"
                designCircle="•"
                siteUrl="http://bighornsheepband.com/"
                prevHref="/projects/sfs"
                nextHref="/projects"
                />
            </ProjectDetail>
        )
    }
}

export default copetin;


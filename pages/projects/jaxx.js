import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import jaxx_2 from '../../public/images/jaxx/jaxx_laptop_coffee.jpg';
import jaxx_3 from '../../public/images/jaxx/jaxx_multi.jpg';
import jaxx_4 from '../../public/images/jaxx/jaxx_ipad.jpg';
// import jaxx_5 from '../../public/images/jaxx/jaxx_macbook_left.jpg';
import jaxx_5 from '../../public/images/jaxx/jaxx_3phones_min.jpg';
import jaxx_6 from '../../public/images/jaxx/jaxx_grafitti.jpg';

export class jaxx extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Jaxx Liberty"
            metaD="Website coding, graphic/UI design, SEO and user engagement for Jaxx Liberty, a cryptocurrency app made by Decentral Inc."
            projectNumber="JX"
            // numberClass="bg-orange"
            projectLetter="JAXX"
            projectTitle="Jaxx Liberty"
            projectDesc="Jaxx Liberty is a cryptocurrency wallet app made by Decentral Inc. In my role as Decentral's lead website designer/developer, I completely redesigned the Jaxx Liberty public facing website, modernized its branding, layout, and color palette, significantly improved SEO and engagement, and created hundreds of image assets. I added fluid timeline and scroll animations to enhance the user experience, improved app marketing by creating a broad portfolio of device imagery, and was instrumental in expanding the brand by inspiring and implementing a modern design aesthetic across the company's social properties. In this process, I revitalized the Jaxx brand and helped increase user base and web presence."
            projectImg1={jaxx_5}
            projectImg2={jaxx_2}
            projecSubTitle2="Jaxx Liberty"
            projectTitle2="Tech Stack"
            projectDesc2="I built the main product website using HTML5, PHP, CSS3, Bootstrap, SWUP, GSAP, and included a Zendesk help widget for support functionality and a Cookie Consent/GDPR plugin by Insites. I also duplicated the site as a single page application using Angular 7/8, and incorporated market data, blockchain news, Zendesk support, and Jaxx blog APIs to reproduce the functionality of the Jaxx Liberty mobile app. 
            *I do not maintain the current jaxx.io website. For confidentiality, the codebase link below is to an earlier version of jaxx.io, still designed and built by me."
            projectDescCol="bg-navy text-light"
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
                prevHref="/projects/wy"
                nextHref="/projects/decentral"
                />
            </ProjectDetail>
        )
    }
}

export default jaxx;


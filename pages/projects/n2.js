import React, { Component } from 'react';
import n2_1 from '../../images/n2/n2_tablet.jpg';
import n2_2 from '../../images/n2/n2_macbook_black.jpg';
import n2_3 from '../../images/n2/n2_imac.jpg';
import n2_4 from '../../images/n2/n2_iphone.jpg';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';

export class n2 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Andrew Mason | N2 Speech Therapy"
            projectNumber="05."
            numberClass="bg-turq"
            projectLetter="N2"
            projectTitle="N2 Speech Therapy"
            projectDesc="Advance Therapy's public facing website required a complete overhaul and redesign. Requirements included a simple, intuitive user interface, a low amount of scrolling while still presenting a large amount of content, a specific typeface, and the firm's existing logo/color palette. I went with a simple one-page layout centering on jQuery clickable dropdown panels which revealed text for each subsection, with futher features including flexbox construction, a side-canvas menu, smooth anchor scrolling, and image sourcing."
            projectImg1={n2_1}
            // imgClass1="bg-green"
            projectImg2={n2_4}
            // imgClass2="bg-turq"
            projecSubTitle2="Advance Therapy"
            projectTitle2="tech stack"
            projectDesc2="I redesigned the site again recently to modernize and expant the layout as well as add new content. Having worked with React on numerous recent projects I was tired of the tooling and setup, so built a similar component-based architecture using PHP. The site employs reusable HTML components with PHP variables that allow for SPA-style data binding customization. The site also uses SWUP, SASS, Bootstrap, AOS, Undraw illustations, and an expanded gradient color palette. Advance also required UX copywriting and editing."
            projectDescCol="bg-yellow"
            imgClass3="d-none"
            imgClass4="d-none"
            projectImg5={n2_3}
              >
                <ProjectLinks 
                projectTitle="N2 Speech Therapy"
                githubClass="d-none"
                behanceUrl="https://www.behance.net/gallery/97853315/N2-Speech-Therapy"
                designCircle="•"
                siteUrl="http://www.n2speechtherapy.com/"
                prevHref="/projects/at"
                nextHref="/projects/warrenyen"
                />
             </ProjectDetail>
        )
    }
}

export default n2;

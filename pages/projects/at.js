import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import at_1 from '../../public/images/at/at_laptop.png';
import at_2 from '../../public/images/at/at_iphones_black.png';
import at_3 from '../../public/images/at/at_iphone.jpg';

export class at extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Advance Therapy"
            projectNumber="AT"
            projectLetter="AT"
            projectTitle="Advance Therapy"
            projectDesc="Advance Therapy's public facing website required a complete overhaul and redesign. Requirements included a simple, intuitive user interface, a low amount of scrolling while still presenting a large amount of content, a specific typeface, and the firm's existing logo/color palette. I went with a simple one-page layout centering on jQuery clickable dropdown panels which revealed text for each subsection, with futher features including flexbox construction, a side-canvas menu, smooth anchor scrolling, and image sourcing."
            projectImg1={at_1}
            imgClass1="bg-green p-2"
            projectImg2={at_2}
            imgColClass2="bg-squares"
            projecSubTitle2="Advance Therapy"
            projectTitle2="tech stack"
            projectDesc2="I redesigned the site again recently to modernize and expant the layout as well as add new content. Having worked with React on numerous recent projects I was tired of the tooling and setup, so built a similar component-based architecture using PHP. The site employs reusable HTML components with PHP variables that allow for SPA-style data binding customization. The site also uses SWUP, SASS, Bootstrap, AOS, Undraw illustations, and an expanded gradient color palette. Advance also required UX copywriting and editing."
            projectDescCol="bg-black text-light"
            imgClass3="d-none"
            imgClass4="d-none"
            projectImg5={at_3}
              >
                <ProjectLinks 
                projectTitle="Advance Therapy"
                githubUrl="https://github.com/masonmedia/advance-therapy-2.0"
                behanceUrl="https://www.behance.net/gallery/94105429/Advance-Therapy"
                designCircle="•"
                siteUrl="http://atherapy.ca"
                prevHref="/projects/decentral"
                nextHref="/projects/n2"
                />
             </ProjectDetail>
        )
    }
}

export default at;

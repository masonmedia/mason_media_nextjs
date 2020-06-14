import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import nw_1 from '../../public/images/nw/nw_macbook.png';
import nw_2 from '../../public/images/nw/nw_iphone8_home.png';
import nw_3 from '../../public/images/nw/nw_macbook_guitarist.png';
import nw_4 from '../../public/images/nw/nw_iphone7disco.png';
import nw_5 from '../../public/images/nw/nw_iphone7.png';

export class nw extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Neil Whitford"
            projectNumber="09."
            numberClass="bg-neil"
            projectLetter="NW"
            projectTitle="Neil Whitford"
            projectDesc="Advance Therapy's public facing website required a complete overhaul and redesign. Requirements included a simple, intuitive user interface, a low amount of scrolling while still presenting a large amount of content, a specific typeface, and the firm's existing logo/color palette. I went with a simple one-page layout centering on jQuery clickable dropdown panels which revealed text for each subsection, with futher features including flexbox construction, a side-canvas menu, smooth anchor scrolling, and image sourcing."
            projectImg1={nw_1}
            imgColClass1="bg-pink"
            imgClass1="drop-shadow p-2"
            projectImg2={nw_2}
            imgColClass2="bg-squares"
            projecSubTitle2="Advance Therapy"
            projectTitle2="tech stack"
            projectDesc2="I redesigned the site again recently to modernize and expant the layout as well as add new content. Having worked with React on numerous recent projects I was tired of the tooling and setup, so built a similar component-based architecture using PHP. The site employs reusable HTML components with PHP variables that allow for SPA-style data binding customization. The site also uses SWUP, SASS, Bootstrap, AOS, Undraw illustations, and an expanded gradient color palette. Advance also required UX copywriting and editing."
            projectDescCol="bg-black text-light"
            projectImg3={nw_3}
            imgColClass3="bg-neil"
            imgClass3="drop-shadow p-2"
            projectImg4={nw_4}
            imgColClass4="bg-yellow"
            imgClass4="drop-shadow"
            projectImg5={nw_5}
            imgClass5="drop-shadow p-2"
              >
                <ProjectLinks 
                projectTitle="Neil Whitford"
                githubUrl="https://github.com/masonmedia/neil_whitford"
                // behanceUrl="https://www.behance.net/gallery/94105429/Advance-Therapy"
                behanceClass="d-none"
                designCircle="•"
                siteUrl="http://landingpage.andrewmasonmedia.com"
                prevHref="/projects/copetin"
                nextHref="/projects"
                />
             </ProjectDetail>
        )
    }
}

export default nw;

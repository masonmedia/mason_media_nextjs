import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import nw_1 from '../../public/images/nw/nw_macbook.png';
import nw_2 from '../../public/images/nw/nw_iphone8_home.png';
import nw_3 from '../../public/images/nw/nw_macbook_guitarist.png';
import nw_4 from '../../public/images/nw/nw_iphone5disco.png';
import nw_5 from '../../public/images/nw/nw_iphone7.png';

export class nw extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Neil Whitford"
            projectNumber="NW"
            projectLetter="NW"
            projectTitle="Neil Whitford"
            projectDesc="Neil Whitford is a Toronto musician, composer, producer and educator. He required a public facing website for his personal brand as well as production and teaching businesses. The project required UI/UX and graphic design, branding, as well as copy editing. The end result included a bold palette of neon colors on a stark black background, a simple but modern Helvetica typeface, animations, and presentation of his library of audio tracks and a complete discography."
            projectImg1={nw_1}
            imgColClass1="bg-pink"
            imgClass1="drop-shadow p-2"
            projectImg2={nw_2}
            imgColClass2="bg-squares"
            projecSubTitle2="Advance Therapy"
            projectTitle2="tech stack"
            projectDesc2="I built the site using HTML5, PHP, CSS3, Bootstrap 4, SWUP, AOS, and the parallax animation  library rellax.js. It also includes audio player embeds from Souncloud and hearthis.at platforms. This project is awaiting deployment and is visible live below temporarily on one of my dev urls."
            projectDescCol="bg-black text-light"
            projectImg3={nw_3}
            imgColClass3="bg-neil"
            imgClass3="drop-shadow p-2"
            projectImg4={nw_4}
            imgColClass4="bg-yellow"
            imgClass4=""
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
                nextHref="/projects/warrenyen"
                />
             </ProjectDetail>
        )
    }
}

export default nw;

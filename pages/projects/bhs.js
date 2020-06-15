import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import bhs_1 from '../../public/images/bhs/bhs_vinyl.jpg';
import bhs_2 from '../../public/images/bhs/bhs_logo_green.jpg';
import bhs_3 from '../../public/images/bhs/bhs_street_billboard-1.jpg';
import bhs_4 from '../../public/images/bhs/bhs_lights.jpg';
import bhs_5 from '../../public/images/bhs/bhs_iphones.jpg';

export class bhs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Big Horn Sheep"
            metaD="Website coding, graphic/UI design, SEO and user engagement for Jaxx Liberty, a cryptocurrency app made by Decentral Inc."
            projectNumber="BHS"
            projectLetter="BHS"
            projectTitle="Big Horn Sheep"
            projectDesc="A website for Toronto instrumental trio Big Horn Sheep, this project required UI/UX design, logo and graphic design, branding, photo sourcing, showcasing of band audio tracks, photos, and posters, as well as performance dates and contact information. The design solution consisted of a single page application using Angular and Bootstrap 4 featuring soundcloud audio tracks, a pinterest-style photo gallery, and unique typography. The project also required the creation of Vimeo and Soundcloud pages to host band video and audio content."
            projectImg1={bhs_2}
            projectImg2={bhs_3}
            projecSubTitle2="Big Horn Sheep"
            projectTitle2="Tech Stack"
            projectDesc2="The site is built with Angular, HTML5, CSS3, Javascript, and Bootstrap 4. It also required copy/content writing and a Facebook band page design. Other site features include stylized vintage polaroid photo gallery modals and a showcase of performance dates with corresponding concert posters (also Mason Media design). The site was also an exercise in Atomic CSS, with an effort to limit styles to native Bootstrap 4 classes."
            projectDescCol="bg-black text-light"
            projectImg3={bhs_5}
            projectImg4={bhs_1}
            projectImg5={bhs_4}
            >
                <ProjectLinks 
                projectTitle="Big Horn Sheep"
                githubUrl="https://github.com/masonmedia/big-horn-sheep"
                behanceUrl="https://www.behance.net/gallery/97962231/Big-Horn-Sheep"
                designCircle="•"
                siteUrl="http://bighornsheepband.com/"
                // prevHref="/projects/n2"
                nextHref="/projects/sfs"
                />
            </ProjectDetail>
        )
    }
}

export default bhs;


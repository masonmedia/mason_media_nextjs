import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import bhs_1 from '../../images/bhs/bhs_vinyl.jpg';
import bhs_2 from '../../images/bhs/bhs_logo_green.jpg';
import bhs_3 from '../../images/bhs/bhs_street_billboard-1.jpg';
import bhs_4 from '../../images/bhs/bhs_lights.jpg';
import bhs_5 from '../../images/bhs/bhs_iphones.jpg';

export class bhs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Big Horn Sheep"
            metaD="Website coding, graphic/UI design, SEO and user engagement for Jaxx Liberty, a cryptocurrency app made by Decentral Inc."
            projectNumber="06."
            numberClass="bg-success text-light"
            projectLetter="bhs"
            projectTitle="Big Horn Sheep"
            projectDesc="A website for Toronto instrumental trio Big Horn Sheep, this project required bold imagery and graphic design, unique typography, showcasing of band audio tracks and images, as well as performance dates and contact information. The design solution consisted of a Single Page Application using AngularJS and Bootstrap 4. It features animated page transitions, embedded soundcloud audio tracks, a pinterest-style image lightbox gallery, Bootstrap modals to showcase performance dates and band posters (also Mason Media design), with unique banner images and branding. The site was also an exercise in Atomic CSS, with an effort to limit styles to native Bootstrap 4 classes."
            projectImg1={bhs_2}
            projectImg2={bhs_3}
            projecSubTitle2="Big Horn Sheep"
            projectTitle2="Tech Stack"
            projectDesc2="The site was coded from scratch using HTML5, CSS3, Bootstrap 4, jQuery and Javascript, and included UI/UX design, copy editing, color palette development, and hosting/editing support. Other features include a calendar plugin by Timely allowing the client to add and edit concert dates, a smooth anchor scroll menu, and bold social media integration.
            *I do not maintain this website."
            projectDescCol="bg-black text-light"
            projectImg3={bhs_5}
            projectImg4={bhs_1}
            projectImg5={bhs_4}
            >
                <ProjectLinks 
                projectTitle="Decentral Inc."
                githubUrl="https://github.com/masonmedia/big-horn-sheep"
                behanceUrl="https://www.behance.net/gallery/97962231/Big-Horn-Sheep"
                designCircle="•"
                siteUrl="http://bighornsheepband.com/"
                prevHref="/projects/n2"
                nextHref="/projects/sfs"
                />
            </ProjectDetail>
        )
    }
}

export default bhs;


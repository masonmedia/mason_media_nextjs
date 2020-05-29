import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import bhs_1 from '../../images/bhs/bhs_vinyl.jpg';
import bhs_2 from '../../images/bhs/bhs_logo_green.jpg';
import bhs_3 from '../../images/bhs/bhs_street_billboard-1.jpg';
import bhs_4 from '../../images/bhs/bhs_lights.jpg';
import bhs_5 from '../../images/bhs/bhs_iphones.jpg';
// import bhs_5 from '../../images/bhs/bhs_tvs.jpg';

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
            projectDesc="Toronto world-jazz band Surefire Sweat required a website, UI, and graphic design workup for booking, promotion, fan engagement and marketing. Requirements included the incorporation of an existing logo and photography, color palette development, typography, and media presentation including audio, video, photos, press kit, a concert dates calendar, and social media links. The design solution consisted of a one-page magazine style layout to showcase the band's bold imagery, and features animated dropdown sections that reveal band audio tracks, video, downloadable image gallery, and an electronic press kit."
            projectImg1={bhs_1}
            projectImg2={bhs_3}
            projecSubTitle2="Big Horn Sheep"
            projectTitle2="Tech Stack"
            projectDesc2="The site was coded from scratch using HTML5, CSS3, Bootstrap 4, jQuery and Javascript, and included UI/UX design, copy editing, color palette development, and hosting/editing support. Other features include a calendar plugin by Timely allowing the client to add and edit concert dates, a smooth anchor scroll menu, and bold social media integration.
            *I do not maintain this website."
            projectDescCol="bg-black text-light"
            projectImg3={bhs_5}
            projectImg4={bhs_2}
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


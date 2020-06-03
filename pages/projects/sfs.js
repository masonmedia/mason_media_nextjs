import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import sfs_1 from '../../images/sfs/sfs_black_iphone.jpg';
import sfs_2 from '../../images/sfs/sfs_multi_device.jpg';
import sfs_3 from '../../images/sfs/sfs_iphones_black.jpg';
import sfs_4 from '../../images/sfs/sfs_screens_mockup.jpg';
import sfs_5 from '../../images/sfs/sfs_macbook.png';

export class sfs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Surefire Sweat"
            metaD="Website coding, graphic/UI design, SEO and user engagement for Jaxx Liberty, a cryptocurrency app made by Decentral Inc."
            projectNumber="07."
            numberClass="bg-black text-light"
            projectLetter="SFS"
            projectTitle="Surefire Sweat"
            projectDesc="Toronto world-jazz band Surefire Sweat required a website, UI, and graphic design workup for booking, promotion, fan engagement and marketing. Requirements included the incorporation of an existing logo and photography, color palette development, typography, and media presentation including audio, video, photos, press kit, a concert dates calendar, and social media links. The design solution consisted of a one-page magazine style layout to showcase the band's bold imagery, and features animated dropdown sections that reveal band audio tracks, video, downloadable image gallery, and an electronic press kit."
            projectImg1={sfs_1}
            projectImg2={sfs_5}
            imgClass2="bg-turq p-2 drop-shadow"
            projecSubTitle2="Surefire Sweat"
            projectTitle2="Tech Stack"
            projectDesc2="The site was coded from scratch using HTML5, CSS3, Bootstrap 4, jQuery and Javascript, and included UI/UX design, copy editing, color palette development, and hosting/editing support. Other features include a calendar plugin by Timely allowing the client to add and edit concert dates, a smooth anchor scroll menu, and bold social media integration.
            *I do not maintain this website."
            projectDescCol="bg-black text-light"
            projectImg3={sfs_3}
            projectImg4={sfs_2}
            projectImg5={sfs_4}
            >
                <ProjectLinks 
                projectTitle="Decentral Inc."
                githubUrl="https://github.com/masonmedia/surefiresweat"
                behanceUrl="https://www.behance.net/gallery/93333839/Surefire-Sweat"
                designCircle="•"
                siteUrl="http://surefiresweat.com/"
                prevHref="/projects/bhs"
                nextHref="/projects/copetin"
                />
            </ProjectDetail>
        )
    }
}

export default sfs;


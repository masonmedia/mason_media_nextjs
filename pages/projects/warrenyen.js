import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import wy_thumb from '../../public/images/wy/wy_macbookgold.png';
import wy_2 from '../../public/images/wy/wy_about.png';
import wy_3 from '../../public/images/wy/wy_iphone5.png';
import wy_4 from '../../public/images/wy/wy_project.png';

export class warrenyen extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Warren Yen"
            metaD="A website build for Toronto UX/UI Designer Warren Yen."
            metaTitle="Warren Yen"
            projectNumber="WY"
            // numberClass="bg-turq"
            projectLetter="WY"
            projectTitle="Warren Yen"
            projectDesc="A website build for Toronto UX/UI Designer Warren Yen, this project required the development of a user interface and layout provided by the client. A central parameter for the project was to build the site in such a way that the client, with moderate coding ability, would be able to update and customize it himself. This posed certain challenges for architecture, which were solved by building all elements, sections, pages, and styles into clear, reuseable components that could be copied and edited as needed."
            projectImg1={wy_thumb}
            imgClass1="bg-turq p-2"
            projectImg2={wy_2}
            imgClass2="bg-red"
            projecSubTitle2="Warren Yen"
            projectTitle2="tech stack"
            projectDesc2="I was free to choose tech stack for the project and went with HTML5, CSS3/SASS, Bootstrap, Javascript, the SWUP library for animated AJAX page transitions, AOS library for scroll animations, and Parcel as an application bundler. I added essential SEO meta tags, and also provided tech support to deploy the production site to the client's server. *I do not maintain this site."
            projectDescCol="bg-yellow"
            projectImg3={wy_3}
            imgClass3="bg-purple"
            projectImg4={wy_4}
            imgClass4="bg-pink"
            imgClass5="d-none"
            >
                <ProjectLinks 
                projectTitle="Warren Yen"
                githubUrl="https://github.com/masonmedia/warren_yen_portfolio"
                behanceUrl="https://www.behance.net/gallery/97181347/Warren-Yen-Website-Device-Mockups"
                designCircle="•"
                siteUrl="https://warrenyen.com"
                prevHref="/projects"
                // prevClass="d-none"
                nextHref="/projects/jaxx"
                />
            </ProjectDetail>
        )
    }
}

export default warrenyen;

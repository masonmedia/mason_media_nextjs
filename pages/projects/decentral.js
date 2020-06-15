import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import dc_1 from '../../public/images/dc/dc_laptop.png';
import dc_2 from '../../public/images/dc/jaxx_imac.jpg';
import dc_3 from '../../public/images/dc/decentral_flatiron.jpeg';
import dc_4 from '../../public/images/dc/jaxx_hand_phone.jpg';
import dc_5 from '../../public/images/dc/jaxx_ipad_iphone.jpg';

export class decentral extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);  
    }
    render() {
        return (
            <ProjectDetail 
            metaTitle="Decentral"
            metaD="Website coding, graphic/UI design, SEO and user engagement for Jaxx Liberty, a cryptocurrency app made by Decentral Inc."
            projectNumber="DC"
            // numberClass="bg-black text-light"
            projectLetter="DC"
            projectTitle="Decentral Inc."
            projectDesc="One of Toronto's earliest blockchain startups, Decentral is the maker of two industry-leading digital wallet apps. In my role as Decentral's lead website designer and developer, I redesigned and rebuilt all the company's customer facing web properties including: the company website, app/product website, the customer support website, and the company and product blogs. I also supported marketing with image design and sourcing, and was a creative voice in the development and editing of new copy across platforms."
            projectImg1={dc_1}
            imgClass1="bg-pink p-2"
            projectImg2={dc_2}
            projecSubTitle2="Decentral Inc."
            projectTitle2="Tech Stack"
            projectDesc2="I built the Decentral company website to be consistent with Jaxx Liberty (its product site) and used the same basic stack: HTML5, CSS3, PHP, JS, jQuery, GSAP, SWUP, Zendesk help plugin, Cookie Consent plugin. I redesigned the Jaxx support website which used curlybars.js, HTML5, CSS3, JS and jQuery, as well as both the Jaxx and Decentral blogs (Wordpress). All sites include custom images, google gtags for analytics, as well as JSON-LD schema/google structured data for improved SEO and rich-media search results.
            *I do not maintain any of decentral's websites."
            projectDescCol="bg-yellow"
            projectImg3={dc_3}
            imgClass3="bg-purple"
            projectImg4={dc_5}
            imgClass4="bg-pink"
            projectImg5={dc_4}
            imgClass5="bg-pink"
            >
                <ProjectLinks 
                projectTitle="Decentral Inc."
                githubUrl="https://github.com/masonmedia/decentral.ca_swup"
                behanceUrl="https://www.behance.net/gallery/93329099/Jaxx-Liberty"
                designCircle="•"
                siteUrl="https://decentral.ca"
                prevHref="/projects/jaxx"
                nextHref="/projects/at"
                />
            </ProjectDetail>
        )
    }
}

export default decentral;


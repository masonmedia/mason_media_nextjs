import React, { Component } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ProjectLinks from '../../components/ProjectLinks';
import n2_1 from '../../public/images/n2/n2_tablet.jpg';
// import n2_2 from '../../public/images/n2/n2_macbook_black.jpg';
import n2_3 from '../../public/images/n2/n2_imac.jpg';
import n2_4 from '../../public/images/n2/n2_iphone.jpg';

export class n2 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <ProjectDetail 
            metaTitle="N2"
            projectNumber="N2"
            projectLetter="N2"
            projectTitle="N2 Speech Therapy"
            projectDesc="N2 Speech Therapy is a Toronto Speech-Language Pathology services provider offering a broad range of one-on-one treatment options. N2 required a complete brand design including website, logo, custom imagery, photo sourcing, and copywriting. Requirements included a bold, professional layout, clean presentation of company information, and a blog for updatable content and SEO."
            projectImg1={n2_3}
            projectImg2={n2_4}
            projecSubTitle2="N2 Speech Therapy"
            projectTitle2="tech stack"
            projectDesc2="With the client's blog and updatable content needs, I went with a Wordpress CMS. Starting with a stock template, customizations were developed including custom banner images, unique color palette, addition of font awesome icons and custom bullets, sub-page header and footer images, custom logo design, and SEO and social media integration. Other features include parallaxing background images, scroll animations, and custom UX copywriting and content creation."
            projectDescCol="bg-black text-light"
            imgClass3="d-none"
            imgClass4="d-none"
            projectImg5={n2_1}
              >
                <ProjectLinks 
                projectTitle="N2 Speech Therapy"
                githubClass="d-none"
                behanceUrl="https://www.behance.net/gallery/97853315/N2-Speech-Therapy"
                designCircle="•"
                siteUrl="http://www.n2speechtherapy.com/"
                // prevHref="/projects/at"
                nextHref="/projects/bhs"
                />
             </ProjectDetail>
        )
    }
}

export default n2;

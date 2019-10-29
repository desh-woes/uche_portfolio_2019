import React from 'react';

// Import the required components
import RenderCompanyBanner from "../components/logoBanner";
import CaseHeading from "../components/caseStudy_heading";
import ParagraphText from "../components/paragraph_comp";
import LogoDiv from "../components/logoTextDiv";
import HighlightedText from "../components/textHighlight_comp";
import RenderLogo from "../components/logo_comp";

// Import the required images
import pagaBanner from "../images/Paga Page/Paga Header.png";

// Import Style sheet
import "../style/index.css";


function RenderPagaPage() {
    return(
        <div>
            <RenderCompanyBanner
                companyName={"Pagatech"}
                logo={pagaBanner}
                position={"UX Design Intern"}
                time={"Summer 2019"}
                location={"Lagos, Nigeria"}
            />
            <div className={"caseDiv"}>
                <CaseHeading text={"Overview"} color={"orange"}/>
                <p className={"quote"}>
                    <q>Transforming lives by delivering innovative and universal access to financial services</q> - Paga’s Mission
                </p>
                <ParagraphText
                    paragraph = {"Paga is a team of passionate Africans tackling a critical issue paramount to Africa's " +
                    "development - the availability of financial services to all. Innovation is at the core of their company " +
                    "and they strive to develop \"appropriate technology\" suited for the local markets where we operate. " +
                    "Their vision is to be a leading electronic currency and drive financial inclusion across Africa."}
                />
            </div>
            <hr className={"caseLine"}/>
            <div className={"caseDiv"}>
                <CaseHeading text={"Context"} color={"orange"}/>
                <ParagraphText
                    paragraph = {"In the summer of 2019, I interned as a UX Designer at Pagatech, a platform transforming" +
                    " lives by delivering innovative and universal access to financial services. Paga is building an ecosystem " +
                    "to enable people to digitally send and receive money, and creating simple financial access for everyone. " +
                    "I worked in close proximity with a Senior Designer to explore User process as a concept and how to fit Human " +
                    "Centered design thinking into Paga’s existing products."}
                />
                <CaseHeading text={"My Role"} color={"orange"}/>
                <ParagraphText
                    paragraph = {"My responsibilities included UX design, UX research, visual design, and interactive " +
                    "prototyping. I worked within Paga’s in-house engineering team alongside other designers, Product " +
                    "Managers, researchers, and developers. I worked on a range of task on solving various micro problems. " +
                    "Unfortunately, due to my NDA I can’t share specific details about my work until the product launches " +
                    "publicly. If you would like to learn more about my process and my experience, feel free to contact me."}
                />
                <CaseHeading text={"Deliverable"} color={"orange"}/>
                <ParagraphText
                    paragraph = {"Here are some of my deliverables and some anchor points and tasks I helped Paga with, " +
                    "both in company products and customer centered products."}
                />
                <LogoDiv/>
                <CaseHeading text={"Key Takeaways"} color={"orange"}/>
                <ParagraphText
                    paragraph={"- The importance of how and why the collaboration between engineers and designers are critical in product development.\n" +
                    "- How to effectively communicate my thoughts, ideas, and suggestions to engineers in a diplomatic fashion.\n" +
                    "- You might not always know all the answers but need to learn how to move forward. Gather resources as much as you can and make assumptions that can be tested with research. Ask questions and reach people outside your bubble to get fresh feedback on your ideas.\n" +
                    "- What working in a fast-paced startup would feel like as we had only few weeks to execute on an indivdual ideas and projects. - The value of being scrappy, flexible, adaptable, and agile to create good and design and implement feedback on it.\n" +
                    "- Always be intentional about visual decisions. To always have a clear reason for using that specific style. Sometimes people get distracted by visual elements that they forget that the main aim was to solve a problem through an experience."}
                />
            </div>
            <div className={"bioBox bottomBio"}>
                <HighlightedText text={"Say Hello"}/>
                <RenderLogo/>
            </div>
        </div>
    )
}

export default RenderPagaPage;
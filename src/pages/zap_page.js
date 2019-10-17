import React from 'react';

// Import the required components
import Header from "../components/header_comp";
import RenderCompanyBanner from "../components/logoBanner";


// Import the required images
import zap_banner from "../images/Zap Page/Zap Header.png";
import story from "../images/Zap Page/User Srtory.png";
import userFlow from "../images/Zap Page/USer Flow.png";
import wireFrame from "../images/Zap Page/Wireframe.png";
import imageFrame from "../images/Zap Page/Frame 4.png";

// Import Style sheet
import "../style/index.css";
import CaseHeading from "../components/caseStudy_heading";
import ParagraphText from "../components/paragraph_comp";
import HighlightedText from "../components/textHighlight_comp";
import RenderLogo from "../components/logo_comp";



function RenderZap(){
    return(
        <div>
            <Header/>
            <RenderCompanyBanner
                companyName={"Zap"}
                logo={zap_banner}
                position={"UX Designer"}
                time={"Spring 2019"}
                location={"Nairobi, Kenya"}
            />
            <div className={"caseDiv"}>
                <CaseHeading text={"Overview"} color={"blue"}/>
                <p className={"quote"}>
                    <q>Imagine you’re a busy mom of four struggling to keep your house clean – and aching to spend more family time. ”</q> - Zap Founder
                </p>
                <ParagraphText
                    paragraph = {"Zap Maid is a maid hiring services in Nairobi, Kenya – its wide number of helping hands " +
                    "have served homeowners coast to coast. Molly Zap separates itself from competitors and independent " +
                    "maids by offering free in-home estimates and a satisfaction guarantee. They take it a step further " +
                    "to also provide ensure 24 hours help by providing maids who are willing to relocate to your home."}
                />
            </div>
            <hr className={"caseLine"}/>

            <div className={"spanBar spanBar_2"}>
                <h2>Problem Statement</h2>
                <q>Zap Maid was looking to increase their footprint in search engines and connect with more prospects.
                    They were also facing a problem of 60% loss of clients due to incompletion of booking. The biggest
                    challenge was to solve both problems without addition of extra tools and to successfully embed an
                    engaging booking system for their clients.
                </q>
            </div>
            <div className={"caseDiv"}>
                <CaseHeading text={"Role and Solution"} color={"blue"}/>
                <ParagraphText
                    paragraph = {"I adopted a design-sprint approach to get some initial direction in the project and " +
                    "then progressed to a full implementation of a web app for Zap. Using human-centered design approach " +
                    "to reduce risk and uncertainty. Followed by a stage of A/B testing to confirm my hypothesis as to " +
                    "solving the problem of customer drop off when booking."}
                />
                <CaseHeading text={"Our User Persona"} color={"blue"}/>
                <div className={"head_comp"}>
                    <ParagraphText
                        paragraph = {"In this case we didn’t have enough resorces in terms of time or money to interview " +
                        "target users. I then advised that we create a Persona based on the stakeholder insight and competitor" +
                        " analysis. Meet Mary (Our made up persona)"}
                    />
                    <img src={story} alt={"user Story"}/>
                </div>
                <CaseHeading text={"Information architecture"} color={"blue"}/>
                <ParagraphText
                    paragraph = {"This played an important part in laying down the groundwork for this project. I " +
                    "started out by touching base with the client to get an idea of what features our website should " +
                    "include. What were the most important features, and why did he think they played such an important " +
                    "role in how he envisioned his customer journey? An additional complication was the necessity of " +
                    "accounting for three different kinds of users: Mary(Our made up persona), and new Maids looking to " +
                    "be hired.\n" +
                    "The Primary User Flow demonstrating the step-by-step elements mary required to accomplish the hiring " +
                    "process: \nTask 1: Identify Cleaning Services to the User-Selected Cleaner Easily \nTask 2: Find maids " +
                    "base on Their Profiles and expertise and prefrence \nTask 3: Book and track activities and accept payment plans"}
                />
                <img className={"agriImg"} src={userFlow} alt={"wireframe"}/>
                <CaseHeading text={"Wireframing"} color={"blue"}/>
                <ParagraphText
                    paragraph = {"Due to time constraints in this project I often had to move quicker than i usually do " +
                    "and found myself jumping from rough paper sketches to immediate medium fidelity wireframes (after " +
                    "client feedback). High fidelity screens were built with a combination of Figma and Marvel, then made into interactive prototype."}
                />
                <img className={"agriImg"} src={wireFrame} alt={"wireframe"}/>
                <CaseHeading text={"Usability Testing"} color={"blue"}/>
                <ParagraphText
                    paragraph = {"One of the major prolems was the customer drop off and abandoning the booking stage. " +
                    "To understand why, we conducted some usability tests. To evaluate the new booking widget on the web " +
                    "app, we relied on usage metrics in conjunction with 2 usability tests. This allowed us to gain deeper " +
                    "understanding through combining both qualitative and quantitative information. We compare booking through " +
                    "Test A - one-screen widget and Test B - an in depth form. Discussions with users discussion revealed that " +
                    "often times, clients dropped out because they in their busy nature just didn't have the time to fill " +
                    "long word forms asking them questions that were not their major concern and all our test case in A showed " +
                    "full completion and follow up request."}
                />
                <CaseHeading text={"The Final Mockups"} color={"blue"}/>
                <ParagraphText
                    paragraph = {"The Final Design boasts a robust set of features that were a major focus for Mary — like: " +
                    "information of how the hiring process works, Options and different categories of maid options, " +
                    "why she could trust inviting a stranger to help clean her home, a simple on-screen booking widget, and a" +
                    " dashboard to track her bookings, amongst other things."}
                />
                <img className={"agriImg"} src={imageFrame} alt={"frame"}/>
                <CaseHeading text={"Conclusion & Lessons"} color={"blue"}/>
                <ParagraphText
                    paragraph = {"Every client has unique needs and objectives. For Zap Maid, I helped a service franchise " +
                    "improve and expand its footprint in the search engines and further establish its online presence. " +
                    "I secured Zap maid an easier way to ensure booking completion and promised them a 50% increase from " +
                    "what they were experiencing. Provided the company with insights into how their website was being perceived " +
                    "by online visitors and how the brand stacked up against its closest competition."}
                />
            </div>
            <div className={"bioBox bottomBio"}>
                <HighlightedText text={"Say Hello"}/>
                <RenderLogo/>
            </div>
        </div>
    )
}

export default RenderZap;

import React from 'react';

// Import the required components
import Header from "../components/header_comp";
import RenderCompanyBanner from "../components/logoBanner";
import CaseHeading from "../components/caseStudy_heading";
import ParagraphText from "../components/paragraph_comp";

// Import the required images
import AP_banner from "../images/Ap Page/Ap Header.png";
import user_story from "../images/Ap Page/Agripredict User story _ user Journey v2.png";
import logos from "../images/Ap Page/Logos.png";
import wireFrame from "../images/Ap Page/prototype of onboarding and registration.png";
import wireFrame_2 from "../images/Ap Page/Wireframe.png";
import mobile_screen from "../images/Ap Page/Frame 2.png"
import mobile_screen_2 from "../images/Ap Page/Shot.png";



// Import Style sheet
import "../style/index.css";
import HighlightedText from "../components/textHighlight_comp";
import RenderLogo from "../components/logo_comp";



function RenderAgriPredict() {
    return(
        <div>
            <Header/>
            <RenderCompanyBanner
                companyName={"Agripredict"}
                logo={AP_banner}
                position={"Product Designer"}
                time={"Summer 2019"}
                location={"Lusaka, Zambia"}
            />
            <div className={"caseDiv"}>
                <CaseHeading text={"Overview"} color={"green"}/>
                <ParagraphText
                    paragraph = {"AgriPredict is a data driven agriculture startup based in Lusaka, Zambia, they are " +
                    "using to AI to develope solutions to ensure that food security is guaranteed globally. They are " +
                    "working towards making agricultural technologies, smart, cheap and accessible as they drive towards " +
                    "the goal of achieving food security on a global level for the growing population."}
                />
            </div>
            <hr className={"caseLine"}/>
            <div className={"caseDiv"}>
                <CaseHeading text={"Context"} color={"green"}/>
                <ParagraphText
                    paragraph = {"After 3 years of succeding in providing Agricultural Data in Zambia, they identified " +
                    "the need to their services a step further with their brand visual identity, and creating a new " +
                    "product to help visualize their curated and acquired data to their users."}
                />
            </div>

            {/*Green bar on the page*/}
            <div className={"spanBar"}>
                <h2>Problem Statement</h2>
                <q>How can AgriPredict visualize it’s curated data related to -agricultural / farmer information so as
                    to pinpoint issues and provide answers to questions regarding clients and it’s services.
                </q>
            </div>

            <div className={"caseDiv"}>
                <CaseHeading text={"My Role"} color={"green"}/>
                <ParagraphText
                    paragraph = {"I worked in close proximity with the CTO to improve their user experience, create new " +
                    "features and I also tapped into my brand design background to update their visual identity. " +
                    "My responsibilities included UX design, UX research, visual design, and interactive prototyping. " +
                    "Throughout the duration of the project, I collaborated with Agripredict data analyst, researchers, " +
                    "product managers, engineers, and other stakeholders."}
                />
                <div id={"specialHeading"}>
                    <CaseHeading text={"Solution and Process"} color={"green"}/>
                    <p id={"sub_heading"}>Discovery > Research > Prototype > Design > Test <span>|</span> Build > Live</p>
                </div>
                <ParagraphText
                    paragraph = {"My solution was centered around creating a dashboard to solve the visualization problem " +
                    "of the exponentially growing data started with an understanding of context, what a dashboard may looks" +
                    " like and in what conditions the user will use a dashboard and using what type of devices. The second stage " +
                    "I dove deeper into synthesizing the data and mapping them out using an Empathy Map.\n" +
                    "The next stage required a complete reorganisation of the user flow by introducing subcategories for ease of navigation. " +
                    "Widgets, such as a Filter and filter options, Map search and Map view, Recent Data history, displayed the most " +
                    "important information and were easily customisable to give users more control over the content they saw on their dashboard."}
                />
                <CaseHeading text={"User Stories and Journey"} color={"green"} span={" - Research"}/>
                <ParagraphText
                    paragraph = {"I explored some situations for the users and their journery indicating some context " +
                    "(their end goals and their current situations), sequence (steps and methods it’ll take them to achieve " +
                    "the goals), and functionality"}
                />
                <img className={"agriImg"} src={user_story} alt={"User Story"}/>

                <CaseHeading text={"Competitive Analysis"} color={"green"} span={" - Research"}/>
                <div id={"head_comp"}>
                    <ParagraphText
                        paragraph = {"I looked into how direct competitors in the Agricultural and dashboard data space " +
                        "visualize their data and present their information and the relationship/experience with users in and out of the process."}
                    />
                    <img src={logos} alt={"companies"}/>
                </div>
                <CaseHeading text={"Wireframing"} color={"green"}/>
                <ParagraphText
                    paragraph = {"Below are some snapshots of the initial wireframe I presented to the Team at " +
                    "Agripredict; the landing page for the website redesign, and onboarding screens for the Dashboard."}
                />
                <img className={"agriImg"} src={wireFrame} alt={"wireframe"}/>
                <img className={"agriImg"} src={wireFrame_2} alt={"wireframe"}/>
                <CaseHeading text={"High Fidelity Prototype"} color={"green"}/>
                <ParagraphText
                    paragraph={"Below are some snapshots of the final designs of the interactive prorotype, which later " +
                    "progressed to testing and were approved to build. One of the solutions I designed to solve the " +
                    "problem of visualizing large dataset is - including a filter widget that enables to user to narrow " +
                    "down what data they’d like to access, and also giving them the option of toggling between various " +
                    "data types. That solution was proved to solve the problem when compared with other hyothesis I had."}
                />
                <img className={"agriImg"} alt={"Mobile screens"} src={mobile_screen}/>
                <img className={"agriImg"} alt={"Mobile screens"} src={mobile_screen_2}/>
                <ParagraphText
                    paragraph={"Unfortunately, due to this confidentiality of this project I cannot present more detailed " +
                    "screens. Please feel free to contact me if you would like to know more about my process and want to " +
                    "know indepth my role in this project, thank you. Although, I can tell you that this project was a " +
                    "succes and in the process to be launched soon."}
                />
            </div>
            <div className={"bioBox bottomBio"}>
                <HighlightedText text={"Say Hello"}/>
                <RenderLogo/>
            </div>
        </div>
    )
}

export default RenderAgriPredict;
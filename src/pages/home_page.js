import React from 'react';

// Import the required components
import HighlightedText from "../components/textHighlight_comp";
import ParagraphText from "../components/paragraph_comp";
import RenderLogo from "../components/logo_comp";
import CaseStudy from "../components/caseStudy_comp";
import RenderLeft from "../components/display_left";
import RenderRight from "../components/display_right";

// Import the required Images
import paga from "../images/Home Page/Paga Home.png";
import agripredict from "../images/Home Page/Ap Home.png";
import zap from "../images/Home Page/Zap Home.png";
import letterMark from "../images/Home Page/Letter Home.png";
import upLabs from "../images/Home Page/Ui Design 1.png";

// Import Style sheet
import "../style/index.css";


function RenderHome() {
    return(
        <div>
            <div className={"bioBox"}>
                    <HighlightedText text={"Hi, I'm Uche"}/>
                    <ParagraphText paragraph={"A designer with a focus in user experience, brand identity and interaction design, passionate about solving problems through human centered design. ✨ \n" +
                    "I am currently looking for new projects as a freelancer and opportunities to work for and learn from companies worldwide. 💼"}/>

                    <ParagraphText paragraph={"Get in touch with me via any of these!﻿"}/>
                    <div id={"topBio"}>
                        <RenderLogo/>
                    </div>
            </div>
            <CaseStudy/>
            <RenderLeft
                img = {agripredict}
                label = {"Agripredict"}
                paragraph = {"Agricultural risk and data management through Artificial Intelligence"}
                text = {"View case study"}
                link={"/agriPredict"}
            />
            <RenderRight
                img = {zap}
                label = {"Zap"}
                paragraph = {"Creating an experience for maid hiring services."}
                text = {"View case study"}
                link={"/zap"}
            />
            <RenderLeft
                img = {paga}
                label = {"Pagatech"}
                paragraph = {"Building products that is making payments easier for Africa"}
                text = {"View case study"}
                link={"/paga"}
            />

            <RenderRight
                img = {upLabs}
                label = {"Ui Designs"}
                paragraph = {"More of my fun / commisioned Ui design projects."}
                text = {"View case study"}
            />

            <RenderLeft
                img = {letterMark}
                label = {"Letter mark exploration"}
                paragraph = {"I once did a series of explorations redesigning every alphabet in logo forms. Sounds cool right? "}
                text = {"View case study"}
                link={"/letterMark"}
            />
            <div className={"bioBox bottomBio"}>
                    <HighlightedText text={"Say Hello"}/>
                    <RenderLogo/>
            </div>
        </div>
    )
}

export default RenderHome;
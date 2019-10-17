import React from 'react';
import TextualLogo from "./logoText";
import logo_1 from "../images/Paga Page/1.png";
import logo_2 from "../images/Paga Page/2.png";
import logo_3 from "../images/Paga Page/3.png";
import logo_4 from "../images/Paga Page/4.png";
import logo_5 from "../images/Paga Page/5.png";

function LogoDiv() {
    return(
        <div className={"logoDiv"}>
            <TextualLogo text={"User Research & User Journeys"} imgSrc = {logo_1}/>
            <TextualLogo text={"Sketches & Wireframes"} imgSrc = {logo_2}/>
            <TextualLogo text={"Surveys & Storyboards"} imgSrc = {logo_3}/>
            <TextualLogo text={"User Testing"} imgSrc = {logo_4}/>
            <TextualLogo text={"High fidelity Ui Designs & Prototyping"} imgSrc = {logo_5}/>
        </div>
    )
}

export default LogoDiv;
import React from 'react';

// Import the required components
import Header from "../components/header_comp";
import ParagraphText from "../components/paragraph_comp";
import HighlightedText from "../components/textHighlight_comp";
import RenderLogo from "../components/logo_comp";

// Import the required images
import uche_img from "../images/Mask Group.png";

// Import Style sheet
import "../style/index.css";

function RenderAboutPage(){
    return(
        <div>
            <Header/>
            <div id={"aboutUche"}>
                <img src={uche_img} alt={"Thaddeus"}/>
                <div>
                    <HighlightedText text={"Meet Uche"}/>
                    <ParagraphText
                        paragraph={"Hello there, I’m Uchechukwu Onyeka. a designer fascinated by the process of creating something out of nothing. Born and\n" +
                        "raised in Lagos, Nigeria, but currently based in Rwanda.\n" +
                        "I am passionate about retelling brand stories to give them an edge over their competitors, by ensuring that their products\n" +
                        "capture the unique market cultures. I strive to do this by creating products that matter through Human-Centered design.\n" +
                        "I’ve worked with companies across Africa and a few international too 🚀, building up 4+ years of experience in \n" +
                        "creating products for people, by understanding desires and reactions.\n" +
                        "With technology a ubiquitous presence in everyday interactions, I believe that thorough consideration of the impact of \n" +
                        "design on users is a necessary part of solving their daily problems.\n" +
                        "Some small conversation starters for me would be: HIMYM 🍿, Travel 🌊, local cheap eats 🍜"}
                    />
                    <HighlightedText text={"View my resume"}/>
                    <ParagraphText
                        paragraph={"Want to work together? Just want to chat?\n" +
                        "Feel free to drop me a line!"}
                    />
                    <div id={"tinyLogo"}>
                        <RenderLogo/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderAboutPage;
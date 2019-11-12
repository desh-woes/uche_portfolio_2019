import React from 'react';

// Import the required components
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
            <div id={"aboutUche"}>
                <img src={uche_img} alt={"Thaddeus"}/>
                <div>
                    <HighlightedText text={"Meet Uche"}/>
                    <ParagraphText
                        paragraph={"Hello there, I’m Uchechukwu Onyeka, a designer fascinated by the process of creating something out of nothing. Born and " +
                        "raised in Lagos, Nigeria, but currently based in Rwanda.\n" +
                        "I am passionate about retelling brand stories to give them an edge over their competitors, by ensuring that their products" +
                        "capture the unique market cultures. I strive to do this by creating products that matter through Human-Centered design.\n" +
                        "I’ve worked with companies across Africa and a few international ones too 🚀, building up 4+ years of experience in " +
                        "creating products for people by understanding desires and reactions.\n" +
                        "With technology being a ubiquitous presence in everyday interactions, I believe that thorough consideration of the impact of " +
                        "design on users is a necessary part of solving their daily problems.\n" +
                        "Some small conversation starters for me would be: HIMYM 🍿, Travel 🌊, and local cheap eats 🍜"}
                    />
                    <HighlightedText
                        text={"View my resume"}
                        link={"//drive.google.com/file/d/1MsUmnfoeFs7fny1ISVEKdHahhgvblhPu/view?usp=drivesdk"}
                        target={"_blank"}
                    />
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
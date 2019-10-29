import React from 'react';
import ParagraphText from "../components/paragraph_comp";
import HighlightedText from "../components/textHighlight_comp";

function RenderRight(props) {
    return(
        <div className={"rightRender"}>
            <div>
                <h2>{props.label}</h2>
                <ParagraphText paragraph={props.paragraph}/>
                <HighlightedText text={props.text} link ={props.link}/>
            </div>
            <img alt={"company"} src={props.img}/>
        </div>
    )
}

export default RenderRight;
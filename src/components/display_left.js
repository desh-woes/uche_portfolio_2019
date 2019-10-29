import React from 'react';
import ParagraphText from "../components/paragraph_comp";
import HighlightedText from "../components/textHighlight_comp";

function RenderLeft(props) {
    return(
        <div className={"leftRender"}>
            <img alt={"Company"} src={props.img}/>
            <div>
                <h2>{props.label}</h2>
                <ParagraphText paragraph={props.paragraph}/>
                <HighlightedText text={props.text} link ={props.link}/>
            </div>
        </div>
    )
}

export default RenderLeft;
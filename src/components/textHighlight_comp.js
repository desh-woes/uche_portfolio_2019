import React from 'react';
import {Link} from "react-router-dom"

// Component for text with lines
function HighlightedText(props) {
    const linkStyle = {
        textDecoration: "none",
        color: "black"
    };

    if (props.link){
        return (
            <Link to={props.link} style={linkStyle}>
                <div className={"HighlightedText"}>
                    <h3>{props.text}</h3>
                    <hr/>
                </div>
            </Link>
        )
    }
    return(
        <div className={"HighlightedText"}>
            <h3>{props.text}</h3>
            <hr/>
        </div>
    )
}

export default HighlightedText;
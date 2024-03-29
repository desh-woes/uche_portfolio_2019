import React from 'react';
import {Link} from "react-router-dom"

// Component for text with lines
function HighlightedText(props) {
    const linkStyle = {
        textDecoration: "none",
        color: "black"
    };

    if (props.link){
        if (props.target){
            return(
                <Link to={props.link} style={linkStyle} target={"_blank"}>
                    <div className={"HighlightedText"}>
                        <h3>{props.text}</h3>
                        <hr/>
                    </div>
                </Link>
            )
        }
        return (
            <Link to={props.link} style={linkStyle}>
                <div className={"HighlightedText"}>
                    <h3>{props.text}</h3>
                    <hr/>
                </div>
            </Link>
        )
    }

    if (props.forwardLink && props.backLink){
        return (
            <div className={"pageNav"}>
                <Link to={props.backLink} style={linkStyle}>
                    <p className={"mainScreen"}>{"< " + props.backNav}</p>
                    <p className={"mobileScreen"}>{"< "}</p>
                </Link>

                <div className={"HighlightedText"}>
                    <h3>{props.text}</h3>
                    <hr/>
                </div>

                <Link to={props.forwardLink} style={linkStyle}>
                    <p className={"mainScreen"}>{props.forwardNav + " >"}</p>
                    <p className={"mobileScreen"}>{" >"}</p>
                </Link>
            </div>
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
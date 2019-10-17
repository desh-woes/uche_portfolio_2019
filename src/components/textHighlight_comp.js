import React from 'react';

// Component for text with lines
function HighlightedText(props) {
    return(
        <div className={"HighlightedText"}>
            <h3>{props.text}</h3>
            <hr/>
        </div>
    )
}

export default HighlightedText;
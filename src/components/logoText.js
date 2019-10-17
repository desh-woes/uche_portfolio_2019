import React from 'react';

function TextualLogo(props) {
    return(
        <div className={"TextualLogo"}>
            <img alt={"icon"} src={props.imgSrc}/>
            <p>{props.text}</p>
        </div>
    )
}

export default TextualLogo;
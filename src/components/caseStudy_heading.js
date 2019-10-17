import React from 'react';

function CaseHeading(props) {
    return(
        <h3 className={props.color}>{props.text}<span>{props.span}</span></h3>
    )
}

export default CaseHeading;
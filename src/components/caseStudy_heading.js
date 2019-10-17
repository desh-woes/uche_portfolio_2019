import React from 'react';

function CaseHeading(props) {
    return(
        <h3 className={props.color}>{props.text}</h3>
    )
}

export default CaseHeading;
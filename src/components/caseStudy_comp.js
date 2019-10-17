import React from 'react';
import arrow from "../images/Arrow (Stroke).png"

function CaseStudy() {
    return(
        <div className={"case"}>
            <img alt={"arrow"} src={arrow}/>
            {/*<i className="fas fa-arrow-down"/>*/}
            <p>View my case<br/>Studies below</p>
        </div>
    )
}

export default CaseStudy;
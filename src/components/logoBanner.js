import React from 'react';

// Component to render the text on the banner
function RenderCompanyBanner(props) {
    return(
        <div id={"pagaBanner"}>
            <img alt={"company"} src={props.logo}/>
            <div className={"logo_desc"}>
                <h1>{props.companyName}</h1>
                <hr align={"left"} width={"80%"}/>
                <div className={"more_details"}>
                    <p>{props.position}</p>
                    <p>{props.time}</p>
                    <p id={"lastText"}>{props.location}</p>
                </div>
            </div>
        </div>
    )
}

export default RenderCompanyBanner;
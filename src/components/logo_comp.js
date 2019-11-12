import React from 'react';

function RenderLogo() {
    return(
        <div className={"socialMedia"}>
            <a href={"mailto: iam.ichieuche@gmail.com"} target={"_blank"}><i className={"fas fa-envelope"}/></a>
            <a href={"https://www.linkedin.com/in/ichieuche/"} target={"_blank"}><i className={"fab fa-linkedin-in"}/></a>
            <a href={"https://www.instagram.com/ichieuche"} target={"_blank"}><i className={"fab fa-instagram"}/></a>
        </div>
    )
}

export default RenderLogo;
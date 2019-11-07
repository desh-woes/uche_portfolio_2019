import React from 'react';
import logo from "../images/logo192.png";
import {Link} from "react-router-dom";

function PageLinks(props) {
    const linkStyle = {
        color: "black",
        padding: "14px 16px",
        textDecoration: "none",
        fontSize: "17px",
        display: "block",
        textAlign: "center",
        fontWeight: "bold"
    };
    return(
        props.value.map((text) =>
            <Link to={"/"+text.toString()} style={linkStyle}>
                {text}
            </Link>
        )
    )
}

function HamBurger(){
    return(
        <div id={"myLinks"}>
            <PageLinks value = {["work", "about"]}/>
        </div>
    )
}

function Header() {
    const headerStyle={
        fontWeight: "bold",
        fontSize: "20px",
        textDecoration: "none",
        color: "black"
    };
    return(
        <header className={"mobile-container"}>
            <div>
                <div className={"topNav"}>
                    <Link to={"/"} style={headerStyle}>
                        <h1>Ichie Uche</h1>
                    </Link>
                    <Link to={void(0)} onClick={myFunction()}>
                        <i className={"fa fa-bars"}/>
                    </Link>
                </div>
                <HamBurger/>
            </div>
        </header>
    );
}

function myFunction() {
    let x = document.getElementById("myLinks");
    // if (x.style.display === "block") {
    //     x.style.display = "none";
    // } else {
    //     x.style.display = "block";
    // }
}

export default Header;
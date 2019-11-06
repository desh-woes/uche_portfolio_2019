import React from 'react';
import logo from "../images/logo192.png"
import {Link} from "react-router-dom"

// Component rendering the links at the top of the page
function PageLinks(props) {
    const linkStyle = {
        position: "relative"
    };
    return(
        props.value.map((text) =>
            <Link to={"/"+text.toString()} style={linkStyle}>
                <li key={text.toString()}>
                    {text}
                </li>
            </Link>
        )
    );
}

// Component rendering the navigation bar containing the links
function NavBar() {
    return(
        <nav>
            <ul>
                <PageLinks value = {["work", "about"]}/>
            </ul>
        </nav>
    );
}

// Header component which renders the header element
function Header() {
    return(
        <header>
            <div id="nav-bar">
                <Link to={"/"}>
                    <img alt="Portfolio Logo" src={logo}/>
                </Link>
                <NavBar/>
            </div>
        </header>
    );
}

export default Header;
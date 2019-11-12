import React from 'react';
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
    const headerStyle={
        fontWeight: "bold",
        fontSize: "20px",
        textDecoration: "none",
        color: "black"
    };
    return(
        <header className={"header"}>
            <div id="nav-bar">
                <Link to={"/"} style={headerStyle}>
                    <h1>ICHIE UCHE</h1>
                </Link>
                <NavBar/>
            </div>
        </header>
    );
}

export default Header;
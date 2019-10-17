import React from 'react';
import logo from "../images/logo192.png"

// Component rendering the links at the top of the page
function PageLinks(props) {
    return(
        props.value.map((text, index) =>
            <li key={text.toString()}>
                { index === props.page? <a href={"#"+text.toString()} className={"orange"}>{text}</a>: <a href={"#"+text.toString()} >{text}</a>}
            </li>)
    );
}

// Component rendering the navigation bar containing the links
function NavBar(props) {
    return(
        <nav>
            <ul>
                <PageLinks value = {["work", "about"]} page = {props.page}/>
            </ul>
        </nav>
    );
}

// Header component which renders the header element
function Header(props) {
    return(
        <header>
            <div id="nav-bar">
                <img alt="Portfolio Logo" src={logo}/>
                <NavBar page = {props.page} />
            </div>
        </header>
    );
}

export default Header;
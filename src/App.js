import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/hamburger_header";

// Import required pages
import RenderHome from "./pages/home_page";
import RenderPagaPage from "./pages/paga_page";
import RenderAgriPredict from "./pages/agriPredict_page";
import RenderZap from "./pages/zap_page";
import RenderAboutPage from "./pages/about_page";
import RenderLetterMark from "./pages/letter_mark";

// Import Style sheet
import "./style/index.css";

function App() {
    return(
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={RenderHome}/>
                    <Route path={"/work"} component={RenderHome}/>
                    <Route path={"/about"} component={RenderAboutPage}/>
                    <Route path={"/paga"} component={RenderPagaPage}/>
                    <Route path={"/zap"} component={RenderZap}/>
                    <Route path={"/letterMark"} component={RenderLetterMark}/>
                    <Route path={"/agriPredict"} component={RenderAgriPredict}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
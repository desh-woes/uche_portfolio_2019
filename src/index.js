import React from 'react';
import ReactDOM from 'react-dom';

// Import required pages
import RenderHome from "./pages/home_page";
import RenderPagaPage from "./pages/paga_page";
import RenderAgriPredict from "./pages/agriPredict_page";
import RenderZap from "./pages/zap_page";
import RenderLetterMark from "./pages/letter_mark";

ReactDOM.render(
    <RenderLetterMark/>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

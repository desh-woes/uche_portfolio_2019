import React from 'react';

// Import the required components
import RenderCompanyBanner from "../components/logoBanner";
import CaseHeading from "../components/caseStudy_heading";
import ParagraphText from "../components/paragraph_comp";
import LetterGrid from "../components/letters_comp";
import HighlightedText from "../components/textHighlight_comp";
import RenderLogo from "../components/logo_comp";

// Import the required images
import LM_banner from "../images/Letter Mark/1letter Mark Header.png";
import letter_A from "../images/Letter Mark/A.png";
import letter_B from "../images/Letter Mark/B.png";
import letter_C from "../images/Letter Mark/C.png";
import letter_D from "../images/Letter Mark/D.png";
import letter_E from "../images/Letter Mark/E.png";
import letter_F from "../images/Letter Mark/F.png";
import letter_G from "../images/Letter Mark/G.png";
import letter_H from "../images/Letter Mark/H.png";
import letter_I from "../images/Letter Mark/I.png";
import letter_J from "../images/Letter Mark/J.png";
import letter_K from "../images/Letter Mark/K.png";
import letter_L from "../images/Letter Mark/L.png";
import letter_M from "../images/Letter Mark/M.png";
import letter_N from "../images/Letter Mark/N.png";
import letter_O from "../images/Letter Mark/o.png";
import letter_P from "../images/Letter Mark/P.png";
import letter_Q from "../images/Letter Mark/Q.png";
import letter_R from "../images/Letter Mark/R.png";
import letter_S from "../images/Letter Mark/S.png";
import letter_T from "../images/Letter Mark/T.png";
import letter_U from "../images/Letter Mark/U.png";
import letter_V from "../images/Letter Mark/V.png";
import letter_W from "../images/Letter Mark/W.png";
import letter_X from "../images/Letter Mark/X.png";
import letter_Y from "../images/Letter Mark/Y.png";
import letter_Z from "../images/Letter Mark/Z.png"

// Import Style sheet
import "../style/index.css";
import CaseStudy from "../components/caseStudy_comp";


const FIRST_BATCH = [letter_A, letter_B, letter_C, letter_D, letter_E, letter_F, letter_G, letter_H, letter_I, letter_J, letter_K, letter_L];
const SECOND_BATCH = [letter_M, letter_N, letter_O, letter_P, letter_Q, letter_R, letter_S, letter_T, letter_U, letter_V, letter_W, letter_X, letter_Y, letter_Z];



function RenderLetterMark() {
    return(
        <div>
            <RenderCompanyBanner
                companyName={"Letter Mark Exploration"}
                logo={LM_banner}
                position={"Brand Designer"}
                time={"2018 - Present"}
                location={"Visual Identity"}
            />
            <div className={"caseDiv"}>
                <CaseHeading text={"Overview"} color={"yellow"}/>
                <ParagraphText
                    paragraph = {"In 2018, I was inspired by some amazing creatives in the brand identity field and " +
                    "decided to take up a challenge in explorating brand marks centered around each alphabet; working " +
                    "on a new letter per day, just for fun and practice. Here are some variations I explored. Can you " +
                    "identify the letters in them?"}
                />
                <CaseHeading text={"A-L"} color={"yellow"}/>
                <LetterGrid value = {FIRST_BATCH}/>
            </div>
            <p id={"letterText"}>
                Amazing stuff right? Oops too amazing you’re out of breath? Take a breather... Alright
            </p>
            <CaseStudy/>
            <div className={"caseDiv"}>
                <LetterGrid value = {SECOND_BATCH}/>
            </div>
            <p id={"letterText"}>
                You can view more amazing stuff on my Instagram feed
            </p>
            <div className={"bioBox bottomBio"}>
                <HighlightedText
                    text={"Say Hello"}
                    backLink={"/paga"}
                    backNav={"Previous Project"}
                    forwardLink={"/"}
                    forwardNav={"Home Page"}
                />
                <RenderLogo/>
            </div>
        </div>
    )
}

export default RenderLetterMark;

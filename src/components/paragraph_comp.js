import React from 'react';

// Component to render paragraph text
function ParagraphText(props) {
    let stringArr = splitText(props.paragraph);
    return(
        stringArr.map((textInput) =>
            <p className={"paragraphText"}>{textInput}</p>
        )
    );
}

function splitText(inputSting) {
    let stringArr = [];
    let accumulator = "";
    for (let i = 0; i < inputSting.length; i++) {
        if (inputSting[i] === "\n"){
            stringArr.push(accumulator);
            accumulator = "";
            continue;
        }
        accumulator += inputSting[i]
    }
    stringArr.push(accumulator);
    return stringArr;
}

export default ParagraphText;
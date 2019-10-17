import React from 'react';

function LetterGrid(props) {
    return(
        <div>
            {
                props.value.map((img_src, index)=>
                    <img key={index.toString()} src={img_src} alt={"letter_mark"}/>
                )
            }
        </div>
    )
}

export default LetterGrid;
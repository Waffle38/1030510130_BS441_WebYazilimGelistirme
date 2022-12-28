import React from 'react';

export function Variation({selection})
{
    const questionPath = "images/Question.png";
    const rockPath = "images/Rock.png";
    const paperPath = "images/Paper.png";
    const scissorPath = "images/Scissors.png";

    switch (selection)
    {
        case 0:
            return <img src={questionPath} alt="dynamic"/>;
        case 1:
            return <img src={rockPath} alt="dynamic"/>;
        case 2:
            return <img src={paperPath} alt="dynamic"/>;
        case 3:
            return <img src={scissorPath} alt="dynamic"/>;
    }
}
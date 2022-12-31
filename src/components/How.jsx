import React from "react";

export function How()
{
    const rockPath = "images/Rock.png";
    const paperPath = "images/Paper.png";
    const scissorPath = "images/Scissors.png";

    return (
        <div className="How">
            <h1>How to Play</h1>
            <h2>Versus mode</h2>
            <p>
                The versus mode is the normal rock paper scissors game where you play against an AI. The rules are very simple. The player can choose one of the three shapes:
                rock, paper and scissor. and your opponent in this case the AI will also choose a shape. your shape can be the same as your opponents shape in which case
                a draw will occur. but other than that rock will beat scissors, paper will beat rock and scissors will beat paper.
            </p>
            <h2>Factory Wars</h2>
            <p>
                The Factory Wars mode is a game mode based on the rules of rock paper scissors. In this game mode the player faces off against an AI. The player and the AI will
                take turns against each other. And these turn makeup rounds. Every round there will be 5 turns. In the first 3 turns the player and the AI can upgrade their factories.
                every 4th turn the player will have to block the AI's attack. And every 5th turn the player can attack the AI. Every turn the player and the AI will gain 5 gold and
                1 additional gold for every 5 gold they posses. so if the player has 15 gold at the end of their turn, at start of their next turn they will 23(15 + 5 + 3) gold.
                To win the player will have to upgrade their factories carefully. As every factory has a production score and an amount of shapes. the production score is the number
                of shapes that will be added to your shape amounts at the start of your next turn. And your shape amounts will determine how you block and attack.
            </p>
            <h3>How to Upgrade Factories And factory attributes</h3>
            <img src={rockPath} alt="rock"/>
            <img src={paperPath} alt="paper"/>
            <img src={scissorPath} alt="scissor"/>
            <p>
                While in one of the first 3 turns of a round you can upgrade your factories simply by clicking on their icons. if you dont have enough gold to cover their costs
                clicking on the icons will do nothing. during the block and the attack turns you can click on the icons of your factories to select which factory you will attack
                or block with. for example if the enemy factory attacks with 10 rocks and the player blocks with 15 scissors the player will take 5 damage. This is because a winning shape
                will do 2 times the damage against the enemy factory but not against the enemy itself. a losing shape will do half the damage for example if you attack with 20 scissors
                and the AI block with 10 rocks you will do no damage. Because with the modifier the 10 rocks will completely negate the 20 scissors. if the player and the AI choose shapes
                that draw each other then there are no modifiers.
            </p>
        </div>
    );
}
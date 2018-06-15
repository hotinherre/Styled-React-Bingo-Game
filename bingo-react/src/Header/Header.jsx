import React from 'react';
import './Header.css';
import Ball from './Ball.jsx';

function LastBallContainer(props){
    const ball = props.ball;
    return (
        <div className="lastBall_container">
            <div>
                <h1>Last Ball:</h1>
            </div>
            {ball && <Ball large>{ball}</Ball>}
        </div>
    );
}

function PreBallContainer(props){
    const balls = props.balls;
    return (
        <div className="preBall_container">
            <div className="title">PREVIOUS BALLS</div>
            <div className="preBall_subcontainer">
                {balls.reverse().map(ball => <Ball key={ball}> {ball} </Ball>)}
            </div>
        </div>
    );    

}

export default function Header(props){
    const balls = props.balls;
    return (
        <div className="header">
            <LastBallContainer ball={ balls[balls.length - 1] }/>
            <div></div>
            <PreBallContainer balls={ balls.slice(0,-1) }/>
        </div>
    );
}
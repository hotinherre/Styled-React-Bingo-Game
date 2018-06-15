import React from 'react';
import './Ball.css';

export default function Ball(props){
    const className = props.large ? "bigBall" : "smallBall";
    return(
        <div className={className}>
            <p>{props.children}</p>
        </div>
    );
}

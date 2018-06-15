import React from 'react';
import './Cell.css';

export default function Cell(props){
    const className = props.selected ? "cell selected" : "cell";
    return(
        <div className={className}>
            <p>{props.children}</p>
        </div>
    );
}

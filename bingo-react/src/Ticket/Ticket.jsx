import React from 'react';
import './Ticket.css';
import Cell from './Cell.jsx'

function HoverButton(props){
    return(
        <div 
            className="hoverButton" 
            onClick={() => {props.onClick()}}>
            Submit Ticket
        </div>
    )
}

function BingoWaterMark(props){
    return(
        <div className="isBingo" > Bingo!! </div>
    );
}

export default function Ticket(props){
    const ticket = props.ticket;
    const verifyTicket = props.verifyTicket;
    const pickedBall = new Set(props.pickedBall);
    
    return(
        <div className="ticket" style={{"gridTemplateColumns":`repeat(${ticket.sizeX}, 1fr)`}}>
            {
                ticket.nums.map( 
                    num => <Cell key={num} selected={pickedBall.has(num)}>{num}</Cell>
                )
            }
            {!ticket.isBingo && <HoverButton onClick={verifyTicket}/>}
            {ticket.isBingo && <BingoWaterMark/>}
        </div>
    );
}

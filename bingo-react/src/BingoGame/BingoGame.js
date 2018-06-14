import React from 'react';
import swal from 'sweetalert2';
import http from '../http';
import {URL} from '../settings'
import _Ticket from './_Ticket'
import youWin from '../static/youWin.gif';
import youLie from '../static/youLie.gif';
import './BingoGame.css'

class BingoGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets : new Array(this.props.ticketNum)
                      .fill(undefined)
                      .map( _ => new _Ticket(this.props.ticketSize.x * this.props.ticketSize.y, this.props.ballNum)),
            pickedBall : []
        }
    }

    async componentDidMount() {
        //init game
        try{
            await http.post(URL.newGame, {numberOfBalls:this.props.ballNum});
        }catch(e){
            swal('Opps! Cannot init game!', e, 'error');
        }
        //set interval to draw ball, stop drawing new ball when ball = -1.
        this.drawBallInterval = setInterval(
            async () => {
                try{
                    const data = await http.get(URL.nextball);
                    const ball = data.ball;
                    if (ball === -1) {
                        swal("No More Balls To Draw!!", "Please submit your ticket.", 'warning');
                        clearInterval(this.drawBallInterval);
                    }        
                    else{
                        const _pickedBall = this.state.pickedBall.slice();
                        _pickedBall.push(ball);
                        this.setState({pickedBall:_pickedBall});
                    }
                }catch(e){
                    swal('Opps! Cannot get ball!!', e, 'error');
                }
            }, 
            this.props.drawBallPeriod
        );
    }

    // i - ticket index of this.state.tickets
    async verifyTicket(i){
        function _bingGo(){
            swal({
                imageUrl: youWin,
                imageWidth: 300,
                imageHeight: 200,
            });
        }
        function _notBingGo(){
            swal({
                title: 'Not A Bingo Ticket!!',
                imageUrl: youLie,
                imageWidth: 300,
                imageHeight: 200,
            });
        }
        
        const _ticket = JSON.parse(JSON.stringify(this.state.tickets[i]));
        try{
            const data = await http.post(URL.verifyTicket, {ticket: _ticket.nums});
            if(data.isBingo){
                _bingGo();
                _ticket.isBingo = true;
                const _tickets = JSON.parse(JSON.stringify(this.state.tickets));
                _tickets[i] = _ticket;
                if(this.drawBallInterval){
                    clearInterval(this.drawBallInterval);
                }
                this.setState({tickets:_tickets});
            }else{
                _notBingGo();
            }
            
        }catch(e){
            swal('Opps! Cannot verify ticket!!', e, 'error');
        }
    }

    render(){
        return <p class="pp"> Hello World! </p>
    }
}

export default BingoGame;










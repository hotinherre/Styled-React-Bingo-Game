import React from 'react';
import ReactDOM from 'react-dom';

import {Game} from './settings';
import BingoGame from './BingoGame/BingoGame'

ReactDOM.render(
    <BingoGame 
        ballNum={Game.ballNum}
        ticketNum={Game.ticketNum}
        ticketSize={Game.ticketSize}
        drawBallPeriod={Game.drawBallPeriod}
        />, 
    document.getElementById('root')
    );


const nodeHost = "localhost";
const nodePort = 12321;
const nodeAddr = `http://${nodeHost}:${nodePort}`;


const URL = {
    newGame:`${nodeAddr}/newgame`,
    nextball:`${nodeAddr}/nextball`,
    verifyTicket:`${nodeAddr}/verify-ticket`,
};

const Game = {
    ballNum : 100,
    ticketNum : 4,
    ticketSize : {
        x : 4,
        y : 4
    },
    drawBallPeriod: 500,
};

const SettingHtml = `
    <style>
        div{
            padding:5px;
            font-size:20px;
        }
        input {
            font-size:20px;
            width:35px;
        }

        .maxNumber{
            width:50px;   
        }

        .interval{
            width:65px;
        }
    </style>

    <div>
        <label>MaxNumber:</label>
        <input class="maxNumber" type="number" id="ballNum" value="${Game.ballNum}">
    </div>
    <div>
        <label>Ticket Size:</label>
        <input type="number" id="x" value="${Game.ticketSize.x}"> * 
        <input type="number" id="y" value="${Game.ticketSize.y}"">
    </div>
    <div>
        <label>Ticket Number:</label>
        <input type="number" id="ticketNum" value="${Game.ticketNum}"">
    </div>
    <div>
        <label>Draw Ball Interval(MS):</label>
        <input class="interval" type="number" id="drawBallPeriod" value="${Game.drawBallPeriod}">
    </div>
`

export {URL, Game, SettingHtml};
const nodeHost = "localhost";
const nodePort = 12321;
const nodeAddr = `http://${nodeHost}:${nodePort}`;


const URL = {
    newGame:`${nodeAddr}/newgame`,
    nextball:`${nodeAddr}/nextball`,
    verifyTicket:`${nodeAddr}/verify-ticket`,
};

const Game = {
    ballNum : 4,
    ticketNum : 2,
    ticketSize : {
        x : 1,
        y : 1
    },
    drawBallPeriod: 1000,
};

export {URL, Game};
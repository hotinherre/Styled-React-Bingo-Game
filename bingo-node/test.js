const Game = require('./bingoGame')

function test(){

    console.log("\n------- test new game ------ ")
    _newGame(10);        
    _newGame(10);
    _newGame(5);

    console.log("\n------- test drawBall ------ ")
    _newGame(0);
    _drawball();

    _newGame(4);
    _drawball();
    _drawball();
    _drawball();
    
    console.log("\n------- test verifyTicket ------ ")
    _verifyTicket([1]);
    _verifyTicket([1,2,3]);

}

function _drawball(){
    console.log(">>draw a ball");
    try{
        let ball = Game.drawBall();
        console.log("picked ball:", ball);
    }catch(err){
        console.error(err.message);
    }
    console.log(Game.status)
}

function _newGame(n){
    console.log(">>start a new game");
    Game.newGame(n);
    console.log(Game.status);
}

function _verifyTicket(ticket){
    console.log(">>verify ticket");
    console.log(Game.status);
    console.log("ticket:", ticket);
    const msg = Game.verifyTicket(ticket) ? "Bingo Ticket!" : "Bad Ticket!";
    console.log("result:", msg);
}


test()
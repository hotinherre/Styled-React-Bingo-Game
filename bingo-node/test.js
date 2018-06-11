const game = require('./bingoGame')

function test(){
    console.log("\n------- test new game ------ ")
    _newGame(10);        
    _newGame(10);
    _newGame(5);

    console.log("\n------- test drawBall ------ ")
    _newGame(0);
    _drawBall();

    _newGame(4);
    _drawBall();
    _drawBall();
    _drawBall();
    
    console.log("\n------- test verifyTicket ------ ")
    _verifyTicket([1]);
    _verifyTicket([1,2,3]);

}

function _drawBall(){
    console.log(">>draw a ball");
    try{
        let ball = game.drawBall();
        console.log("picked ball:", ball);
    }catch(err){
        console.error(err.message);
    }
    console.log(game.status)
}

function _newGame(n){
    console.log(">>start a new game");
    game.newGame(n);
    console.log(game.status);
}

function _verifyTicket(ticket){
    console.log(">>verify ticket");
    console.log(game.status);
    console.log("ticket:", ticket);
    const msg = game.verifyTicket(ticket) ? "Bingo Ticket!" : "Bad Ticket!";
    console.log("result:", msg);
}


test()

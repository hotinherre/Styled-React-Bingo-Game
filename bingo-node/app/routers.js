const game = require('./bingoGame');

module.exports = app => {
    /*  Usage Sample:

        POST /newgame
        req: { "numberOfBalls" : 10 }
        res: 200 "ok"
    */
    app.post('/newgame', function(req, res) {
        const numberOfBalls = req.body.numberOfBalls;
        if (!numberOfBalls || !Number.isInteger(numberOfBalls)) {
            res.status(500).send({ error: "Field '[Integer] numberOfBalls' is missing" });
        } else {
            game.newGame(numberOfBalls);
            _debug_print("Start a new game.")
            res.sendStatus(200);
        }
    });

    /*  Usage Sample:
        
        GET /nextball
        res: 200 {"ball": ball}

        ***Warning***: 
          if no more balls to draw, ball = -1.
    */
    app.get('/nextball', function(req, res) {
        const ball = game.drawBall();
        _debug_print(`Draw a new ball: ${ball}`);
        res.status(200).send({ ball: ball });
    });

    /*  Usage Sample:

        POST /newgame
        req: { "ticket" : [1,3,6] }
        res: 200 { "isBingo": true }
    */
    app.post('/verify-ticket', function(req, res) {
        const ticket = req.body.ticket;
        if (!ticket || !Array.isArray(ticket)) {
            res.status(500).send({ error: "Field '[Array] ticket' is missing" });
        } else {
            isBingo = game.verifyTicket(ticket);
            _debug_print( 
                "Verify ticket\n" + 
                JSON.stringify(ticket) + 
                (isBingo ? " is bingo ticket." : " is not bingo ticket.")
            );
            res.status(200).send({isBingo: isBingo});
        }
    });
}


function _debug_print(msg) {
    console.log(`\n>>>> ${msg}`,`\n Status:`, game.status);
}
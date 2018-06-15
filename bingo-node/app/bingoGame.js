const game = {
    pendingBalls: [],
    usedBalls: new Set(),
    newGame: function(numberOfBalls) {
        this.usedBalls = new Set();
        this.pendingBalls = _initArray(numberOfBalls);
        _shuffle(this.pendingBalls);
    },
    drawBall: function() {
        if (this.pendingBalls.length == 0) {
            return -1;
        }
        const ball = this.pendingBalls.pop();
        this.usedBalls.add(ball);
        return ball;
    },
    verifyTicket: function(ticket) {
        for (let num of ticket) {
            if (!this.usedBalls.has(num)) {
                return false;
            }
        }
        return true;
    },
    get status() {
        return {
            pendingBalls: this.pendingBalls,
            usedBalls: this.usedBalls
        };
    }
}

module.exports = game;

//generate an array with elements: [1,2,3,4,....,n]
function _initArray(n) {
    return new Array(n).fill(0).map((v, i) => i + 1);
}

function _shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        //get random number from 0 ~ i - 1
        let j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
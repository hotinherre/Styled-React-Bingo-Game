const express = require("express"),
    game = require('./bingoGame');


module.exports = (port, next) => {
    const app = express();
    _vendorMiddlewares_init(app);
    _routing_init(app);
    app.listen(port);
    next();
}

const _vendorMiddlewares_init = app => {
    const cors = require("cors"),
        bodyParser = require("body-parser");

    app.use(
        cors({
            origin: true,
            credentials: true
        })
    );
    app.use(
        bodyParser.json({
            limit: "50mb"
        })
    );
    app.use(
        bodyParser.urlencoded({
            limit: "50mb",
            extended: true
        })
    );
}

const _routing_init = app => {
    app.get('/', function (req, res) {
        res.send('Hello World!');
    })
}
const express = require("express"),
    router_init = require('./routers');

module.exports = (port, next) => {
    const app = express();
    _vendorMiddlewares_init(app);
    router_init(app);
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
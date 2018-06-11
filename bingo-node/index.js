const bootstrap = require("./bootstrap");

var args = process.argv.slice(2);
const port = args[0] || 12321;

bootstrap(port, () => {
    console.log(`start server on ${port}`);
});
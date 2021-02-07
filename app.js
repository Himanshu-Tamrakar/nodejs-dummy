const connection = require('./connection/connection');
var express = require('express');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var cookieParser = require('cookie-parser');
var app = express();
var http = require('http').createServer(app);

app.all('/*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH');
	res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Content-disposition');
	//res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
	res.header('Access-Control-Expose-Headers', 'Content-Length, Content-disposition');
	res.header('Access-Control-Allow-Credentials', 'true');

	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		return next();
	}
});

app.use(bodyParser.json({ limit: "50mb" }))

app.use(cookieParser());

app.use(require("./routes/index.route"));

http.listen("4000", (err) => {
    err ? console.log(chalk.red("server failed or net issue")) : console.log(chalk.bgBlue(chalk.whiteBright("server started")));
})


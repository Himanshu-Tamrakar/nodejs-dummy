var mongoose = require('mongoose');
var chalk = require('chalk');
var environment = require('../environment/environment');

mongoose.connect(environment.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(chalk.red("connection failed"));
    } else {
        console.log(chalk.bgBlack(chalk.green("connection success")));
    }
})
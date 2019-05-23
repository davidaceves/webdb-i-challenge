const express = require('express');

const server = express();

// your code here

server.use(express.json());

const AccountsRouter = require('./data/accounts-router');

server.use('/api/accounts', AccountsRouter);

module.exports = server;
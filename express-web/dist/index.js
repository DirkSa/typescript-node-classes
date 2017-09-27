"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser);
app.use(express.static('public'));
app.get('/', (request, response) => {
    response.send('Hello world');
});
app.listen(3000, () => 'listening...');

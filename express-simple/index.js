"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => res.send('Hello Martin here'));
app.get('/menu', (req, res) => res.send('Menu here!'));
app.post('/menu', (req, res) => res.send('POST here!'));
app.listen(process.env.PORT || 3000);

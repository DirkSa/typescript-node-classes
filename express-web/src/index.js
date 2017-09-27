"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
app.set('views', './views');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(express.static('public'));
function myMiddleware(req, res, next) {
    console.log('incoming!');
    next();
    console.log('after!');
}
;
app.use(myMiddleware);
app.get('/', (req, res) => {
    res.render('index', {
        name: req.query.name,
        people: [
            'Lars',
            'Ivo',
            'Martin'
        ]
    });
});
app.get('/api/*', (request, response) => {
    console.log('its here');
    response.send(request.query);
});
app.listen(3000, () => 'listening...');

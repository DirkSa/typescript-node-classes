import * as express from 'express';
// import express = require('express');
import bodyParser = require('body-parser');
import exphbs = require('express-handlebars');

const app: express.Express = express();
app.set('views', './views');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(bodyParser.json());

app.use(express.static('public'))


function myMiddleware(req: express.Request, res: express.Response, next: Function) : void {
  console.log('incoming!');
  next();
  console.log('after!');
};

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
  console.log('its here')
  response.send(request.query);
});

app.listen(3000, () => 'listening...');
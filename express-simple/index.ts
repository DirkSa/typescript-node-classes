import express = require('express');
import exphbs = require('express-handlebars');

import { Request, Response, RequestHandler } from 'express';

import { AuditLog } from './interfaces/audit-log';
import { loggingMiddleware, logs } from './logging-middleware';

const app = express();

// use logging middleware
app.use(loggingMiddleware);

// set handlebars as our template engine
app.set('views', './views');
app.engine('handlebars', exphbs({ defaultLayout: 'common-layout' }));
app.set('view engine', 'handlebars');

// for serving images and static files...
app.use('/not-so-secret', express.static('assets'));

// index page
app.get('/', (req: Request, res: Response) => {
  res.render('index', { 
    name: 'Martin',
    auditLog: logs,
    showSecret: req.query.showSecret,
    arrayOfNames: [
      'Lars',
      'Ivo',
      'Jacobo'
    ]
  });
});

// about page
app.get('/about', (req: Request, res) => {
  res.render('about-me', { name: 'fshflei' });
});

// start server. process.env.PORT is for configuration using environment variables (good for sys admins)
app.listen(process.env.PORT || 3000, () => {
  console.log('ok i am ready and listening');
});

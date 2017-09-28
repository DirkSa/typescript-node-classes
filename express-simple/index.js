"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const exphbs = require("express-handlebars");
const logging_middleware_1 = require("./logging-middleware");
const app = express();
app.use(logging_middleware_1.loggingMiddleware);
// set handlebars as our template engine
app.set('views', './views');
app.engine('handlebars', exphbs({ defaultLayout: 'common-layout' }));
app.set('view engine', 'handlebars');
// for serving images and static files...
app.use('/not-so-secret', express.static('assets'));
// index page
app.get('/', (req, res) => {
    res.render('index', {
        name: 'Martin',
        auditLog: logging_middleware_1.logs,
        showSecret: req.query.showSecret,
        arrayOfNames: [
            'Lars',
            'Ivo',
            'Jacobo'
        ]
    });
});
// about page
app.get('/about', (req, res) => {
    res.render('about-me', { name: 'fshflei' });
});
// start server. process.env.PORT is for configuration using environment variables (good for sys admins)
app.listen(process.env.PORT || 3000, () => {
    console.log('ok i am ready and listening');
});

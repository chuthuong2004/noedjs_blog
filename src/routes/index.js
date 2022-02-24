const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    // app.get('/news', (req, res) => {
    //     console.log(req.query.q);
    //     res.render('news');
    // });
    app.use('/', siteRouter);
    app.use('/courses', coursesRouter);
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     console.log(req.body.gender);
    //     res.send('');
    // });
}

module.exports = route;
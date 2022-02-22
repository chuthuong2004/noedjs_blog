const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    res.send('<h1>Thương Chu 1080</h1>');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
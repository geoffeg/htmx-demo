const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.set('views', './partials');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, () => {
    console.log(`Listening on port 8080`);
})

const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let id = 2

app.get('/', (req, res) => {
    res.redirect(301, '/one.html')
})

app.get('/albums', (req, res) => {
    const albums = [
        { artist: 'Cocteau Twins', album: 'Heaven or Las Vegas', year: 1990, id: 2 }, 
        { artist: 'Bauhaus', album: 'Crackle', year: 1998, id: 1 }
    ]
    res.render('albums', {albums: albums})
})

app.post('/albums', (req, res) => {
    //res.render('albumsOob', { ...req.body, id: ++id, totalAlbums: id })
    res.render('albumRow', { ...req.body, id: ++id })
})

app.delete('/albums/:id', (req, res) => {
    id--
    res.send()
    //res.render('deleteAlbum', { count: id })
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})


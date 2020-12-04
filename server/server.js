
const express = require('express');
const service = require('./services/index')
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/items', (req, res) => {
    service.getItemsList(req.query.q)
        .then(items => res.json(items))
        .catch(error => res.status(500).send(error));
});

app.get('/api/items/category', (req, res) => {
    service.getItemsByCategory(req.query.q)
        .then(items => res.json(items))
        .catch(error => res.status(500).send(error));
})

app.listen(8080, () => {
    console.log('Server started in port 8080');
});
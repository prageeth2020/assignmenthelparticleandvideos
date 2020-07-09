const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/article/:id', (req, res) => {
    var id = req.params.id;
    res.send("Hello from the API" + id);

});
app.get('/video/:id', (req, res) => {
    var id = req.params.id;
    res.send("Hello from the API" + id);
});
exports.api = functions.https.onRequest(app)
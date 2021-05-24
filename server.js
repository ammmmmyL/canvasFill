/* server.js - Express server*/
'use strict';
console.log('Express server')

const express = require('express')
const app = express();
const path = require('path');

// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000

// Setting up a static directory for the files in /pub
// using Express middleware.
app.use(express.static(path.join(__dirname, '/pub')))

// Landing page to index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/index.html'));
})

// Examples Page
app.get('/examples', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/examples.html'));
})

// Documentation Page
app.get('/documentation', (req, res) => {
	res.sendFile(path.join(__dirname, '/pub/documentation.html'));
})

app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 
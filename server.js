'use strict';
const express = require('express');
const app = new express();
var x = 0;

app.listen(8000, () =>{
	console.log("Server in ascolto sulla porta 8000");
});

app.get('/', (req,res) => {
	res.send('Homepage');
});

app.get('/bella', (req,res) => {
	res.send('Site created by Zanni');
});

app.get('*', (req,res) => {
	res.status(404).send('error (404)');
});


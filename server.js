'use strict';
const express = require('express');
const app = new express();


app.listen(8000, () =>{
	console.log("Server in ascolto sulla porta 8000");
});

app.get('/', (req,res) => {
	res.send('CIAONE');
});

app.get('/bella', (req,res) => {
	res.send('Leodebbia was here');
});

app.get('*', (req,res) => {
	res.status(404).send('error 404');
});


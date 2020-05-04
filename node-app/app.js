const express = require('express');

const app = express();
const PORT = 4000;


function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

app.get('/', (req, res) => {
	res.send(randomInt(-1000, 1000).toString());
});


const server = app.listen(PORT, () => {
	console.log('server started, port: ' + PORT);
});


process.once('SIGINT', function (code) {
	console.log('SIGINT recived');
	server.close(() => { 
		process.exit(0); 
	});
});


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const VOTERID = require('./models/voter-id');

const PORT = process.env.PORT || 5000

/****** Database connection *******/
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb+srv://ijhar:1234@cluster0-hi3ct.mongodb.net/test?retryWrites=true&w=majority`);
mongoose.connection.on('error', (err) => {
	// console.error(err);
	console.log('%s MongoDB connection error. Please make sure MongoDB is running.', err);
	process.exit();
});



// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log('Sent list of items');
});

// An api endpoint that returns a voter list 
app.get('/api/voters', async (req, res) => {

	let data = await VOTERID.find({})
	return res.send(data);
});

app.post('/api/registervoter', async (req, res) => {

	const voter = new VOTERID({
		name: req.body.name
	});
	try {
		const result = await voter.save();
		return res.status(201).send(result);
	} catch (err) {
		return res.status(500).send(err);
	}

});



// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT);

console.log('App is listening on port ' + PORT);

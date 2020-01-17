const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const VOTERID = require('./models/voter-id');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/****** Database connection *******/
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb+srv://ijhar:1234@cluster0-hi3ct.mongodb.net/test?retryWrites=true&w=majority`);
mongoose.connection.on('error', (err) => {
    // console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});

/*** Express configuration. */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use((req, res, next) => {
    next()
})


app.get('/', (req, res) => {

    return res.send(JSON.stringify({ "lol": "lol" }))
})
app.get('/voters', async (req, res) => {

    let data = await VOTERID.find({})
    return res.send(data);
})

app.post('/register', async (req, res) => {

    const voter = new VOTERID({
        name: req.body.name
    });
    try {
        const result = await voter.save();
        return res.status(201).send(result);
    } catch (err) {
        return res.status(500).send(err);
    }

})





app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${process.env.PORT || 5000}!`));

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


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


app.get('/', (req, res) => {

    return res.send(JSON.stringify({ "lol": "lol" }))
})




app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${process.env.PORT || 5000}!`));

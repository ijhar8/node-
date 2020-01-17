const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    return res.send(JSON.stringify({ "lol": "lol" }))
})




app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${process.env.PORT || 5000}!`));

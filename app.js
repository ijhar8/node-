const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    return res.send(JSON.stringify({ "lol": "lol" }))
})




app.listen(8080, () => console.log(`Example app listening on port ${8080}!`));

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);
var arr = new Array();
app.use(express.static('public'))
app.get("/", (req, res) => {
    res.render("index");
});
app.get('/testAPI/', (req, res, err) => {

    var roll = req.query.rollNo;
    // console.log(roll);
    if (roll != undefined && roll != '' && roll != null) {
        roll = roll.split(',');

        arr.length = 0;
        for (i = 0; i < roll.length; i++) {
            if (roll[i] == "" || roll[i] == null) continue;
            var result = "Fail";
            if (roll[i] % 2 == 0) result = "Pass";
            arr.push({ "rollno": roll[i], "result": result });
        }
        res.render('display', { items: arr });
    } else {
        res.status(200).send('Invalid Query');
    }



});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Running on port http://localhost:" + port)
})
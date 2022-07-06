/// this is entry point for our application - 

const express = require('express');

const app = express();
const PORT = 3001;

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/getdata', (req, res) => {
    console.log(req.body);

    const PythonShell = require('python-shell').PythonShell;

    var options = {
        // mode: 'text',
        pythonPath: '/opt/anaconda3/bin/python',
        args: [req.body.year, req.body.area, req.body.district, req.body.season, req.body.crop]
    };

    PythonShell.run('script.py', options, function (err, results) {
        if (err)
            throw err;
        // Results is an array consisting of messages collected during execution
        console.log('results: %j', results[0]);

        str = results[0].substring(1, results[0].length - 1);
        console.log(str)

        res.json({ "res":  str});
    }); 
})
app.listen(PORT, () => {
    console.log(`server is up on port number ${PORT}`);
});

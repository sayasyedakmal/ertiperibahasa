const express = require('express');
// require csvtojson module
const CSVToJSON = require('csvtojson');

const router = express.Router();

router.get('/init', (req, res) => {
    //initialize the database

    //1. read from csv
    //2. populate to model
    //3. add to array
    //4. save to peribahasa db



    // convert users.csv file to JSON array
    CSVToJSON().fromFile('files/peribahasa.csv')
        .then(peribahasa => {
            // users is a JSON array
            // log the JSON array
            console.log(peribahasa);


        }).catch(err => {
            // log error if any
            console.log(err);
        });


    res.send('database initlized');
});

router.get('/', (req, res) => {
    res.render('server');
});


module.exports = router;
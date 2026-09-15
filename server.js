const express = require('express')
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

const db = require('./db');

const person = require('./schema/person');
// get the person data from data base

app.get('/person', async (req, res) => {
    try {
        const data = await person.find() ;
        
            console.log("data fetched")
            res.status(200).json(data)
        }
        
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
});

app.post('/person', async (req, res) => {

    try {
        const data = req.body //assume req.body contain person data
        // create new person document using mongodb model
        const newperson = new person(data);
        //save new person data in database 

        const response = await newperson.save()
        console.log('data save ');
        res.status(200).json(response)

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })


    }
});

app.get('/person/:kindawork', async (req, res) => {
    try {
        const kindawork = req.params.kindawork;
        if (kindawork == 'cheif' || kindawork == 'waiter' || kindawork == 'manager') {
            const response = await person.find({ work: kindawork })
            console.log("kindawork fetched")
            res.status(200).json(response)
        }
        else {
            res.status(404).json({ error: "invalid" })

        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
})

// import router file 
 const personroutes = require('./routes/personroutes');
 //use the route
 app.use('/person',personroutes);

app.listen(2300)
//crud operations
// in database c means create....in http c means post
// in database r means read....in http c means get
// in database u means update....in http c means put
// in database d means delete....in http c means delete

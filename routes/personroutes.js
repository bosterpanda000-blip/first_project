const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {

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

router.get('/', async (req, res) => {
    try {
        const data = await person.find();

        console.log("data fetched")
        res.status(200).json(data)
    }

    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
});

router.get('/:kindawork', async (req, res) => {
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

router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const Updatedpersondata = req.body ;

        const response = await person.findByIdAndUpdate(personid, Updatedpersondata, {
            new: true, // return the updated documents
            runValidators: true, // run mongodb validation
 })
            if(!respone) {
                return  res.status(404).json({ error: 'person not found' });
            }
        
        console.log("data fetched")
        res.status(200).json(response)

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
})

module.exports = router;
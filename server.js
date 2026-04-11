
const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

app.post('/submit', async(req,res) => {
    try {
        const { name, email, message } = req.body;
        console.log('Form submission received:', { name, email, message });

        const writeResult = await db.collection('User\'s Input Form').doc('Students').set({
            name,
            email,
            message,
            createAt: new Data()
        });

        console.log('Firestore write Completed at:', writeResult.writeTime.toDate());

        res.status(200).send('Form data saved to Firestore!');
    } catch (error) {
        console.error('Error saving data:', error.stack);
        res.status(500).send('Error saving data');
    }
});

app.get('/submissions',async(req,res) => {
    try {
        const snapshot = await db.collection('User\'s Input Form').get();
        const submissions = snapshot.docs.map( doc => ({
            id:doc.id,
            ...doc.data()
        }));

        console.log('Fetched submissions:', submissions);

        res.json(submissions);
    } catch (error) {
        console.error('Error fetching data:',error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(3000, () => {
    console.log('server running on port 3000')
});
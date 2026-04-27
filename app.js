const express = require('express');
const app = express();

const port = 3000;  

app.use('/user', (req,res,next) => {
    console.log("Time:", Date.now());
    next();
}, (req,res,next) => {
    console.log("Request URL:", req.method);
});

app.get('/',(req,res) =>{
    res.send("Hello world!");
});

app.get('/user', (req,res) => {
    res.json({
        firstName:"John",
        lastName:"Doe",
        age: 21,
        email:"johndoe@gmail.com"
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

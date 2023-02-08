const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/statics',express.static(path.join(__dirname,'statics')));
app.use(express.json({extended: true, limit: '1mb'}))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'statics/views/index.html'));
})

app.post("/bmi",(req,res) => {
    
    let height = +req.body.height;
    let weight = +req.body.weight;

    let bmi = ((weight) / (height/100) ** 2).toFixed(1);

    res.status(200).send({"bmi":bmi});

  })

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})
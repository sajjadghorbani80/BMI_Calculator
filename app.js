const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/statics',express.static(path.join(__dirname,'statics')));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render(path.join(__dirname,'views/index.ejs'));
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})
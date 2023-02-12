const express = require('express');
const homeRouter = require('./routes/home');
const bmiRouter = require('./routes/bmi');

const app = express();
const port = 3000;

app.use('/statics', express.static('../bmi.ui/statics'));
app.use(express.json({ extended: true, limit: '1mb' }))

app.use('/', homeRouter);
app.use('/bmi', bmiRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
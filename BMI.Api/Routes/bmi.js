const express = require('express');
const router = express.Router();
const bmiService = require('../../BMI.Core/BmiService')

router.post("/",(req,res) => {
    
    let height = +req.body.height;
    let weight = +req.body.weight;

    let bmi = bmiService.bmiCalculator(weight,height);

    res.status(200).send({"bmi":bmi});

})
module.exports = router;
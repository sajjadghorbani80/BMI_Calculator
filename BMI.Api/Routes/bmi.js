const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bmiService = require('../../bmi.core/bmiService')

var inputValidate = [
    // Check weight
    check('weight').trim().notEmpty().withMessage('وزن نمی تواند خالی باشد')
        .matches('[0-9]').withMessage('وزن می‌تواند فقط شامل اعداد باشد').custom((input) => input > 0 ? true : false).withMessage('وزن باید بزرگتر از صفر باشد'),
    // Check height
    check('height').trim().notEmpty().withMessage('قد نمی تواند خالی باشد')
        .matches('[0-9]').withMessage('قد می‌تواند فقط شامل اعداد باشد').custom((input) => input > 0 ? true : false).withMessage('قد باید بزرگتر از صفر باشد')
];
router.post("/", inputValidate, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }
    let height = +req.body.height;
    let weight = +req.body.weight;

    let bmi = bmiService.bmiCalculator(weight, height);

    res.status(200).send({ "bmi": bmi });

})
module.exports = router;
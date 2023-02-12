function calculateBmi(weight, height) {
    let bmi = ((weight) / (height / 100) ** 2).toFixed(1);
    return bmi;
}

module.exports.bmiCalculator = calculateBmi;
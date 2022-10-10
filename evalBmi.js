// function bmi(weight, height) {
//   const personBmi = (bmi = weight / height ** 2);
//   if (personBmi <= 18.5) return "Underweight";

//   if (personBmi <= 25.0) return "Normal";

//   if (personBmi <= 30.0) return "Overweight";

//   if (personBmi > 30.0) return "Obese";
// }

function bmi(weight, height) {
  const x = (bmi = weight / height ** 2);

  return x <= 18.5
    ? "Underweight"
    : x <= 25.0
    ? "Normal"
    : x <= 30.0
    ? "Overweight"
    : "Obese";
}

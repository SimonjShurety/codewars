function bmi(weight, height) {
  const personBmi = (bmi = weight / height ** 2);
  if (personBmi <= 18.5) return "Underweight";

  if (personBmi <= 25.0) return "Normal";

  if (personBmi <= 30.0) return "Overweight";

  if (personBmi > 30.0) return "Obese";
}

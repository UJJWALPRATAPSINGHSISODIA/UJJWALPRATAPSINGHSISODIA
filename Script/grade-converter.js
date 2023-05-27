let userInput;
let userChoice;
let gpaValue;
let cgpaValue;
let percentageValue;
function converter() {
  userInput = document.getElementById("grade-converter-userInput").value;
  userChoice = document.getElementById("grade-converter-userChoice").value;

  if (userChoice == "gpa") {
    cgpaValue = Math.round((userInput / 4) * 10.0 * 100) / 100;
    percentageValue = Math.round(cgpaValue * 9.5 * 100) / 100;
    document.getElementById("grade-converter-para-gpa").innerHTML = "GPA: " + userInput;
    document.getElementById("grade-converter-para-cgpa").innerHTML = "CGPA: " + cgpaValue;
    document.getElementById("grade-converter-para-percentage").innerHTML =
      "PERCENTAGE: " + percentageValue + "%";
  } else if (userChoice == "cgpa") {
    gpaValue = Math.round((userInput / 10.0) * 4 * 100) / 100;
    percentageValue = Math.round(userInput * 9.5 * 100) / 100;
    document.getElementById("grade-converter-para-gpa").innerHTML = "GPA: " + gpaValue;
    document.getElementById("grade-converter-para-cgpa").innerHTML = "CGPA: " + userInput;
    document.getElementById("grade-converter-para-percentage").innerHTML =
      "PERCENTAGE: " + percentageValue + "%";
  } else if (userChoice == "percentage") {
    cgpaValue = Math.round((userInput / 9.5) * 100) / 100;
    gpaValue = Math.round((cgpaValue / 10.0) * 4 * 100) / 100;
    document.getElementById("grade-converter-para-gpa").innerHTML = "GPA: " + gpaValue;
    document.getElementById("grade-converter-para-cgpa").innerHTML = "CGPA: " + cgpaValue;
    document.getElementById("grade-converter-para-percentage").innerHTML =
      "PERCENTAGE: " + userInput + "%";
  } else {
    document.getElementById("grade-converter-para-gpa").innerHTML = "GPA: Wrong Input";
    document.getElementById("grade-converter-para-cgpa").innerHTML = "CGPA: Wrong Input";
    document.getElementById("grade-converter-para-percentage").innerHTML =
      "PERCENTAGE: Wrong Input";
  }
}

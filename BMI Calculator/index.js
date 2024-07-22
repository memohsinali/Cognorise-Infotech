function showResult() {
    // Get input values
    const name = document.querySelector("#name").value;
    const age1 = document.querySelector("#age").value;
    const weightInput = document.querySelector("#weightEnter").value;
    const heightInput = document.querySelector("#heightEnter").value;
    const weightUnit = document.querySelector("#weightDropdown").value;
    const heightUnit = document.querySelector("#heightDropdown").value;

    // Convert inputs to numbers
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);
    const age = parseFloat(age1);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid weight and height.");
        return;
    }

    if (weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    if (isNaN(age)) {
        alert("Please enter a valid age");
        return;
    }

    if (age <= 0) {
        alert("Please enter valid age");
        return;
    }

    // Convert weight and height to metric if necessary
    let weightInKg = weight;
    let heightInMeters = height;

    if (weightUnit === "pound" || weightUnit === "lb") {
        weightInKg = weight * 0.453592;
    }

    if (heightUnit === "feet") {
        heightInMeters = height * 0.3048;
    } else if (heightUnit === "cm") {
        heightInMeters = height / 100;
    }

    // Calculate BMI
    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display result
    document.querySelector(".result").style.display = "flex";
    document.querySelector(".container").style.display = "none";

    document.querySelector(".name").textContent = `Name: ${name}`;
    document.querySelector(".age").textContent = `Age: ${age}`;
    document.querySelector(".status").textContent = `BMI: ${bmi} (${category})`;
}

function hideStat()
{
document.querySelector(".result").style.display="none";
document.querySelector(".container").style.display="flex";
}
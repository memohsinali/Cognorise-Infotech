
let btnLength = document.querySelectorAll(".button").length;


document.querySelector(".equal").disabled = true;

//const AC = document.querySelector(".AC");

console.log(btnLength);

for (var i = 0; i < btnLength; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {

        document.querySelector(".equal").disabled = false;

        const display = this.value;
        document.querySelector("input").value += display;


    })
}


// AC button to all clear 
document.querySelector(".AC").addEventListener("click", function () {

    document.querySelector(".equal").disabled = false;
    display = "";
    document.querySelector("input").value = display;

})

// back button to delete latest digit
document.querySelector(".back").addEventListener("click", function () {

    document.querySelector(".equal").disabled = false;

    display = document.querySelector("input").value;
    display = display.slice(0, -1);
    document.querySelector("input").value = display;


})

// equal(=) case
document.querySelector(".equal").addEventListener("click", function () {
    calculate();
    document.querySelector(".equal").disabled = true;
})

function calculate() {
    try {
        let input = document.querySelector("input").value; // Get the current input value
        let result = eval(input); // Evaluate the expression
        document.querySelector("input").value = result; // Display the result
        display = result.toString(); // Update display with the result
    } catch (e) {
        document.querySelector("input").value = "Error";
        display = ""; // Clear the display in case of an error
    }
}



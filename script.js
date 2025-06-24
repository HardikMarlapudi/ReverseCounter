let inputNum = document.getElementById("inputNum").value;
let outputOrder = document.getElementById("outputOrder");

function submit() {
    let inputNum = document.getElementById("inputNum").value.trim();
    let outputOrder = document.getElementById("outputOrder");

    if (inputNum == "") {
        alert("Please enter a number");
        return;
    }

    let numArray = inputNum.split(" ");
    let reversedDigits = numArray.map(num => num.split("").reverse().join(""));

    outputOrder.innerHTML = reversedDigits.join(" ");
}

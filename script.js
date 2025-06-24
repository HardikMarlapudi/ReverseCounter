let inputNum = document.getElementById("inputNum").value;
let outputOrder = document.getElementById("outputOrder");

function submit() {
    let inputNum = document.getElementById("inputNum").value;
    let outputOrder = document.getElementById("outputOrder");
    let numArray = inputNum.split(" ");
    let numArraySorted = numArray.sort(function(a, b){return b-a});
    let reverse = "";

    if (inputNum === "") {
        alert("Please enter a number");
        return;
    }

    for (let i = 0; i < numArraySorted.length; i++) {
        reverse += numArraySorted[i] + "";
    }

    outputOrder.innerHTML = reverse;
}

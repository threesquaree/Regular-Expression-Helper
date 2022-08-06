if(document.getElementById('Run').clicked == true) {
    if(document.getElementById("pattern").value.length == 0) {
        alert("Please enter a pattern to continue.");
    }
    else if(document.getElementById("string").value.length == 0) {
        alert("Please enter a string to continue.");
    }
    else if(document.getElementById("string").value.length == 0 && document.getElementById("pattern").value.length == 0) {
        alert("No values entered. Try again.");
    }
}

const myRe = document.getElementById("pattern");
const myString = document.getElementById("string");

const regex = new RegExp(myRe.value);
const globalRegex = new RegExp(myRe.value, 'g');
const incaseRegex = new RegExp(myRe.value, 'i');
const multilineRegex = new RegExp(myRe.value, 'm');
const stickyRegex = new RegExp(myRe.value, 'y');

function global_run() {
    if (document.getElementById("regex-func").value == "test") {
    document.getElementById("regex-output").innerHTML = globalRegex.test(myString.value);
    }
    else if (regex-func.value == "search") {
    document.getElementById("regex-output").innerHTML = globalRegex.search(myString.value);
    }
    else {
    document.getElementById("regex-output").innerHTML = globalRegex.match(myString.value);
    }
}

function incase_run() {
    if (regex-func.value == "test") {
    document.getElementById("regex-output").innerHTML = incaseRegex.test(myString.value);
    }
    else if (regex-func.value == "search") {
    document.getElementById("regex-output").innerHTML = incaseRegex.search(myString.value);
    }
    else {
    document.getElementById("regex-output").innerHTML = incaseRegex.match(myString.value);
    }
}

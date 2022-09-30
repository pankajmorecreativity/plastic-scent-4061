var span = document
    .getElementById("container")
    .addEventListener("click", myFnct);
var div = document.getElementById("first");
var arrow = document.getElementById("arrow");
var arrowUpper = document.getElementById("arrowUpper");
var count = 0;

function myFnct() {
    count++;
    if (count % 2 == 1) {
        arrow.style.display = "none";
        arrowUpper.style.display = "inline-block";
        div.style.display = "inline-block";
    } else {
        arrowUpper.style.display = "none";
        arrow.style.display = "inline-block";
        div.style.display = "none";
    }
}

document.getElementById("DebitContainer").addEventListener("click", showData);
var Dee = document.getElementById("Line1");
var Lower = document.getElementById("Lower");
var Upper = document.getElementById("Upper");
var count = 0;
function showData() {
    count++;
    if (count % 2 == 1) {
        Lower.style.display = "none";
        Upper.style.display = "inline-block";
        Dee.style.display = "inline-block";
    } else {
        Upper.style.display = "none";
        Lower.style.display = "inline-block";
        Dee.style.display = "none";
    }
}
document.getElementById("btn").addEventListener("click", checkdetails);
function checkdetails() {
    var cardlength = document.getElementById("cardNumber").value;
    var cvv = document.getElementById("ccv").value;
    if (cardlength.length != 16 || cvv.length != 3)
        alert("Please enter valid credtionals");
    else {
        alert("Your order is placed successfully");
        localStorage.removeItem("bag");
        localStorage.setItem("amt", JSON.stringify(0));

        window.location.href = "index.html";
    }
}

document.getElementById("Button").addEventListener("click", dcheckdetails);

function dcheckdetails() {
    var cardlength = document.getElementById("DebitNumber").value;
    var cvv = document.getElementById("Back").value;
    if (cvv.length != 3 && cardlength.length != 16)
        alert("Please enter valid credtionals");
    else {
        alert("Your order is placed successfully");
        localStorage.removeItem("bag");
        localStorage.setItem("amt", JSON.stringify(0));

        window.location.href = "index.html";
    }
}

let amt = JSON.parse(localStorage.getItem("amt"));
document.getElementById("deep").textContent = `Total Amount : ₹${amt}`;
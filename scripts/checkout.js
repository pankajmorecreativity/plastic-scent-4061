document.getElementById("Save").addEventListener("click", saveadd);

function saveadd() {
    var a = document.getElementsByClassName("Wasim");
    var line = [];
    line.push(document.getElementById("Area").value);

    for (var i = 1; i < a.length; i++) {
        line.push(a[i].value);
    }
    line.push(a[0].value);
    localStorage.setItem("address", JSON.stringify(line));

    window.location.href = "payment.html";
}

document.getElementById("all").addEventListener("click", remove);

function remove() {
    var a = document.getElementById("add");
    var b = a.querySelectorAll("input");
    for (var i = 0; i < b.length; i++) {
        console.log(b[i]);
        b[i].value = "";
    }

    var namecatch = document.getElementById("names");

    var data_arr = namecatch.querySelectorAll("input");
    for (var i = 0; i < data_arr.length; i++) {
        data_arr[i].value = "";
    }
}

document.getElementById("red").addEventListener("click", function () {
    location.href = "cart.html";
});

let amt = JSON.parse(localStorage.getItem("amt"));
document.getElementById("deep").textContent = `Total Amount : ₹${amt}`;
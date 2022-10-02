function sidebarfun() {
    var bar = document.getElementById("sbar");
    if (bar.style.display == "block") {
        bar.style.display = "none";
    } else {
        bar.style.display = "block";
    }
}

function loginOff() {
    var pg = document.getElementById("loginpg");
    pg.style.display = "none";
}

function loginOn() {
    var pg = document.getElementById("loginpg");
    pg.style.display = "flex";
}
async function foundation() {
    localStorage.setItem("products", JSON.stringify([]));
    let res = await fetch(`./data/product_data.json`);
    let data = await res.json();

    localStorage.setItem(
        "products",
        JSON.stringify(data.Face_Foundation_Cream)
    );
    location.href = "product_page.html";
}

async function moisturizer() {
    localStorage.setItem("products", JSON.stringify([]));
    let res = await fetch(`./data/product_data.json`);
    let data = await res.json();

    localStorage.setItem("products", JSON.stringify(data.Moisturizer));
    location.href = "product_page.html";
}
async function perfume() {
    localStorage.setItem("products", JSON.stringify([]));
    let res = await fetch(`./data/product_data.json`);
    let data = await res.json();

    localStorage.setItem("products", JSON.stringify(data.Perfume));
    location.href = "product_page.html";
}

function carto() {
    location.href = "cart.html";
}

function setusername()
{
    let data=JSON.parse(localStorage.getItem('store'));
    console.log(data);
    if(data.length!=0)
    {
        // document.querySelector("#xyz").innerHTML="";
        document.querySelector("#xyz").innerHTML=data[0];
    }
}
setusername();
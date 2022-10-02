let page = document.getElementById("title");

let s = document.getElementById("second");
let cart = JSON.parse(localStorage.getItem("bag"));
if (cart == null) {
    localStorage.setItem("bag", JSON.stringify([]));
}

let data = JSON.parse(localStorage.getItem("products"));
let post = document.getElementById("poster");
post.src = data[0].poster;
displaydata(data);

page.textContent = `Buy Branded | ${data[1].cur}`;

function displaydata(data) {
    console.log(data);
    let path = document.getElementById("path");
    path.textContent = data[1].path;
    let cur = `<span>${data[1].cur}</span>`;
    path.innerHTML += cur;
    second.innerText = "";
    for (var i = 1; i < data.length; i++) {
        let pict = document.createElement("div");
        pict.setAttribute("id", "pict1");
        let offersDiv = document.createElement("div");
        offersDiv.setAttribute("id", "offersDiv");
        let img = document.createElement("img");
        img.setAttribute("class", "product_img");
        let price = document.createElement("p");
        price.setAttribute("id", "price1");
        let img1 = document.createElement("img");
        img1.setAttribute("class", "img1offer");
        let offer = document.createElement("p");
        offer.setAttribute("id", "offer1");
        let off = document.createElement("p");

        let brand = document.createElement("p");

        let alltext = document.createElement("div");
        alltext.setAttribute("id", "all1");

        img1.src = `https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png`;

        let imgdv = document.createElement("div");

        img.src = data[i].image1;

        let showdv = document.createElement("div");
        let hoverdv = document.createElement("div");
        hoverdv.setAttribute("class", "shopnow");
        let bag = document.createElement("img");
        bag.src =
            "https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Shopping_bag-128.png";
        let btn = document.createElement("button");
        btn.textContent = "ADD TO BAG";
        hoverdv.append(bag, btn);
        showdv.append(hoverdv);
        let prod99 = data[i];
        btn.onclick = function () {
            addtobag(prod99);
        };

        showdv.setAttribute("class", "show");
        imgdv.append(img, showdv);
        let title = document.createElement("p");
        title.textContent = data[i].title;
        price.textContent = `Rs. ${data[i].price}`;
        price.style.fontWeight = "bold";
        price.style.padding = "3px 0px";
        offer.textContent = "Offer";
        off.textContent = "2 more offers";
        brand.textContent = data[i].brand;
        brand.style.fontWeight = "bold";
        brand.style.padding = "3px 0px";
        offersDiv.append(img1, offer);
        alltext.append(title, brand, offersDiv, price, off);

        pict.append(imgdv, alltext);

        s.append(pict);
    }
}

document.getElementById("c1").value = `${data[1].brand}`;
document.getElementById("d1").textContent = `${data[1].brand}`;
document.getElementById("c2").value = `${data[data.length - 1].brand}`;
document.getElementById("d2").textContent = `${data[data.length - 1].brand}`;
let arr = [...data];
function filter() {
    let option = document.getElementsByName("opt");
    let filter = false;
    for (var checkbox of option) {
        if (checkbox.checked) {
            arr = [];
            for (let i = 1; i < data.length; i++) {
                if (data[i].brand == checkbox.value) {
                    arr.push(data[i]);
                }
            }
            filter = true;
        }
    }
    if (!filter) {
        displaydata(data);
    } else {
        displaydata(arr);
    }
}

function sort() {
    let toSort = document.getElementById("select").value;
    if (toSort == "LH") {
        arr.sort((a, b) => a.price - b.price);
        displaydata(arr);
    } else if (toSort == "HL") {
        arr.sort((a, b) => b.price - a.price);
        displaydata(arr);
    } else {
        displaydata(data);
    }
}

function addtobag(prod99) {
    alert("We've added this product to your bag");
    cart.push(prod99);
    localStorage.setItem("bag", JSON.stringify(cart));
}
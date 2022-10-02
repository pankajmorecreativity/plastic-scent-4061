localStorage.setItem("data_i", JSON.stringify([]));
localStorage.setItem("data_j", JSON.stringify([]));
localStorage.setItem("data_k", JSON.stringify([]));

let cart = JSON.parse(localStorage.getItem("bag"));
if (cart == null) {
    localStorage.setItem("bag", JSON.stringify([]));
}

let i = 0;
let j = 0;
let k = 0;

let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

const init = (n) => {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots.forEach((dot, index) => {
            dot.classList.remove("active");
        });
    });
    slides[n].style.display = "block";
    dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
    currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    init(currentSlide);
};

const prev = () => {
    currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
    init(currentSlide);
};

document.getElementById("next").addEventListener("click", next);

document.getElementById("prev").addEventListener("click", prev);

setInterval(() => {
    next();
}, 3000);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        // console.log(currentSlide);
        init(i);
        currentSlide = i;
    });
});

const showData_i = (i) => {
    let prodBox = document.getElementById("slide1");
    prodBox.textContent = "";
    let data = JSON.parse(localStorage.getItem("data_i"));
    for (let y = 0; y < 6; y++) {
        let card = document.createElement("div");
        card.setAttribute("class", "prod");
        let imgdv = document.createElement("div");
        imgdv.setAttribute("class", "for_img");
        let prod_img = document.createElement("img");
        prod_img.setAttribute("class", "p_img");
        prod_img.src = data[i].image1;

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
        // btn.setAttribute("class", "btn");
        let prod99 = data[i];
        btn.onclick = function () {
            addtobag(prod99);
        };

        showdv.setAttribute("class", "show");
        imgdv.append(prod_img, showdv);

        let offerdv = document.createElement("div");
        offerdv.setAttribute("class", "offer");
        let offer_img = document.createElement("img");
        let offer = document.createElement("h");
        offer.textContent = "OFFER";
        offerdv.append(offer_img, offer);

        let brand = document.createElement("h3");
        brand.textContent = data[i].brand;
        let title = document.createElement("p");
        title.textContent = `Rs. ${data[i].price}`;
        let extra = document.createElement("p");
        extra.textContent = "2 more offers";

        card.append(imgdv, offerdv, brand, title, extra);
        prodBox.append(card);
        i++;
    }
};

const showData_j = (j) => {
    // console.log(data, i);
    let prodBox = document.getElementById("slide2");
    prodBox.textContent = "";
    let data = JSON.parse(localStorage.getItem("data_j"));
    // console.log(data);
    for (let y = 0; y < 3; y++) {
        let card = document.createElement("div");
        card.setAttribute("class", "prod1");
        let imgdv = document.createElement("div");
        imgdv.setAttribute("class", "for_img");
        let prod_img = document.createElement("img");
        prod_img.setAttribute("class", "p_img");
        prod_img.src = data[j].image1;

        let showdv = document.createElement("div");
        let hoverdv = document.createElement("div");
        hoverdv.setAttribute("class", "shopnow");
        let bag = document.createElement("img");
        bag.src =
            "https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Shopping_bag-128.png";
        let btn = document.createElement("button");
        btn.textContent = "ADD TO BAG";
        hoverdv.append(bag, btn);
        // btn.setAttribute("class", "btn");
        showdv.append(hoverdv);
        let prod99 = data[j];
        btn.onclick = function () {
            addtobag(prod99);
        };

        showdv.setAttribute("class", "show");
        imgdv.append(prod_img, showdv);

        let offerdv = document.createElement("div");
        offerdv.setAttribute("class", "offer");
        let offer_img = document.createElement("img");
        let offer = document.createElement("h");
        offer.textContent = "OFFER";
        offerdv.append(offer_img, offer);

        let brand = document.createElement("h3");
        brand.textContent = data[j].brand;
        let title = document.createElement("p");
        title.textContent = `Rs. ${data[j].price}`;
        let extra = document.createElement("p");
        extra.textContent = "2 more offers";

        card.append(imgdv, offerdv, brand, title, extra);
        prodBox.append(card);
        j++;
    }
};

const showData_k = (k) => {
    // console.log(data, i);
    let prodBox = document.getElementById("slide3");
    prodBox.textContent = "";
    let data = JSON.parse(localStorage.getItem("data_k"));
    // console.log(data);
    for (let y = 0; y < 6; y++) {
        let card = document.createElement("div");
        card.setAttribute("class", "prod");
        let imgdv = document.createElement("div");
        imgdv.setAttribute("class", "for_img");
        let prod_img = document.createElement("img");
        prod_img.setAttribute("class", "p_img");
        prod_img.src = data[k].image1;

        let showdv = document.createElement("div");
        let hoverdv = document.createElement("div");
        hoverdv.setAttribute("class", "shopnow");
        let bag = document.createElement("img");
        bag.src =
            "https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Shopping_bag-128.png";
        let btn = document.createElement("button");
        btn.textContent = "ADD TO BAG";
        hoverdv.append(bag, btn);
        // btn.setAttribute("class", "btn");
        showdv.append(hoverdv);
        let prod99 = data[k];
        btn.onclick = function () {
            addtobag(prod99);
        };

        showdv.setAttribute("class", "show");
        imgdv.append(prod_img, showdv);

        let offerdv = document.createElement("div");
        offerdv.setAttribute("class", "offer");
        let offer_img = document.createElement("img");
        let offer = document.createElement("h");
        offer.textContent = "OFFER";
        offerdv.append(offer_img, offer);

        let brand = document.createElement("h3");
        brand.textContent = data[k].brand;
        let title = document.createElement("p");
        title.textContent = `Rs. ${data[k].price}`;
        let extra = document.createElement("p");
        extra.textContent = "2 more offers";

        card.append(imgdv, offerdv, brand, title, extra);
        prodBox.append(card);
        k++;
    }
};

const getData = async () => {
    let res = await fetch("./data/home_data.json");
    let data = await res.json();

    localStorage.setItem("data_i", JSON.stringify(data.ABH));
    localStorage.setItem("data_j", JSON.stringify(data.JL));
    localStorage.setItem("data_k", JSON.stringify(data.EOS));

    showData_i(i);
    showData_j(j);
    showData_k(k);
};
getData();
const forwrd3 = () => {
    if (k < 2) showData_k(++k);
};
const forwrd2 = () => {
    if (j < 2) showData_j(++j);
};
const forwrd1 = () => {
    if (i < 2) showData_i(++i);
};
const bak3 = () => {
    if (k > 0) showData_k(--k);
};
const bak2 = () => {
    if (j > 0) showData_j(--j);
};
const bak1 = () => {
    if (i > 0) showData_i(--i);
};

document.getElementById("forwrd3").addEventListener("click", forwrd3);
document.getElementById("back3").addEventListener("click", bak3);
document.getElementById("forwrd2").addEventListener("click", forwrd2);
document.getElementById("back2").addEventListener("click", bak2);
document.getElementById("forwrd1").addEventListener("click", forwrd1);
document.getElementById("back1").addEventListener("click", bak1);

function addtobag(prod99) {
    alert("We've added this product to your bag");
    cart.push(prod99);
    localStorage.setItem("bag", JSON.stringify(cart));
    // console.log(cart);
}
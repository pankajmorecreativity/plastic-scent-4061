function showitems() {
    let cart = JSON.parse(localStorage.getItem("bag"));
    if (cart.length > 0) {
        let card = document.getElementById("items");
        console.log(cart.length);
        card.innerHTML = "";
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            let brand = cart[i].brand.toLowerCase();
            let str1 = capitalizeFirstLetter(`${brand}`);

            let id = cart[i].id;
            let div = document.createElement("div");
            let str = `<div class="cart_img">
                            <img
                                src=${cart[i].image1}
                            />
                        </div>
                        <div class="cart_info">
                            <div>
                                <p class="p">${str1}</p>
                                <h4 class="h">
                                    ${cart[i].title}
                                </h4>
                                <p>Quantity - ${1}</p>
                                <p>Size - ${cart[i].size[0]}</p>
                                <button onclick="remove(${id})">Remove</button>
                            </div>
                            <div><h4>Rs. ${cart[i].price}</h4></div>
                        </div>`;
            div.innerHTML = str;
            card.append(div);

            total += cart[i].price;
            document.getElementById("price").textContent = `Rs. ${total}`;
            document.getElementById("ttl").textContent = `Rs. ${total}`;
            localStorage.setItem("amt", JSON.stringify(total));
        }
    }
}
showitems();

function remove(id) {
    let cart = JSON.parse(localStorage.getItem("bag"));
    let arr = cart.filter((ele) => {
        return ele.id != id;
    });
    localStorage.setItem("bag", JSON.stringify(arr));

    showitems();
}

function checkOut() {
    location.href = "checkout.html";
}
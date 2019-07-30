var toppings = [
    ['avocado', 1],
    ['brocoli', 1],
    ['onions', 1],
    ['zucchini', 1],
    ['lobster', 2],
    ['oyster', 2],
    ['salmon', 2],
    ['tuna', 2],
    ['bacon', 3],
    ['duck', 3],
    ['ham', 3],
    ['sausage', 3]
];

let pizzaPrice = 0;
let size = 0;
let toppingSum = 0;
let totalprice = 0;

function getTotalPrice() {
    let total = 0;

    total = pizzaPrice + toppingSum + size;
    document.getElementById("total-price").innerHTML = "$" + total;
}

function clearcheckbox() {
    for (let i = 0; i < toppings.length; i++) {
        //document.getElementById(toppings[i][0]).checked = false;
        document.getElementById(toppings[i][0]).disabled = false;
    }
}

function uncheckifdisabled() {
    for (let i = 0; i < toppings.length; i++) {
        if (document.getElementById(toppings[i][0]).disabled === true) {
            document.getElementById(toppings[i][0]).checked = false;
        }
    }
}

function toppingPrice() {

    var topp = document.getElementsByName("topping"),
        topsum = 0;
    for (var i = 0; i < topp.length; i++) {

        if (topp[i].type === "checkbox" && topp[i].checked === true) {

            for (let j = 0; j < toppings.length; j++) {
                if (topp[i].value === toppings[j][0]) {
                    topsum = topsum + toppings[j][1];
                }
            }
        }
    }

    toppingSum = topsum;
    getTotalPrice();

}

function pizzatypes() {
    let pizzatype = document.getElementsByName("pizza-name");

    if (pizzatype[2].checked === true) {
        pizzaPrice = 12;
        clearcheckbox();
        document.getElementById("avocado").disabled = true;
        document.getElementById("lobster").disabled = true;
        document.getElementById("oyster").disabled = true;
        document.getElementById("salmon").disabled = true;
        uncheckifdisabled();
    }
    if (pizzatype[1].checked === true) {
        pizzaPrice = 10;
        clearcheckbox();
        document.getElementById("avocado").disabled = true;
        document.getElementById("tuna").disabled = true;
        document.getElementById("duck").disabled = true;
        document.getElementById("sausage").disabled = true;
        uncheckifdisabled();
    }
    if (pizzatype[0].checked === true) {
        pizzaPrice = 8;
        clearcheckbox();
        document.getElementById("lobster").disabled = true;
        document.getElementById("oyster").disabled = true;
        document.getElementById("salmon").disabled = true;
        document.getElementById("bacon").disabled = true;
        document.getElementById("duck").disabled = true;
        document.getElementById("sausage").disabled = true;
        uncheckifdisabled();
    }
    toppingPrice();
    getTotalPrice();
}

function pizzaSize() {
    let selectedsize = document.getElementsByName("pizza-size");

    if (selectedsize[0].checked === true) {
        size = -1;
    }
    if (selectedsize[1].checked === true) {
        size = 0;
    }
    if (selectedsize[2].checked === true) {
        size = 2;
    }

    getTotalPrice();
}

window.onload = function () {
    pizzatypes();
}

// /console.log(getTotalPrice());
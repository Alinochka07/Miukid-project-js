"use strict";


// Calculation of total products in a cart


function calculate_cart() {
    let count_cart = document.querySelectorAll(".item .n_price");
    let count_my_cart = 0;

    for(let i = 0; i < count_cart.length; i++) {
            count_my_cart = count_my_cart + (+count_cart[i].textContent);
            
    }

    document.getElementsByClassName("total_in_my_cart")[0].innerText = `$ ${count_my_cart.toFixed(2)}`;
    document.getElementsByClassName("total_in_this_cart")[0].innerText = `$ ${count_my_cart.toFixed(2)}`;

};


export default calculate_cart;



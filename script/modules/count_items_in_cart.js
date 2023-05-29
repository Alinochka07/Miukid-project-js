"use strict";
// Counting items in cart 

function count_items_in_cart() {
    let total_products = document.getElementsByClassName("bag_item").length;
    document.getElementsByClassName("quantity")[0].innerHTML = total_products;

};

module.exports = count_items_in_cart;
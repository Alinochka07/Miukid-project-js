import $ from "jquery";


(function() {
    const search_dropdown = require("./modules/search_dropdown");
    get_product_to_cart = require("./module/get_product_to_cart.js"),
    add_to_card = require("./module/add_to_card.js");

    get_product_to_cart();
    search_dropdown();
    add_to_card();




}());
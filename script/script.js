import $ from "jquery";


(function() {
    const search_dropdown = require("./modules/search_dropdown");
    get_product_to_cart = require("./module/get_product_to_cart.js"),
    add_to_card = require("./module/add_to_card.js");
    delete_items_from_cart = require("./module/delete_from_cart.js"),

    get_product_to_cart();
    search_dropdown();
    add_to_card(delete_items_from_cart);




}());
"use strict";
// Counting items in cart 

function count_items_in_cart() {
    let total_products = document.getElementsByClassName("bag_item").length;
    document.getElementsByClassName("quantity")[0].innerHTML = total_products;

};

const tabs = {
    list_of_tabs: [
            "Bestsellers",
            "New products",
            "On sale"
    ] 
};

let create_listing = document.createElement("div");

tabs.list_of_tabs.forEach((item, i) => {
    create_listing.innerHTML += `<div class="card-header"> ${item}
                                        </div>
                                        <div class="card-body">
                                            Lorem ipsum dolor sit amet, 
                                        </div>`;
});
document.querySelector(".block_title #display #accordion").innerHTML += create_listing.outerHTML;

export default count_items_in_cart;
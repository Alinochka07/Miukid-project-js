"use strict";

// Добавление товара в корзину

function add_to_card(funct_delete_items_from_cart, calculate_cart, count_items_in_cart) {
     
        function addToCartFunction(img, ttl, curr, prc) {
                let image = img;
                let title = ttl;
                let currency = curr;
                let price = prc;
                
        
                let create_li = document.createElement('li');
                create_li.classList.add("bag_item");
        
        
                create_li.innerHTML = '<div class="row">\
                                                <div class="col-sm-4">\
                                                                <div class="cart_img">\
                                                                        <img src="'+image[0].src+'" class="shopping_cart_img">\
                                                                </div>\
                                                </div>\
                                                <div class="col-sm-8 left-side">\
                                                                <div class="cart_view">\
                                                                        <div><a href=""><p>'+title[0].innerHTML+'</p></a></div>\
                                                                        <div class="price">\
                                                                                <span class="currency">'+currency[0].innerHTML+'</span>\
                                                                                <span class="n_price">'+price[0].innerHTML+'</span>\
                                                                        </div>\
                                                                        <div class="cart_trash"><a href=""><i class="far fa-trash-alt"></i></a></div>\
                                                                </div>\
                                                </div>\
                                        </div>';
        
        
                
                let block_cart = document.querySelector(".cart_submenu .item .bag_items");
                block_cart.appendChild(create_li);
                
        
                       
                
                // Вызов функции по удалению товара 
                funct_delete_items_from_cart(calculate_cart, count_items_in_cart);
                
                //  Вызов функции по подсчету общей суммы в корзине
                calculate_cart();
        
                // Подсчет количества товаров в корзине
                count_items_in_cart();
        
        
                fetch("http://localhost:3000/requests", {
                        method: "POST",
                        headers: {
                                "Content-type": "Application/json"
                        },
                        body: JSON.stringify({
                                "image": image[0].src,
                                "title": title[0].innerText,
                                "currency": currency[0].innerText,
                                "price": price[0].innerText
                        })
                });
        
        };

        document.querySelector(".product_list").addEventListener("click", event => {
                
                alert("This product has been successfully added to your cart!");
                

                if(event.target.parentNode.classList.contains("product")) return false;

                var img = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".image img");
                var ttl = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".title");
                var curr = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".currency");
                var prc = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".n_price");
                
                event.preventDefault();
                addToCartFunction(img, ttl, curr, prc);

        });
};


export default add_to_card;
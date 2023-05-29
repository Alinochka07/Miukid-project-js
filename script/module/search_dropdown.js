'use strict';
    
        // Dropdown list of search.  
        const search_dropdown = () => {
                const   search = document.querySelector("[name='search']"),
            search_drop_down = document.querySelector(".search-drop-down");
    
            search.addEventListener("input", (e) => {
                    e.preventDefault();
    
                    fetch('../../php/search.php', {
                            method: "POST",
                            body: JSON.stringify({query: search.value}),
                            headers: {
                                    "Content-type": "application/json"
                            }
                    })
                    .then(response => response.json())
                    .then(json => {
    
                            let create_ul = document.createElement("ul");
                            for (let i = 0; i < json.length; i++) {
                            create_ul.innerHTML += `<li class="search_li">\
                                                    <a href="${json[i].href}">${json[i].text}</a>\
                                                    </li>`;
                            } 
                            search_drop_down.innerHTML = create_ul.outerHTML;
                    })
                    .catch(console.log("Error"));
    
    
            })
        }      
    
            
export default search_dropdown;
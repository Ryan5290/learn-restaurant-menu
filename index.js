import { menuArray } from "./data.js"

const itemsEle = document.getElementById('items')
const payForm = document.getElementById('pay-form')

document.addEventListener('click', function(e){
    // do submit buttons first then the menu items
    if (e.target.dataset.id === '0'){
        console.log("PIZZA")
    }
})


function renderMenu() {
    let itemsHtml = ''

    menuArray.forEach(item => {
        itemsHtml += `
            <div class="item">
                <p class="item-img">${item.emoji}</p>
                <div class="item-details">
                    <h2>${item.name}</h2>
                    <p class="item-ingreds">${item.ingredients.join(', ')}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
                <button class="item-btn" data-id="${item.id}">+</button>
            </div>
            <hr></hr>
        `
    });

    itemsEle.innerHTML = itemsHtml
}

renderMenu()







payForm.addEventListener('submit', function(e){
    // close modal
    // set thank you message
})




//              <div class="item">
//                 <p class="item-img">🍕</p>
//                 <div class="item-details">
//                     <h2>Hard Code Pizza</h2>
//                     <p class="item-ingreds">ingreds</p>
//                     <p class="item-price">$14</p>
//                 </div>
//                 <button>+</button>
//             </div>
//             <hr></hr>
import { menuArray } from "./data.js"

const itemsEle = document.getElementById('items')
const payForm = document.getElementById('pay-form')

let cartArr = []

document.addEventListener('click', function(e){
    // do submit buttons first then the menu items
    const menuId = e.target.dataset.id
    if (menuId){
        
        // // it was a menu item
        // let test = menuArray.filter(item => {
        //     //console.log(`itemID: ${typeof(item.id)} menuID: ${typeof(menuId)}`)
        //     return item.id === Number(menuId)
        // })
        // // so search the database for that id (safetly check)

        cartArr.push(Number(menuId))
        renderCart()
    }
    // else it wasnt a menu item 
    // (at this point it should be other 2 btns are accounted for above)
    // ^ not coded yet though
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

function renderCart() {
    console.log(cartArr)
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
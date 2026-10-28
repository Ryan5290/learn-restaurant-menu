import { menuArray } from "./data.js"

const itemsEle = document.getElementById('items')
const payForm = document.getElementById('pay-form')

let cartArr = []

document.addEventListener('click', function(e){
    // do submit buttons first then the menu items
    const menuId = e.target.dataset.id
    if (menuId){
        cartArr.push(Number(menuId))

        console.log(cartArr)
        
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
    const cartEle = document.getElementById('cart')
    if (!cartArr.length) {
        cartEle.classList.add('hide')
        return // cart is empty so don't show it
    }
    cartEle.classList.remove('hide')

    const cartContents = document.getElementById('cart-items')
    // const objsInCart = menuArray.filter(item => {
    //     return cartArr.includes(item.id)
    // })
    const objsInCart = cartArr.map(cartItem => 
        menuArray.find(menuItem => cartItem === menuItem.id)
    )

    const totalPrice = objsInCart.reduce((total, item) => {
        return total += item.price
    }, 0)
    let cartHtml = ''

    for (let item of objsInCart) {
        cartHtml += `
            <div class="item-info">
                <p class="cart-item">${item.name}</p>
                <button>remove</button>
                <p class="cart-price">$${item.price}</p>
            </div>
        `
    }

    cartContents.innerHTML = cartHtml

    document.getElementById('total-price').innerText = `$${totalPrice}`

    // need to allow multiple of the same item in the cart
    // [id: amount] array of pairs or something simpler?
    // then work on remove button/s

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
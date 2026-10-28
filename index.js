import { menuArray } from "./data.js"

const itemsEle = document.getElementById('items')
const payForm = document.getElementById('pay-form')
const orderBtn = document.getElementById('complete-order')
const pay = document.getElementById('pay')
const cartEle = document.getElementById('cart')
const thankMessage = document.getElementById('thank-message')

let cartArr = []

document.addEventListener('click', function(e){
    const target = e.target // what was clicked

    // target was a add button
    if (target.dataset.add){
        const menuId = target.dataset.add
        cartArr.push(Number(menuId))        
        renderCart()
    }

    // target was a remove button
    else if (target.dataset.remove) {
        const cartIndex = target.dataset.remove
        cartArr.splice(cartIndex, 1)
        renderCart()
    }

    // else it wasnt a menu item 
    // (at this point it should be other 2 btns are accounted for above)
    // ^ not coded yet though
})

orderBtn.addEventListener('click', function(){
    //modal shows up
    document.getElementById('modal').classList.remove('hide')
})

pay.addEventListener('click', function() {
    document.getElementById('modal').classList.add('hide')
    cartEle.classList.add('hide')
    thankMessage.classList.remove('hide')

    // grab the customer name and put in the ty message
    // check the form - valid etc and then that error
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
                <button class="item-btn" data-add="${item.id}">+</button>
            </div>
            <hr></hr>
        `
    });

    itemsEle.innerHTML = itemsHtml
}

function renderCart() {
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

    // for (let item of objsInCart) {
    for (let i = 0; i < objsInCart.length; i++) {
        const { name, price } = objsInCart[i]
        cartHtml += `
            <div class="item-info">
                <p class="cart-item">${name}</p>
                <button data-remove="${i}">remove</button>
                <p class="cart-price">$${price}</p>
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
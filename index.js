import { menuArray } from "./data.js"

const itemsEle = document.getElementById('items')
const payForm = document.getElementById('pay-form')
const orderBtn = document.getElementById('complete-order')
const cartEle = document.getElementById('cart')
const thankMessage = document.getElementById('thank-message')

let cartArr = []

// 
document.addEventListener('click', function(e){
    const target = e.target // what was clicked

    // target was a add button
    if (target.dataset.add){
        // in case a new order is done right after the first and the page didn't reset
        thankMessage.classList.add('hide')

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
})

orderBtn.addEventListener('click', function(){
    //modal shows up
    document.getElementById('modal').classList.remove('hide')
})

payForm.addEventListener('submit', function(e){
    e.preventDefault()
    document.getElementById('modal').classList.add('hide')
    cartEle.classList.add('hide')
    thankMessage.classList.remove('hide')
    
    displayThankYou(new FormData(e.target).get('name'))
    
    payForm.reset()
    cartArr = []
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
    const objsInCart = cartArr.map(cartItem => 
        menuArray.find(menuItem => cartItem === menuItem.id)
    )

    const totalPrice = objsInCart.reduce((total, item) => {
        return total += item.price
    }, 0)
    let cartHtml = ''

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
}

function displayThankYou(name) {
    document.getElementById('thank-message-p').innerText = 
        `Thanks, ${name}! Your order is on its way!`
}

renderMenu()












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
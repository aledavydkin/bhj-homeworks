const productQuantityControls = Array.from(document.querySelectorAll('.product__quantity-controls'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cart__products = document.querySelector('.cart__products');console.log(cart__products);
let id = [];

productQuantityControls.forEach(el => {
    const productQuantityControl = Array.from(el.querySelectorAll('.product__quantity-control'));
    let productQuantityValue = el.querySelector('.product__quantity-value');

    const control = function (event) {
        if(event.target.classList.contains('product__quantity-control_dec')) {
            if(Number(productQuantityValue.textContent) === 0) {
                return null;
            } else {
                productQuantityValue.textContent --;
            }
        } else {
            productQuantityValue.textContent ++;
        }
    };

    productQuantityControl.forEach(el => {
        el.addEventListener('click', control)
    })
});


productAdd.forEach(el => {
    el.addEventListener('click', function (event) {
        const product = event.target.closest('.product');
        const productQuantity = product.querySelector('.product__quantity-value').textContent;
        const image = product.querySelector('.product__image').getAttribute('src');

        if(id.includes(product.dataset.id)) {
            const list = Array.from(cart__products.querySelectorAll('.cart__product'));
            list.forEach(el => {
                if(product.dataset.id === el.dataset.id) {
                   let count = el.querySelector('.cart__product-count').textContent;
                   let test = el.querySelector('.cart__product-count');
                   test.textContent = Number(count) + Number(productQuantity);
                }

            })
        }

        if(Number(productQuantity) !== 0 && !id.includes(product.dataset.id)) {
            id.push(product.dataset.id);
            cart__products.innerHTML += `
                <div class="cart__product" data-id="${product.dataset.id}">
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${productQuantity}</div>
                </div>`
        } else {
            return null;
        }
    })
});


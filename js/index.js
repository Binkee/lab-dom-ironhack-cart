// ITERATION 1

function updateSubtotal(product) {
  console.log(product);
  let price = product.querySelector('.price span')
  let quantity  = product.querySelector('.quantity input')
  console.log(price.innerText)
  let total = price.innerText * quantity.value
  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerText = total
  return subtotal
}

function calculateAll() {
  
  const totalProducts = document.querySelectorAll('.product');
  let sum = 0
  console.log(totalProducts)
  totalProducts.forEach(function(product){
    let total = updateSubtotal(product)
    sum = sum + total
 })
 
  let totalDom = document.querySelector('#total-value')
  totalDom.innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

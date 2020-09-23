// Multiple callbacks
let stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  alert(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);

  product = itemName.toLowerCase();

  if (product in stock) {
    if (stock[product] > 0) {
      callbackPayment(product);
    } else {
      callbackError(itemName);
    }
  } else {
    callbackError(itemName);
  }
}


document.addEventListener("DOMContentLoaded", function(event) {
  let name = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');

  processOrder(name, processPayment, processError);
})


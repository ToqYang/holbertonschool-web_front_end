// Local storage (Not expiration date)
function addItemToCart(item) {
  localStorage.setItem(item, "true");
}


function createStore() {
  let list = document.createElement('ul');
  const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

  for (x in availableItems) {
    list.innerHTML += `<li class="item">${availableItems[x]}</li>`;
  }
  document.querySelector('main').append(list);

  const ul = document.querySelectorAll('.item');
  for (let i = 0; i < ul.length; ++i) {
    ul[i].addEventListener('click', (e) => {
      e.preventDefault();
      addItemToCart(ul[i].textContent);
    });
  }
}


function displayCart() {
  let count = 0;

  for (x in localStorage) {
    if ((localStorage.getItem(x))) {
      ++count;
    }
  }

  let msg = document.createElement('p');
  msg.innerHTML = `You previously had ${count} items in your cart`;

  document.body.append(msg);
}


document.addEventListener("DOMContentLoaded", function(event) {
  if (typeof(localStorage) !== 'undefined') {
    createStore();
    displayCart();
  } else {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
  }
});

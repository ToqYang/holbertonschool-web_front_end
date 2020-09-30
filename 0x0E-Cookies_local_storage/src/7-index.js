// Advanced use of web storage
function getCartFromStorage() {
  const items = JSON.parse((sessionStorage.getItem('cart')));

  return items;
}


function addItemToCart(item) {
  let product = { "name": "", "quantity": 0 };

  let items = getCartFromStorage();
  if (items !== null) {
    let exist = 0;
    for (x of items) {
      if (x.name == item) {
        x.quantity += 1;
        ++exist;
      }
    }

    if (!exist) {
      product.name = item;
      product.quantity += 1;
      items.push(product);
    }
    const proJSON = JSON.stringify(items);
    sessionStorage.setItem('cart', proJSON);
  } else {
    let car = [];
    product.name = item;
    product.quantity = 1;
    car.push(product);
    const proJSON = JSON.stringify(car);

    sessionStorage.setItem('cart', proJSON);
  }
  displayCart();
}


function removeItemfromCart(item) {
  console.log('remove', item);
  let items = getCartFromStorage();
  let newproduct = [];

  for (i in items) {
    if ((items[i].name) == item) {
      if ((items[i].quantity) > 1) {
        items[i].quantity -= 1;
        newproduct.push(items[i]);
      }
    } else {
      newproduct.push(items[i]);
    }
  }

  const proJSON = JSON.stringify(newproduct);
  sessionStorage.setItem('cart', proJSON);
  displayCart();
}


function clearCart() {
  sessionStorage.clear();
  displayCart();
}


function createStore() {
  let list = document.createElement('ul');
  const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

  list.innerHTML += '<h2>Available products:</h2>';
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


function countItems() {
  let count = 0;
  const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

  for (let i = 0; i < sessionStorage.length; ++i) {
    let key = sessionStorage.key(i);
    if (key) {
      for (let x of availableItems) {
        if (key == x) {
          let item = sessionStorage.getItem(key);

          if (item !== null) {
            count++;
          }
        }
      }
    }
  }
  return count;
}


function displayCart() {
  // Look if the h2 is maked
  if (!(document.querySelector('#ycart'))) {
    let title = document.createElement('h2');
    title.id = 'ycart';
    title.innerHTML = 'Your cart:';
    document.querySelector('main').append(title);
  }

  // Look if the Div is maked
  if ((document.querySelector('#cardlist'))) {
    document.querySelector('#cardlist').innerHTML = '';
    console.log('new');
  } else {
    let msg = document.createElement('div');
    msg.id = 'cardlist';
    msg.innerHTML = '';
    document.querySelector('main').append(msg);
  }

  updateCart();
}


function updateCart() {
  let div = document.querySelector('#cardlist');
  div.innerHTML = '<ul id="cart"></ul>';

  let cart = document.querySelector('#cart');

  if (!(cart.hasChildNodes())) {
    const items = getCartFromStorage();

    let li = document.createElement('li');
    li.innerHTML = 'Your cart is empty';
    if (items !== null && items.length != 0) {
      li.innerHTML = 'Clear my cart';
      li.addEventListener('click', () => {
        const proJSON = []
        sessionStorage.setItem('cart', JSON.stringify(proJSON));
        displayCart();
      });

      cart.append(li);
      for (x of items) {
        li = document.createElement('li');
        li.innerHTML = `${x.name} X ${x.quantity}`;
        rem = document.createElement('span');
        rem.classList.add('remove');
        rem.innerHTML = '(remove)';
        const name = x.name;
        rem.addEventListener('click', (e) => {
          e.preventDefault();
          console.log('Entry' + name);
          removeItemfromCart(name);
        });
        li.append(rem);
        cart.append(li);
      }
    } else {
      cart.append(li);
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  if (typeof(sessionStorage) !== 'undefined') {
    createStore();
    displayCart();
  } else {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
  }
});

// Session storage (Only in the tab page)
function addItemToCart(item) {
  sessionStorage.setItem(item, "true");
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
  const times = countItems();

  let msg = document.createElement('p');
  msg.innerHTML = `You previously had ${times} items in your cart`;

  document.body.append(msg);
}


document.addEventListener("DOMContentLoaded", function(event) {
  if (typeof(sessionStorage) !== 'undefined') {
    createStore();
    displayCart();
  } else {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
  }
});

// Create basic cookie
function setCookies(e) {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  document.cookie = `${firstname}=${email};`;
}


function showCookies(e) {
  const p = document.createElement('p');

  const decodeCookie = decodeURIComponent(document.cookie);
  const all = decodeCookie.split(';');
  let cookies = '<strong>Cookies:</strong> ';

  for (let i = 0; i < (all.length - 1); ++i) {
    cookies += ` "${all[i]}"`;
  }

  p.innerHTML = cookies;
  document.querySelector('main').append(p);
}


document.addEventListener("DOMContentLoaded", function(event) {
  const addforme = document.getElementById('log');
  const addbtne = document.getElementById('btn-show-cook');

  addforme.addEventListener('submit', setCookies);
  addbtne.addEventListener('click', showCookies);
})
// Create basic cookie to expirate in 10 days
function setCookies(e) {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  // Date of expiration
  let d = new Date();
  const days = 10;
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const date = "expires=" + d.toUTCString();

  const cookie = `${firstname}=${email}; ${date};path=/`;

  document.cookie = cookie;
}


function showCookies(e) {
  const p = document.createElement('p');

  const decodeCookie = decodeURIComponent(document.cookie);
  const all = decodeCookie.split(';');
  let cookies = '<strong>Cookies:</strong> ';

  for (let i = 0; i < (all.length); ++i) {
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
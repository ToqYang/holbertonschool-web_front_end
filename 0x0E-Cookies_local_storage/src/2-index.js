// Read cookie
function equal(string, c) {
  for (let i = 0; i < string.length; ++i) {
    if (string[i] == c) {
      return (i + 1);
    }
  }

  return (0);
}


function getCookie(cname) {
  let name = cname + '=';
  const decodeCookie = decodeURIComponent(document.cookie);
  const all = decodeCookie.split(';');

  let space = all[0].split(' ');
  //let char = space.includes(name);

  for (let i = 0; i < space.length; ++i) {
    if (space[i].includes(name)) {
      from = equal(space[i], '=');
      to = space[i].substring(from, space[i].length);
      return (to);
    }
  }

  return ("");
}


function showfunc() {
  const user = getCookie('Firstname');

  alert('Welcome: ' + user);
}


function setCookies(e) {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;
  // Date of expiration
  let d = new Date();
  const days = 10;
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const date = "expires=" + d.toUTCString();

  const cookie = `Email=${email} Firstname=${firstname}; ${date};path=/`;

  document.cookie = cookie;
}


function showCookies(e) {
  const p = document.createElement('p');

  const decodeCookie = decodeURIComponent(document.cookie).split(';');
  let txt = decodeCookie[0].split(' ');
  txt = `${txt[0]} - ${txt[1]}`;
  const cookies = `<strong>Cookies:</strong> ${txt.replace(/=/g, ': ')}`;

  p.innerHTML = cookies;
  document.querySelector('main').append(p);
  showfunc();
}


document.addEventListener("DOMContentLoaded", function(event) {
  const addforme = document.getElementById('log');
  const addbtne = document.getElementById('btn-show-cook');

  addforme.addEventListener('submit', setCookies);
  addbtne.addEventListener('click', showCookies);
})
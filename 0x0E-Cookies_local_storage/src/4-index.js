// Use js-cookie
function showWelcomeMessageOrForm() {
  const name = Cookies.get('Firstname');
  const email = Cookies.get('Email');
  if (name !== undefined && email !== undefined) {
    hideForm();
    let title = document.createElement('h1');
    title.id = "welcome";
    title.innerHTML = `<strong>Welcome: ${name}</strong><a id="logout" style="font-style: italic; margin-left: 10px;">(logout)</a>`;
    document.querySelector('main').append(title);
    document.getElementById('logout').addEventListener('click', deleteCookiesAndShowForm);
  } else {
    showForm();
  }
}


function showForm() {
  const exist = document.getElementById('welcome');
  if (exist !== null) {
    exist.remove();
  }

  let form = document.getElementById('login');

  if (form === null) {
    makeform();
  } else {
    form.style.visibility = 'visible';
  }
}


function hideForm() {
  let form = document.getElementById('login');

  if (form !== null) {
    form.style.visibility = 'hidden'
  }
}


function deleteCookiesAndShowForm() {
  Cookies.remove('Fisrtname');
  Cookies.remove('Email');

  showForm();
}


function makeform() {
  let form = document.createElement('div');
  form.id = "login";

  form.innerHTML = '<h2>Login to the website</h2>\
                    <form id="log">\
                      <input type="text" placeholder="Firstname" id="firstname" required>\
                      <input type="text" placeholder="Email" id="email" required>\
                      <input type="submit" value="Log me in">\
                    </form>';

  document.querySelector('main').append(form);
  const addforme = document.getElementById('log');
  addforme.addEventListener('submit', function () {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    Cookies.set("Firstname", firstname, { path: '' });
    Cookies.set("Email", email, { path: '' });
  });
}


document.addEventListener("DOMContentLoaded", function(event) {
  showWelcomeMessageOrForm();
});
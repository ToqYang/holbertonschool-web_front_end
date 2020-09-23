// Binding + Closure
let user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer',

  logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName} Your occupation is: ${this.occupation}`);
  }
};

let bindLogWelcomeUser = user.logWelcomeUser.bind(user);
bindLogWelcomeUser('Hello');

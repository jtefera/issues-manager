const firebase = require('firebase');
const config = {
  apiKey: 'AIzaSyC8yxoLCLzeUu-xZ-FxlMQL4fqJ1tgSdKI',
  authDomain: 'tasks-icmadrid.firebaseapp.com',
  databaseURL: 'https://tasks-icmadrid.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '655248702737',
};
firebase.initializeApp(config);
export default config;

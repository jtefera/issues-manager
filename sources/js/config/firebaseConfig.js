const firebase = require('firebase');
const config = {
  apiKey: "AIzaSyBJYkdrA2-sNrK5ZyLT8zLkxPNNhrrkrAU",
  authDomain: "issue-tracker-48b5b.firebaseapp.com",
  databaseURL: "https://issue-tracker-48b5b.firebaseio.com",
  storageBucket: "issue-tracker-48b5b.appspot.com",
  messagingSenderId: "146086796907"
};
firebase.initializeApp(config);
export default config;

const prodConfig = {
  // apiKey           : 'YOUR_API_KEY',
  // authDomain       : 'your-app.firebaseapp.com',
  // databaseURL      : 'https://your-app.firebaseio.com',
  // projectId        : 'your-app',
  // storageBucket    : 'your-app.appspot.com',
  // messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
};

const devConfig = {
  apiKey: "AIzaSyCb3o13sINPTbkNoS5KD7xKyfHUdiVXAhM",
  authDomain: "venax-7483a.firebaseapp.com",
  projectId: "venax-7483a",
  storageBucket: "venax-7483a.appspot.com",
  messagingSenderId: "118246009433",
  appId: "1:118246009433:web:74f7bc6932ffca5bce1f48",
  measurementId: "G-5HTNDM8D6F"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

export default config;

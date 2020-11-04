import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './n1-main/m1-ui/App';
import reportWebVitals from './reportWebVitals';
import  firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDBWyBjxTnrwLTd-D9KvDNpnNHG_LLAvas",
    authDomain: "cart-ce719.firebaseapp.com",
    databaseURL: "https://cart-ce719.firebaseio.com",
    projectId: "cart-ce719",
    storageBucket: "cart-ce719.appspot.com",
    messagingSenderId: "880768832820",
    appId: "1:880768832820:web:6aab9118790f7ff791c161"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

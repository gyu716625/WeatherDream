import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import socketio from 'socket.io-client';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// const socket = socketio.connect('http://14.50.138.127:3001/chat/14');
// (() => {
//     socket.emit('init', { name: 'bella' });
  
//     socket.on('welcome', (msg) => {
//       console.log(msg);
//     });
// })();
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/index'


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const savePosition = () => {
//   let sidebar = document.querySelector('.container-fluid')
//   let top = localStorage.getItem("sidebar-scroll")
//   if (top !== null) {
//       sidebar.scrollTop = parseInt(top, 10)
//   }
//   window.addEventListener("beforeunload", () => {
//       localStorage.setItem("sidebar-scroll", sidebar.scrollTop)
//   })
// }

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);







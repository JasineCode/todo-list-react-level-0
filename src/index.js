//dependances
import React from 'react';
import ReactDOM from 'react-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//component
import App from './App';
import { Provider } from 'react-redux';
import store from './service/store';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/reboot.css';
import Header from './common/Header';
import Main from './main/Main';
import Create from './create/Create';
import Created from './create/Created';
import Join from './join/Join';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Main} />
      <Route path='/create' component={Create} />
      <Route path='/created' component={Created} />
      <Route path='/join' component={Join} />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

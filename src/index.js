import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login'
import AddProfile from  './components/Users/AddProfile'
import ListUserPage from './components/Users/ListUserPage'
import SchedulePage from './components/Schedule/SchedulePage'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="root">
    <BrowserRouter>
      <Switch>
        <Route path="/users" component={ListUserPage}/>
        <Route path="/user/add" component={AddProfile}/>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={App} />
        <Route path="/schedule" exact component={SchedulePage} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

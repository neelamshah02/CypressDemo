import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import TodoList from './components/TodoList';
import ReactForm from './components/ReactForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render (
  <Router>
  <div >


    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/form">
        <ReactForm />
      </Route>
      <Route path="/todo">
        <TodoList />
      </Route>
      <Route path="/">
        <ReactForm />
      </Route>
    </Switch>
    <nav className="router">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="login-form">
          <Link to="/form">React Form</Link>
        </li>
        <li className="todo"> 
          <Link to="/todo">To-Do Task</Link>
        </li>
      </ul>
    </nav>
  </div>
</Router>,
document.querySelector ('#container')
);

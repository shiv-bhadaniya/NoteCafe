import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Todo from "./components/todo/Todo";
import Texteditor from "./components/texteditor/Texteditor";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/text">
            <Texteditor />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

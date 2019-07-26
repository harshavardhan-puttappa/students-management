import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Students from "./components/students/Students";
import About from "./components/layouts/About";
import EditStudent from "./components/students/EditStudent";
import AddStudent from "./components/students/AddStudent";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/about" component={About} />
            <Route exact path="/students/add" component={AddStudent} />
            <Route exact path="/students/edit/:id" component={EditStudent} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;

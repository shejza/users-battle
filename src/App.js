import React, {Component} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Popular from "./components/Popular";
import Navigation from "./components/Navigation";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Battle from "./components/Battle";
import Home from "./components/Home";
import Redirect from "react-router-dom/es/Redirect";
import NotFound from "./notfound";
import Results from "./components/Results";

class App extends Component {


  render() {

    return (
<div>
        <Navigation/>
      <main>
<div className="container">
        <Switch>
          <Route path="/popular" component={Popular}/>
          <Route path="/battle" exact component={Battle}/>
          <Route path="/battle/results"  component={Results}/>
          <Route path="/" exact component={Home}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect to="/not-found"/>
        </Switch>
</div>
      </main>
</div>
    );
  }
}

export default App;

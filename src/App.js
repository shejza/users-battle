import React, {Component} from 'react';
import './App.css';
import Customers from "./components/Customer";
import Rentals from "./components/Rentals";
import Movies from "./components/Movies";
import {Route, Switch, Redirect} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import NotFound from "./notfound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import MoviesForm from "./components/movieForm";
import Logout from "./components/logout";
import auth from "./services/authService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }


  render() {
    const { user } = this.state;
    return (
      <main className="container">
        <Sidebar user={this.state.user}/>
        <ToastContainer/>
        <Switch>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/movies/:id" component={MovieForm}/>
          <Route
            path="/movies"
            render={props => <Movies {...props} user={this.state.user} />}
          />
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" exact component={Rentals}/>
          <Route path="/not-found" component={NotFound}/>
          <Route path="/" exact component={Movies}/>
          <Redirect from="/" exact to="/movies"/>
          <Redirect to="/not-found"/>
        </Switch>
      </main>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import Movies from "./components/Movies";
import Sidebar from "./components/Sidebar";
import Customers from "./components/Customer";
import Rentals from "./components/Rentals";
import Logout from "./components/logout";
import NotFound from "./notfound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ProtectedRoute from "./components/common/protectedRoute";

import auth from "./services/authService";


import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {};

  componentDidMount() {

    const user = auth.getCurrentUser();
    console.log('asdasd state' + auth);
    this.setState({ user });

  }


  render() {
 const {user} = this.state;
    console.log('shej state' + auth);
    return (
      <main className="container">
        <Sidebar user={user}/>
        <ToastContainer/>
        <Switch>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/logout" component={Logout}/>
          <ProtectedRoute path="/movies/:id"
                 component={MovieForm}/>
          <Route
            path="/movies"
            render={props => <Movies {...props} user={user} />}
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

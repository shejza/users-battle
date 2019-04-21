import React from 'react';
import '../App.css';
import Movies from "./Movies";
import {Link} from 'react-router-dom';
import Customers from "./Customer";
import Rentals from "./Rentals";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";


const Sidebar = ({user}) => {
  return (<div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link to="/" component={Movies} className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/customers" component={Customers} className="nav-link">Customers</Link>
            </li>

            <li className="nav-item">
              <Link to="/rentals" component={Rentals} className="nav-link">Rentals</Link>
            </li>
            {!user && (
            <React.Fragment>
            <li className="nav-item">
              <Link to="/login" component={LoginForm} className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" component={RegisterForm} className="nav-link">Register</Link>
            </li>
              </React.Fragment>
              )}
            {user && (
            <React.Fragment>

              <li className="nav-item">
                <Link to="/profile" component={LoginForm} className="nav-link">{user.name}</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" component={RegisterForm} className="nav-link">Logout</Link>
              </li>
            </React.Fragment>
            )
            }
          </ul>
        </div>
      </nav>

    </div>
  );

};


export default Sidebar;

import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Popular from "./Popular";
import Battle from "./Battle";
import Home from "./Home";



const Navigation = () => {
  return (<div>
      <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link to="/" component={Home} className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active">
              <Link to="/battle" component={Battle} className="nav-link">Battle <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active">
              <Link to="/popular" component={Popular} className="nav-link">Popular <span className="sr-only">(current)</span></Link>
            </li>

          </ul>
        </div>
      </nav>

    </div>
  );

};


export default Navigation;

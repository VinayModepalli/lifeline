import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        return ( 
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/dashboard">LifeLine</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="/">Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
         );
    }
}
 
export default Navbar;
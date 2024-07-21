import React from 'react';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light">
  <div class="container">
    <a class="navbar-brand" href="/">Car Rental</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample05">
      <ul class="navbar-nav ml-auto"> {/* Centered Links */}
        <li class="nav-item">
          <a class="nav-link active" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>


      </ul>
      <ul class="navbar-nav ml-auto"> {/* Right-side Login */}
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default NavBar;

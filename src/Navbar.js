import React from "react";
import { Link, NavLink } from "react-router-dom";
import img1 from"./logo1.png";



function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={img1}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav justify-content-lg-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link active" aria-current="page" href="#"><NavLink to ="/">Home</NavLink></a>
        <a class="nav-link active mx-lg-5" aria-current="page" href="#"><NavLink to = "/Skills">Skills</NavLink></a>
        <a class="nav-link active" aria-current="page" href="#"><NavLink to = "/Project">Project</NavLink></a>
        <a class="nav-link active mx-lg-5" aria-current="page" href="#"><NavLink to = "/Contact">Contact me</NavLink></a>
        </div>
    </div>
  </div>
</nav>
);
}

export default Navbar;
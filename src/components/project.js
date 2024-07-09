import React from "react";
import img2 from"./desktop.webp";

function Project(){
    return(
    <div class="container-fluid">
        {/* ------- Left content-------- */}
        <div class="row text-center">
          <div class="col-lg-6" id="content3">
            <img src={img2} class="mt-5"></img>
          </div>
          {/* ------- Right content-------- */}
          <div class="col-lg-6" id="content4">
            <h1 class="mt-5">Projects</h1>
            <p class="mt-3 mb-5">My Project uses various technologies to make the model more accurate and stable.
                 As of now, I haven't done many projects but in near future I will make more projects.</p>
          </div>
        </div>
    </div>);
}
export default Project;
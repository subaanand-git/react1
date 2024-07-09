import React from "react";

function Home(){
    return(
    <div class="container-fluid" >
        {/* ------- Left content-------- */}
        <div class="row text-center">
             <div class="col-lg-6" id="content1">
                <h2 class="mt-lg-5 ms-lg-5">Hello All! I'm Suba Anand <span>&#128075;</span></h2>
                <p class="mt-lg-4 ms-lg-5">
                A passionate Developer having an experience in
                  Full stack Web Development and Software Testing and want to develop<br/>
                 sustainable and scalable social and technical systems to create
                  impact.
                </p>
                <i class="bi bi-google" id="mail"></i>
                <i class="bi bi-instagram mx-5" id="insta"></i>
                <i class="bi bi-linkedin" id="link"></i>
                <i class="bi bi-github mx-5" id="git"></i>
             </div>
             {/* ------- Right content-------- */}
             <div class="col-lg-6 mt-lg-0 my-5" id="content2">
              <img src="https://cdn.pixabay.com/animation/2022/11/10/13/22/13-22-56-246_256.gif"></img>
             </div>
       </div>






















      </div>
      
    
      );
}

export default Home;
import React from "react";

function Contact(){
    return(<div class="container-fluid">
        <div class="row text-center">
          {/* ------- Left content-------- */}
            <div class="col-lg-6" id="content5">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJI70GOV94uadGHnBqfK7ytybiFZjsLDYA3Q&s" class="mt-5"></img>
             </div>
          <div class="col-lg-6" id="content4">
            {/* ------- Right content-------- */}
                   <h1 class="mt-5">Reach out to me!</h1>
                  <p class="mt-3">I am available on almost every social media platform.
                   You want to discuss a project or just want to say hi? My Inbox is always open for you.</p>
                   <i class="bi bi-whatsapp" id="whatsup"></i>
                   <i class="bi bi-linkedin mx-5" id="link"></i>
                   <i class="bi bi-envelope-fill" id="mail"></i>
                   <i class="bi bi-github mx-5" id="git"></i>
            </div>
        </div>
{/*---Footer------ */}
        <div class="row justify-content-md-center">
          <div class="col-md-auto px-5 my-5" id="content7">
              Let's connect and build something together!
          </div>  
        </div>
 </div>
       );
}
export default Contact;
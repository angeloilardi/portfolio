import React from "react";
import './style.css';

function Home(params) {
    return (
        <div className="container-fluid bg">
            <div class="row align-items-center text-white">
                <div class="col-lg-4 mt-3"><img className="bio-pic" src={require('./../../images/2420317.jpeg')} alt=""></img></div>
                <div class="col-lg-8 home-intro">
                    <h1 className="mb-2">HEY, I'M ANGELO ILARDI!</h1>
                    <h2 className="mb-2">A front-end web developer striving to build stunning Web Apps that people love to use.</h2>
                    <h3>Here you can find out more about my projects and get in touch with me.</h3>
                </div>
            </div>
        </div>
    )
    
}

export default Home;
import React from "react";
import './style.css';

function Contacts() {
    return (
        <>
            <div class="container-fluid text-white bg">
                <div className="row">
                    <div class="col-sm-12 col-md-8 col-lg-6">
                        <form className="m-4">
                            <h3>Get in touch</h3>
                            <div class="mb-3">
                                <label for="name" class="form-label">Your name</label>
                                <input type="text" class="form-control" id="name" placeholder="" />
                            </div>
                            <div className="mb-3">
                            <label for="email" class="form-label">Your email address</label>
                            <input type="email" class="form-control" id="email" placeholder="" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
                                <textarea class="form-control" id="message" rows="3"></textarea>
                            </div>
                            <a class="btn btn-primary" type="submit">Send</a>
                        </form>
                        
                    </div>
                    
                </div>
                
                <h3 className="m-3">You can also find me on</h3>
                <div className="d-flex m-3">
                    <div class="contacts-item m-1"><a href="https://github.com/helldorado82" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></div>
                    <div class="contacts-item m-1"><a href="https://www.linkedin.com/in/angelo-ilardi/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></div>
                    <div class="contacts-item m-1"><a href="mailto:angeloilardi.dev@gmail.com"><i class="fa-regular fa-envelope"></i></a></div>
                </div>
            </div>
        </>
    )
}

export default Contacts;
import React from "react";



function Project(props) {
    const { name, description, screenshot, gitHubLink, livePageLink } = props;
    return (
        <div className="card project g-0 m-3 col-lg-3 col-md-6" >
            <img src={screenshot} className="card-img-top img-fluid" alt="..." style={{ height: "70%", width: "100" }} />

            <div className="card-body project-body">
                <h5 className="card-title">{name}  <a href={livePageLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>    <a href={gitHubLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                </h5>
                <p className="card-text">{description}</p>

            </div>
        </div>
    )
}

export default Project;
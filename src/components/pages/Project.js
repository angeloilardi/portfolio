import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function Project(props) {
        const { name, description, screenshot, gitHubLink, livePageLink } = props;
        return (
            <div className="card m-3" style={{width: "25rem"}}>
                <img src={screenshot} className="card-img-top" alt="..." style={{height: "60%"} } />
                <div className="card-body">
                    <h5 className="card-title">{name}  <a href={livePageLink} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>    <a href={gitHubLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        </h5>
                    <p className="card-text">{description}</p>
                    
                </div>
            </div>
        )
    }

export default Project;
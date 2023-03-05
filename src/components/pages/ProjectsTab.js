import React from "react";
import Project from "./Project";
import projects from "../projects.json";

function ProjectsTab() {
    return (
        
        <div className="row m-3 bg-dark">
            {projects.map(p => {
               
                return <Project
                    name={p.name}
                    description={p.description}
                    screenshot={require(`./../../images/${p.screenshot}`)}
                    gitHubLink={p.gitHubLink}
                    livePageLink={p.livePageLink}
                />
            })
            }
        </div>
    )
};

export default ProjectsTab;
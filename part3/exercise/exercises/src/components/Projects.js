import { useState } from "react";
import data from "../data.json";



export default function MyProjects() {
    const [index, setIndex] = useState(0);
    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
       }

       let projects = data.projects;
       let project = projects[index];

    return(
        <div>
            <button onClick={handleClick}>Next</button>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.sources}>{project.sources}</a>
        </div>
    ); 
}

import { useEffect } from "react";
import { useState } from "react";
import { projectsData } from "../data";
// import { projectsNav } from "../data";
import ProjectCard from "./ProjectCard";

const Projects=()=>{
    const [item, setitem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    
    const handleClick=(e, index)=>{
        setitem({name: e.target.textContent.toLowerCase()})
        setActive(index);
    }

    useEffect(()=>{
        if(item.name === 'all')
        {
            setProjects(projectsData);
        }
        else{
            const newProj = projectsData.filter((el)=>{
                return el.category.toLowerCase()===item.name;
            });
            setProjects(newProj);
        }

    },[item])

    return <div>
        {/* <nav className="mb-12 max-w-xl mx-auto border">
            <ul className="flex flex-col md:flex-row
            justify-evenly items-center text-white">
                {
                    projectsNav.map((el, index)=>{
                        return <li 
                        onClick={(e)=>{handleClick(e, index)}}
                        className={`${active === index ? 'active': ''} 
                        cursor-pointer capitalize m-4 `}
                        key={index}>
                            {el.name}
                        </li>
                    })
                }
            </ul>
        </nav> */}

        {/* Projects Grid Section */}
        <section className="grid lg:grid-cols-2
        gap-y-12 lg:gap-x-8 lg:gap-y-8  px-2 py-2">
            {
                projects.map((el)=>{
                    return <ProjectCard key={el.id} item={el} />
                })
            }
        </section>
    </div>
}

export default Projects;
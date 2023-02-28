import { Link } from "react-scroll";

const ProjectCard=({item})=>{
    
    return <div key={item.id} 
    className='flex flex-col items-center text-center'>
        <div className="mb-8">
            <img
            className="rounded-md 
            hover:scale-105 transition-all duration-500" 
            src={item.image} alt="projImg" />
        </div>
        <p className="capitalize text-accent text-sm mb-3">
            {item.techStack}
        </p>
        <h3 className="text-2xl font-semibold capitalize mb-3">
            {item.name}
        </h3>
        <p className="text-base text-paragraph mb-4">
            {item.description}
        </p>
        {/* Buttons for Github and Deployed link */}
        <div className="flex flex-row gap-6 rounded-md">
            <a href={item.github} target='_blank'>
                <button 
                className="btn bg-tertiary text-sm rounded-md">
                    GitHub
                </button>
            </a>

            <a href={item.deployedLink} target='_blank'>
                <button className="btn bg-tertiary text-sm rounded-md">
                    View Live
                </button>
            </a>
        </div>
    </div>
}

export default ProjectCard;
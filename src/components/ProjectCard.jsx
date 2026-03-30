import "../styles/ProjectCard.css"

function ProjectCard({ project }){
    return(
        <div className="project-card">
            <img src={project.image} alt={`imagem do projeto ${project.title}`} />

            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="techs">
                    {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>

                <div className="links">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                        Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
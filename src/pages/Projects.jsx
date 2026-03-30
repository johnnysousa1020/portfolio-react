import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css"

function Projects(){
    return(
        <section className="projects" id="projects">
            <h2>Meus Projetos</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </section>
    )
}

export default Projects;
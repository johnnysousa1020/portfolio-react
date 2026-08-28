import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

function Projects() {

    const featuresOrder = [
        "CineMind AI",
        "Catálogo de Filmes e Séries",
        "TechShop"
    ]

    const featuredProjects = projects
    .filter((project) => project.featured)
    .sort(
        (a, b) => featuresOrder.indexOf(a.title) - featuresOrder.indexOf(b.title)
    );

    const otherProjects = projects.filter(
        (project) => !project.featured
    );

    return (
        <section className="projects" id="projects">

            {/* CABEÇALHO DA SEÇÃO */}
            <div className="projects-header">

                <span className="section-label">
                    MEUS TRABALHOS
                </span>

                <h2>
                    Projetos em <span>destaque</span>
                </h2>

                <p>
                    Alguns dos projetos que desenvolvi ao longo da minha
                    jornada como desenvolvedor Front-End.
                </p>

            </div>


            {/* PROJETOS EM DESTAQUE */}
            <div className="featured-projects">

                {featuredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        featured={true}
                    />
                ))}

            </div>


            {/* OUTROS PROJETOS */}
            {otherProjects.length > 0 && (

                <div className="other-projects">

                    <div className="other-projects-header">

                        <h3>
                            Outros projetos
                        </h3>

                        <p>
                            Confira também outros projetos que fazem parte
                            da minha experiência e evolução como desenvolvedor.
                        </p>

                    </div>


                    <div className="projects-grid">

                        {otherProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                featured={false}
                            />
                        ))}

                    </div>

                </div>

            )}

        </section>
    );
}

export default Projects;















/*
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
*/
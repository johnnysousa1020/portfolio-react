import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaPlug } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import "../styles/Skills.css";

function Skills() {

    const skills = [
        {
            name: "React",
            category: "Front-End",
            icon: <FaReact />
        },
        {
            name: "JavaScript",
            category: "Front-End",
            icon: <FaJsSquare />
        },
        {
            name: "HTML5",
            category: "Front-End",
            icon: <FaHtml5 />
        },
        {
            name: "CSS3",
            category: "Front-End",
            icon: <FaCss3Alt />
        },
        {
            name: "Node.js",
            category: "Back-End",
            icon: <FaNodeJs />
        },
        {
            name: "Express",
            category: "Back-End",
            icon: <SiExpress />
        },
        {
            name: "MongoDB",
            category: "Database",
            icon: <SiMongodb />
        },
        {
            name: "Git",
            category: "Versionamento",
            icon: <FaGitAlt />
        },
        {
            name: "GitHub",
            category: "Versionamento",
            icon: <FaGithub />
        },
        {
            name: "APIs",
            category: "Integração",
            icon: <FaPlug />
        }
    ];

    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                {/* INTRODUÇÃO */}
                <div className="skills-header">

                    <span className="section-label">
                        TECNOLOGIAS
                    </span>

                    <h2>
                        Minhas <span>habilidades</span>
                    </h2>

                    <p>
                        Tecnologias que utilizo para transformar ideias
                        em projetos reais, modernos e funcionais.
                    </p>

                </div>


                {/* TECNOLOGIAS */}
                <div className="skills-grid">

                    {skills.map((skill) => (

                        <div
                            className="skill-card"
                            key={skill.name}
                        >

                            <div className="skill-icon">
                                {skill.icon}
                            </div>

                            <h3>
                                {skill.name}
                            </h3>

                            <span>
                                {skill.category}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;
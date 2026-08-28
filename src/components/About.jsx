import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import "../styles/About.css";
import minhaFoto from "../assets/sobre.jpg";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                {/* CABEÇALHO */}

                <div className="about-header">

                    <span className="section-label">
                        QUEM SOU EU
                    </span>

                    <h2>
                        Sobre <span>mim</span>
                    </h2>

                    <p>
                        Uma breve apresentação sobre minha jornada
                        como desenvolvedor.
                    </p>

                </div>


                {/* CONTEÚDO */}

                <div className="about-content">

                    {/* FOTO */}

                    <div className="about-profile">

                        <div className="about-photo-wrapper">

                            <img
                                src={minhaFoto}
                                alt="Foto de Johnny Sousa"
                                className="about-photo"
                            />

                        </div>

                        <h3>
                            Front-End Developer
                        </h3>

                        <span className="about-technologies">
                            React • JavaScript • APIs
                        </span>

                    </div>


                    {/* TEXTO */}

                    <div className="about-text">

                        <p>
                            Olá! Meu nome é <span>Johnny Sousa</span>,
                            sou desenvolvedor <strong>Front-End </strong>
                            apaixonado por criar interfaces modernas,
                            responsivas e bem estruturadas.
                        </p>

                        <p>
                            Tenho experiência prática desenvolvendo
                            projetos com <strong>HTML, CSS, JavaScript
                            e React</strong>, além de trabalhar com APIs
                            e tecnologias de Back-End como
                            <strong> Node.js, Express e MongoDB</strong>.
                            Ao longo da minha jornada, venho criando
                            aplicações completas, buscando sempre unir
                            uma boa experiência visual com funcionalidades reais.
                        </p>

                        <p>
                            Entre meus projetos estão o
                            <strong> CineMind AI</strong>, uma aplicação
                            que integra Inteligência Artificial, APIs e
                            Back-End, o <strong>CineStream</strong>, uma
                            plataforma de filmes e séries, e o
                            <strong> TechShop</strong>, um projeto de
                            e-commerce.
                        </p>

                        <p>
                            Busco constantemente aprimorar meus
                            conhecimentos, aprender novas tecnologias e
                            transformar ideias em aplicações cada vez
                            mais profissionais. Meu objetivo é continuar
                            evoluindo como desenvolvedor e contribuir para
                            projetos que gerem uma boa experiência para
                            seus usuários.
                        </p>


                        {/* REDES */}

                        <div className="about-links">

                            <a
                                href="https://github.com/johnnysousa1020"
                                target="_blank"
                                rel="noreferrer"
                                className="about-link"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/johnny-sousa/"
                                target="_blank"
                                rel="noreferrer"
                                className="about-link"
                            >
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;

















/*
import "../styles/About.css"
import minhaFoto from "../assets/sobre.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About(){
    return(
        <section className="about" id="about">
            <div className="about-container">
                <img src={minhaFoto} alt="Foto de Johnny" className="about-photo"/>

                <div className="about-text">
                    <h2>Sobre mim</h2>
                    <p>
                        Olá! Meu nome e <span>Johnny Sousa</span>, sou desenvolvedor
                        <strong> Front-end</strong> apaixonado por criar interfaces modernas,
                        responsivas e bem estruturadas.
                    </p>

                    <p>
                        Trabalho com <strong>HTML, CSS, JavaScript e React</strong>, e venho
                        desenvolvendo projetos próprios como catálogos de filmes e séries
                        usando API, lista de tarefas, controle de gastos e sistemas voltados
                        para negócios reais.
                    </p>

                    <p>
                        Busco evoluir constantemente, aprendendo novas tecnologias e aprimorando
                        a experiência do usuário em cada projeto.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
*/
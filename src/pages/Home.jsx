import "../styles/Home.css";

function Home() {
    return (
        <main className="home" id="home">

            <section className="hero">

                <div className="hero-overlay"></div>

                <div className="hero-container">

                    <div className="hero-content">

                        <span className="hero-badge">
                            <span className="status-dot"></span>
                            DESENVOLVEDOR FRONT-END
                        </span>

                        <h1>
                            Johnny Sousa
                        </h1>

                        <h2>
                            Desenvolvedor <span>Front-End</span>
                        </h2>

                        <p className="hero-description">
                            Desenvolvo aplicações web modernas, responsivas e
                            funcionais, com foco em criar experiências digitais
                            que realmente fazem a diferença.
                        </p>

                        <div className="hero-technologies">

                            <div className="technology">
                                <span className="technology-icon react-icon">
                                    ⚛
                                </span>
                                <span>React</span>
                            </div>

                            <div className="technology">
                                <span className="technology-icon js-icon">
                                    JS
                                </span>
                                <span>JavaScript</span>
                            </div>

                            <div className="technology">
                                <span className="technology-icon html-icon">
                                    HTML
                                </span>
                                <span>HTML5</span>
                            </div>

                            <div className="technology">
                                <span className="technology-icon css-icon">
                                    CSS
                                </span>
                                <span>CSS3</span>
                            </div>

                            <div className="technology">
                                <span className="technology-icon api-icon">
                                    API
                                </span>
                                <span>APIs</span>
                            </div>

                        </div>

                        <div className="hero-buttons">

                            <a
                                href="#projects"
                                className="btn primary"
                            >
                                Ver meus projetos
                                <span>→</span>
                            </a>

                            <a
                                href="#contact"
                                className="btn outline"
                            >
                                Entrar em contato
                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Home;


/*
import "../styles/Home.css"

function Home(){
    return(
        <main className="home" id="home">
            <section className="hero">

                <div className="hero-overlay"></div>
                
                <div className="hero-content">
                    <h1>
                        Johnny Sousa <br />
                        <span>Desenvolvedor Front-End</span>
                    </h1>
                    <p>
                        Desenvolvedor front-end focado em criar interfaces modernas,
                        responsivas e funcionais utilizando React, JavaScript e APis. 
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary">
                            Ver Projetos
                        </a>
                        <a 
                        href="https://github.com/johnnysousa1020"
                        target="_blank"
                        rel="noreferrer"
                        className="btn outline">
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;
*/
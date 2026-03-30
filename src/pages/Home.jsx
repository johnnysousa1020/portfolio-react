import "../styles/Home.css"

function Home(){
    return(
        <main className="home" id="home">
            <section className="hero">
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
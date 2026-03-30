import "../styles/About.css"
import minhaFoto from "../assets/sobre.jpg"

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
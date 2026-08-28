import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer" id="contact">

            <div className="footer-container">

                {/* CHAMADA PARA AÇÃO */}

                <div className="footer-content">

                    <span className="footer-label">
                        ENTRE EM CONTATO
                    </span>

                    <h2>
                        Vamos construir algo <span>juntos?</span>
                    </h2>

                    <p>
                        Estou aberto a novas oportunidades, projetos
                        e desafios profissionais.
                    </p>

                </div>


                {/* LINKS */}

                <div className="footer-links">

                    <a
                        href="https://github.com/johnnysousa1020"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/johnny-sousa"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="mailto:trabalhosouza567@gmail.com"
                        className="footer-link"
                    >
                        <FaEnvelope />
                        <span>Email</span>
                    </a>

                </div>


                {/* RODAPÉ */}

                <div className="footer-bottom">

                    <span className="footer-logo">
                        Johnny.dev
                    </span>

                    <span className="copyright">
                        © {new Date().getFullYear()} Johnny Sousa.
                        Todos os direitos reservados.
                    </span>

                </div>

            </div>

        </footer>
    );
}

export default Footer;














/*
import "../styles/Footer.css"

function Footer(){
    return(
        <footer className="footer" id="contact">
            <div className="footer-container">
                <h3>Johnny Sousa</h3>
                <p>Desenvolvedor Front-End</p>

                <div className="footer-links">
                    <a 
                    href="https://github.com/johnnysousa1020"
                    target="_blank"
                    rel="noreferrer">
                        GitHub
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/johnny-sousa"
                    target="_blank"
                    rel="noreferrer">
                        Linkedin
                    </a>
                    <a href="mailto:trabalhosouza567@gmail.com">Email</a>
                </div>

                <span className="copyright">
                    {new Date().getFullYear()} Johnny Sousa. Todos os direitos reservados
                </span>
            </div>
        </footer>
    )
}

export default Footer;
*/
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
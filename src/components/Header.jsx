import { useState } from "react";
import "../styles/Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container">

                {/* LOGO */}
                <a href="#home" className="logo">
                    Johnny<span>.dev</span>
                </a>

                {/* NAVEGAÇÃO DESKTOP */}
                <nav className="nav">
                    <a href="#home" className="active">
                        Home
                    </a>

                    <a href="#projects">
                        Projetos
                    </a>

                    <a href="#about">
                        Sobre
                    </a>

                    <a href="#contact">
                        Contato
                    </a>
                </nav>

                {/* REDES SOCIAIS */}
                <div className="header-socials">

                    <a
                        href="https://www.linkedin.com/in/johnny-sousa/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link linkedin"
                        aria-label="LinkedIn"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V9H3.56v11.45ZM22.22 0H1.77C.79 0 .01.77.01 1.72v20.56C.01 23.23.79 24 1.77 24h20.45c.98 0 1.77-.77 1.77-1.72V1.72C23.99.77 23.2 0 22.22 0Z" />
                        </svg>

                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/johnnysousa1020"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link github"
                        aria-label="GitHub"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3Z" />
                        </svg>

                        <span>GitHub</span>
                    </a>

                </div>

                {/* BOTÃO HAMBURGER */}
                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

            {/* MENU MOBILE */}
            <nav className={`mobile-nav ${menuOpen ? "show" : ""}`}>

                <a href="#home" onClick={closeMenu}>
                    Home
                </a>

                <a href="#projects" onClick={closeMenu}>
                    Projetos
                </a>

                <a href="#about" onClick={closeMenu}>
                    Sobre
                </a>

                <a href="#contact" onClick={closeMenu}>
                    Contato
                </a>

                <div className="mobile-socials">

                    <a
                        href="https://www.linkedin.com/in/johnny-sousa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/johnnysousa1020"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                </div>

            </nav>
        </header>
    );
}

export default Header;


/*
import { useState } from "react";
import "../styles/Header.css"

function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return(
        <header className="header">
            <div className="container">

                <a href="#home" className="logo">Johnny<span>.dev</span></a>

                <nav className="nav">
                    <a href="#home" className="active">Home</a>
                    <a href="#projects">Projetos</a>
                    <a href="#about">Sobre</a>
                    <a href="#contact">Contato</a>
                </nav>

                <div className="header-socials">
                    <a 
                    href="https://www.linkedin.com/in/johnnysousa/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link linkedin"
                    aria-label="Linkedin">
                    <svg>

                        <path />
                    </svg>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
*/
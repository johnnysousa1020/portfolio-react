import "../styles/Header.css"

function Header(){
    return(
        <header className="header">
            <div className="container">
                <h2 className="logo">Johnny.dev</h2>

                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#projects">Projetos</a>
                    <a href="#about">Sobre</a>
                    <a href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;
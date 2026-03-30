import filmesImg from "../assets/filmes.png"
import tarefasImg from "../assets/lista.png"
import gastosImg from "../assets/gastos.png"
import hospedagemImg from "../assets/hotel.png"
import churrascariaImg from "../assets/churrascaria.png"
import pizzariaImg from "../assets/pizzaria.png"

const projects = [
    {
        id: 1,
        title: "Catálogo de Filmes e Séries",
        description: "Aplicação em React que consome a API do TMDB para listar filmes, séries, com busca e detalhes.",
        technologies: ["React", "JavaScript", "API TMDB", "CSS"],
        image: filmesImg,
        github: "https://github.com/johnnysousa1020/Catalago-de-Filmes-e-Series",
        demo: "https://johnnysousa1020.github.io/Catalago-de-Filmes-e-Series/"
    },
    {
        id: 2,
        title: "Lista de Tarefas",
        description: "Aplicação para gerenciamento de tarefas com adição, remoção e controle de estado.",
        technologies: ["React", "JavaScript", "CSS"],
        image: tarefasImg,
        github: "https://github.com/johnnysousa1020/lista-de-tarefas",
        demo: "https://johnnysousa1020.github.io/lista-de-tarefas/"
    },
    {
        id: 3,
        title: "Controle de Gastos",
        description: "Aplicação para controle financeiro com cálculo automático de entradas e saídas.",
        technologies: ["React", "JavaScript", "CSS"],
        image: gastosImg,
        github: "https://github.com/johnnysousa1020/Controle-de-Gastos",
        demo: "https://johnnysousa1020.github.io/Controle-de-Gastos/"
    },
    {
        id: 4,
        title: "Site de Churrascaria",
        description: "Site institucional para churrascaria, com foco em design e experiência do usuário.",
        technologies: ["React", "CSS"],
        image: churrascariaImg,
        github: "https://github.com/johnnysousa1020/Churrascaria-react",
        demo: "https://onlinemall.online/"
    },
    {
        id: 5,
        title: "Site de Pizzaria",
        description: "Site institucional para Pizzaria, atrativo para uma pizzaria fictícia, focando em experiência do usuário.",
        technologies: ["React", "CSS"],
        image: pizzariaImg,
        github: "https://github.com/johnnysousa1020/Pizzaria-react",
        demo: "https://johnnysousa1020.github.io/Pizzaria-react/"
    },
    {
        id: 6,
        title: "Site de Hospedagem",
        description: "Aurora Stay é um projeto de site institucional para uma rede fictícia de hotéis premium localizados em São Paulo, Guarujá e Ubatuba.",
        technologies: ["React", "JavaScript", "CSS"],
        image: hospedagemImg,
        github: "https://github.com/johnnysousa1020/aurora-stay",
        demo: "https://johnnysousa1020.github.io/aurora-stay/"
    },
]

export default projects;
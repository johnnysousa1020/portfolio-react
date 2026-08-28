import filmesImg from "../assets/nova-cine.jpg";
import gastosImg from "../assets/gastos.png";
import hospedagemImg from "../assets/hotel.png";
import churrascariaImg from "../assets/churrascaria.png";
import techshp from "../assets/nova-techshop.jpg";
import imobi from "../assets/banner-imobi.png";
import receita from "../assets/receita-recipe.png";
import cinemind from "../assets/nova-ia.jpg";

const projects = [
    {
        id: 1,
        title: "Catálogo de Filmes e Séries",
        description: "Aplicação em React que consome a API do TMDB para listar filmes, séries, com busca e detalhes.",
        technologies: ["React", "JavaScript", "API TMDB", "CSS"],
        image: filmesImg,
        github: "https://github.com/johnnysousa1020/Catalago-de-Filmes-e-Series",
        demo: "https://johnnysousa1020.github.io/Catalago-de-Filmes-e-Series/",
        featured: true
    },
    {
        id: 2,
        title: "ImobiFinder",
        description: "O projeto foi criado com foco em um design elegante, experiência visual moderna e interface responsiva.",
        technologies: ["React", "JavaScript", "CSS"],
        image: imobi,
        github: "https://github.com/johnnysousa1020/imobifinder",
        demo: "https://johnnysousa1020.github.io/imobifinder/",
        featured: false
    },
    {
        id: 3,
        title: "Controle de Gastos",
        description: "Aplicação para controle financeiro com cálculo automático de entradas e saídas.",
        technologies: ["React", "JavaScript", "CSS"],
        image: gastosImg,
        github: "https://github.com/johnnysousa1020/Controle-de-Gastos",
        demo: "https://johnnysousa1020.github.io/Controle-de-Gastos/",
        featured: false
    },
    {
        id: 4,
        title: "Site de Churrascaria",
        description: "Site institucional para churrascaria, com foco em design e experiência do usuário.",
        technologies: ["React", "CSS"],
        image: churrascariaImg,
        github: "https://github.com/johnnysousa1020/Churrascaria-react",
        demo: "https://onlinemall.online/",
        featured: false
    },
    {
        id: 5,
        title: "RecipeFinder",
        description: "Aplicação de receitas desenvolvida com React e TheMealDB API.",
        technologies: ["React", "CSS"],
        image: receita,
        github: "https://github.com/johnnysousa1020/RecipeFinder",
        demo: "https://johnnysousa1020.github.io/RecipeFinder/",
        featured: false
    },
    {
        id: 6,
        title: "Site de Hospedagem",
        description: "Aurora Stay é um projeto de site institucional para uma rede fictícia de hotéis premium localizados em São Paulo, Guarujá e Ubatuba.",
        technologies: ["React", "JavaScript", "CSS"],
        image: hospedagemImg,
        github: "https://github.com/johnnysousa1020/aurora-stay",
        demo: "https://johnnysousa1020.github.io/aurora-stay/",
        featured: false
    },
    {
        id: 7,
        title: "TechShop",
        description: "Projeto de e-commerce desenvolvido com foco em experiência do usuário, responsividade e funcionalidades modernas.",
        technologies: ["React", "JavaScript", "CSS"],
        image: techshp,
        github: "https://github.com/johnnysousa1020/techshop",
        demo: "https://johnnysousa1020.github.io/techshop/",
        featured: true
    },
    {
        id: 8,
        title: "CineMind AI",
        description: "Desenvolvi uma aplicação completa utilizando React, Node.js, Express, APIs externas e Inteligência Artificial, com Front End e Backend.",
        technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
        image: cinemind,
        github: "https://github.com/johnnysousa1020/CineMind-AI",
        demo: "https://cine-mind-ai-virid.vercel.app",
        featured: true
    },
];

export default projects;

















/*
import filmesImg from "../assets/filmes.png"
import gastosImg from "../assets/gastos.png"
import hospedagemImg from "../assets/hotel.png"
import churrascariaImg from "../assets/churrascaria.png"
import techshp from "../assets/techshop.png"
import imobi from "../assets/banner-imobi.png"
import receita from "../assets/receita-recipe.png"
import cinemind from "../assets/cinemind-ia.png"

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
        title: "ImobiFinder",
        description: "O projeto foi criado com foco em um design elegante, experiência visual moderna e interface responsiva.",
        technologies: ["React", "JavaScript", "CSS"],
        image: imobi,
        github: "https://github.com/johnnysousa1020/imobifinder",
        demo: "https://johnnysousa1020.github.io/imobifinder/"
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
        title: "RecipeFinder",
        description: "Aplicação de receitas desenvolvida com React e TheMealDB API.",
        technologies: ["React", "CSS"],
        image: receita,
        github: "https://github.com/johnnysousa1020/RecipeFinder",
        demo: "https://johnnysousa1020.github.io/RecipeFinder/"
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
    {
        id: 7,
        title: "TechShop",
        description: "Projeto de e-commerce desenvolvido com foco em experiência do usuário, responsividade e funcionalidades modernas.",
        technologies: ["React", "JavaScript", "CSS"],
        image: techshp,
        github: "https://github.com/johnnysousa1020/techshop",
        demo: "https://johnnysousa1020.github.io/techshop/"
    },
    {
        id: 8,
        title: "CineMind AI",
        description: "Desenvolvi uma aplicação completa utilizando React, Node.js, Express, APIs externas e Inteligência Artificial, com Front End e Backend.",
        technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
        image: cinemind,
        github: "https://github.com/johnnysousa1020/CineMind-AI",
        demo: "https://cine-mind-ai-virid.vercel.app"
    },
]

export default projects;
*/
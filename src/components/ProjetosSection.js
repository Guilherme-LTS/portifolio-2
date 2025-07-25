import React from 'react';
import './ProjetosSection.css';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiTensorflow, SiVercel, SiSpring, SiNextdotjs } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const iconesTecnologia = {
  'React': <FaReact color="#61dafb" title="React" />, 
  'Node.js': <FaNodeJs color="#3c873a" title="Node.js" />,
  'CSS': <FaCss3Alt color="#1572b6" title="CSS3" />,
  'TensorFlow': <SiTensorflow color="#ff6f00" title="TensorFlow" />,
  'Vercel': <SiVercel color="#fff" title="Vercel" />,
  'Spring Boot': <SiSpring color="#6db33f" title="Spring Boot" />,
  'Next.js': <SiNextdotjs color="#fff" title="Next.js" />,
};

const projetos = [
  {
    titulo: 'Haliya: The AI Fortune Teller',
    descricao: 'Aplicação de previsão de sorte baseada em IA, usando machine learning para oferecer previsões personalizadas em diversas áreas.',
    imagem: '/images/card (2).glb',
    tecnologias: ['React', 'TensorFlow', 'Node.js', 'CSS'],
    funcao: 'Web Developer',
    linkDemo: '#',
    linkRepo: '#',
  },
  {
    titulo: 'GDSC PLM Website',
    descricao: 'Site oficial para o Google Developer Student Club na PLM, com projetos, eventos, blogs e engajamento da comunidade.',
    imagem: '/images/Design sem nome (2).svg',
    tecnologias: ['Next.js', 'CSS', 'Vercel'],
    funcao: 'Web Developer',
    linkDemo: '#',
    linkRepo: '#',
  },
  {
    titulo: 'GrievDesk',
    descricao: 'Sistema de gestão de reclamações para organizações, facilitando o feedback e resolução de problemas.',
    imagem: '/images/Design sem nome (9).png',
    tecnologias: ['React', 'CSS', 'Spring Boot'],
    funcao: 'Full Stack Developer',
    linkDemo: '#',
    linkRepo: '#',
  },
];

const ProjetosSection = () => {
  return (
    <section className="projetos-section" aria-labelledby="titulo-projetos">
      <h2 id="titulo-projetos" className="titulo-projetos">Meus Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((projeto, idx) => (
          <div className="projeto-card" tabIndex={0} key={idx} aria-label={`Projeto: ${projeto.titulo}`}> 
            <div className="projeto-imagem-wrapper">
              <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} className="projeto-imagem" />
              <span className="badge-funcao badge-funcao-top">{projeto.funcao}</span>
              <a
                href={projeto.linkDemo}
                className="projeto-overlay-link"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-label={`Abrir demo de ${projeto.titulo} em nova aba`}
              >
                <span className="projeto-overlay" />
                <FiExternalLink className="projeto-overlay-icon" />
              </a>
            </div>
            <div className="projeto-conteudo">
              <h3 className="projeto-titulo">{projeto.titulo}</h3>
              <p className="projeto-descricao">{projeto.descricao}</p>
              <div className="projeto-badges">
                {projeto.tecnologias.filter(Boolean).map((tec, i) => (
                  <span
                    className="badge-tecnologia"
                    key={i}
                    title={tec}
                    aria-label={`Tecnologia: ${tec}`}
                    tabIndex={0}
                  >
                    {iconesTecnologia[tec] || tec}
                    <span className="badge-nome">{tec}</span>
                  </span>
                ))}
              </div>
              <div className="projeto-links">
                <a href={projeto.linkDemo} target="_blank" rel="noopener noreferrer" className="projeto-link">Demo</a>
                <a href={projeto.linkRepo} target="_blank" rel="noopener noreferrer" className="projeto-link">Repositório</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjetosSection; 
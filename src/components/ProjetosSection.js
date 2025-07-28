import React from 'react';
import './ProjetosSection.css';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiTensorflow, SiVercel, SiSpring, SiNextdotjs } from 'react-icons/si';
import { FaServer, FaDatabase, FaCloud, FaEthereum, FaCode } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { MdOutlineNotificationsActive } from 'react-icons/md';

const iconesTecnologia = {
  'React': <FaReact color="#61dafb" title="React" />, 
  'Node.js': <FaNodeJs color="#3c873a" title="Node.js" />,
  'CSS': <FaCss3Alt color="#1572b6" title="CSS3" />,
  'TensorFlow': <SiTensorflow color="#ff6f00" title="TensorFlow" />,
  'Vercel': <SiVercel color="#fff" title="Vercel" />,
  'Spring Boot': <SiSpring color="#6db33f" title="Spring Boot" />,
  'Next.js': <SiNextdotjs color="#fff" title="Next.js" />,
  'Express': <FaServer color="#000" title="Express" />,
  'PostgreSQL': <FaDatabase color="#336791" title="PostgreSQL" />,
  'Render': <FaCloud color="#00979c" title="Render" />,
  'Supabase': <FaCloud color="#3ecf8e" title="Supabase" />,
  'react-toastify': <MdOutlineNotificationsActive color="#ff9800" title="react-toastify" />,
  'Ethers.js': <FaCode color="#4c51bf" title="Ethers.js" />,
  'Solidity': <SiSolidity color="#363636" title="Solidity" />,
  'MetaMask': <FaEthereum color="#e2761b" title="MetaMask" />,
  'Sepolia': <FaEthereum color="#6c47ff" title="Sepolia (Ethereum Testnet)" />,
};

const projetos = [
  {
    titulo: "dApp de Votação na Blockchain Ethereum",
    descricao: "Uma Aplicação Descentralizada (dApp) para um sistema de votação que permite aos usuários conectar suas carteiras Ethereum, visualizar candidatos e registrar um voto único e imutável na rede de testes Sepolia, demonstrando os princípios de transparência, segurança e descentralização da tecnologia blockchain.",
    imagem: "/images/card (2).glb",
    tecnologias: ["React", "Ethers.js", "Solidity", "MetaMask", "Sepolia", "Node.js"],
    funcao: "Blockchain Developer",
    linkDemo: '#',
    linkRepo: 'https://github.com/Guilherme-LTS/Trabalho-2-ODS-II---Dapp',
  },
  {
    titulo: 'Sistema de Fidelidade',
    descricao: 'Sistema full-stack para digitalizar e automatizar o programa de pontos de um restaurante familiar. Permite cadastro e consulta de pontos por CPF, resgate de recompensas, notificações em tempo real e validação automática de clientes.',
    imagem: '/images/mockup-fidelidade1.png',
    tecnologias: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Vercel', 'Render', 'Supabase', 'react-toastify'],
    funcao: 'Web Developer',
    linkDemo: '#',
    linkRepo: 'https://github.com/Guilherme-LTS/Sistema-de-Fidelidade',
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjetosSection; 
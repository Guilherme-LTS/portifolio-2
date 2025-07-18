import React from 'react';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import './Experiencia.css';

const experiencias = [
  {
    titulo: 'Bolsista Desenvolvedor',
    empresa: 'Callidus Academy',
    local: 'Manaus, AM',
    periodo: '2022 - 2023',
    descricao: 'Atuei no desenvolvimento de soluções web e aplicações inteligentes com foco em impacto prático. Trabalhei com front-end (ReactJS), back-end (Node.js), banco de dados (MySQL) e visão computacional com Python. Utilizei metodologias ágeis (Scrum/Kanban) e implementei projetos que integravam inteligência artificial (Scikit-learn, OpenCV, YOLOv7) com foco em automação e análise visual.',
    tecnologias: ['ReactJS', 'Node.js', 'MySQL', 'Python', 'Scrum', 'Scikit-learn'],
  },
  {
    titulo: 'Trainee em Desenvolvimento Web',
    empresa: 'Ludus Lab',
    local: 'Manaus, AM',
    periodo: '2023 - 2024',
    descricao: 'Atuei no desenvolvimento completo de uma plataforma para comercialização de NFTs, integrando front-end responsivo (HTML, CSS, JavaScript) com back-end estruturado e banco de dados. Contribuí para a criação de uma experiência de usuário fluida e segura, alinhada a demandas reais do produto. Participei ativamente de sprints semanais sob a metodologia Scrum, garantindo entregas contínuas com foco em valor de negócio.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL', 'Scrum', 'React', 'Docker'],
  },
];

const Experiencia = () => {
  return (
    <section className="experiencia-section">
      <div className="experiencia-div">
        <h2 className="titulo-experiencia">Experiência</h2>
        <div className="cards-experiencia">
          {experiencias.map((exp, idx) => (
            <div className="card-experiencia hover-effect" key={idx}>
              <h3>{exp.titulo}</h3>
              <div className="info-exp">
                <span className="empresa">{exp.empresa}</span>
                <span className="local"><FiMapPin style={{ marginRight: 4, verticalAlign: 'top' }} />{exp.local}</span>
                <span className="periodo"><FiCalendar style={{ marginRight: 4, verticalAlign: 'top' }} />{exp.periodo}</span>
              </div>
              <p className="descricao">{exp.descricao}</p>
              <div className="tecnologias">
                {exp.tecnologias.map((tec, i) => (
                  <span className="badge-tec" key={i}>{tec}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
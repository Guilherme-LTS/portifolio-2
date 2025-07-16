import React from 'react';
import './OQueFaco.css';

const skillsDevelopment = [
  'HTML5', 'CSS3', 'JavaScript', 'Python', 'Django', 'React',
  'MySQL', 'VS Code', 'Figma', 'Node-RED', 'ESP32 (MQTT)',
  'Kaggle', 'Scikit-learn', 'Docker', 'Postman',
  'Google Tools', 'Pacote Office'
];

const skillsFullstack = [
  'JavaScript', 'Node.js', 'Python', 'React', 'FastAPI', 'Flask',
  'MySQL', 'PostgreSQL', 'REST APIs',
  'Git', 'GitHub', 'Docker', 'VS Code'
];


export default function OQueFaco() {
  return (
    <section className="oque-faco-section">
      <h2 className="oque-faco-titulo">O que eu faço</h2>
      <div className="oque-faco-cards">
        <div className="oque-faco-card">
          <h3 className="oque-faco-card-titulo">Development</h3>
          <p className="oque-faco-card-desc">
          Crio aplicações web focadas em performance, usabilidade e solução de problemas reais. Transformo ideias em produtos digitais que funcionam no dia a dia e geram valor para pessoas e empresas.
          </p>
          <span className="oque-faco-card-skillstitle">Skillset & Ferramentas</span>
          <div className="oque-faco-card-skills">
            {skillsDevelopment.map((skill) => (
              <span className="oque-faco-skill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="oque-faco-card">
          <h3 className="oque-faco-card-titulo">Full-Stack Engineering</h3>
          <p className="oque-faco-card-desc">
          Desenvolvo sistemas completos, do front ao back-end, pensados para entregar resultados práticos. Crio soluções robustas, escaláveis e alinhadas com as necessidades reais de negócio.
          </p>
          <span className="oque-faco-card-skillstitle">Skillset & Ferramentas</span>
          <div className="oque-faco-card-skills">
            {skillsFullstack.map((skill) => (
              <span className="oque-faco-skill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
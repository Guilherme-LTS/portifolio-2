import React from 'react';
import './Experiencia.css';

const experiencias = [
  {
    titulo: 'Web Development Intern',
    empresa: 'AHG Lab',
    local: 'Makati, Philippines',
    periodo: '2025 - Presente',
    descricao: 'Streamlined the development process by implementing a modern tech stack. Focused on building scalable and maintainable web applications.',
    tecnologias: ['Next.js', 'Tailwind', 'TypeScript', 'Sanity.io', 'Docker'],
  },
  {
    titulo: 'DataCamp Scholar',
    empresa: 'DataCamp',
    local: 'Remote',
    periodo: '2024 - Presente',
    descricao: 'Recognized for outstanding performance and potential in data science as part of a select group of students. Demonstrated commitment to advancing skills and knowledge in the field.',
    tecnologias: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
  },
];

const Experiencia = () => {
  return (
    <section className="experiencia-section">
      <div className="experiencia-div">
        <h2 className="titulo-experiencia">Experience</h2>
        <div className="cards-experiencia">
          {experiencias.map((exp, idx) => (
            <div className="card-experiencia hover-effect" key={idx}>
              <h3>{exp.titulo}</h3>
              <div className="info-exp">
                <span className="empresa">{exp.empresa}</span>
                <span className="local">{exp.local}</span>
                <span className="periodo">{exp.periodo}</span>
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
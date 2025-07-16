import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Typewriter from './components/Typewriter';
import OQueFaco from './components/OQueFaco';
import ScrollVelocity from './components/ScrollVelocity';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <section id="home">
          <div className="home-content">
            <ProfileCard
              name="Guilherme Silva"
              title="Dev em Evolução e Empreendedor"
              handle="guilherme.lts"
              status="Online"
              contactText="Contate me"
              avatarUrl="https://avatars.githubusercontent.com/u/99211563?v=4"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
              iconUrl="/images/iconpattern.png"
            />
            <div className="home-text">  
              <div>
                <Typewriter texts={['Full Stack?', 'Frontend?', 'Backend?']} />
              </div>
              <p className="description-text-primary">
                Pode contar comigo
              </p>
              <p className="description-text-secondary">
              Transformo ideias em experiências digitais unindo código, design e criatividade. Com domínio em React, Node.js e Python, desenvolvo soluções completas, do back-end ao front. </p>
            </div>
          </div>
        </section>
        <section id="oquefaco">
          <OQueFaco />
        </section>
        <section id="softskills">
          <h2 className="softskills-title">Soft Skills</h2>
          <div className="scroll-velocity-card">
            <ScrollVelocity
              texts={[
                'Proatividade', 'Organização', 'Boa Comunicação', 'Trabalho em Equipe', 'Adaptabilidade', 'Senso de Dono', 'Senso Crítico'
              ]}
              velocity={50}
              className="custom-scroll-text"
              numCopies={4}
            />
            <div style={{ height: 8 }} /> {/* Espaço entre as linhas animadas */}
            <ScrollVelocity
              texts={[
                'Resiliência', 'Empatia', 'Gestão do Tempo', 'Pensamento Analítico', 'Curiosidade', 'Autonomia', 'Aprendizado Contínuo'
              ]}
              velocity={-50}
              className="custom-scroll-text"
              numCopies={4}
            />
          </div>
        </section>
        <section id="projetos">
          <h2>Projetos</h2>
        </section>
        <section id="contato">
          <h2>Contato</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
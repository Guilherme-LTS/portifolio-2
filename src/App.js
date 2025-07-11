import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Typewriter from './components/Typewriter';
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
                <Typewriter texts={['Full Stack?', 'No Code?', 'Low Code?']} />
              </div>
              <p className="description-text-primary">
                Pode contar comigo
              </p>
              <p className="description-text-secondary">
              Transformo ideias em experiências digitais unindo código, design e criatividade. Com domínio em React, Node.js e Python, desenvolvo soluções completas, do back-end ao front. </p>
            </div>
          </div>
        </section>
        <section id="sobre">
          <h2>Sobre mim</h2>
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
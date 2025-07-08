import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
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
              <h1>Bem-vindo ao meu portfólio!</h1>
              <p>
                Sou apaixonado por tecnologia, desenvolvimento web e sempre em busca de novos desafios. Aqui você vai encontrar meus principais projetos, experiências e formas de contato.
              </p>
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
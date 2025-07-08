import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <section id="home">
          <h1>Bem-vindo ao meu portfólio!</h1>
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
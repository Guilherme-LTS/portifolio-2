import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn, FaGithub, FaTiktok } from 'react-icons/fa';
import './ContactSection.css';

const contacts = [
  {
    icon: <MdEmail size={40} />, 
    title: 'Email',
    value: 'lumedalauvigne@gmail.com',
    link: 'mailto:lumedalauvigne@gmail.com',
  },
  {
    icon: <FaLinkedinIn size={40} />,
    title: 'LinkedIn',
    value: '@lavigne.lumeda',
    link: 'https://www.linkedin.com/in/lavigne-lumeda/',
  },
  {
    icon: <FaGithub size={40} />,
    title: 'GitHub',
    value: '@yuyuhiei',
    link: 'https://github.com/yuyuhiei',
  },
  {
    icon: <FaTiktok size={40} />,
    title: 'TikTok',
    value: '@yuyuhieix',
    link: 'https://www.tiktok.com/@yuyuhieix',
  },
];

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Vamos nos conectar</h2>
      <p className="contact-description">
      Tem um projeto, uma vaga aberta ou quer conversar sobre tecnologia? Estou sempre aberto a boas conexões.
      </p>
      <div className="contact-cards">
        {contacts.map((contact, idx) => (
          <a
            key={contact.title}
            href={contact.link}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">{contact.icon}</div>
            <div className="contact-info">
              <span className="contact-card-title">{contact.title}</span>
              <span className="contact-card-value">{contact.value}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection; 
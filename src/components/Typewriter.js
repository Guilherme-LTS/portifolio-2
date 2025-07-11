import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts }) => {
  const [displayedTexts, setDisplayedTexts] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex >= texts.length) return;

    const timer = setTimeout(() => {
      if (currentCharIndex < texts[currentTextIndex].length) {
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Texto completo, adiciona à lista e vai para o próximo
        setDisplayedTexts(prev => [...prev, texts[currentTextIndex]]);
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentTextIndex, currentCharIndex, texts]);

  return (
    <div className="typewriter">
      {displayedTexts.map((text, index) => (
        <div key={index} className="skills-text">{text}</div>
      ))}
      {currentTextIndex < texts.length && (
        <div className="skills-text">
          {texts[currentTextIndex].substring(0, currentCharIndex)}
          <span className="cursor">|</span>
        </div>
      )}
    </div>
  );
};

export default Typewriter; 
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const texts = [
    "Chez ATHARI ADVISORS, nous croyons en la puissance de l'innovation et de l'expertise pour transformer les défis en opportunités. Notre équipe de consultants chevronnés s'engage à fournir des solutions sur mesure qui propulsent votre entreprise vers de nouveaux sommets. Avec une approche centrée sur le client, nous analysons en profondeur vos besoins pour élaborer des stratégies qui font vraiment la différence.",
    
    "La réussite de nos clients est au cœur de notre mission. ATHARI ADVISORS combine une connaissance approfondie du marché avec des méthodologies éprouvées pour offrir des conseils stratégiques qui génèrent des résultats tangibles. Que vous cherchiez à optimiser vos opérations, à pénétrer de nouveaux marchés ou à redéfinir votre modèle d'affaires, notre expertise multisectorielle est votre atout pour une croissance durable.",
    
    "L'excellence est notre norme chez ATHARI ADVISORS. Nous nous efforçons constamment de dépasser les attentes en fournissant des insights novateurs et des solutions pragmatiques. Notre approche collaborative assure que chaque recommandation est non seulement stratégiquement solide, mais aussi parfaitement alignée avec votre vision et vos objectifs. Ensemble, nous pouvons transformer vos ambitions en réalisations concrètes."
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const fullCompanyName = 'ATHARI ADVISORS';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 15000); // Change text every 10 seconds due to longer content

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   let index = 0;
  //   const typingEffect = setInterval(() => {
  //     if (index < fullCompanyName.length) {
  //       setCompanyName((prev) => prev + fullCompanyName[index]);
  //       index++;
  //     } else {
  //       clearInterval(typingEffect);  // Clear the interval once the name is fully typed
  //     }
  //   }, 150); // Adjust typing speed here

  //   return () => clearInterval(typingEffect);
  // }, []);

  return (
    <div className='home-section'>
      <div className='container-info-home'>
        <h1>Bienvenue chez <span>{fullCompanyName}</span></h1>
        <p>{texts[currentTextIndex]}</p>
        <div className='dots'>
          {texts.map((_, index) => (
            <span key={index} className={index === currentTextIndex ? 'active' : ''}></span>
          ))}
        </div>
        <div className='buttons'>
          <button className='btn-primary'>EN SAVOIR PLUS</button>
          <button className='btn-secondary'>NOUS REJOINDRE</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

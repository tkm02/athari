import "./About.css"
import apropos from '../../assets/apropos.JPG'
import Title from "../TitleCustom/Title";

const About = () => {
  return <div className="container-about">
  <Title text="A Propos De Nous"/>
    <div className="content-about">
    <div className="box-img">
        <img src={apropos} className="img-about" alt="image des responsable" />
    </div>
    <div className="box-about">
       <h3 className="title-about">
       Bienvenue dans notre univers où l'impact 
et la transformation sont au cœur de notre
vision.
       </h3>
       <div className="box-para-about">
        <p className="para-about">
        <span className="span-logo">ATHARI ADVISORS</span> se définit avant tout comme un <span className="span-mark">catalyseur d’impact et un générateur
        de transformation profonde et durable</span>.
          Nous croyons fermement en la valeur 
          des hommes et des femmes, d'où qu'ils
           soient et quelle que soit la classe
         sociale à laquelle ils appartiennent.
        </p>
        <p className="para-about">
        « Notre obsession est donc d'aider à <span className="span-mark">canaliser les efforts des 
        personnes et des organisations afin 
        que les communautés</span> de tous horizons 
        accèdent à des conditions de vie dignes 
        à travers le monde. »
        </p>
       </div>
       <button className="btn-about">En savoir plus</button>
    </div>
    </div>
  </div>;
};

export default About;

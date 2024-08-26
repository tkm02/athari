import "./Partner.css"
import pat1  from '../../assets/HASKE_CONSEIL_LOGO 1.png'
import pat2  from '../../assets/logo-wide 1.png'
import pat3  from '../../assets/Vector (1).png'
import Title from "../TitleCustom/Title"
const Partner = () => {
  return <div className="container-partner">
    <Title text="Nos Partenaires"/>
    <div className="partner-content">
        <img src={pat1} alt="cabinet partenaire" />
        <img src={pat2} alt="cabinet partenaire" />
        <img src={pat3} alt="cabinet partenaire" />
    </div>
  </div>;
};

export default Partner;

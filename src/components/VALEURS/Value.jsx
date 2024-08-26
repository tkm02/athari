import CardValue from "./CardValue"
import img from '../../assets/mdi_help-outline.png'
import img2 from '../../assets/Vector.png'
import img3 from '../../assets/Group.png'
import Title from "../TitleCustom/Title";



const Value = () => {
  return <section className="section-value">
    <Title text="Nos Valeurs"/>
    <div className="container-value">
      <CardValue  image={img} para={"Traitez tous les individus avec respect et courtoisie en ligne. Protégez la vie privée et favorisez des échanges constructifs."} text="Le respect de la dignité 
humaine" />
      <CardValue image={img2} para={"Inspirez et motivez les équipes en favorisant la créativité et le développement personnel."} text="Le Leadership 
transformationnel 
humaine" />
      <CardValue image={img3} para={"Agissez avec générosité et bienveillance, en mettant les besoins des autres avant les vôtres."} text="L’altruisme sincère 
humaine" />
    </div>

  </section>;
};

export default Value;

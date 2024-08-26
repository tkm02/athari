import "./Value.css"


const CardValue = ({image, text, para}) => {
  return <div  className="content-cardvalue">
    <img src={image} className="" width={30} alt="icons des valeurs"/>
    <h3 className="value-text">{text}</h3>
    <p className="value-para">
    {para}
    </p>
  </div>;
};

export default CardValue;

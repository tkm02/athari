import "./Footer.css";
import tel from '../../assets/bxs_phone-call.png'
import mail from '../../assets/ic_sharp-email.png'
import localisation from '../../assets/carbon_location-filled.png'
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const ContactItem = ({ icon, text, Icon }) => (
  <li className="contact-item">
    {Icon ? (
      <>
        <Icon className="text-2xl" /> 
        <span className="text">{text}</span>
      </>
    ) : (
      <>
        {icon && <img src={icon} alt="Icon" width={20} height={20} />} 
        <span className="text">{text}</span>
      </>
    )}
  </li>
);


const Footer = () => {
  return <div className="container-footer">
    <div className="logo-footer">Logo</div>
    <hr className="barre"/>
    <div className="content-footer">
        <div className="content-section">
        <div className="ul-footer">
         <div className="">
            <h4 className="title-footer">Contactez nous</h4>
            <ul className="list-footer">
            <ContactItem icon={tel} text="+2250759956898" />
            <ContactItem icon={mail} text="infos@athari-as.com" />
            <ContactItem 
          icon={localisation} 
          text={`Côte d'Ivoire, Abidjan,\nCocody, Angré Nouveau CHU,\ncarrefour Daddy's Schekina`} 
            />
         </ul>
            </div>
         <div className="">
            <h4 className="title-footer">Réseau sociaux</h4>
            <ul className="list-footer">
            <ContactItem Icon={FaFacebookF} text="Facebook" />
        <ContactItem Icon={FaLinkedinIn} text="LinkedIn" />
        <ContactItem Icon={FaXTwitter} text="Twitter" />
        <ContactItem Icon={LuInstagram} text="Instagram" />
           
         </ul>
            </div>
         <div className="">
            <h4 className="title-footer">Horaire</h4>
            <ul className="list-footer">
            <ContactItem text="Horaire : 08h - 16h" />
            <ContactItem text="" />
            <ContactItem text="" />
            <ContactItem text="" />
            <ContactItem text="" />
            <ContactItem text="" />
            <ContactItem text="" />
         </ul>
            </div>
         <div className="">
            <h4 className="title-footer">Mentions légales</h4>
            <ul className="list-footer">
            <ContactItem text="politique de confidentialité" />
            <ContactItem  text="Conditions et services" />
            <ContactItem 
          text={`Conditions d'utilisation
Politique de remboursement`} 
            />
         </ul>
            </div>
        </div>
        </div>
        
    </div>
  </div>;
};

export default Footer;

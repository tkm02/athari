import "./Contact.css"
import { TextInput, Group, Textarea, Button } from '@mantine/core';
import Title from "../TitleCustom/Title"

const Contact = () => {
  return <div className="container-contact">
    <Title text="Contactez Nous"/>
    <p className="para-contact">
    Pour toute question, remplissez le formulaire ci-dessous ou utilisez les coordonnées fournies. Nous sommes là pour vous aider !
    </p>
   <div className="">
        <Group>
        <TextInput
            placeholder="Nom & Prénoms"
        />
        <TextInput
            placeholder="Adresse mail"
        />
        </Group>
        <Group mt={"md"}>
        <TextInput
            placeholder="Nom de l'entreprise"
        />
        <TextInput
            placeholder="Téléphone"
        />
        </Group>
        <Group mt={"md"}>
        <Textarea
        style={{width: "100%"}}
      placeholder="Votre Message ici..."
    />
        </Group>
        <Button mt={"md"}color="#128181"  style={{width: "100%"}}>Soumettre</Button>
   </div>
  </div>;
};

export default Contact;

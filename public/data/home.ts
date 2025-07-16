import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";


export const homeData = {
  myImage: "/assets/houssem.jpeg", // Assure-toi que ce fichier existe dans /public/assets
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "houssemnaffouti28@gmail.com",
      Link: "/contact", // ou tu peux mettre: "mailto:houssem.naffouti.dev@gmail.com"
    },
    {
      Icon: FaLocationDot,
      Label: "Sousse, Tunisie",
      Link: "https://www.google.com/maps/place/Sousse,+Tunisie",
    },
    {
      Icon: FaPhoneAlt,
      Label: "+216 99857519",
      Link: "tel:+21699857519",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "ISET Sousse",
      Link: "https://www.isetsousse.rnu.tn/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Licence en Développement des Systèmes d’Information",
      Link: "#", // Mets un lien vers ton diplôme ou portfolio si tu veux
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/houssemnaff",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/houssem-naffouti-3594b7285/",
    },
    
  ],
};

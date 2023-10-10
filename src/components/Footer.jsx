import facebookIcon from "../assets/icons/facebookIcon.svg";
import instagramIcon from "../assets/icons/instagramIcon.svg";
import youtubeIcon from "../assets/icons/youtubeIcon.svg";
import linkedInIcon from "../assets/icons/linkedIcon.png";

const Footer = () => {
  return (
    <div className="flex justify-between bg-gray-800 gap-2 text-white h-[120px] px-4 ">
      <div className="flex flex-col cursor-pointer gap-2 my-auto">
        <p>Siguenos en nuestras redes sociales</p>
        <div className="flex gap-2">
          <img src={facebookIcon} alt="icon" />
          <img src={instagramIcon} alt="icon" />
          <img src={youtubeIcon} alt="icon" />
          <img className="w-8 h-8 my-auto" src={linkedInIcon} alt="icon" />
        </div>
      </div>
      <h1 className="my-auto">
        Problemas con tu pedido? <br /> Contactenos@prueba.com
      </h1>
      <h1 className="my-auto">
        Politicas de tratamiento de datos personales <br /> Copyright
        PolipetSupermarket 2023{" "}
      </h1>
    </div>
  );
};

export default Footer;

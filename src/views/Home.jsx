import img1 from '../assets/imagenes/Galeria/c1.jpg'
import img2 from '../assets/imagenes/Galeria/c2.jpg'
import img3 from '../assets/imagenes/Galeria/c3.jpg'
import img4 from '../assets/imagenes/Galeria/c4.jpg'
import img5 from '../assets/imagenes/Galeria/c5.jpg'
import img6 from '../assets/imagenes/Galeria/c6.jpg'
import logoImg from "../assets/imagenes/logo/c1.jpg";

const sharedStyles= 'w-[220px] h-[150px]  rounded-xl'
const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className=" flex home__hero w-10/12 mx-auto font-bold">
        <img className="rounded-xl" src={logoImg} alt="img" />
        <p className="text-xl">
          Quienes somos! <br />
          Una tienda para tus mascotas, es un comercio dedicado a la venta de
          productos para tus amigos incondicionales; como alimentos, juguetes,
          snacks, pronto contaremos concepillos, y accesorios para mascotas en
          general
        </p>
      </div>

        <div className='flex justify-between w-10/12 mx-auto '>
            <img className={`${sharedStyles}`} src={img1} alt="img" />

            <img className={`${sharedStyles}`} src={img2} alt="img" />

            <img className={`${sharedStyles}`} src={img3} alt="img" />

            <img className={`${sharedStyles}`} src={img4} alt="img" />

            <img className={`${sharedStyles}`} src={img5} alt="img" />

            <img className={`${sharedStyles}`} src={img6} alt="img" />

        </div>
    </div>
  );
}

export default Home

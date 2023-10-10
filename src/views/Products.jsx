import comida1 from '../assets/imagenes/Comida/c1.jpg'
import comida2 from "../assets/imagenes/Comida/c2.jpg";
import comida3 from "../assets/imagenes/Comida/c3.jpg";
import comida4 from "../assets/imagenes/Comida/c4.jpg";
import comida5 from "../assets/imagenes/Comida/c5.jpg";
import comida6 from "../assets/imagenes/Comida/c6.jpg";
import comida7 from "../assets/imagenes/Comida/c7.jpg";
import comida8 from "../assets/imagenes/Comida/c8.jpg";
import { useProductContext } from '../context/products';

const initialproducts = [
  {
    id: 1,
    name: "Filpo Adulto 30kg",
    price: 110,
    img: comida1,
  },
  {
    id: 2,
    name: "Dog Chow Adulto 25kg",
    price: 98,
    img: comida2,
  },
  {
    id: 3,
    name: "Dogourmet Cachorro 25kg",
    price: 87,
    img: comida3,
  },
  {
    id: 4,
    name: "Pedigree Adulto 7kg",
    price: 57,
    img: comida4,
  },
  {
    id: 5,
    name: "Chunky Adulto 15kg",
    price: 48,
    img: comida5,
  },
  {
    id: 6,
    name: "Ringo Adulto 25kg",
    price: 62,
    img: comida6,
  },
  {
    id: 7,
    name: "Raza Adulto 25kg",
    price: 58,
    img: comida7,
  },
  {
    id: 8,
    name: "Topdog Adulto 15kg",
    price: 47,
    img: comida8,
  },
];
const Products = () => {
 const {  addProduct } = useProductContext();

  return (
    <div className="flex flex-wrap w-10/12  mx-auto my-2 py-2  gap-2 shadow-xl rounded-lg">
      {initialproducts.map((product) => (
        <div className=" flex flex-col gap-2 border border-black py-2" key={product.id}>
          <img className="w-[250px] h-[250px]" src={product.img} alt="" />
          <p className="font-bold text-xl"> {product.name}</p>
          <p>llevalo por ${product.price}.000</p>
          <button
            onClick={() => addProduct(product)}
            className=" w-3/6  mx-auto border cursor-pointer p-1 rounded-md bg-gray-200 font-semibold text-sm hover:bg-gray-600 hover:text-white"
          >
            Comprar item
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products

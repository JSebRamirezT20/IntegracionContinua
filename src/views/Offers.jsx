import comida1 from "../assets/imagenes/Promos/c1.jpg";
import comida2 from "../assets/imagenes/Promos/c2.jpg";
import comida3 from "../assets/imagenes/Promos/c3.jpg";
import comida4 from "../assets/imagenes/Promos/c4.jpg";
import { useProductContext } from "../context/products";


const promos = [
  {
    id: 1001,
    name: "Promo 1",
    price: 146,
    img: comida1,
  },
  {
    id: 1002,
    name: "Promo 2",
    price: 116,
    img: comida2,
  },
  {
    id: 1003,
    name: "Promo 3",
    price: 210,
    img: comida3,
  },
  {
    id: 1004,
    name: "Promo 4",
    price: 152,
    img: comida4,
  },
];
const Offers = () => {
   const { addProduct } = useProductContext();

  return (
    <div className="flex flex-wrap w-10/12  mx-auto my-2 py-2  gap-2 shadow-xl rounded-lg">
      {promos.map((product) => (
        <div
          className="flex flex-col gap-2 border border-black px-1 py-2"
          key={product.id}
        >
          <img className="w-[250px] h-[250px]" src={product.img} alt="" />
          <p className="font-bold text-xl"> {product.name}</p>
          <p>llevalo por ${product.price}.000</p>
          <button
            onClick={() => addProduct(product)}
            className="w-3/6 mx-auto border cursor-pointer p-1 rounded-md bg-gray-200 font-semibold text-sm hover:bg-gray-600 hover:text-white"
          >
            Comprar item
          </button>
        </div>
      ))}
    </div>
  );
};

export default Offers;

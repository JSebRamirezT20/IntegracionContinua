import snack1 from "../assets/imagenes/snacks/c1.jpg";
import snack2 from "../assets/imagenes/snacks/c2.jpg";
import snack3 from "../assets/imagenes/snacks/c3.jpg";
import snack4 from "../assets/imagenes/snacks/c4.jpg";
import snack5 from "../assets/imagenes/snacks/c5.jpg";
import snack6 from "../assets/imagenes/snacks/c6.jpg";
import snack7 from "../assets/imagenes/snacks/c7.jpg";
import snack8 from "../assets/imagenes/snacks/c8.jpg";
import { useProductContext } from "../context/products";

const brands = [
  {
    id: 101,
    name: "Dentalife",
    price: 40,
    img: snack1,
  },
  {
    id: 102,
    name: "Dog Licious",
    price: 37,
    img: snack2,
  },
  {
    id: 103,
    name: "Chunky",
    price: 42,
    img: snack3,
  },
  {
    id: 104,
    name: "Sanal",
    price: 62,
    img: snack4,
  },
  {
    id: 105,
    name: "Biscrok",
    price: 48,
    img: snack5,
  },
  {
    id: 106,
    name: "Doc Treats",
    price: 64,
    img: snack6,
  },
  {
    id: 107,
    name: "Pro Can",
    price: 56,
    img: snack7,
  },
  {
    id: 108,
    name: "Huesitos",
    price: 47,
    img: snack8,
  },
];
const Brands = () => {
   const { addProduct } = useProductContext();

  return (
    <div className="flex flex-wrap w-10/12  mx-auto my-2 py-2  gap-2 shadow-xl rounded-lg">
      {brands.map((product) => (
        <div
          className=" flex flex-col gap-2 border border-black py-2"
          key={product.id}
        >
          <img className="w-[250px] h-[250px]" src={product.img} alt="" />
          <p className="font-bold text-xl"> {product.name}</p>
          <p>llevalo por ${product.price}.000</p>
          <button
            onClick={() => addProduct(product)}
            className=" w-3/6 mx-auto border cursor-pointer p-1 rounded-md bg-gray-200 font-semibold text-sm hover:bg-gray-600 hover:text-white"
          >
            Comprar item
          </button>
        </div>
      ))}
    </div>
  );
};

export default Brands;

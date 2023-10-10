import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiNotebookBold } from "react-icons/pi";
import { useProductContext } from "../context/products";
import ProductsMenu from "./ProductsMenu";

PiNotebookBold;
export const Header = () => {
  const { products } = useProductContext();
  return (
    <div className="flex justify-between bg-gray-800 text-white  px-4 ">
      <h1 className="text-4xl my-6">PoliPetSupermarket</h1>
      <nav className=" h-20 text-base my-4">
        <ul className="flex  gap-4 my-6 mx-2">
          <li>
            <Link className="flex gap-1 " to="/">
              <span className="my-auto">
                <AiOutlineHome />
              </span>{" "}
              QUIENES SOMOS
            </Link>{" "}
          </li>

          <li className="flex gap-1">
            <span className="my-auto">
              {" "}
              <PiNotebookBold />
            </span>{" "}
            <ProductsMenu tabName="PRODUCTOS" route="products" />
          </li>
          <li className="flex gap-1">
            <span className="my-auto">
              {" "}
              <PiNotebookBold />
            </span>{" "}
            <ProductsMenu tabName="MARCAS" route="brands" />
          </li>
          <li className="flex gap-1">
              <span className="my-auto">
                <PiNotebookBold />
              </span>
              <ProductsMenu tabName="PRECIOS ESPECIALES" route="offers" />
          </li>
          <li>
            <Link className="flex gap-1 " to="cart">
              <span className="my-auto">
                <AiOutlineShoppingCart />
              </span>{" "}
              CARRITO DE COMPRAS{" "}
              <span className="text-yellow-300"> {products.length}</span>
            </Link>{" "}
          </li>
          <li>
            <Link className="flex gap-1" to="contact">
              <span className="my-auto">
                <AiOutlineQuestionCircle />
              </span>
              CONTACTENOS
            </Link>{" "}
          </li>
          <li>
            <Link className="flex gap-1 " to="login">
              <BiSolidUser size={28} />
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

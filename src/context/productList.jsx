const initialProductList = [
  {
    id: "001",
    name: "Filpo Adulto",
    price: "11.000",
    inventory: 20,
    discount: "10%",
    fechaInicial: "15/09/2023",
    fechaFinal: "30/09/2023",
  },
  {
    id: "002",
    name: "Dog Chow Adulto",
    price: "98.000",
    inventory: 10,
    discount: "5%",
    fechaInicial: "15/09/2023",
    fechaFinal: "30/09/2023",
  },
  {
    id: "003",
    name: "Dogourmet Cachorro",
    price: "87.000",
    inventory: 50,
    discount: "0%",
    fechaInicial: "15/09/2023",
    fechaFinal: "30/09/2023",
  },
  {
    id: "004",
    name: "Pedigree Adult",
    price: "57.000",
    inventory: 100,
    discount: "20%",
    fechaInicial: "15/09/2023",
    fechaFinal: "30/09/2023",
  },
  {
    id: "005",
    name: "Chunky Adulto",
    price: "48.000",
    inventory: 50,
    discount: "10%",
    fechaInicial: "15/09/2023",
    fechaFinal: "30/09/2023",
  },
  {
    id: "006",
    name: "Ringo Adulto",
    price: "62.000",
    inventory: 150,
    discount: "20%",
    fechaInicial: "15/09/2023",
    fechaFinal: "30/09/2023",
  },
  {
    id: "007",
    name: "Raza Adulto",
    price: "58.000",
    inventory: 20,
    discount: "0%",
    fechaInicial: "15/09/2023",
    fechaFinal: "30/09/2023",
  },
  {
    id: "008",
    name: "Topdog Adulto",
    price: "47.000",
    inventory: 30,
    discount: "10%",
    fechaInicial: "15/09/2023",
    fechaFinal: "30/09/2023",
  },
];

import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

// Definir el contexto
const ProductListContext = createContext();

export const useProductListContext = () => {
  return useContext(ProductListContext);
};

// Acciones posibles
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";

// Reducer para gestionar el estado de los productos
const productListReducer = (state, action) => {
  let updatedProductIndex;
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case EDIT_PRODUCT:
       updatedProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (updatedProductIndex !== -1) {
        // Si se encuentra el producto, lo reemplazamos
        const updatedState = [...state];
        updatedState[updatedProductIndex] = action.payload;
        return updatedState;
      }
      return state;
    default:
      return state;
  }
};

// Componente Proveedor del contexto
export const ProductListProvider = ({ children }) => {
  const initialProducts =
    JSON.parse(localStorage.getItem("productList")) || initialProductList;
  const [productList, dispatch] = useReducer(
    productListReducer,
    initialProducts
  );


  // Guardar en localStorage cada vez que cambie el estado
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

  // Acciones para agregar, eliminar y editar productos
  const addProduct = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const removeProduct = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, payload: productId });
  };

  const editProduct = (product) => {
    dispatch({ type: EDIT_PRODUCT, payload: product });
  };

  return (
    <ProductListContext.Provider
      value={{ productList, addProduct, removeProduct, editProduct }}
    >
      {children}
    </ProductListContext.Provider>
  );
};

ProductListProvider.propTypes = {
  children: PropTypes.node,
};

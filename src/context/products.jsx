import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

// Definir el contexto
const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

// Acciones posibles
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const RESET_PRODUCTS = "RESET_PRODUCTS"; // Nueva acción para reiniciar los productos

// Reducer para gestionar el estado de los productos
const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    case RESET_PRODUCTS:
      return []; // Reiniciar el estado a un array vacío
    default:
      return state;
  }
};

// Componente Proveedor del contexto
export const ProductProvider = ({ children }) => {
  const initialProducts = JSON.parse(localStorage.getItem("products")) || [];
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  // Guardar en localStorage cada vez que cambie el estado
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Acciones para agregar, eliminar y reiniciar productos
  const addProduct = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  const removeProduct = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, payload: productId });
  };

  const resetProducts = () => {
    dispatch({ type: RESET_PRODUCTS });
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, resetProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node,
};

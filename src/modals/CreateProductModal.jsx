/*Dependencies*/
import { useState } from "react";
import ReactDOM from "react-dom";
/*UI*/
import Modal from "@mui/material/Modal";
import { useProductListContext } from "../context/productList";
/*Components*/
/*Services*/
/*Icons*/

/*Styles*/
const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "transparent",
  p: 3,
};
const inputStyles='w-10/12 border h-8 rounded-lg'
const labelStyles = "flex justify-between font-bold";
/**
 * Modal component to request a password recovery, used in the login view.
 * @returns Customized modal.
 */

const CreateProductModal = ({ modalState, handleClose }) => {
     const { addProduct } = useProductListContext();

   const [productData, setProductData] = useState({
     id: "",
     name: "",
     price: "",
     discount: "",
     inventory: 0,
     fechaInicial: "15/09/2023",
     fechaFinal: "30/09/2023",
   });
  const handleSubmit =  () => {
    console.log('prodcuto creado');
    addProduct(productData);
    handleClose()
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return ReactDOM.createPortal(
    <Modal
      open={modalState}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={style}
    >
      <div className="flex flex-col w-[600px]  relative noBorderInput mx-auto gap-6 bg-white rounded-3xl px-6 py-8 sm:IL-sm-width">
        <div className="flex  justify-start gap-4">
          <p className="my-auto font-semibold text-xl text-IL-blue-main">
            Crear Producto
          </p>
        </div>
        <hr />
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-2  justify-between mx-auto gap-4 "
          >
            <label className={`${labelStyles}`} htmlFor="id">
              {" "}
              Id
              <input
                onChange={handleChange}
                className={`${inputStyles}`}
                type="text"
                name="id"
                id="id"
              />
            </label>
            <label className={`${labelStyles}`} htmlFor="name">
              Nombre
              <input
                onChange={handleChange}
                className={`${inputStyles}`}
                type="text"
                name="name"
                id="name"
              />
            </label>
            <label className={`${labelStyles}`} htmlFor="price">
              Precio
              <input
                onChange={handleChange}
                className={`${inputStyles}`}
                type="text"
                name="price"
                id="price"
              />
            </label>
            <label className={`${labelStyles}`} htmlFor="discount">
              Descuento
              <input
                onChange={handleChange}
                className={`${inputStyles}`}
                type="text"
                name="discount"
                id="discount"
              />
            </label>
            <label className={`${labelStyles}`} htmlFor="inventory">
              Inventario
              <input
                onChange={handleChange}
                className={`${inputStyles}`}
                type="number"
                name="inventory"
                id="inventory"
              />
            </label>
            <div className="flex justify-center w-10/12 gap-2 mx-auto h-10">
              <button
                className="bg-blue-600 text-white font-bold rounded-xl p-2"
                type="submit"
              >
                Confirmar
              </button>
              <button
                className="bg-red-600 text-white font-bold rounded-xl p-2"
                type="button"
                onClick={handleClose}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>,
    document.getElementById("createProductModal")
  );
};

export default CreateProductModal;

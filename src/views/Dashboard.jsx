import { useProductListContext } from "../context/productList";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import CreateProductModal from "../modals/CreateProductModal";
import { useState } from "react";
import EditProductModal from "../modals/EditProductModal";

const Dashboard = () => {
  const { productList, removeProduct } = useProductListContext();
  const [createProduct, setcreateProduct] = useState(false)
  const [editProduct, setEditProduct] = useState(false);
    const [productData, setProductData] = useState(undefined);

const handleCreateClose = () => {
  setcreateProduct(false);
};
 const handleEditClose=()=>{
  setEditProduct(false);
 }
 const handleEdit=(payload)=>{
 setProductData(payload)
 setEditProduct(true);

 }
  return (
    <div className=" flex flex-col w-8/12 mx-auto gap-4 h-[350px]">
      <h1 className="font-bold text-3xl">Administrar lista de productos</h1>
      <table className="border">
        <thead>
          <tr className="bg-blue-600 text-white ">
            <th className="border">ID Producto</th>
            <th className="border">Producto</th>
            <th className="border">Precio</th>
            <th className="border">Descuento</th>
            <th className="border">Inventario</th>
            <th className="border">Fecha Inicial</th>
            <th className="border">Fecha Final</th>
            <th className=""></th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id} className="border">
              <td className="border">{product.id}</td>
              <td className="border">{product.name}</td>
              <td className="border">${product.price}</td>
              <td className="border">{product.discount}</td>
              <td className="border">{product.inventory}</td>
              <td className="border">{product.fechaInicial}</td>
              <td className="border">{product.fechaFinal}</td>
              <td onClick={() => handleEdit(product)}>
                <FaEdit size={24} className="my-auto" />
              </td>
              <td onClick={() => removeProduct(product.id)}>
                <AiFillDelete size={24} className="my-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => setcreateProduct(true)}
        className="bg-blue-600 text-white p-2 rounded-lg font-semibold w-6/12 mx-auto"
      >
        Crear Producto
      </button>
      {/* modals */}
      <CreateProductModal
        modalState={createProduct}
        handleClose={handleCreateClose}
      />
      <EditProductModal
        modalState={editProduct}
        handleClose={handleEditClose}
        product={productData}
      />
    </div>
  );
}

export default Dashboard

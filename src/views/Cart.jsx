import { useProductContext } from "../context/products";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
 import './Cart.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, removeProduct, resetProducts } = useProductContext();
  const [open, setOpen] = useState(false)
  const [cardName, setcardName] = useState('')
    const [cardCcv, setcardCcv] = useState("");
    const [address, setAddress] = useState("");
    const navigate=useNavigate()
const totalPrice = products.reduce(
  (total, producto) => total + producto.price,
  0
);
  const handleChange = (e,method) => {
    method(e.target.value);
  };
  const handleSubmit=(e)=>{
   e.preventDefault()
 cardName.length <= 0 && alert("No ha puesto un nombre correcto");
  cardCcv.length <= 0 && alert("No ha puesto un cvv valido ");
   address.length <= 0 && alert("No ha puesto una direccion");
   if (cardName.length > 0 && cardCcv > 0&&address.length>0) {
         const confirmation=window.confirm(
           `Esta seguro de hacer el pago por $${totalPrice}.000 por concepto de ${products.length} ?`
         );
         if (confirmation) {
          alert('Gracias por su compra')
          resetProducts();
          navigate('/')
         }
   }
  }


   return (
     <div className=" flex flex-col h-full justify-evenly w-6/12 mx-auto">
       {/* Productos seleccionados */}

       <div className="cart flex flex-col gap-4">
         <h1 className="font-bold text-4xl text-gray-500">
           Productos seleccionados
         </h1>
         {products.map((product) => (
           <div
             className="flex flex-col w-10/12 mx-auto gap-4 border-b border-dashed border-black"
             key={product.id}
           >
             <div className="flex  w-8/12 mx-auto justify-between px-4">
               <div className="w-11/12">
                 <p className="font-bold text-2xl">{product.name}</p>
                 <p> precio: ${product.price}.000</p>
               </div>

               <button
                 onClick={() => removeProduct(product.id)}
                 className="w-1/12 flex justify-center items-center"
               >
                 <AiFillDelete size={24} className="my-auto" />
               </button>
             </div>
           </div>
         ))}
         <h1 className="font-semibold text-2xl text-gray-500">
           Total:${totalPrice}.000
         </h1>
       </div>

       {/* Datos de envio */}
       <div className=" flex justify-between w-full ">
         <label className="font-semibold" htmlFor="address">
           {" "}
           Escriba una direccion de envio
         </label>
         <input
         onChange={(e)=>handleChange(e,setAddress)}
           className="border w-8/12"
           id="address"
           name="address"
           type="text"
         />
       </div>
       {/* Datos de pago */}
       <div className="contenedor">
         <p className="text-2xl font-bold mb-2">Agregar medio de pago</p>
         <section
           className="h-[315px] border flex flex-col justify-between shadow-xl rounded-xl w-full"
           id="tarjeta"
         >

           <div className="border text-black h-full">
             <div className="barra-magnetica bg-black h-10 w-full"></div>
             <div className="flex justify-between mx-4">
               <div className=" firma m-6 w-8/12" id="firma">
                 <p className="font-bold text-xl text-center">{cardName}</p>
                 <div className="firma"></div>
               </div>
               <div className="" id="ccv">
                 <p className="my-6 mr-10">{cardCcv}</p>
                 <p className=""></p>
               </div>
             </div>

             <a href="#" className="link-banco text-gray-200">
               www.tubanco.com
             </a>
           </div>
         </section>
         {/*
    <!-- Contenedor Boton Abrir Formulario --> */}
         <div className="contenedor-btn">
           <button
             onClick={() => setOpen((prev) => !prev)}
             className="btn-abrir-formulario flex justify-center items-center"
             id="btn-abrir-formulario"
           >
             <AiOutlinePlus size={30} />
           </button>
         </div>

         {/* Formulario tarjeta */}
         <form
           onSubmit={handleSubmit}
           id="formulario-tarjeta"
           className={` w-10/12 mx-autoborder formulario-tarjeta ${
             open ? " flex flex-col " : " hidden "
           }`}
         >
           <div className=" flex flex-col text-gray-500">
             <label htmlFor="inputNumero">Número Tarjeta</label>
             <input
               className="h-10 border"
               type="text"
               id="inputNumero"
               maxLength="19"
               autoComplete="off"
             />
           </div>
           <div className="flex flex-col text-gray-500">
             <label htmlFor="inputNombre">Nombre</label>
             <input
               onChange={(e) => handleChange(e, setcardName)}
               className="h-10 border"
               type="text"
               id="inputNombre"
               maxLength="19"
               autoComplete="off"
             />
           </div>
           {/* expiration date */}
           <div className="flex ">
             {/* fecha */}
             <div className="grupo expira  w-8/12 text-gray-500">
               <label htmlFor="selectMes">Expiracion</label>
               {/* month */}
               <div className="flex gap-4 ">
                 <div className="grupo-select w-6/12 border h-10">
                   <select name="mes" id="selectMes" value="Mes">
                     <option disabled>Mes</option>
                     {Array.from({ length: 13 }, (_, index) => (
                       <option key={index} value={index}>
                         {index}
                       </option>
                     ))}
                   </select>
                 </div>
                 {/* year */}
                 <div className="grupo-select w-6/12 border">
                   <select name="year" id="selectYear" value="Año">
                     <option disabled>Año</option>
                     {Array.from({ length: 11 }, (_, index) => {
                       const year = new Date().getFullYear() + index;
                       return (
                         <option key={index} value={year}>
                           {year}
                         </option>
                       );
                     })}
                   </select>
                 </div>
               </div>
             </div>
             {/* cvv */}

             <div className="grupo ccv w-4/12 text-gray-500">
               <label htmlFor="inputCCV">CCV</label>
               <input
                 className="h-10 w-11/12 border"
                 type="text"
                 id="inputCCV"
                 maxLength="3"
                 onChange={(e) => handleChange(e, setcardCcv)}
               />
             </div>
           </div>
           <button
             type="submit"
             id="boton_pagar"
             className="bg-blue-600 text-white font-semibold h-10 rounded-md my-4"
           >
             Pagar
           </button>
         </form>
       </div>
     </div>
   );
}

export default Cart

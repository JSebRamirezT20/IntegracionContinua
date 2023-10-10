import { useState } from "react";
import {AiFillLock}from "react-icons/ai"
import { BiSolidUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/products";

AiFillLock;
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
   const { resetProducts } = useProductContext();

  const navigate=useNavigate()
  const handleSubmit = () => {
    if (userName==='admin'&&password==='admin123') {
       resetProducts();
       navigate('/dashboard')
    }else{
      alert("nombre de usuario o contraseña incorrectos, verifica e intenta de nuevo");
    }
  };
  const handleChange = (e,method) => {
 method(e.target.value)
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-6/12  justify-between mx-auto gap-2 shadow-2xl h-[350px]"
    >
      <h1 className="text-2xl font-bold">Ingresar como Administrador</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-around">
          <BiSolidUser size={28} />
          <input
            className="border h-10 rounded-md w-10/12 px-2"
            placeholder="Nombre de usuario "
            type="text"
            name="username"
            id="username"
            onChange={(e) => handleChange(e, setUserName)}
          />
        </div>
        <div className="flex justify-around">
          <AiFillLock size={28} />
          <input
            className="border h-10 rounded-md w-10/12 px-2"
            placeholder="Contraseña "
            type="password"
            name="password"
            id="password"
            onChange={(e) => handleChange(e, setPassword)}
          />
        </div>
        <div className="flex mx-auto gap-2 ">
          <label htmlFor="remember"> Recuérdame</label>
          <input name="remember" type="checkbox" />
        </div>
      </div>

      <button
        type="submit"
        id="boton_pagar"
        className="w-[120px] bg-blue-600 text-white font-semibold h-10 rounded-lg my-4 mx-auto"
      >
        Ingresar
      </button>
    </form>
  );
};

export default Login;

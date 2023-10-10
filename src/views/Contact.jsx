const inputStyles = "h-[34px] rounded-md px-2";
export const Contact = () => {
  return (
    <>
      <form
        className=" flex flex-col  gap-6 w-[450px] h-[450px] bg-[#22a4aa] mx-auto rounded-xl p-6 "
        action=""
      >
        <h1 className="text-white text-4xl font-semibold">Contáctenos</h1>
        <input
          className={`${inputStyles}`}
          id="name"
          type="text"
          placeholder="Nombre"
        />
        <input
          className={`${inputStyles}`}
          id="email"
          type="text"
          placeholder="Email"
        />
        <input
          className={`${inputStyles}`}
          id="tel"
          type="text"
          placeholder="Telefono"
        />
        <textarea
          id="texto"
          type="text"
          className="rounded-md h-[100px]"
          placeholder="Escriba aqui su mensaje o pregunta"
        ></textarea>
        <button className=" h-[60px] bg-[#31384a] text-white rounded-md" type="submit">
          ENVIAR
        </button>
      </form>
    </>
  );
}

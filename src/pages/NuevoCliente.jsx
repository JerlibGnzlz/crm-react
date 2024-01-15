import { useNavigate } from "react-router-dom";


const NuevoCliente = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-bold text-4xl text-green-700">Nuevo Cliente</h1>
      <p className="mt-3">LLena todos los campos para registrar un nuevo cliente</p>


      <div className="flex justify-end">
        <button className="text-white bg-green-500 font-bold px-3 py-1 uppercase rounded-md"
          onClick={() => navigate("/")}
          type="button">volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        <p>formulario aqui</p>
      </div>
    </>
  );
};

export default NuevoCliente;
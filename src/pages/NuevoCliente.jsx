/* eslint-disable react-refresh/only-export-components */
import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";



export async function action({ request }) {
  const formData = await request.formData();


  const email = formData.get("email");

  const datos = Object.fromEntries(formData);

  console.log(datos);


  const error = [];

  if (Object.values(datos).includes("")) {
    error.push("Todos los campos son requeridos");
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");


  if (!regex.test(email)) {
    error.push("El mail no es valido");
  }

  if (Object.keys(error).length) {
    return error;
  }

}


const NuevoCliente = () => {

  const errores = useActionData();
  const navigate = useNavigate();


  console.log(errores);
  return (
    <>
      <h1 className="font-bold text-4xl text-green-700 ">Nuevo Cliente</h1>
      <p className="mt-3">LLena todos los campos para registrar un nuevo cliente</p>


      <div className="flex justify-end mt-20">
        <button className="text-white bg-green-500 font-bold px-3 py-1 uppercase rounded-md"
          onClick={() => navigate("/")}
          type="button">volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}


        <Form
          method="POST"
          noValidate
        >
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-green-700 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
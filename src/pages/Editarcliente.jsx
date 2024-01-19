import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import { obtenerCliente, actualizarCliente } from "../api/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";


// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {


  const { clienteId } = params
  const cliente = await obtenerCliente(clienteId)

  if (cliente === 0) {
    throw new Response("", {
      statusText: "No hay resultados",
      status: 404
    })
  }
  return cliente
}


// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  const formData = await request.formData();

  const { clienteId } = params

  const email = formData.get("email");

  const datos = Object.fromEntries(formData);



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

  // ─── Actuallizar El Cliente ──────────────────────────────────────────


  await actualizarCliente(clienteId, datos);
  return redirect("/");
}

const Editarcliente = () => {

  const navigate = useNavigate()
  const cliente = useLoaderData()
  const errores = useActionData()

  return (
    <>
      <h1 className="font-bold text-4xl text-green-700 ">Editar Cliente</h1>
      <p className="mt-3">A continuacion podras modificar los datos de los cliente</p>


      <div className="flex justify-end mt-20">
        <button className="text-white bg-green-500 font-bold px-3 py-1 uppercase rounded-md"
          onClick={() => navigate("/")}
          type="button">volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}


        <Form
          method="post"
          noValidate
        >
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="mt-5 w-full bg-green-700 uppercase font-bold text-white text-lg"
            value="Guardar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default Editarcliente;
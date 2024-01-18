import { Form, useNavigate, useLoaderData } from "react-router-dom";
import { obtenerCliente } from "../api/clientes";
import Formulario from "../components/Formulario";

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

const Editarcliente = () => {

  const navigate = useNavigate()
  const cliente = useLoaderData()
  console.log(cliente)

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

        {/* {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)} */}


        <Form
          method="POST"
          noValidate
        >
          <Formulario cliente={cliente} />
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

export default Editarcliente;
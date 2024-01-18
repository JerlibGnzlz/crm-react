import { obtenerCliente } from "../api/clientes";

export async function loader({ params, }) {

  const { clienteId } = params
  const cliente = await obtenerCliente(clienteId)

  if (Object.values(cliente === 0)) {
    throw new Response("", {
      statusText: "No hay resultados",
      status: 404
    })
  }
  return cliente
}

const Editarcliente = () => {
  return (
    <p>hola</p>
  );
};

export default Editarcliente;
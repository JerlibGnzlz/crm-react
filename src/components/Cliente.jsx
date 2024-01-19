/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, useNavigate, redirect } from "react-router-dom";
import { eliminarCliente } from "../api/clientes";


// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }) {
  // const { clienteId } = params

  eliminarCliente(params.clienteId)

  return redirect("/")
}

const Clientes = ({ cliente }) => {

  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, id } = cliente;

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-green-700"> {nombre}</p>
        <p className=""> {empresa}</p>
      </td>

      <td className="p-6 gap-3">
        <p className="text-green-700 "><span className="uppercase text-green-800 font-bold">Email: </span>{email}</p>
        <p className="text-green-700 "><span className="uppercase text-green-800 font-bold">Telefono: </span>{telefono}</p>
      </td>

      <td className="p-6 flex gap-3 ">
        <button className="font-bold text-green-600 hover:text-green-700 uppercase text-sm"
          type="button"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >Editar</button>


        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            if (!confirm("Desea eliminar este cliente")) {
              e.preventDefault()
            }
          }}
        >
          <button className="font-bold text-red-500 hover:text-red-700 uppercase text-sm"
            type="submit"
          >
            Eliminar
          </button>
        </Form>

      </td>


    </tr>
  );
};

export default Clientes;
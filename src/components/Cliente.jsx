/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Clientes = ({ cliente }) => {

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
          type="button">Editar</button>

        <button className="font-bold text-red-500 hover:text-red-700 uppercase text-sm"
          type="button">Eliminar</button>
      </td>


    </tr>
  );
};

export default Clientes;
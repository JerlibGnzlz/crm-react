
const Clientes = ({ cliente }) => {

  const { nombre, empresa, email, teñefono, id } = cliente;
  return (
    <tr>
      <td className="p-6">
        {nombre}
      </td>
    </tr>
  );
};

export default Clientes;
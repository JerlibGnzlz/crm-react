import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../api/clientes";
// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
  const clientes = obtenerClientes();

  return clientes;

}

const Index = () => {

  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-bold text-4xl text-green-700">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      {clientes.length > 0 ? (
        <table className="table-auto w-full bg-white shadow mt-5">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contactos</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}

              />
            ))}
          </tbody>
        </table >

      ) : (
        <p className="text-4xl text-center mt-10">No hay clientes aun</p >
      )}

    </>
  );
};

export default Index;
import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
// eslint-disable-next-line react-refresh/only-export-components
export function loader() {


  const clientes = [
    {
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: 'Codigo Con Juan'
    },
  ];

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
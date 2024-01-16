import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {

  let location = useLocation();


  return (

    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-green-900 px-5 py-10">
        <h2 className='font-bold text-4xl text-center text-white'>CRM-Clientes</h2>

        <nav className="mt-10">
          <Link
            className={
              `${location.pathname === "/" ? "text-green-300" : "text-white"} block hover:text-yellow-400 mt-2 text-2xl `}
            to="/"  >Clientes
          </Link >

          <Link
            className={
              `${location.pathname === "/clientes/nuevo" ? "text-green-300" : "text-white"} block hover:text-yellow-400 mt-2 text-2xl `}
            to="/clientes/nuevo"  >Clientes nuevos
          </Link >

        </nav>
      </aside>



      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div >
  );
};

export default Layout;
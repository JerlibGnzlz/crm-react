import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import NuevoCliente, { action as nuenvoClienteAction } from './pages/NuevoCliente';
import Index, { loader as clienteLoader } from './pages/Index';
import { ErrorPage } from './components/ErrorPage';
import Editarcliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/Editarcliente';
import { action as eliminarClienteAction } from './components/Cliente';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clienteLoader,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuenvoClienteAction,
        errorElement: <ErrorPage />
        // loader: action
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <Editarcliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction,
      }
    ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

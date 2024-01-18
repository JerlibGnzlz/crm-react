import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (

    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold text-blue-950">CRM-Clientes</h1>
      <p className="text-center">Hubo un Error</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );

};
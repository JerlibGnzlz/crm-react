export const obtenerClientes = async () => {
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json();
    return resultado;
};

export const obtenerCliente = async (id) => {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${ id }`);
    const resultado = await respuesta.json();
    return resultado;
};



export const agregarCliente = async (datos) => {
    const { nombre, empresa, email, notas, telefono } = datos;
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: "post",
            body: JSON.stringify({ nombre, empresa, email, notas, telefono }),
            headers: {
                "Content-Type": "application/json"
            }

        });
        console.log(respuesta);
        await respuesta.json();

    } catch (error) {
        console.log(error.message);
    }
};


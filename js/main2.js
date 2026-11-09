const boton = document.querySelector("#botonObtener");
const contenedor = document.querySelector("#contenedorUsuario");
const persona = { //creamos objeto sencillo
    nombre: "Aintzane",
    correo: "blabla@blabla.com"
};
const error = false; //ponemos en true para probar el posible error del cacht

boton.addEventListener("click", async () => {
    try {
        const respuesta = await obtenerUsuario();
        contenedor.innerHTML =
            `<p >Nombre: ${persona.nombre}</p>
            <p>Correo electrónico: ${persona.correo}</p>`
    } catch (error) {
        contenedor.innerHTML =
         `<p>No hay datos</p>`
    }
});

function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("No hay datos");
            } else {
                resolve(persona);
            }
        }, 2000); //2 segundos en milisegundos
    });
}
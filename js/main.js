// --------- Con un archivo array --------------------------------------------

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// const botones = document.getElementById("button__header");
// const container = document.getElementById("container");

// let mostrarOcultar = false;

// function eliminarDelCarrito(nombre) {
//     let nuevoCarrito = carrito.filter(el => el.nombre !== nombre);
//     carrito = nuevoCarrito;
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     mostrarCarrito(carrito);
// }

// function crearCard(arrayMedicamentos) {

//     const card = document.createElement("div");
//     card.className = "card"

//     const img = document.createElement("img");
//     img.src = arrayMedicamentos.img;
//     img.className = "imgProductos";

//     const tituloMedicamento = document.createElement("p");
//     tituloMedicamento.innerText = arrayMedicamentos.nombre;
//     tituloMedicamento.className = "tituloMedicamento";


//     const precioMedicamento = document.createElement("p");
//     precioMedicamento.innerText = `$${arrayMedicamentos.precio}`;
//     precioMedicamento.className = "precioMedicamento";

//     const agregarAlCarrito = document.createElement("button");
//     agregarAlCarrito.innerText = mostrarOcultar ? "Eliminar" : "Agregar";

//     if (mostrarOcultar) {
//         agregarAlCarrito.onclick = () => {
//             Swal.fire({
//                 title: "Eliminado",
//                 text: `Se elimino ${arrayMedicamentos.nombre} del carrito`,
//                 icon: "warning"
//             });
//             eliminarDelCarrito(arrayMedicamentos.nombre);
//         };
//     } else {
//         agregarAlCarrito.onclick = () => {

//             const productoExistente = carrito.find(el => el.nombre === arrayMedicamentos.nombre);
//             if (!productoExistente) {
//                 carrito.push(arrayMedicamentos);
//                 localStorage.setItem("carrito", JSON.stringify(carrito));
//                 Swal.fire({
//                     title: "AGREGADO",
//                     text: `Se añadió ${arrayMedicamentos.nombre} al carrito`,
//                     icon: "success"
//                 });
//             } else {
//                 Swal.fire({
//                     title: "Ya está en el carrito",
//                     text: `${arrayMedicamentos.nombre} ya está en el carrito`,
//                     icon: "info"
//                 });
//             }
//         };
//     }
//     card.append(img, tituloMedicamento, precioMedicamento, agregarAlCarrito);
//     container.append(card);
// }


// function mostrarMedicamentos() {
//     container.innerText = "";
//     mostrarOcultar = false;

//     medicamentos.forEach(el => {
//         crearCard(el)
//     });
// }

// function mostrarCarrito(arrayCarrito) {
//     container.innerHTML= "";
//     mostrarOcultar = true;
//     arrayCarrito.forEach(el => {
//         crearCard(el);
//     });
// }

// if (container.innerHTML != "") {
//     setTimeout(() => {
//         const loader = document.getElementById("loader");
//         loader.remove();
//         medicamentos.forEach(el => {
//             crearCard(el)
//         });
//     }, 2000)
// } else {
//     Swal.fire({
//         title: "OOPS",
//         text: `A OCURRIDO UN ERROR AL CARGAR LOS PRODUCTOS`,
//         icon: "error"
//     });
// }


// const btnProductos = document.createElement("button");
// btnProductos.innerText = "Productos";
// btnProductos.className = "btnProductos font--button--poppins--600"

// const btnCarrito = document.createElement("button");
// btnCarrito.innerText = "Carrito";
// btnCarrito.className = "btnProductos font--button--poppins--600"

// botones.appendChild(btnProductos);
// botones.appendChild(btnCarrito);

// btnProductos.onclick = () => mostrarMedicamentos();
// btnCarrito.onclick = () => mostrarCarrito(carrito);

// ----------------------------------------------------------------------
// -------------- Con un archivo .json --------------------------------

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const botones = document.getElementById("button__header");
const container = document.getElementById("container");
let mostrarOcultar = false;

async function cargarMedicamentos() {
    try {
        const response = await fetch('/js/medicamentos.json');
        medicamentos = await response.json();
    } catch (error) {
        console.error('Hubo un problema con la solicitud Fetch:', error);
    }
}

function eliminarDelCarrito(nombre) {
    let nuevoCarrito = carrito.filter(el => el.nombre !== nombre);
    carrito = nuevoCarrito;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito(carrito); // Para actualizar la vista después de eliminar
}

function crearCard(arrayMedicamentos) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = arrayMedicamentos.img;
    img.className = "imgProductos";

    const tituloMedicamento = document.createElement("p");
    tituloMedicamento.innerText = arrayMedicamentos.nombre;
    tituloMedicamento.className = "tituloMedicamento";

    const precioMedicamento = document.createElement("p");
    precioMedicamento.innerText = `$${arrayMedicamentos.precio}`;
    precioMedicamento.className = "precioMedicamento";

    const agregarAlCarrito = document.createElement("button");
    agregarAlCarrito.innerText = mostrarOcultar ? "Eliminar" : "Agregar";

    if (mostrarOcultar) {
        agregarAlCarrito.onclick = () => {
            Swal.fire({
                title: "Eliminado",
                text: `Se elimino ${arrayMedicamentos.nombre} del carrito`,
                icon: "warning"
            });
            eliminarDelCarrito(arrayMedicamentos.nombre);
        };
    } else {
        agregarAlCarrito.onclick = () => {
            // Verificamos si el producto ya está en el carrito
            const productoExistente = carrito.find(el => el.nombre === arrayMedicamentos.nombre);
            if (!productoExistente) {
                carrito.push(arrayMedicamentos);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                Swal.fire({
                    title: "AGREGADO",
                    text: `Se añadió ${arrayMedicamentos.nombre} al carrito`,
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Ya está en el carrito",
                    text: `${arrayMedicamentos.nombre} ya está en el carrito`,
                    icon: "info"
                });
            }
        };
    }

    card.append(img, tituloMedicamento, precioMedicamento, agregarAlCarrito);
    container.append(card);
}

function mostrarMedicamentos() {
    container.innerHTML = "";
    mostrarOcultar = false;

    medicamentos.forEach(el => {
        crearCard(el);
    });
}

function mostrarCarrito(arrayCarrito) {
    container.innerHTML = "";
    mostrarOcultar = true;

    arrayCarrito.forEach(el => {
        crearCard(el);
    });
}

if (container.innerHTML !== "") {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.remove();
        medicamentos.forEach(el => {
            crearCard(el);
        });
    }, 2000);
} else {

}

const btnProductos = document.createElement("button");
btnProductos.innerText = "Productos";
btnProductos.className = "btnProductos font--button--poppins--600";

const btnCarrito = document.createElement("button");
btnCarrito.innerText = "Carrito";
btnCarrito.className = "btnProductos font--button--poppins--600";

botones.appendChild(btnProductos);
botones.appendChild(btnCarrito);

btnProductos.onclick = () => mostrarMedicamentos();
btnCarrito.onclick = () => mostrarCarrito(carrito);

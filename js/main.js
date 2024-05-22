// alert("Bienvenido a FarmApp - Tu farmacia de confianza \n\nNuestra plataforma esta en mantenimiento 🛠️\npor ahora solo puedes comprar 1 producto a la vez. ");
// let producto;
// let cantidad;
// let total;
// let seguirComprando = true;
// let subTotal = function (a, b) {
//     switch (a) {
//         case 1:
//             // Aspirinas
//             return 1 * b;
//         case 2:
//             // Panadol Ultra
//             return 2 * b;
//         case 3:
//             // Bioelectro
//             return 4 * b;
//         case 4:
//             // Tabcin gripe y tos
//             return 3 * b;
//     }
// }
// do {
//     producto = parseInt(prompt("Productos: \n 1.- Aspirina $1 \n 2.- Panadol Ultra $2 \n 3.- Bioelectro $4 \n 4.- Tabcin gripe y tos $3"));
//     if (producto < 5 && producto > 0) {
//         cantidad = parseInt(prompt("Cuantos deseas comprar: "));

//         if (!isNaN(producto) && !isNaN(cantidad)) {
//             // si es número
//             total = subTotal(producto, cantidad);
//             alert(`El total a pagar es: ${total}`)
//         } else {
//             alert(`porfavor ingrese valores correctos`);
//         }
//         seguirComprando = confirm(`¿Deseas comprar otro producto?`);
//         console.log(seguirComprando);
//     } else {
//         alert(`Porfavor Ingresa un valor en el rango de 1 - 4`)
//     }

// } while (seguirComprando)

// -------------------------------------------------------------
//               SEGUNDA PRE-ENTREGA (Refactorización)
// -------------------------------------------------------------

// const productos = [
//     {
//         nombre: "Panadol Ultra",
//         precio: 2,
//     },
//     {
//         nombre: "Aspirina",
//         precio: 1,
//     },
//     {
//         nombre: "BioElectro",
//         precio: 3,
//     },
//     {
//         nombre: "Tabcin Gripe y Tos",
//         precio: 2,
//     }
// ]

// function mostrarProductos(){
//     let mensaje='';
//     let cntTitulo=0;
//     let noProducto = 0;
//     productos.forEach(el => {
//         noProducto++
//         if(cntTitulo===0){
//             mensaje += 'Productos: \n';
//             cntTitulo++;
//         }
//         mensaje += noProducto + ". " + el.nombre + " " +"$" + el.precio + "\n"
//     });
//     return mensaje;
// }

// let seleccionado = (el,cntd) =>{
//     let subtotal = productos[el].precio*cntd;
//     alert(`El total de su compra es: $${subtotal}`);
// }

// let seguirComprando = true;

// do{

//     let producto = parseInt(prompt(mostrarProductos()));
    
    
//     if(producto>0 && producto<=productos.length){
//         producto--;
//         let cantidad = parseInt(prompt("¿Cuantos desea comprar?"));
//         seleccionado(producto, cantidad);
//     }else{
//         alert("No existe el producto :(");
//     }

//     seguirComprando = confirm('¿Quieres Seguir comprando?');
// }while(seguirComprando)

// --------------------------------------------------------------
//              TERCERA PREENTREGA - DOM 
// --------------------------------------------------------------

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const botones = document.getElementById("button__header");
const container = document.getElementById("container");

function crearCard(arrayMedicamentos){

    const card = document.createElement("div");
    card.className = "card"

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
    agregarAlCarrito.innerText = "Agregar";
    agregarAlCarrito.onclick = () =>{
        carrito.push(arrayMedicamentos);
        console.log(carrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    card.append(img, tituloMedicamento, precioMedicamento, agregarAlCarrito);
    container.append(card);
}


function mostrarMedicamentos(){
    container.innerText="";
    medicamentos.forEach(el => {
        crearCard(el)
    });
}

function mostrarCarrito(arrayCarrito){
    container.innerText="";
    arrayCarrito.forEach(el => {
        crearCard(el);
    });
}

if(container.innerText != "" ){
    console.log("El container no esta vacío");
}else{
    
    medicamentos.forEach(el => {
        crearCard(el)
    });
}


const btnProductos = document.createElement("button");
btnProductos.innerText = "Productos";
btnProductos.className = "btnProductos font--button--poppins--600"

const btnCarrito = document.createElement("button");
btnCarrito.innerText = "Carrito";
btnCarrito.className = "btnProductos font--button--poppins--600"

botones.appendChild(btnProductos);
botones.appendChild(btnCarrito);

btnProductos.onclick= () => mostrarMedicamentos();
btnCarrito.onclick = () => mostrarCarrito(carrito);



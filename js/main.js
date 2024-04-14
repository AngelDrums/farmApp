alert("Bienvenido a FarmApp - Tu farmacia de confianza \n\nNuestra plataforma esta en mantenimiento\npor ahora solo puedes comprar 1 producto a la vez. ");

let producto = parseInt(prompt("Productos: \n 1.- Aspirina $1 \n 2.- Panadol Ultra $2 \n 3.- Bioelectro $4 \n 4.- Tabcin gripe y tos $3"));
// console.log(`El producto selecionado es ${producto}`);

let cantidad = parseInt(prompt("Cuantos deseas comprar: "));




if(!isNaN(producto)){
    // si es número
    let total;
    let subTotal = function (a, b) {
        switch (a) {
            case 1:
                // Aspirinas
                return 1 * b;
            case 2:
                // Panadol Ultra
                return 2 * b;
            case 3:
                // Bioelectro
                return 4 * b;
            case 4:
                // Tabcin gripe y tos
                return 3 * b;
        }
    }
    total = subTotal(producto, cantidad);
    alert(`El total a pagar es: ${total}`)
}else{
    alert(`No es un número, porfavor ingrese valores correctos`);
}
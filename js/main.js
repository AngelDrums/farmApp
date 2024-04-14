alert("Bienvenido a FarmApp - Tu farmacia de confianza \n\nNuestra plataforma esta en mantenimiento\npor ahora solo puedes comprar 1 producto a la vez. ");
let producto;
let cantidad;
let total;
let seguirComprando = true;
do {
    producto = parseInt(prompt("Productos: \n 1.- Aspirina $1 \n 2.- Panadol Ultra $2 \n 3.- Bioelectro $4 \n 4.- Tabcin gripe y tos $3"));
    if (producto < 5 && producto > 0) {
        cantidad = parseInt(prompt("Cuantos deseas comprar: "));

        if (!isNaN(producto) && !isNaN(cantidad)) {
            // si es número
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
        } else {
            alert(`porfavor ingrese valores correctos`);
        }
        seguirComprando = confirm(`¿Deseas comprar otro producto?`);
        console.log(seguirComprando);
    } else {
        alert(`Porfavor Ingresa un valor en el rango de 1 - 4`)
    }

} while (seguirComprando)
//Función constructora (no se está usando todavia)

class Desayuno {
    constructor(nombre, comida, bebida) {
        this.nombre = nombre;
        this.comida = comida;
        this.bebida = bebida;
    }
}

const desayuno1 = new Desayuno("Completo", "Criollos o tostadas de pan de campo, mermelada y queso crema", "Infusión o jugo de naranja");
const desayuno2 = new Desayuno("Protéico", "Omelette de jamón y queso", "Infusión o jugo de naranja");
const desayuno3 = new Desayuno("Americano", "Tostadas, chips de panceta, salchicha y huevos revueltos", "Infusión o jugo de naranja");
const desayuno4 = new Desayuno("Saludable", "Tostadas de pan integral, queso crema, yogurt, mix de semillas y frutas", "Saludable", "Infusión o jugo de naranja");
const desayuno5 = new Desayuno("Clásico", "Media lunas", "Infusión o jugo de naranja");

function menuSeleccionado(menu) {

    return alert("Seleccionaste el menú " + this.nombre)
}

const CostoD1 = 970;
const CostoD2 = 1140;
const CostoD3 = 1140;
const CostoD4 = 1050;
const CostoD5 = 920;



let sigPaso;
let costo;
let deuda = 0;
do {
    let opcion = prompt("***Ingresa el número del menú a pedir***\n1-Desayuno Completo\n2-Desayuno Completo\n3-Desayuno Americano\n4-Desayuno Saludable\n5-Desayuno Clásico\nS: para salir");
    opcion = opcion.toLowerCase();
    if (opcion == 1) {
        sigPaso = prompt("Usted seleccionó el desayuno Completo \nPresione: \nA: Para agregar otro desayuno\nP: Para ir a pagar");
        sigPaso = sigPaso.toLowerCase();
        let costo = CostoD1;
        deuda = deuda + costo;
    } else if (opcion == 2) {
        sigPaso = prompt("Usted seleccionó el desayuno Protéico \nPresione: \nA: para agregar otro desayuno\nP: Para ir a pagar");
        sigPaso = sigPaso.toLowerCase();
        let costo = CostoD2;
        deuda = deuda + costo;
    } else if (opcion == 3) {
        sigPaso = prompt("Usted seleccionó el desayuno Americano \nPresione: \nA: para agregar otro desayuno\nP: Para ir a pagar");
        sigPaso = sigPaso.toLowerCase();
        let costo = CostoD3;
        deuda = deuda + costo;
    } else if (opcion == 4) {
        sigPaso = prompt("Usted seleccionó el desayuno Saludable \nPresione: \nA: para agregar otro desayuno\nP: Para ir a pagar");
        sigPaso = sigPaso.toLowerCase();
        let costo = CostoD4;
        deuda = deuda + costo;
    } else if (opcion == 5) {
        sigPaso = prompt("Usted seleccionó el desayuno Clásico \nPresione: \nA: para agregar otro desayuno\nP: Para ir a pagar");
        sigPaso = sigPaso.toLowerCase();
        let costo = CostoD5;
        deuda = deuda + costo;
    } else if (opcion == "s") {
        alert("Seleccionaste la opción de salir\nHasta pronto!");
    } else {
        alert("Ingrese una opción válida");
    }

} while (sigPaso == "a");

console.log(deuda);

function iva(montoAPagar) {
    let iva = montoAPagar * 0.21;
    let montoSinIva = montoAPagar - iva;
    montoAPagar = montoAPagar + iva;
    let mostrarTotal = "El monto final a pagar es de: " + montoSinIva + " + iva: " + iva + " = $" + montoAPagar;
    return mostrarTotal;
}

if (sigPaso == "p") {
    let montoConIva = iva(deuda)
    alert(montoConIva)

} else {
    alert("Usted no introdujo una opción válida")
}
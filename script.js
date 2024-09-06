// Variables con `let`
let nombre = "Juan";
let edad = 21;
let ciudad = "Medellín";
let activo = true;
let puntos = 50;

// Variables con `const`
const PI = 3.14159;
const MAXIMO_USUARIOS = 100;
const FECHA_HOY = new Date();
const NUM = 10;
const ESTADO_INICIAL = "inactivo";

// Funciones

//Función con cero parámetros
const saludo = () => console.log("¡Hola, mundo!");

//Más compleja
const verificarEstado = () => {
    const estados = ["activo", "inactivo", "pendiente"];
    const estadoActual = "activo"; // Simulación de estado actual

    if (estados.includes(estadoActual)) {
        console.log(`El estado es válido: ${estadoActual}`);
    } else {
        console.log("Estado desconocido.");
    }
};

//Función con un parámetro
const saludoNombre = (nombre) => console.log(`Hola, ${nombre}!`);

//Más compleja
const verificarEdad = (edad) => {
    switch (true) {
        case edad < 13:
            console.log("Eres un niño.");
            break;
        case edad < 20:
            console.log("Eres un adolescente.");
            break;
        case edad < 65:
            console.log("Eres un adulto.");
            break;
        default:
            console.log("Eres un senior.");
    }
};

//Función con dos o más parámetros
const sumar = (a, b) => a + b;

//Más compleja
const calcularPromedio = (notas) => {
    if (notas.length === 0) {
        console.log("No se proporcionaron notas.");
        return;
    }

    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    const promedio = suma / notas.length;
    console.log(`El promedio es: ${promedio}`);
};






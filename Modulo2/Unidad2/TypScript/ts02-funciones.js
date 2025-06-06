
function saludar(nombre) {
    return "Hola, ".concat(nombre);
}
console.log(saludar("Betty Marmol"));

function obtenerApellido(apellido) {
    return "Mi apellido es, ".concat(apellido !== null && apellido !== void 0 ? apellido : "invitado");
}
console.log(obtenerApellido("Picapiedra"));
function obtenerEdad(edad) {
    if (edad === void 0) { edad = 18; }
    return "Mi edad, ".concat(edad, " a\u00F1os");
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());

var sumar = function (a, b) {
    return a + b;
};
console.log("la suma es: ", sumar(5, 4));
function mostrarInformacion(informacion) {
    console.log(informacion);
}
mostrarInformacion("Suceso en norte de Quito");

var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log("resultado suma ", operacion(15, 30));

function saludo(saludo) {
    console.log("Hola ", saludo);
}
saludo(["Juan", "Pedro"]);

function saludo1(persona) {
    persona.forEach(function (p) {
        console.log("Hola ", p);
    });
}
var nombres = ["Juan", "Pablo"];
saludo1(nombres);

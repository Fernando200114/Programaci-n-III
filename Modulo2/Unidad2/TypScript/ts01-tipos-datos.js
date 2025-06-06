
var cantidad = 19;
var nombre = "JOSE ZAMBRANO";
var opcion = true;
console.log("cantidad: ", cantidad);
console.log("Nombre: ", nombre);
console.log("Opcion: ", opcion);

var opcional = "comodin any"; 
opcional = 100;


var equipos = ["Barcelona", "Real Madrid", "Ecuador","Independiente del Valle"];
console.log("Equipos ", equipos);
var edades = [10, 12, 23, 456];
console.log("Edades ", edades);


var persona = ["UTE", 616161];
console.log("Alumno: ", persona);


var Estados;
(function (Estados) {
    Estados[Estados["PENDIENTE"] = 0] = "PENDIENTE";
    Estados[Estados["ENVIADO"] = 1] = "ENVIADO";
    Estados[Estados["ENTREGADO"] = 2] = "ENTREGADO";
})(Estados || (Estados = {}));
var miEstado = Estados.ENTREGADO;
console.log(miEstado);

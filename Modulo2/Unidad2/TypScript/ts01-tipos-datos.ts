
let cantidad: number = 19;
let nombre: string = "JOSE ZAMBRANO";
let opcion: boolean = true;
console.log("cantidad: ",cantidad);
console.log("Nombre: ", nombre);
console.log("Opcion: ",opcion);



let opcional: any = "comodin any"; 
opcional = 100; 


let equipos: string[]=["Barcelona","Real Madrid","Independiente del Valle","La liga"];
console.log("Equipos ", equipos);
let edades: Array<number> = [10,12,23,456];
console.log("Edades ", edades);


let persona: [string, number] = ["UTE",616161];
console.log("Alumno: ", persona);


enum Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
}

let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);
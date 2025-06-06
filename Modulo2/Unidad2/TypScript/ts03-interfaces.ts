

interface Persona{
    nombre: string,
    apellido: string,
}

let empleado: Persona = {
    nombre: "BOB",
    apellido: "Marley",
}

console.log("empleado ", empleado)

interface Credenciales{
    clave: string,
    usuario: string,
}
function login(credencial: Credenciales): void{
    console.log("bienvenido ", credencial.usuario)
}
let miUsuario: Credenciales = {
    clave: "123",
    usuario: "Jesus",
}
login(miUsuario);


interface Figura{
    tipo_figura: string,
    base: number,
    altura: number,
}

function area(figura: Figura):void{
    if (figura.tipo_figura == "cuadrado")
    {
        console.log("Area ",figura.base*figura.altura);
    }else if (figura.tipo_figura == "rectangulo")
    {
        console.log("Area ",figura.base*figura.altura);
    }
}

let fig: Figura = {
    tipo_figura: "cuadrado",
    base: 5,
    altura: 7,
}
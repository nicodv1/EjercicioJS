const television = {
    marca: 'Philips',
    pulgada: 45,
    definicion: 'hd',

    encender: function(){console.log ("Bienvenido")},
    apagar: function(){console.log ("¡Adiós!")}


}
console.log(television.marca)
television.encender()

const libro = {
    nombre: 'Cicatriz',
    autor: 'Gomez Jurado',
    editorial: 'B de bolsillo',
    tema: 'thriller',

    leer: function(){console.log ("Comencemos")}


}
console.log (libro.nombre)
console.log(libro.autor)
libro.leer()

const Ascensor = {
    capacidad: "5 personas",
    pisos: 10,
    material: "metal",

    abrir: function(){console.log("Puerta abierta")},
    piso: function(){alert("Elegir piso")}


}
console.log(Ascensor.capacidad)
Ascensor.piso()

console.log('Condicionales ejemplo 3');

let edad1 = prompt('Edad persona 1');
let edad2 = prompt ('Edad persona 2');

//18 es ser mayor de edad

if (edad1 >= 18 && edad2>= 18) {
    alert('Las dos personas son mayores de edad');
} else if(edad1 >= 18 || edad2>= 18){
    alert ('Al menos una es mayor de edad');
} else {
    alert ('Los dos son menores de edad!!')
}
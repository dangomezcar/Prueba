console.log('Condicionales ejemplo 2');

// pedir ingreso
// si es menor que 100 entonces no te cobra IVA 
// Mayor que 100 pero menor que 200, restar el 21% de IVA
// Mayor que 200 restar 35% IVA
// regrese la ganancia neta

let ingreso = prompt( 'Digite su ingreso');

if (ingreso < 100) {
    alert ('Su ganancia neta es '+ ingreso);
} else if ( ingreso<200) {
    let gananciaNeta = ingreso * 0.79;
    alert('Su ganancia neta es '+ gananciaNeta);
} else {
    let gananciaMayor = ingreso * 0.65;
    alert('Su ganancia neta es ' + gananciaMayor.toFixed(2));
}
 
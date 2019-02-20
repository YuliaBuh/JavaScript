'use strict'
var a = +prompt('Введите число а'),
var b = +prompt('Введите число b'), 
if ( isNaN(a) || isNaN(b) ) {
    alert( 'Необходимо ввести числа!' );
}
else if (a >= 0 && b >= 0) {
    alert (a - b);
}
else if (a < 0 && b < 0) {
    alert(a * b);
}
else a < 0 && b >= 0 {
    alert(a + b);
}
alert( result );
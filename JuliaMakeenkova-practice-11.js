// Создайте простую функцию калькулятор с именем сalc()
// С тремя параметрами a и b, а также operation
// Вызов сalc(‘add’, 1, 2) - возвращает 3
// Вызов сalc(‘multi’, 1, 2) - возвращает 2
// Вызов сalc(’subtract’, 3, 2) - возвращает 1

let a=1;
let b=2;  
function calc(a, b, operation){
if (operation==="add"){
return (a+b); 
} 
else if (operation==="multi"){
return (a*b); 
}
else if (operation==="substract"){
return (a-b); 
}
}
// console.log(calc('add', a,b));
// console.log(calc('multi',a,b));
// console.log(calc('substract', a, b));
alert(calc('add', a,b));
alert(calc('multi',a,b));
alert(calc('substract', a, b));
 

// пример кода:
// if ("substract" === type) {
//   alert(a - b);
// } else if ("add" === type) {
//   alert(a + b);
// } else if ("multi" === type) {
//   alert(a * b);
// }

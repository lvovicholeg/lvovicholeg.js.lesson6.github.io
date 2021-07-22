// let progres = function (a, b, rez = 1, sum = 0) {
//     while (a >= 1) {
//         sum += rez;
//         rez *= b;
//         a--;
//     }
//     return sum;
// }

// let a = prompt('Введіть кількість чисел в прогресії');
// let b = prompt('Введіть знаменник прогресії');
// document.write(`Cума прогресії, яка склаається з ${a} чисел = `);
// document.write(progres(a, b));


let progres1 = (n, q) => {
let sn = 0, b1 = 1;
sn = b1 * ( 1 - q**n ) / ( 1 - q );
document.write(`${sn}`);
}

let n = prompt('Введіть кількість чисел в прогресії');
let q = prompt('Введіть знаменник прогресії');
document.write(`Cума прогресії, яка склаається з ${n} чисел = `);
progres1(n, q);



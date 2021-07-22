"use strict";
let primeNumber = (pn1, pn2) => {
    do {
        let remainder = 1;
        let i = pn1 - 1;
        while (remainder >= 1 && i > 1) {
            remainder = pn1 % i;
            i--;
        }
        remainder == 0 ? '' : document.write(`<h1 style=color:green>"${pn1}" <\h1>`);
        pn1++;
    }
    while (pn1 <= pn2);
}

let pn1 = +prompt('Введіть число 1');
let pn2 = +prompt('Введіть число 2');

pn1 < 0 || pn2 < 0 ? document.write(`<h1 style=color:green>Потрібно ввести натуральні числа<\h1>`) :
    pn1 <= pn2 ? primeNumber(pn1, pn2) :
        pn1 >= pn2 ? primeNumber(pn2, pn1) :
            document.write(`<h1 style=color:green>Уупс.. щось пішло не так, тобі треба ввести два натуральні числа<\h1>`);

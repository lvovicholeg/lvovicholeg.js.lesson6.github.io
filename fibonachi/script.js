
let fib = (nam, a = 1, b = 0, rez = 1) => {
    if (nam <= 0) {
        return 1
    } else {
        rez = a + b;
        a = b;
        b = rez;
        document.write(`${rez} `)
        return rez + fib(nam - 1, a, b, rez);
    }
}
fib(prompt('Введіть число'));

import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce un número entero positivo: ", (input) => {
    let num = Math.abs(parseInt(input));
    let contador = 0;
    if (num === 0) contador = 1;
    else {
        while (num > 0) {
            num = Math.floor(num / 10);
            contador++;
        }
    }
    console.log(`El número tiene ${contador} cifras.`);
    rl.close();
});

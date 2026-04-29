import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce un número (1-5) [usando IF]: ", (input) => {
    const n = parseInt(input);
    if (n === 1) console.log("uno");
    else if (n === 2) console.log("dos");
    else if (n === 3) console.log("tres");
    else if (n === 4) console.log("cuatro");
    else if (n === 5) console.log("cinco");
    else console.log("Fuera de rango");
    rl.close();
});

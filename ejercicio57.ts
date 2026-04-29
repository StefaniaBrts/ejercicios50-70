import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce un número (1-5): ", (input) => {
    switch (parseInt(input)) {
        case 1: console.log("uno"); break;
        case 2: console.log("dos"); break;
        case 3: console.log("tres"); break;
        case 4: console.log("cuatro"); break;
        case 5: console.log("cinco"); break;
        default: console.log("Número fuera de rango");
    }
    rl.close();
});

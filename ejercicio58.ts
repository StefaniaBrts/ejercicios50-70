import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce un carácter: ", (input) => {
    const c = input[0];
    switch (c) {
        case '.': case ',': case ';': case ':': console.log("Signo de puntuación"); break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9': console.log("Cifra numérica"); break;
        default: console.log("Otro carácter");
    }
    rl.close();
});

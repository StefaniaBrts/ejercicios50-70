import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce una letra: ", (input) => {
    const letra = input.toLowerCase()[0];
    switch (letra) {
        case 'a': case 'e': case 'i': case 'o': case 'u': console.log("Vocal"); break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9': console.log("Cifra numérica"); break;
        default: console.log("Consonante (u otro)");
    }
    rl.close();
});

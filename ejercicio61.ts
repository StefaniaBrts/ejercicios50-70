import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce carácter [usando IF]: ", (input) => {
    const c = input[0];
    if (c === '.' || c === ',' || c === ';' || c === ':') console.log("Puntuación");
    else if (c >= '0' && c <= '9') console.log("Cifra");
    else console.log("Otro");
    rl.close();
});

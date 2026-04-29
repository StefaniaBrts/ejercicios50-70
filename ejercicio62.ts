import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce una letra [usando IF]: ", (input) => {
    const letra = input.toLowerCase()[0];
    if ("aeiou".includes(letra)) console.log("Vocal");
    else if (letra >= '0' && letra <= '9') console.log("Cifra numérica");
    else console.log("Consonante (u otro)");
    rl.close();
});

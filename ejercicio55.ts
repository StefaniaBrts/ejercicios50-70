import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce un número para valor absoluto: ", (input) => {
    const num = parseInt(input);
    const resultado = num >= 0 ? num : -num;
    console.log(`El valor absoluto es: ${resultado}`);
    rl.close();
});

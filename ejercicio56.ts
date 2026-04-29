import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Primer número: ", (n1) => {
    rl.question("Segundo número: ", (n2) => {
        const num1 = parseInt(n1);
        const num2 = parseInt(n2);
        const menor = num1 < num2 ? num1 : num2;
        console.log(`El menor es: ${menor}`);
        rl.close();
    });
});

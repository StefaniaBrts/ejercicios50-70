import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Introduce el primer número: ", (n1) => {
    rl.question("Introduce el segundo número: ", (n2) => {
        const num1 = parseInt(n1);
        const num2 = parseInt(n2);
        if (num1 === num2) console.log("Son iguales");
        else console.log(`El mayor es ${num1 > num2 ? num1 : num2}`);
        rl.close();
    });
});

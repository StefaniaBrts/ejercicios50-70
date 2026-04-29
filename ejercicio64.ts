import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const calcularCuadrado = () => {
    rl.question("Introduce un número (0 para salir): ", (input) => {
        const num = parseInt(input);
        if (num === 0) {
            rl.close();
        } else {
            console.log(`El cuadrado de ${num} es ${num * num}`);
            calcularCuadrado();
        }
    });
};
calcularCuadrado();

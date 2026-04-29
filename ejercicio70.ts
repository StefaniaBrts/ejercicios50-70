import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

const jugar = () => {
    if (intentos === 0) {
        console.log(`Perdiste. El número era ${numeroSecreto}`);
        rl.close();
        return;
    }
    rl.question(`Adivina el número (1-10). Intentos: ${intentos}: `, (input) => {
        const apuesta = parseInt(input);
        if (apuesta === numeroSecreto) {
            console.log("¡ACERTASTE!");
            rl.close();
        } else {
            intentos--;
            jugar();
        }
    });
};
jugar();

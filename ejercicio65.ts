import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const pedirPares = () => {
    rl.question("Primer número (0 para salir): ", (n1) => {
        const p1 = parseInt(n1);
        rl.question("Segundo número (0 para salir): ", (n2) => {
            const p2 = parseInt(n2);
            if (p1 === 0 && p2 === 0) {
                rl.close();
            } else {
                if (p1 % p2 === 0) console.log(`${p1} es múltiplo de ${p2}`);
                else console.log(`${p1} NO es múltiplo de ${p2}`);
                pedirPares();
            }
        });
    });
};
pedirPares();

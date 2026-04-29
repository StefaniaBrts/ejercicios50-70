import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const pedirParesMejorado = () => {
    rl.question("Primer número (0 para salir): ", (n1) => {
        const p1 = parseInt(n1);
        rl.question("Segundo número (0 para salir): ", (n2) => {
            const p2 = parseInt(n2);
            if (p1 === 0 && p2 === 0) {
                rl.close();
            } else {
                if (p1 % p2 === 0) console.log(`${p1} es múltiplo de ${p2}`);
                else if (p2 % p1 === 0) console.log(`${p2} es múltiplo de ${p1}`);
                else console.log("Ninguno es múltiplo del otro");
                pedirParesMejorado();
            }
        });
    });
};
pedirParesMejorado();

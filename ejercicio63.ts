import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const pedirPass = () => {
    rl.question("Introduce la contraseña: ", (pass) => {
        if (pass === "1111") {
            console.log("Contraseña correcta");
            rl.close();
        } else {
            console.log("Incorrecta, intenta de nuevo.");
            pedirPass();
        }
    });
};
pedirPass();

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
    console.log("--- EJERCICIO 50 ---");
    const num1 = parseInt(await question("Introduce el primer número: "));
    const num2 = parseInt(await question("Introduce el segundo número: "));
    if (num1 === num2) {
        console.log("Son iguales");
    } else if (num1 > num2) {
        console.log(`El mayor es ${num1}`);
    } else {
        console.log(`El mayor es ${num2}`);
    }

    console.log("\n--- EJERCICIO 51 ---");
    // Variante: números a la izquierda, variables a la derecha
    const a = 10;
    const b = 20;
    if (10 === a) console.log("La comparación de 10 === a es correcta");
    if (20 > b) { } else { console.log("20 no es mayor que b (son iguales)"); }

    console.log("\n--- EJERCICIO 55 ---");
    const numAbs = parseInt(await question("Introduce un número para valor absoluto: "));
    const resultadoAbs = numAbs >= 0 ? numAbs : -numAbs;
    console.log(`El valor absoluto es: ${resultadoAbs}`);

    console.log("\n--- EJERCICIO 56 ---");
    const n1 = parseInt(await question("Primer número: "));
    const n2 = parseInt(await question("Segundo número: "));
    const menor = n1 < n2 ? n1 : n2;
    console.log(`El menor es: ${menor}`);

    console.log("\n--- EJERCICIO 57 ---");
    const numSwitch = parseInt(await question("Introduce un número del 1 al 5: "));
    switch (numSwitch) {
        case 1: console.log("uno"); break;
        case 2: console.log("dos"); break;
        case 3: console.log("tres"); break;
        case 4: console.log("cuatro"); break;
        case 5: console.log("cinco"); break;
        default: console.log("Número fuera de rango");
    }

    console.log("\n--- EJERCICIO 58 ---");
    const caracter = await question("Introduce un caracter: ");
    const c = caracter[0];
    switch (c) {
        case '.': case ',': case ';': case ':':
            console.log("Es un signo de puntuación");
            break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            console.log("Es una cifra numérica");
            break;
        default:
            console.log("Es otro tipo de carácter");
    }

    console.log("\n--- EJERCICIO 59 ---");
    const letra = (await question("Introduce una letra: ")).toLowerCase()[0];
    switch (letra) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            console.log("Es una vocal");
            break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            console.log("Es una cifra numérica");
            break;
        default:
            console.log("Es una consonante (o otro símbolo)");
    }

    console.log("\n--- EJERCICIO 60 (Repetición 57 con IF) ---");
    const numIf = parseInt(await question("Introduce un número del 1 al 5: "));
    if (numIf === 1) console.log("uno");
    else if (numIf === 2) console.log("dos");
    else if (numIf === 3) console.log("tres");
    else if (numIf === 4) console.log("cuatro");
    else if (numIf === 5) console.log("cinco");
    else console.log("Número fuera de rango");

    console.log("\n--- EJERCICIO 61 (Repetición 58 con IF) ---");
    const carIf = (await question("Introduce un caracter: "))[0];
    if (carIf === '.' || carIf === ',' || carIf === ';' || carIf === ':') {
        console.log("Es un signo de puntuación");
    } else if (carIf >= '0' && carIf <= '9') {
        console.log("Es una cifra numérica");
    } else {
        console.log("Es otro tipo de carácter");
    }

    console.log("\n--- EJERCICIO 62 (Repetición 59 con IF) ---");
    const letraIf = (await question("Introduce una letra: ")).toLowerCase()[0];
    if ("aeiou".includes(letraIf)) {
        console.log("Es una vocal");
    } else if (letraIf >= '0' && letraIf <= '9') {
        console.log("Es una cifra numérica");
    } else {
        console.log("Es una consonante (o otro símbolo)");
    }

    console.log("\n--- EJERCICIO 63 ---");
    let pass = "";
    while (pass !== "1111") {
        pass = await question("Introduce la contraseña: ");
    }
    console.log("Contraseña correcta");

    console.log("\n--- EJERCICIO 64 ---");
    let numCuadrado = -1;
    while (numCuadrado !== 0) {
        numCuadrado = parseInt(await question("Introduce un número (0 para salir): "));
        if (numCuadrado !== 0) {
            console.log(`El cuadrado de ${numCuadrado} es ${numCuadrado * numCuadrado}`);
        }
    }

    console.log("\n--- EJERCICIO 65 ---");
    // Se pedirá una vez para el ejemplo, pero el código muestra la lógica repetitiva
    console.log("(Para salir de este bucle introduce 0 en ambos)");
    while (true) {
        const p1 = parseInt(await question("Primer número del par: "));
        const p2 = parseInt(await question("Segundo número del par: "));
        if (p1 === 0 && p2 === 0) break;
        if (p1 % p2 === 0) console.log(`${p1} es múltiplo de ${p2}`);
        else console.log(`${p1} NO es múltiplo de ${p2}`);
    }

    console.log("\n--- EJERCICIO 66 ---");
    while (true) {
        const p1 = parseInt(await question("Primer número: "));
        const p2 = parseInt(await question("Segundo número: "));
        if (p1 === 0 && p2 === 0) break;
        if (p1 % p2 === 0) console.log(`${p1} es múltiplo de ${p2}`);
        else if (p2 % p1 === 0) console.log(`${p2} es múltiplo de ${p1}`);
        else console.log("Ninguno es múltiplo del otro");
    }

    console.log("\n--- EJERCICIO 67 ---");
    let i = 1;
    while (i <= 10) {
        process.stdout.write(i + " ");
        i++;
    }
    console.log();

    console.log("\n--- EJERCICIO 68 ---");
    let j = 26;
    while (j >= 10) {
        if (j % 2 === 0) process.stdout.write(j + " ");
        j--;
    }
    console.log();

    console.log("\n--- EJERCICIO 69 ---");
    let numCifras = Math.abs(parseInt(await question("Introduce un número entero positivo: ")));
    let contador = 0;
    if (numCifras === 0) contador = 1;
    else {
        while (numCifras > 0) {
            numCifras = Math.floor(numCifras / 10);
            contador++;
        }
    }
    console.log(`Tiene ${contador} cifras`);

    console.log("\n--- EJERCICIO 70 ---");
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 3;
    let acertado = false;
    console.log("Adivina el número del 1 al 10 (tienes 3 intentos)");
    while (intentos > 0 && !acertado) {
        const apuesta = parseInt(await question(`Intento ${4 - intentos}: `));
        if (apuesta === numeroSecreto) {
            console.log("¡ACERTASTE!");
            acertado = true;
        } else {
            intentos--;
            if (intentos > 0) console.log(`Fallo. Te quedan ${intentos} intentos.`);
            else console.log(`Perdiste. El número era ${numeroSecreto}`);
        }
    }

    rl.close();
}

main();

let j: number = 26;
console.log("Pares del 26 al 10:");
while (j >= 10) {
    if (j % 2 === 0) {
        process.stdout.write(j + " ");
    }
    j--;
}
console.log();

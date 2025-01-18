/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

// Aquí tu código


function SumaNumeros() {
    let ArrayCodigoFibonacci = [0,1];

    for (i=0; i<48; i++) {
        ArrayCodigoFibonacci.push(ArrayCodigoFibonacci[ArrayCodigoFibonacci.length-1] +ArrayCodigoFibonacci[ArrayCodigoFibonacci.length-2] )
    };

    console.log("Numeros " + ArrayCodigoFibonacci.length)
    console.log(ArrayCodigoFibonacci)

}

SumaNumeros()

// BREAK CONTINUE
// break: termina el bucle
// continue: salta a la siguiente iteración

// Se puede usar en bucles for, for-in, for-of while y do-while

let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue;   // Salta a la siguiente iteración y no ejecuta el código que sigue
    }
    if (i === 4) {
        break;      // Termina el bucle
    }
    console.log(i);
}




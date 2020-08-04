// 1. Chiedo all'utente di inserire la sua età
var eta = parseInt(prompt("Inserire l'età del passeggero"));

// 2. Chiedo all'utente di inserire il numero di chilometri che intende percorrere
var distanza = parseInt(prompt("Inserire il numero di chilometri che verranno percorsi"));

// 3. Definisco la tariffa base del viaggio
var tariffaBase = distanza * 0.21;
// Debug
console.log(tariffaBase);

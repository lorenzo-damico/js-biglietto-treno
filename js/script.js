// 1. Chiedo all'utente di inserire la sua età
var eta = parseInt(prompt("Inserire l'età del passeggero"));

// 2. Chiedo all'utente di inserire il numero di chilometri che intende percorrere
var distanza = parseInt(prompt("Inserire il numero di chilometri che verranno percorsi"));

// 3. Definisco la tariffa base del viaggio
var tariffaBase = distanza * 0.21;

// 4. Definisco gli sconti per i minorenni e per gli over 65
var scontoMinorenni = (tariffaBase / 100) * 20;
var scontoOver65 = (tariffaBase / 100) * 40;

// 5. Definisco le tariffe scontate per i minorenni e per gli over 65
var tariffaMinorenni = tariffaBase - scontoMinorenni;
var tariffaOver65 = tariffaBase - scontoOver65;

// 6. Effettuo l'arrotondamento delle tariffe a 2 valori decimali
var tariffaBaseArrotondata = Math.round(tariffaBase * 100) / 100;
var tariffaMinorenniArrotondata = Math.round(tariffaMinorenni * 100) / 100;
var tariffaOver65Arrotondata = Math.round(tariffaOver65 * 100) / 100;

// 7. Stampo il risultato in base all'età inserita
if (isNaN(eta) || isNaN(distanza)) {
  alert("Attenzione! Sono ammessi solo valori numerici!")
}
  else if (eta < 18) {
  document.getElementById('costo').innerHTML = tariffaMinorenniArrotondata + " &euro;";
} else if (eta >= 65) {
  document.getElementById('costo').innerHTML = tariffaOver65Arrotondata + " &euro;";
} else {
  document.getElementById('costo').innerHTML = tariffaBaseArrotondata + " &euro;";
}

// Debug
console.log(tariffaBase);
console.log("arrotondamento " + tariffaBaseArrotondata);
console.log(scontoMinorenni);
console.log(tariffaMinorenni);
console.log("arrotondamento " + tariffaMinorenniArrotondata);
console.log(scontoOver65);
console.log(tariffaOver65);
console.log("arrotondamento " + tariffaOver65Arrotondata);

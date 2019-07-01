/* Calcolo prezzo del treno:
Il programma dovrà chiedere
all’utente il numero di chilometri e
l’età e dovrà calcolare il prezzo totale
del viaggio.
Il prezzo del biglietto è definito in
base ai km (0.21 €cent al km) ma c’è
uno sconto del 20% per i minorenni e
del 40% per gli over 65 */

// Dichiarazione variabili
var km, age, costkm, cost;

// Invocazione variabili
 // Chiediamo all'utente il numero di chilometri che deve fare
km = prompt("Inserisci la distanza in km che devi percorrere");

 // Chiediamo all'utente la sua età
age = prompt("Inserisci la tua età");

 // Calcoliamo il costo rapporato ai chilometri
costkm = km * 0.21;

 // Calcoliamo il costo rapporato all'età
if (age <= 17) {
  cost = (costkm - ((costkm * 20) / 100)).toFixed(2);
} else if (age >= 66) {
  cost = (costkm - ((costkm * 40) / 100)).toFixed(2);
} else {
  cost = costkm;
}

// Comunichiamo all'utente il costo del biglietto
document.getElementById('traincost').innerHTML = "Il costo del tuo biglietto è " + cost + " euro";

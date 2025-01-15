/* Palidroma 
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma
*/

let parola1 = prompt("Inserisci una parola").toLowerCase();
let parolaReverse = palindroma();


function palindroma() {
    return parola1.split("").reverse().join("");
}

if (parola1 == parolaReverse) {
    console.log(`La tua parola ${parola1} è palindroma`);
} else {
    console.log(`La tua parola ${parola1} non è palindroma`);
}

// let parola2 = prompt("Metti una parola", "Osso").toLowerCase();
// let isPalindrome = ""

// fuction 
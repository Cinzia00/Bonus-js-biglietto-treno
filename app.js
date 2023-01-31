console.log ('ciao')

//Chiedere nome
let name = prompt('Inserisci il tuo nome');
console.log (name)
//Chiedere cognome
let lastName = prompt('Inserisci il tuo cognome');
console.log (lastName)



//Chiedere i kilometri che deve percorrere
const kilometri = prompt('Quanti kilometri devi percorrere?');
console.log (kilometri);

//Chiedere età passeggero
const età = prompt('Quanti anni hai?');
console.log (età);

const prezzoAlKm = (0.21);

//Calcolare prezzo totale del biglietto
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
 let prezzoBigliettoGenerico = (kilometri * prezzoAlKm).toFixed(2);
 let prezzoTotale;
 let sconto

if (età < 18) {
    //Sconto del 20% per i minorenni
    sconto = ((prezzoBigliettoGenerico*20)/100);
    console.log (sconto);
    prezzoTotale = (prezzoBigliettoGenerico - sconto).toFixed(2);
    console.log (prezzoTotale);
} else if (età > 65) {
    //Sconto del 40% per gli over 65
    sconto = ((prezzoBigliettoGenerico*40)/100);
    console.log (sconto);
    prezzoTotale = (prezzoBigliettoGenerico - sconto).toFixed(2);
    console.log (prezzoTotale)
} else {
    prezzoTotale = prezzoBigliettoGenerico;
}
    

document.getElementById('name').innerHTML = name;
document.getElementById('lastname').innerHTML = lastName;
document.getElementById('età').innerHTML = età;
document.getElementById('prezzo-intero').innerHTML = prezzoBigliettoGenerico;
document.getElementById('sconto-applicato').innerHTML = sconto;
document.getElementById('tot-biglietto').innerHTML = prezzoTotale;
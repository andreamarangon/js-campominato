//chedo all'utente a che difficoltà desidera giocare e la stampo nel Dom id difficolta
// var difficulty = parseInt(prompt('Scegli la difficoltà a cui giocare: 0 = facile, 1 = media, 2 = difficile'))

//dichiaro variabile difficulty e le attribuisco un valore in base alla difficoltà scelta
// var maxNumber;
// if (difficulty == 0) {
//   maxNumber = 100;
// } else if (difficulty == 1) {
//   maxNumber = 80;
// } else {
//   maxNumber = 50;
// }

//correzione
var nonSelezionato = true;
while (nonSelezionato) {
  var difficulty = parseInt(prompt('Scegli la difficoltà a cui giocare: 0 = facile, 1 = media, 2 = difficile'))
  nonSelezionato = false;
  switch (difficulty) {
    case 0:
      var maxNumber = 100;
      break;
    case 1:
      maxNumber = 80;
      break;
    case 2:
      maxNumber = 50;
      break;
    default:
      nonSelezionato = true;
      break;
  }
}
document.getElementById('difficolta').innerHTML = 'Hai scelto la difficoltà: ' + difficulty;

//creo degli array vuoti per ospitare i numeri bomba e i numeri salvi
var bombsArray = [];
var savesArray = [];

//inserisco nell'array bombsArray i numeri bomba creati dalla funzione createBombs
bombsArray = createBombs(bombsArray, maxNumber);

//creo variabile dove inserire il risultato della funzione game
var punteggio = game (bombsArray, savesArray, maxNumber);

//stampo il punteggio ottenuto nel DOM id risultato
console.log('GAME OVER!');
console.log('Il tuo punteggio è di: ' + punteggio);
document.getElementById('risultato').innerHTML = 'GAME OVER! il tuo punteggio è ' + punteggio;



//FUNCTIONS
//funzione per creare 16 numeri bomba casuali
function createBombs(array, max) {
  while (array.length < 16) {
    var numero = randomNumberInRange(1, max);

    if (!array.includes(numero)) {
      array.push(numero);
    }
  }
  return array;
}
//funzione il gioco
function game(bombsArray, savesArray, maxNumber) {
  while (savesArray.length < maxNumber - 16) {
    var numeroUtente = parseInt(prompt('Inserisci un numero:'));
    console.log(numeroUtente);
    if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100 && !savesArray.includes(numeroUtente)) {
      if (!bombsArray.includes(numeroUtente)) {
        savesArray.push(numeroUtente);
      } else {
        return savesArray.length;
      }
    } else {
      alert('Non mi hai dato un numero corretto oppure hai ripetuto due volte lo stesso numero')
    }
  }
  return savesArray.length;
}
//funzione per generare un numero random in range
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log('Non sono numeri');
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

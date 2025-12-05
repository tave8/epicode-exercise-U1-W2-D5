/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log(pet);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = pets.length - 1; i >= 0; i--) {
  const pet = pets[i];
  console.log(pet);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const primoPet = pets.shift();
pets.push(primoPet);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  const randNum = Math.floor(Math.random() * 1000);
  const licensePlate = `RO${randNum}XX`;
  car["licensePlate"] = licensePlate;
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

// aggiungi nuovo car in cars
const nuovaCar = {
  brand: "BMW",
  model: "Marco-Polo",
  color: "blue",
  trims: ["life", "style", "r-line"],
};
cars.push(nuovaCar);

// rimuovi proprietà trims da ogni auto

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.trims.pop();
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  const primoTrim = car.trims[0];
  justTrims.push(primoTrim);
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  const color = car.color;
  const primaLetteraColor = color[0];
  const eUgualeB = primaLetteraColor === "b";
  let msg = "";
  if (eUgualeB) {
    msg = "Fizz";
  } else {
    msg = "Buzz";
  }
  console.log(msg);
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;

while (i < numericArray.length) {
  const x = numericArray[i];
  const e32 = x === 32;
  if (e32) {
    break;
  }
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const posizioniChars = [];

for (let i = 0; i < charactersArray.length; i++) {
  const c = charactersArray[i];
  let pos = null;
  console.log(c);

  switch (c) {
    case "g":
      pos = 7;
      break;
    case "n":
      pos = 14;
      break;
    case "u":
      pos = 21;
      break;
    case "z":
      pos = 26;
      break;
    case "d":
      pos = 4;
      break;
    default:
    // si dovrebbe sollevare un errore perché carattere non è stato specificato
  }
  posizioniChars.push(pos);

}

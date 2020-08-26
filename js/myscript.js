// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log e poi provare a stampare con jQuery:
// BONUS: Provate ad utilizzare Handlebars.


//#1: Creo oggetto con proprietà richieste:
var studente = {
    'nome': 'Valeria',
    'cognome': 'Curseri',
    'età': 26,
};

//#2: Utilizzo del for in per stampare le proprietà:
for (var k in studente) {
    console.log(studente[k]);
}

//#3: Creo array di oggetti di studenti:

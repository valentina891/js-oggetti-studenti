// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
//   e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt
//   di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log e poi provare a stampare con jQuery:
// BONUS: Provate ad utilizzare Handlebars.

$(document).ready(function(){

//#1: Creo oggetto con proprietà richieste:
var studente = {
    'nome': 'Pinco',
    'cognome': 'Pallino',
    'età': 26,
};

//#2: Utilizzo del for in per stampare le proprietà:
for (var k in studente) {
    console.log(studente[k]);
}

//#3: Creo array di oggetti di studenti:
var studenti = [
    {
        'nome': 'Mulan',
        'cognome': 'Fa',
        'eta': 29,
    },
    {
        'nome': 'Pluto',
        'cognome': 'Fedelis',
        'eta': 37,
    },
    {
        'nome': 'Paperino',
        'cognome': 'Giallo',
        'eta': 25,
    },
    {
        'nome': 'Topolino',
        'cognome': 'Belloecarino',
        'eta': 36,
    },
];

//#3.1: Ciclo su tutti gli studenti e stampa nome e cognome:
for (var i = 0; i < studenti.length; i++) {
    // console.log(studenti[i]);
    // for (var k in studenti) {
        console.log(studenti[i].nome + ' ' + studenti[i].cognome);
    // }
}

//#4: 3 prompt per aggiunta oggetto studente da parte dell'utente:
var nome = prompt('Inserisci un nome');
var cognome = prompt('Inserisci un cognome');
var eta = parseInt(prompt('Inserisci una età'));

studenti.push({
    'nome': nome,
    'cognome': cognome,
    'eta': eta,
});
console.log(studenti);

//Variante:

//var nuovoStudente = {
//'nome': prompt('Inserisci il nome'),
//'cognome': prompt('Inserisci il cognome'),
//'eta': parseInt(prompt('Inserisci l\'eta')),
//}
//studenti.push(nuovoStudente);
//console.log(studenti);

//***Correzione con Handlebars***:

for (var i = 0; i < studenti.length; i++){
    // console.log(studenti[i]);
    var student = studenti[i];
    console.log(student);

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var html = template(student);

    $('#stud').append(html);

    }

});

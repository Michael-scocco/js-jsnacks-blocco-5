/*******************
js-jsnacks-blocco-5
*******************/
/********
Snack 1:
********/
/*
Crea un array di 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

// Crea un array di 10 oggetti che rappresentano una zucchina,
/*
var Zucchine = [
    {
        varietà: 'chiara',
        peso: 10,
        lunghezza: 15
    },
    {
        varietà: 'chiara',
        peso: 4,
        lunghezza: 20
    },
    {
        varietà: 'chiara',
        peso: 9,
        lunghezza: 18
    },
    {
        varietà: 'chiara',
        peso: 6,
        lunghezza: 8
    },
    {
        varietà: 'chiara',
        peso: 2,
        lunghezza: 4
    },
    {
        varietà: 'chiara',
        peso: 0.5,
        lunghezza: 2
    },
    {
        varietà: 'chiara',
        peso: 18,
        lunghezza: 40
    },
    {
        varietà: 'chiara',
        peso: 7,
        lunghezza: 5
    },
    {
        varietà: 'chiara',
        peso: 1,
        lunghezza: 3
    },
    {
        varietà: 'chiara',
        peso: 5,
        lunghezza: 21
    }
];
var sommaPeso = 0;
// Calcola quanto pesano tutte le zucchine.
for (var i = 0; i < Zucchine.length; i++) {
    var zucchina = Zucchine[i];
    console.log(zucchina, zucchina.peso);
    sommaPeso += zucchina.peso;

}
console.log(sommaPeso);
*/

/********
Snack 2:
********/
/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/
// Crea 10 oggetti che rappresentano una zucchina.
var Zucchine = [
    {
        varietà: 'chiara',
        peso: 10,
        lunghezza: 15
    },
    {
        varietà: 'chiara',
        peso: 4,
        lunghezza: 20
    },
    {
        varietà: 'chiara',
        peso: 9,
        lunghezza: 18
    },
    {
        varietà: 'chiara',
        peso: 6,
        lunghezza: 8
    },
    {
        varietà: 'chiara',
        peso: 2,
        lunghezza: 4
    },
    {
        varietà: 'chiara',
        peso: 0.5,
        lunghezza: 2
    },
    {
        varietà: 'chiara',
        peso: 18,
        lunghezza: 40
    },
    {
        varietà: 'chiara',
        peso: 7,
        lunghezza: 5
    },
    {
        varietà: 'chiara',
        peso: 1,
        lunghezza: 3
    },
    {
        varietà: 'chiara',
        peso: 5,
        lunghezza: 21
    }
];

var zucchineGrandi = [];
var zucchinePiccole = [];


// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
for (var i = 0; i < Zucchine.length; i++) {
    var zucchina = Zucchine[i];
    var zucchinaLg = zucchina.lunghezza;
    console.log(zucchina, zucchinaLg);

    if (zucchinaLg > 15) {
        zucchineGrandi.push(zucchina)
    }else {
        zucchinePiccole.push(zucchina)

    };

};
console.log(zucchineGrandi);
console.log(zucchinePiccole);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
var sommaZuccGrandi = 0;
for (var i = 0; i < zucchineGrandi.length; i++) {
    var zucchinaGrande = zucchineGrandi[i];
    var zucchinaPeso = zucchina.peso;
    sommaZuccGrandi += zucchinaPeso;
}
console.log('il peso totale è delle zucchine grandi sono: ' + sommaZuccGrandi + 'kg');


var sommaZuccPiccole = 0;
for (var i = 0; i < zucchinePiccole.length; i++) {
    var zucchinaPiccola = zucchinePiccole[i];
    var zucchinaPeso = zucchina.peso;
    sommaZuccPiccole += zucchinaPeso;
}
console.log('il peso totale è delle zucchine piccole sono: ' + sommaZuccPiccole + 'kg');









// Snack 3:
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
// Snack 4:
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// Snack 5:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

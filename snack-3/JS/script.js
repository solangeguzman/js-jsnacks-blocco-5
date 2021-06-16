// Snack 3 - 1^ parte.
// Creare un array con tre numeri, 
// calcolare la media di questi tre numeri

var num=[5,8,10];
var result=0

for(var i = 0; i < num.length; i++){
    result += num[i];
}

var resultfin= result/num.length;
console.log(resultfin)

// Snack 3 - 2^ parte. Costruiamo un array di tre giocatori
//  di basket. Ogni giocatore avrà le seguenti proprietà:
// nome
// cognome
// anno
// punteggioCalcolare il punteggio medio dei tre giocatori.

var giocatori= {
    nomi:[
        {nome:'Marco',cognome:'bertoni', anno:'1996', punteggio:'20'},
        {nome:'Mario', cognome:'guzman',anno:'1997', punteggio:'10'},
        {nome:'Gaia', cognome:'gutierrez',anno:'1995', punteggio:'15'}

    ]
}
// seconda parte
var sum= 0;

for(var x = 0; x < giocatori.nomi.length; x++){
    sum += giocatori.nomi[x].punteggio;
}

var avg = sum / giocatori.nomi.length;
console.log(avg);
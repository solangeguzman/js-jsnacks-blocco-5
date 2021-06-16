// Snack ---4 --- 
// Creare un array di 3 studenti (3 oggetti in un array,
// quindi) con queste proprietà: nome,cognome,age,descrizione
// Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
// ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

var studenti= [
        {nome:'Marco',cognome:'bertoni', anni:'21', descrizione:''},
        {nome:'Mario', cognome:'guzman', anni:'26', descrizione:''},
        {nome:'Gaia', cognome:'gutierrez',anni:'10', descrizione:''}

    ]


//  con dei prompt chiediamo di volta in volta all’utente
//  la descrizione di ciascun studente, salviamola quindi 
//  all’interno della sua proprietà. 
for(var x = 0; x < studenti.length; x++) {
    studenti[x].descrizione=prompt('aggiungi una descrizione');

}
// Nota bene: questo naturalmente, in un ciclo, per ciascun studente. 

var studentOne=document.querySelector('#oneStudent');
var studentTwo=document.querySelector('#twoStudent');
var studentThree=document.querySelector('#threeStudent');
for (x=0; x < studenti.length; x++){
   for(var k in studenti[0]){
    studentOne.innerHTML+='<li>'+ k + ':' +studenti[x][k]+'</li>' 
   }
 // Stampiamo con un console.log il risultato di questo array di studenti aggiornato.
}console.log(studenti)
  


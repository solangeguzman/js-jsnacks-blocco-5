// Snack 1.
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

var namePalla={
    nome:'palla',
    peso:'30'
}


for (var x in namePalla) {
    console.log(namePalla[x]);
}

// Snack1. - la continua.
// Attraverso un prompt dare la possibilità 
// all’utente di modificare il peso della palla.

namePalla.peso=({
    peso: prompt('Inserisci il peso')
      
});console.log(namePalla)

// Snack 1. - la vendetta.
// Inserire  l’oggetto palla in una array var giochi = [];

var giochi= {
    namePalla:[
        {nome:'Palla',peso:'30'},
        
    ]
}

/* 
for(var x = 0; x < giochi.namePalla.length; x++) {
    for (var k in giochi.namePalla[x]){
        console.log(giochi.namePalla[x][k]);
    }
}
*/ 
// Snack 1 - la conclusione per davvero.
// Permettere all’utente di inserire un nuovo
// oggetto all’interno dell’array giochi

giochi.namePalla.push({
    nome: prompt('Inserisci un nuovo gioco'),
    peso:prompt('Inserisci il suo peso'),
      
  });console.log(giochi) 


// Snack 2
// Creare un oggetto che rappresenti un triangolo rettangolo, 
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area e stampare il risultato con console.log

var triangolo={
    base: 16,
    altezza: 20
}

var ipotenusa = Math.sqrt(Math.pow(triangolo.base,2) + Math.pow(triangolo.altezza,2))
console.log(ipotenusa)

var perimetro = ipotenusa + triangolo.base + triangolo.altezza
console.log(perimetro)

var area = (triangolo.base = triangolo.altezza)/2
console.log(area)

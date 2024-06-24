let fname = prompt("Inserisci il tuo nome")
let surname = prompt("Innserisci il tuo congnome")
let color = prompt("Inserisci il tuo colore preferito")

let answers = `${fname}${surname}${color}23`

document.getElementById("property").innerHTML = answers;
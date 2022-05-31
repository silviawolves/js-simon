'use strict'

//recupero il contenitore dove andranno stampati i numeri
const contenitoreNumeri = document.getElementById('numeri-casuali')

//recupero il contenitore dove mettere il countdown
const contenitoreCountdown = document.getElementById('conto-alla-rovescia')

//recupero il contenitore per stampare il risultato
const risultato = document.getElementById('risultato')

//creo tre array
//uno con i numeri generati dal pc
const numeriCasuali = []
//uno che prenda i numeri inseriti dall'utente
const numeriUtente = []
//uno con i numeri indovinati
const numeriIndovinati = []

//creo un ciclo per generare cinque numeri random
for (let i = 0; i < 5; i++) {
    const numeroRandom = Math.floor((Math.random() * 50) + 1)
        
    //controllo che il numero non si ripeta
    if (!numeriCasuali.includes(numeroRandom)) {
        numeriCasuali.push(numeroRandom)
    } else {
        i--;
    }
}

//appendo i numeri casuali all'html
contenitoreNumeri.innerHTML = numeriCasuali.join(' - ')

//creo una costante per i secondi totali
let secondiRestanti = 10

//creo la funzione per il countdown di trenta secondi
const contoAllaRovescia = setInterval(function() {
    
    secondiRestanti--;
    const secondi = secondiRestanti % 60
    
    //appendo all'html il conto alla rovescia
    contenitoreCountdown.innerHTML = `00:${secondi.toString().padStart(2, '0')}`

    //se arriva a 00:00 il conto alla rovescia si blocca
    if (secondiRestanti === 0) {
        clearInterval(contoAllaRovescia)
        contenitoreNumeri.classList.add('d-none')
    }
}, 1000)

//dopo i trenta secondi, appaiono i prompt per inserire i numeri visti
setTimeout(function () {

        for (let i = 0; i < 5; i++) {
            const numeriScelti = +prompt('Adesso scrivi i numeri che hai visto.')

            if (!isNaN(numeriScelti)) {
                numeriUtente.push(numeriScelti)
            } else {
                i--
            }
        }
        console.log(numeriUtente)

        //analizzo array numeri utente, per vedere se sono nell'array casuale
        for (let i = 0; i < numeriUtente.length; i++) {
            console.log(numeriUtente[i])
            console.log(numeriCasuali[i])

            if (numeriUtente[i].toString() === numeriCasuali[i].toString()) {
                numeriIndovinati.push(numeriUtente[i])
                risultato.innerHTML = `Complimenti, hai indovinato ${numeriIndovinati.length} numeri, ossia: ${numeriIndovinati.join(', ')}!`
            }
        }
        console.log(numeriIndovinati)
}, 11000)




/*
Descrizione:
Visualizzare in pagina (html) 5 numeri casuali. x
Avviare un timer di 30 secondi x
Dopo 30 secondi, nascondere i numeri. x
L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt(). x
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
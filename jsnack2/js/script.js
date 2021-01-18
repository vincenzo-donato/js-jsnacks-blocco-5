// DICHIARO VAR PER CREARE UN NUMERO DI PARTENZA SU CUI LAVORARE IN SEGUITO 
var pesoTot = 0;

// CREO UNA VAR ARRAY OGGETTO DOVE AGGIUNGERE I MIEI VALORI
var zucchine = [
    {
        Varietà : 'Zucchino Siciliano',
        Peso : 5,
        Lunghezza : 20 
    },
    {
        Varietà : 'Zucchino nero di Milano',
        Peso : 3,
        Lunghezza : 10 
    },
    {
        Varietà : 'Zucchino romanesco',
        Peso : 4,
        Lunghezza : 15 
    },
    {
        Varietà : 'Zucchino ortolano di Faenza',
        Peso : 2,
        Lunghezza : 11 
    },
    {
        Varietà : 'Zucchina lunga fiorentina',
        Peso : 1,
        Lunghezza : 17 
    },
    
];

// ESEGUO QUESTO CICLO FOR PER STAMPARE TUTTE I VALORI DELLA MIA ARRAY OGGETTO E LI STAMPO SULLA MIA PAGINA
for(var i = 0; i < zucchine.length; i++){
    for(var k in zucchine[i]){
        document.getElementById('stamp-completa'). innerHTML += k + ' ' + zucchine[i][k] + '<br>';
    }
}

// ESEGUO QUESTO CICLO PER CALCORA IL PESO COMPLESSIVO DEI VALORI DELLA MIA ARRAY OGGETTO 
for(var i = 0; i < zucchine.length; i += 1) {
		pesoTot += zucchine[i].Peso;
}

// STAMPO SOLO IL PESO 
document.getElementById('stamp').innerHTML += 'Il peso complessivo di tutte le zucchine è di: ' + pesoTot;

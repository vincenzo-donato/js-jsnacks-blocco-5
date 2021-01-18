// DICHIARO VAR 
var zucchineG =[];
var zucchineP = [];
var totPeso = 0;
var totPesoG = 0;

// COSTRUISCO UNA VAR ARRAY OGGETTO PER LE ZUCCHINE 
var zucchine = [
    {
        Nome : 'Zucchina Fluo',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Arancione',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Gialla',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Verde',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Viola',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Rossa',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Gialla',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Blu',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Marrone',
        Misura : '',
        Peso : ''
    },
    {
        Nome : 'Zucchina Nera',
        Misura :'',
        Peso : ''
    }
];

// CREO QUESTO CICLO PER FAR SCORRERE LA MIA ARRAY OGGETTO 
for(var i = 0; i < zucchine.length; i++){
    // assegno un numero casuale al valore misura e peso ad ogni oggetto della mia array 
    zucchine[i].Misura = getRandomInt(7, 21);
    zucchine[i].Peso = getRandomInt(1, 10);
    // faccio un push in una delle array in base alla misura e le stampo 
    if(zucchine[i].Misura < '15'){
        document.getElementById('stamp-minore').innerHTML += zucchine[i].Nome + ' Peso: ' +  zucchine[i].Peso + 'kg' + ' Misura: ' + zucchine[i].Misura + 'cm' +'<br>';
        zucchineP.push(zucchine[i]);
    }
    else if(zucchine[i].Misura >= '15'){
        document.getElementById('stamp-maggiore').innerHTML += zucchine[i].Nome + ' Peso: ' +  zucchine[i].Peso + 'kg' + ' Misura: ' + zucchine[i].Misura + 'cm' +'<br>';
        zucchineG.push(zucchine[i]);
    }
}

// DOPO AVER POPOLATO LE DUE ARRAY ESEGUO QUESTO CICLO PER FAR SOMMARE TUTTO IL PESO DELLE DUE ARRAY 
for(var i = 0; i < zucchineP.length; i += 1) {
    totPeso += zucchineP[i].Peso;
}

for(var i = 0; i < zucchineG.length; i += 1) {
    totPesoG += zucchineG[i].Peso;
}

// DOPO AVER CALCOLATO IL PESO COMPLESSIVO DELLE DUE DIFFERENTI ARRAY LO STAMPO 
document.getElementById('stamp-minore').innerHTML +='Per un totale di: ' + totPeso  + 'kg' + '<br>';
document.getElementById('stamp-maggiore').innerHTML +='Per un totale di: ' + totPesoG + 'kg' + '<br>';


// FUNZIONI 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}


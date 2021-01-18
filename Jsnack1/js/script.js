//GRAZIE AL (DOCUMENT).READY TUTTE LE AZIONI VERRANNO ESEGUITE DOPO CHE IL CARICAMENTO DELL'INTERA PAGINA SARA' ESAGUITO
$(document).ready(function(){

    // CREO UNA VAR OGGETTO PALLA A CUI DO DEI VALORI 
    var palla = {
        Nome : 'Palla da pesare',
        Peso : 20 
    }

    // STAMPO I VALORI ATTUALI DI PALLA 
    for (var k in palla){
        document.getElementById('stamp').innerHTML += k +' '+ palla[k] + '<br>';
    }

    // CREO QUESTO EVENTO KEY CODE  
    $('#testo-input').keydown(function(event){
        // se il tasto premuto equivale a 13 (invio della tastiera) si affia questa azione 
        if (event.which == 13 || event.keyCode == 13){
                var testoInput = $('#testo-input').val();
                $('#testo-input').val('');
                
                // esegui dei controlli per assicurarmi che i valori inseriti sono validi 
                if(isNaN(testoInput)){
                    alert('ATTENZIONE!! Valore non consentito..');
                }
                else if(testoInput >= 1) {
                    // sostituisco il valore del peso con quello inserito nel mio input 
                    palla.Peso = testoInput;
                    // stampo i valori della palla con il peso modificato 
                    for (var k in palla){
                        document.getElementById('stamp-modif').innerHTML += k +' '+ palla[k] + '<br>';
                }
                // chiusura for in  
                }
                else{
                    alert('ATTENZIONE!! Numero non consentito')
                }
            
        }
        // chiusura if keycode 
    });
    // CHIUSURA EVENTI KEY CODE 

});
// CHIUSURA DOCUMENT 
/*
SCOPO DEL GIOCO:
Intromettersi furtivamente nel codice scritto da un altro sviluppatore per aggiungere un effetto di js.
In particolare l’attivazione del menu al click dell’hamburger.
Nella repo trovate quindi il file HTML e il CSS compilati, quello che dovete scrivere voi è il JS.
Di seguito il testo dell’esercizio:
Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.
*/

$('.header-right > a').click(function(){
    $(".hamburger-menu").addClass("active");
});

$('.close').click(function(){
    $(".hamburger-menu").removeClass("active");
});

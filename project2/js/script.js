$(document).ready(function(){
    
    $('#btnCambiar').click(function() {
        $('h1').css('color','red');                                               //
        $('h1').css('bakground-color','gold');
        $('h1').css('font-size','5em');
        $('h1').css('font-family','arial,helvetica, sans-serif');

        $('p').css('color','blue')
            .css('font-size','34px');
    });
});
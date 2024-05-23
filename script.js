$(document).ready(function){
    $('#btn_esconder').click(function(){
        $('.text').hide('fast');
    });
    $('#btn_exibir').click(function(){
        $('.text').hide('slow');
    });
};
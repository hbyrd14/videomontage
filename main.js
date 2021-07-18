$(document).ready(function(){
    $("#video").hide();
    $("#video").fadeIn(4000);
    $("button").hide();
    $("button").click(function(){
        window.open('testScript.pdf', '_blank');
    });
    document.getElementById("video").addEventListener('ended',myHandler,false);
    function myHandler(e) {
        $("button").fadeIn(4000);
    }
    
});

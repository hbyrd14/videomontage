$(document).ready(function(){
    $("#video").hide();
    $("#video").fadeIn(1000);
    $("button").hide();
    $("button").click(function(){
        window.open('testScript.pdf', '_blank');
    });
    document.getElementById("video").addEventListener('ended',buttonHandler,false);
    function buttonHandler(e) {
        $("button").fadeIn(1000);
    }
    
});

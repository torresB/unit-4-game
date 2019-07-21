var scoreToBeat;
var loss= 0;
var win= 0;
var totalScore= 0;

var startGameReset = function() {

    $(".crystals").empty();

    scoreToBeat = Math.floor(Math.random()* 69)+ 30;
    $("#result").html("Score to Beat:" + scoreToBeat);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random()* 11) + 1;


        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "randomNum" : random
            });

        $(".crystals").append(crystal);
            
    }
}
startGameReset();

$(document).on('click', ".crystal", function() {

   var num = parseInt($(this).attr('randomNum'));
    totalScore += num;

    if (totalScore > scoreToBeat){
       loss--;
       $("#lost").html(loss);
       totalScore = 0;
       startGameReset();
    }
    else if (totalScore === scoreToBeat) {
        win++;
        $("#win").html(win);
        totalScore = 0;
        startGameReset();
    }
    
});
        
    
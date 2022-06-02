alert('君は深淵に足を踏み入れる覚悟はあるか？');

function play_se(){
    var bakemono = new Audio('gyokuon.m4a');
    bakemono.play();
}

$(function(){
    $('#button1').click(play_se)
});

function hurue(){
    var karako = new Audio('karaoke.m4a');
    karako.play();
}

$(function(){
    $('#button2').click(hurue)
});

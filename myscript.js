alert('君は深淵に足を踏み入れる覚悟はあるか？');

function play_se(){
    var bakemono = new Audio('gyokuon.m4a');
    bakemono.play();
}

$(function(){
    $('#button1').click(play_se)
});

function hurue(){
    window.navigator.vibrate([200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,])
}

$(function(){
    $('#button2').click(hurue)
});

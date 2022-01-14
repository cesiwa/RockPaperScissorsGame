

var pcTahmin;
var dizi = ["TAŞ", "KAĞIT", "MAKAS"];
var i = 0;
var j = 0;
var a;


function hesapla(x) {

    var dizi = ["ROCK", "PAPER", "SCISSORS"];
    var pcTahmin = Math.floor(Math.random() * 3);

    if ((pcTahmin == 0 && x == 0) || (pcTahmin == 1 && x == 1) || (pcTahmin == 2 && x == 2)) {
        document.getElementById("pa").innerHTML = dizi[pcTahmin];
        document.getElementById("pa2").innerHTML = dizi[x];
        document.getElementById("pa3").innerHTML = "DRAW";
        i++;
        j++;
        document.getElementById("score1").innerHTML = "Score:" + i;
        document.getElementById("score2").innerHTML = "Score:" + j;


    }

    else if ((pcTahmin == 0 && x == 1) || (pcTahmin == 1 && x == 2) || (pcTahmin == 2 && x == 0)) {
        document.getElementById("pa").innerHTML = dizi[pcTahmin];
        document.getElementById("pa2").innerHTML = dizi[x];
        document.getElementById("pa3").innerHTML = "YOU WIN";
        i++;
        document.getElementById("score1").innerHTML = "Score:" + i;
        document.getElementById("score2").innerHTML = "Score:" + j;


    }
    else {
        document.getElementById("pa").innerHTML = dizi[pcTahmin];
        document.getElementById("pa2").innerHTML = dizi[x];
        document.getElementById("pa3").innerHTML = "YOU LOSE";
        j++;
        document.getElementById("score2").innerHTML = "Score:" + j;
        document.getElementById("score1").innerHTML = "Score:" + i;
    }
    if (i == 10) {
        alert("YOU WIN. The game is finished. Start again.");

    }
    else if (j == 10) {
        alert("YOU LOSE. The game is finished. Start again.");
 
    }

    else{

    }

}
function reset(){
    i=0;
    j=0;
    document.getElementById("score1").innerHTML="Score:"+i;
    document.getElementById("score2").innerHTML="Score:"+j;
    document.getElementById("pa3").innerHTML=" ";

}
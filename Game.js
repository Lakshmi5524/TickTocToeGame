

var option=["X","O"];
var selectOption= 0;
var currentplayer = option[selectOption];

function handileClick(id){
    // alert(id);
    var currenBox= document.getElementById("box" +id).innerText;
    if(currenBox == ""){
    currentplayer=option[(selectOption++) %2];
    document.getElementById("box"+ id).innerText = currentplayer;
    }
}





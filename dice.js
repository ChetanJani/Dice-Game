var num1= Math.floor(Math.random()*6 +1);
document.querySelector(".dice1").setAttribute("src","dice"+num1+".png");


var num2= Math.floor(Math.random()*6 +1);
document.querySelector(".dice2").setAttribute("src","dice"+num2+".png");

if(num1>num2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    document.querySelector("img").classList.remove("visible1");
    
}
else if(num1<num2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
    document.querySelectorAll("img")[3].classList.remove("visible2");
    
}
else{
    document.querySelector("h1").innerHTML="Draw!"
    document.querySelector("img").classList.remove("visible1");
    document.querySelectorAll("img")[3].classList.remove("visible2");
}
// if(num1===1){
//     document.querySelector(".dice1").setAttribute("src","dice"+num1+".png");
// }
// else if(num1===2){
//     document.querySelector(".dice1").setAttribute("src","dice2.png");
// }
// else if(num1===3){
//     document.querySelector(".dice1").setAttribute("src","dice3.png");
// }
// else if(num1===4){
//     document.querySelector(".dice1").setAttribute("src","dice4.png");
// }
// else if(num1===5){
//     document.querySelector(".dice1").setAttribute("src","dice5.png");
// }
// else{
//     document.querySelector(".dice1").setAttribute("src","dice6.png");
// }


// if(num2===1){
//     document.querySelector(".dice2").setAttribute("src","dice1.png");
// }
// else if(num2===2){
//     document.querySelector(".dice2").setAttribute("src","dice2.png");
// }
// else if(num2===3){
//     document.querySelector(".dice2").setAttribute("src","dice3.png");
// }
// else if(num2===4){
//     document.querySelector(".dice2").setAttribute("src","dice4.png");
// }
// else if(num2===5){
//     document.querySelector(".dice2").setAttribute("src","dice5.png");
// }
// else{
//     document.querySelector(".dice2").setAttribute("src","dice6.png");
// }




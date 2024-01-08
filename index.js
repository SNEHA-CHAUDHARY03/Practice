let a=20
let b=0
x=a+b
message=""
let mes=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardEL=document.getElementById("card-el")
function startgame(){
    sumEl.textContent="sum: "+ x
    cardEL.textContent="card:"+a+" " +b
    {if (x<21){
        message="Do your want to draw another card"
    }
    else if(x===21){
        message="WINNER!!!!!!"
    }
    else{
        message="your are out of the game"
    }}
    mes.textContent=message
}
message2=""
function newcard(){
message2="drawing a new card from the deck"
}

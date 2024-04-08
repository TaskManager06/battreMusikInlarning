

document.addEventListener("DOMContentLoaded", (event) => {
   

//setInterval(windowSwitch, 4500)
var num = 1;
function windowSwitch(){
    console.log(num);
    const imgs = [ "red","blue", "green"];
    document.getElementById("aktuellt1").style.backgroundColor = imgs[num];
    num += 1;
    if(num > imgs.length - 1){
        num = 0;
    };
}




var isMenuClosed = true;
const menuButtonElement = document.getElementById("openMenu");
console.log(menuButtonElement)
menuButtonElement.addEventListener("click",openMenu);

function openMenu(){
    console.log(isMenuClosed)
    if(isMenuClosed){
        document.getElementById("fullScreenMenu").style.width = "97vw";
    }
    else{
        document.getElementById("fullScreenMenu").style.width = "0";
    }
    isMenuClosed = !isMenuClosed;
    
}





});
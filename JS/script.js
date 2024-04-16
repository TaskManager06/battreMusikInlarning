//placeholder
var database = [
//nybörjare
[
["get lucky", "https://www.youtube.com/watch?v=5NV6Rdv1a3I&pp=ygUJZ2V0IGx1Y2t5","IMG\chordsGetLuckyGuitar.jpg","IMG\chordsPianoGetLucky.png" ],
["Dont stop believin", "https://www.youtube.com/watch?v=1k8craCGpgs", "IMG\chordsGuitarDontStopBelieving.png","IMG\chordsPianoDontStopBelieving.png"],
[],
],
//medel
[
["Let her go", "https://www.youtube.com/watch?v=RBumgq5yVrA", "IMG\chordsGuitarLetHerGo.png","IMG\chordsPianoLetHerGo.png"],
[],
[],
],
//expert
[
[],
[],
[],
],
]



document.addEventListener("DOMContentLoaded", (event) => {
   
const activeWindow = document.getElementsByTagName('body')[0];
console.log(activeWindow.id)
if(activeWindow.id == "indexBody"){
    console.log(1)
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

var buttons = ["gitarrLektionRedirect","pianoLektionRedirect","trummorLektionRedirect"]
for(let i =0;i< buttons.length;i++){
    document.getElementById(buttons[i]).addEventListener("click", lektionerFunc);
    console.log(1)
}
}


else if(activeWindow.id == "indexLektioner"){

    var buttons = ["gitarrLektioner","pianoLektioner","trummorLektioner"]
    for(let i =0;i< buttons.length;i++){
        document.getElementById(buttons[i]).addEventListener("click", lektionerFunc);
        console.log(1)
    }

}
else if(activeWindow.id == "indexHittaDinNastaLat"){
    
const hittaDinNastaLatForm = document.getElementById("hittaDinNastaLat");
hittaDinNastaLatForm.addEventListener("click",openForm);

function openForm(){
    document.getElementById("hittaDinNastaLatForm").style.width = "97vw";
    
};

}



function lektionerFunc(){
console.log(1)
};

});
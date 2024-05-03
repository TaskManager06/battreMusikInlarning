//placeholder
var database = [
//nybörjare
[
["get lucky", "https://www.youtube.com/embed?v=5NV6Rdv1a3I&pp=ygUJZ2V0IGx1Y2t5","IMG/getLuckyImg.jpeg","IMG/chordsGetLuckyGuitar.jpg","IMG/chordsPianoGetLucky.png", "nybörjare ---- 4/5","Beskrivning Beskrivning Beskrivning Beskrivning Beskrivning","Daft punk","IMG/chordsGetLuckyDrums.jpg","Audio/getLuckyAudio.mp3"],
["Dont stop believin", "https://www.youtube.com/watch?v=1k8craCGpgs","IMG/dontStopBelievingImg.jpeg","IMG/chordsGuitarDontStopBelieving.png","IMG/chordsPianoDontStopBelieving.png","nybörjare ---- 5/5","Beskrivning Beskrivning Beskrivning Beskrivning Beskrivning","Journey","IMG/dontStopBelievingChordsDrums.png","Audio/dontStopBelievingAudio.mp3"],
[],
],
//medel
[
["Let her go", "https://www.youtube.com/watch?v=RBumgq5yVrA","IMG/letHerGoImg.jpeg", "IMG/chordsGuitarLetHerGo.png","IMG/chordsPianoLetHerGo.png","medel ---- 3/5","Beskrivning Beskrivning Beskrivning Beskrivning Beskrivning","Passenger","IMG/letHerGoAckordDrums.png","Audio/letHerGoaudi.mp3"],
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

var lektionerLista = [["IMG/enklaackord.jpg","IMG/intermediateLektionGitarr.jpg","IMG/hardLektionGitarr.jpg"],["IMG/enklaPianoAckord.png","IMG/pianoMedelSvårLektion.jpg","IMG/pianoHardLektion.jpg"],["IMG/TrummorEnkelLektion.png","IMG/trummorMedelLektion.png","IMG/trummorSvårLektion.png"]] 
var id = ["lektionNybörjare","lektionMedel", "lektionExpert"]
document.addEventListener("DOMContentLoaded", (event) => {
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



var buttons = ["gitarrLektionRedirect","pianoLektionRedirect","trummorLektionRedirect"]
for(let i =0;i< buttons.length;i++){
    document.getElementById(buttons[i]).addEventListener("click", function(event){
        
        const url = "lektioner.html?instrument=" + encodeURIComponent(event.target.value)
        window.location.href = url;
    });
    
}
}


else if(activeWindow.id == "indexLektioner"){

    var urlParams  = new URLSearchParams(window.location.search)
    var value = urlParams.get("instrument")
    console.log(value)
    if (!value) {
        value = 0;
    };
    for(let i = 0; i< id.length;i++){
        document.getElementById(id[i]).src= lektionerLista[value][i]
    }
    
    var buttons = ["gitarrLektioner","pianoLektioner","trummorLektioner"]
    for(let i =0;i< buttons.length;i++){
        document.getElementById(buttons[i]).addEventListener("click", function(event){

            for(let i = 0; i< id.length;i++){
                
                document.getElementById(id[i]).src= lektionerLista[event.target.value][i]
            }

        });
        
    }
    
    

}
else if(activeWindow.id == "indexHittaDinNastaLat"){
   document.getElementById("submitButton").addEventListener("click", function(event){
    document.getElementById("test").style.display = "none";
    document.getElementById("songContainer").style.display = "block";
    
    const radioButtons = document.querySelectorAll('input[name="niva"]');
    console.log(radioButtons)
    var radioValue;
    for(let i = 0; i< radioButtons.length;i++){
        if(radioButtons[i].checked){
            radioValue = radioButtons[i].value;
        }
    }
    changeNiva(radioValue)

   });

   function changeNiva(radioValue){
    const latar = document.getElementsByTagName("section");
    for(let i=0; i < latar.length; i++){
        latar[i].querySelector("h2").innerText  = database[radioValue][i][0];
        console.log(database[radioValue][i][2])
        latar[i].querySelector("img").src = database[radioValue][i][2];
        latar[i].querySelector("p").innerText = database[radioValue][i][5];
        const url = "latSida.html?videoUrl=" + encodeURIComponent(database[radioValue][i][1]) + "&namn=" + encodeURIComponent(database[radioValue][i][0]) + '&gitarrAckord=' + encodeURIComponent(database[radioValue][i][3]) + '&pianoAckord=' + encodeURIComponent(database[radioValue][i][4]) + '&trummorAckord=' + encodeURIComponent(database[radioValue][i][8]) + '&artist=' + encodeURIComponent(database[radioValue][i][7]) + '&beskrivning=' + encodeURIComponent(database[radioValue][i][6]) + '&audio=' + encodeURIComponent(database[radioValue][i][9]);
        latar[i].parentElement.href= url;
    }
   }



}

else if(activeWindow.id == "indexLatSida"){
    var urlParams  = new URLSearchParams(window.location.search)
    console.log(urlParams.get("pianoAckord"))
    document.getElementById('video').src = urlParams.get("videoUrl");
    document.getElementById('ytLänk').href = urlParams.get("videoUrl");
    document.getElementsByTagName('h1')[0].innerText = urlParams.get("namn");
    document.getElementById('artist').innerText = 'av:' + urlParams.get("artist");
    document.getElementById('beskrivning').innerText = urlParams.get("beskrivning");
    document.getElementById('ackord').src = urlParams.get('pianoAckord');
    document.getElementsByTagName('audio')[0].src = urlParams.get('audio');
    const ackordLista = ['pianoAckord','gitarrAckord','trummorAckord'];
    const buttons = document.getElementsByClassName("ackordButton");
    console.log(buttons)
    for( let i = 0; i < buttons.length; i++){
        console.log(1)
        buttons[i].addEventListener('click' ,function(event){
            var a = ackordLista[event.target.value];
            console.log(a)
            document.getElementById('ackord').src = urlParams.get(a);
        })
    }
    

    
}



});
/*eslint-env es6*/

//placeholder

var loopID;
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
];

var lektionerLista = [["IMG/enklaackord.jpg","IMG/intermediateLektionGitarr.jpg","IMG/hardLektionGitarr.jpg"],["IMG/enklaPianoAckord.png","IMG/pianoMedelSvårLektion.jpg","IMG/pianoHardLektion.jpg"],["IMG/TrummorEnkelLektion.png","IMG/trummorMedelLektion.png","IMG/trummorSvårLektion.png"]];
var id = ["lektionNybörjare","lektionMedel", "lektionExpert"];
document.addEventListener("DOMContentLoaded", function(event) {
var isMenuClosed = true;
var menuButtonElement = document.getElementById("openMenu");
menuButtonElement.addEventListener("click",openMenu);

function openMenu(){
    if(isMenuClosed){
        document.getElementById("fullScreenMenu").style.width = "99vw";
        var openButton = document.getElementById("openMenu");
        var width = window.getComputedStyle(document.getElementById("closedMenu")).getPropertyValue('width');
        var widthOpenButton = window.getComputedStyle(openButton).getPropertyValue('width');
        var height = window.getComputedStyle(openButton).getPropertyValue('height');
        var topOpenButton = openButton.getBoundingClientRect().top;
        var topLogo = document.getElementById('logo').getBoundingClientRect().top;
        console.log(top);
        openButton.style.position = 'fixed';
        openButton.style.right =(document.body.offsetWidth - parseInt(width))/2 + "px";
        openButton.style.height =height;
        openButton.style.top = topOpenButton + 'px';
        document.getElementById('logo').style.top = topLogo + 'px';
        document.getElementById('navList').style.marginRight = widthOpenButton;

        document.getElementById('logo').style.position = 'fixed';
        var links = document.getElementsByClassName('hiddenMenuLink');
        for(let i =0;i<links.length;i++){
            console.log(links[i])
            links[i].tabIndex = '0'
        }


    }
    else{
        document.getElementById("fullScreenMenu").style.width = "0";
        document.getElementById("openMenu").style.position = '';
        document.getElementById("logo").style.position = '';
        document.getElementById("navList").style.marginRight = '';
        var links = document.getElementsByClassName('hiddenMenuLink');
        for(let i =0;i<links.length;i++){

            links[i].tabIndex = '-1'
        }
    }
    isMenuClosed = !isMenuClosed;
    
}
   
var activeWindow = document.getElementsByTagName('body')[0];
function windowSwitch(){
    var imgs = [ ["IMG/getLuckyImg.jpeg","get lucky","http://127.0.0.1:5500/latSida.html?videoUrl=https%3A%2F%2Fwww.youtube.com%2Fembed%3Fv%3D5NV6Rdv1a3I%26pp%3DygUJZ2V0IGx1Y2t5&namn=get%20lucky&gitarrAckord=IMG%2FchordsGetLuckyGuitar.jpg&pianoAckord=IMG%2FchordsPianoGetLucky.png&trummorAckord=IMG%2FchordsGetLuckyDrums.jpg&artist=Daft%20punk&beskrivning=Beskrivning%20Beskrivning%20Beskrivning%20Beskrivning%20Beskrivning&audio=Audio%2FgetLuckyAudio.mp3"],["IMG/dontStopBelievingImg.jpeg","Dont stop believin","http://127.0.0.1:5500/latSida.html?videoUrl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1k8craCGpgs&namn=Dont%20stop%20believin&gitarrAckord=IMG%2FchordsGuitarDontStopBelieving.png&pianoAckord=IMG%2FchordsPianoDontStopBelieving.png&trummorAckord=IMG%2FdontStopBelievingChordsDrums.png&artist=Journey&beskrivning=Beskrivning%20Beskrivning%20Beskrivning%20Beskrivning%20Beskrivning&audio=Audio%2FdontStopBelievingAudio.mp3"],["IMG/letHerGoImg.jpeg","Let her go","http://127.0.0.1:5500/latSida.html?videoUrl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRBumgq5yVrA&namn=Let%20her%20go&gitarrAckord=IMG%2FchordsGuitarLetHerGo.png&pianoAckord=IMG%2FchordsPianoLetHerGo.png&trummorAckord=IMG%2FletHerGoAckordDrums.png&artist=Passenger&beskrivning=Beskrivning%20Beskrivning%20Beskrivning%20Beskrivning%20Beskrivning&audio=Audio%2FletHerGoaudi.mp3"]];
    backgroundDiv = document.getElementById("aktuellt1");
    backgroundDiv.style.backgroundImage = 'url(../' + imgs[num][0] + ')';
    backgroundDiv.getElementsByTagName('h2')[0].innerText = imgs[num][1];
    document.getElementById('aktuelltLink').href=imgs[num][2];
    num += 1;
    if(num > imgs.length - 1){
        num = 0;
    }
}
if(activeWindow.id == "indexBody"){
setInterval(windowSwitch, 4500);
var num = 1;




var buttons = ["gitarrLektionRedirect","pianoLektionRedirect","trummorLektionRedirect"];
for(let i =0;i< buttons.length;i++){
    document.getElementById(buttons[i]).addEventListener("click", function(event){
        
        const url = "lektioner.html?instrument=" + encodeURIComponent(event.target.value);
        window.location.href = url;
    });
    
}
}


else if(activeWindow.id == "indexLektioner"){

    var urlParams  = new URLSearchParams(window.location.search);
    var value = urlParams.get("instrument");
    if (!value) {
        value = 0;
    }
    for(let i = 0; i< id.length;i++){
        document.getElementById(id[i]).src= lektionerLista[value][i];
    }
    
    var buttonsLektioner = ["gitarrLektioner","pianoLektioner","trummorLektioner"];
    for(let i =0;i< buttonsLektioner.length;i++){
        document.getElementById(buttonsLektioner[i]).addEventListener("click", function(event){
            
            for(let i =0;i< buttonsLektioner.length;i++){
                document.getElementById(buttonsLektioner[i]).style.backgroundColor = '#0D6E6E';
            }
            event.target.style.backgroundColor = '#FF3D3D';
            for(let i = 0; i< id.length;i++){
                
                document.getElementById(id[i]).src= lektionerLista[event.target.value][i];
            }
            
            
        });
        
    }
    
    

}
else if(activeWindow.id == "indexHittaDinNastaLat"){
   document.getElementById("submitButton").addEventListener("click", function(event){
    document.getElementById("test").style.display = "none";
    document.getElementById("songContainer").style.display = "block";
    
    const radioButtons = document.querySelectorAll('input[name="niva"]');
    var radioValue;
    for(let i = 0; i< radioButtons.length;i++){
        if(radioButtons[i].checked){
            radioValue = radioButtons[i].value;
        }
    }
    changeNiva(radioValue);

   });

   function changeNiva(radioValue){
    const latar = document.getElementsByTagName("section");
    for(let i=0; i < latar.length; i++){
        latar[i].querySelector("h2").innerText  = database[radioValue][i][0];
        latar[i].querySelector("img").src = database[radioValue][i][2];
        latar[i].querySelector("p").innerText = database[radioValue][i][5];
        const url = "latSida.html?videoUrl=" + encodeURIComponent(database[radioValue][i][1]) + "&namn=" + encodeURIComponent(database[radioValue][i][0]) + '&gitarrAckord=' + encodeURIComponent(database[radioValue][i][3]) + '&pianoAckord=' + encodeURIComponent(database[radioValue][i][4]) + '&trummorAckord=' + encodeURIComponent(database[radioValue][i][8]) + '&artist=' + encodeURIComponent(database[radioValue][i][7]) + '&beskrivning=' + encodeURIComponent(database[radioValue][i][6]) + '&audio=' + encodeURIComponent(database[radioValue][i][9]);
        latar[i].parentElement.href= url;
    }
   }



}

else if(activeWindow.id == "indexLatSida"){
    var urlParamsLatSida  = new URLSearchParams(window.location.search);
    document.getElementById('video').src = urlParamsLatSida.get("videoUrl");
    document.getElementById('ytLänk').href = urlParamsLatSida.get("videoUrl");
    document.getElementsByTagName('h1')[0].innerText = urlParamsLatSida.get("namn");
    document.getElementById('artist').innerText = 'av:' + urlParamsLatSida.get("artist");
    document.getElementById('beskrivning').innerText = urlParamsLatSida.get("beskrivning");
    document.getElementById('ackord').src = urlParamsLatSida.get('pianoAckord');
    document.getElementsByTagName('audio')[0].src = urlParamsLatSida.get('audio');
    const ackordLista = ['pianoAckord','gitarrAckord','trummorAckord'];
    const buttons = document.getElementsByClassName("ackordButton");
    for( let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click' ,function(event){
            for(let i =0;i< buttons.length;i++){
                    buttons[i].style.backgroundColor = '#4a9d9c';
                }
                event.target.style.backgroundColor = 'red';
            var a = ackordLista[event.target.value];
            document.getElementById('ackord').src = urlParamsLatSida.get(a);
        });
    }
    

    
}

else if(activeWindow.id =="indexSpelrum"){

const clickableImage = document.querySelector('#ackordImg');

clickableImage.addEventListener('click', function() {
    this.classList.toggle('expanded');
});

document.getElementById('minus').addEventListener("click",function(event){
document.getElementById('bpm').innerText =Number(document.getElementById('bpm').innerText) - 1 ;
});


document.getElementById('plus').addEventListener("click",function(event){
    document.getElementById('bpm').innerText =Number(document.getElementById('bpm').innerText) + 1 ;
});

var metronomeIsPlaying = false;

document.getElementById('bpmSlider').addEventListener("input", (event) => {
    document.getElementById('bpm').innerText = event.target.value;
});
document.getElementById('ackord').addEventListener("input", (event) => {

var userChoice = JSON.parse(event.target.value);
var userAckord = database[userChoice[0]][userChoice[1]];
var radioButtonsInstrument = document.querySelectorAll('input[type="radio"]');
for(let i =0;i< radioButtonsInstrument.length;i++){
    radioButtonsInstrument[i].addEventListener("input", function(event){
        document.getElementById('ackordImg').src= userAckord[event.target.value];
    });
}
});

document.getElementById('play').addEventListener("click", function(event){

if(!metronomeIsPlaying){
var beepSound = new Audio('Audio/beep.wav') ;
const bpm = document.getElementById('bpm').innerText;
const delay = 1/(bpm/60);
var metronomeIndex = 0;

loopID = setInterval(function(){
    beepSound.play();
    document.getElementById('metronomeImage').src= 'IMG/metronome' + metronomeIndex + '.png';
    metronomeIndex = Number(!metronomeIndex);
}, delay * 1000);
document.getElementById('play').querySelector('img').src='IMG/pauseBPM.png';
metronomeIsPlaying = !metronomeIsPlaying;
}
else{
    clearInterval(loopID);
    document.getElementById('play').querySelector('img').src='IMG/playBPM.png';
    metronomeIsPlaying = !metronomeIsPlaying;
}



});}});
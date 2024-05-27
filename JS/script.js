//skapar globala variabler för loopen på index sidan, informationen till dem olika låtarna, lämnkar till lektionerna och ids för lektionerna
var loopID;
var database = [
	//nybörjare
	[
		[
			"get lucky",
			"https://www.youtube.com/embed?v=5NV6Rdv1a3I&pp=ygUJZ2V0IGx1Y2t5",
			"IMG/getLuckyImg.jpeg",
			"IMG/chordsGetLuckyGuitar.jpg",
			"IMG/chordsPianoGetLucky.png",
			"nybörjare ---- 4/5",
			"En funk- och discoproduktion av den franska elektroniska duon Daft Punk, som släpptes 2013. Låten har en retrokänsla och en upplyftande stämning, med Pharrell Williams och Nile Rodgers som gästartister.",
			"Daft punk",
			"IMG/chordsGetLuckyDrums.jpg",
			"Audio/getLuckyAudio.mp3",
		],
		[
			"Dont stop believin",
			"https://www.youtube.com/watch?v=1k8craCGpgs",
			"IMG/dontStopBelievingImg.jpeg",
			"IMG/chordsGuitarDontStopBelieving.png",
			"IMG/chordsPianoDontStopBelieving.png",
			"nybörjare ---- 5/5",
			"En klassisk rocklåt av det amerikanska bandet Journey, släppt 1981. Låten är känd för sin ikoniska pianointro och sina inspirerande och motiverande texter som handlar om att behålla hoppet och tro på dig själv.",
			"Journey",
			"IMG/dontStopBelievingChordsDrums.png",
			"Audio/dontStopBelievingAudio.mp3",
		],
		[
            "Tiny Dancer",
            "https://www.youtube.com/embed/yYcyacLRPNs?si=gppHjngeFRCfwsQi",
            "IMG/tinyDancerImg.png",
            "IMG/chordsDrumsTinyDancer.webp",
            "IMG/chordsPianoTinyDance.png",
            "nybörjare ---- 3/5",
            //ej konsekvent indrag pga " tecken i strängen
            'En sång av den brittiske artisten Elton John, från hans album "Madman Across the Water" som släpptes 1971. Låten anses vara en av Elton Johns signaturlåtar och hyllas för sina poetiska texter och melodiösa arrangemang.',
            "Elton John",
            "IMG/chordsDrumsTinyDancer.webp",
            "Audio/tinyDancer.mp3"
        ],
	],
	//medel
	[
		[
			"Let her go",
			"https://www.youtube.com/watch?v=RBumgq5yVrA",
			"IMG/letHerGoImg.jpeg",
			"IMG/chordsGuitarLetHerGo.png",
			"IMG/chordsPianoLetHerGo.png",
			"medel ---- 3/5",
			"En låt av den brittiska singer-songwritern Passenger, utgiven 2012. Låten är känd för sin enkla gitarrackompanjemang och gripande texter som handlar om förlust och saknad av en älskad person.",
			"Passenger",
			"IMG/letHerGoAckordDrums.png",
			"Audio/letHerGoaudi.mp3",
		],
		[
            "Wanted Dead Or Alive.",
            "https://www.youtube.com/embed/xNRaDavYo1M?si=k4j37kufZfYo5H3G",
            "IMG/wantedDeadOrAliveImg.jpeg",
            "IMG/chordsPianoWantedDeadOrAlive.svg",
            "IMG/chordsGuitarWantedDeadOrAlive.png",
            "medel ---- 4/5",
            'En låt av det amerikanska rockbandet Bon Jovi, utgiven 1986. Låten har en kraftfull countryrock-stil och texter som handlar om livet på vägarna och känslan av att vara en "laglös cowboy".',
            "Bon Jovi",
            "IMG/chordsDrumsWantedDeadOrAlive.jpeg",
            "Audio/wantedDeadOrAlive.mp3"
        ],
		[
            "Bohemian Rhapsody",
            "https://www.youtube.com/embed/fJ9rUzIMcZQ?si=qwWuaJQ0XeazmjYR",
            "IMG/bohemianRhapsodyImg.jpeg",
            "IMG/chordsGuitarBohemianRhapsody.jpeg",
            "IMG/chordsPianoBohemianRhapsody.jpeg",
            "medel ---- 5/5",
            "En episk låt av det brittiska rockbandet Queen, släppt 1975. Låten är känd för sin unika struktur, som kombinerar rock, opera och ballad, samt dess komplexa arrangemang och djupa texter.",
            "queen",
            "IMG/chordsDrumsBohemianRhapsody.webp",
            "Audio/bohemianRapsody.mp3"
        ],
	],
	//expert
	[
		[
            "Fool In The Rain",
            "https://www.youtube.com/embed/I57nIP0vc44?si=MhTVQVig1uWSXric",
            "IMG/foolInTheRainImg.jpeg",
            "IMG/chordsGuitarFoolInTheRain.png",
            "IMG/chordsPianoFoolInTheRain.png",
            "Expert ---- 4/5",
            "En låt av det brittiska rockbandet Led Zeppelin, släppt 1979. Låten har en funkig känsla och karaktäriseras av sitt livliga rytmspel och jazzinfluerade arrangemang.",
            "Led Zeppelin",
            "IMG/chordsDrumsFoolInTheRain.png",
            "Audio/foolInTheRain.mp3"
        ],
		[
            "Through the Fire and Flames",
            "https://www.youtube.com/embed/0jgrCKhxE1s?si=bHRWO50sxVqytHQ-",
            "IMG/throughFireAndFlamesImg.jpeg",
            "IMG/chordsGuitarThroughFireAndFlames.png",
            "IMG/chordsPianoThroughFireAndFlames.png",
            "Expert ---- 3/5",
            'En låt av det brittiska power metal-bandet DragonForce, från deras album "Inhuman Rampage" som släpptes 2006. Låten är känd för sin snabba tempo och tekniska svårigheter på gitarr, och betraktas som en av de svåraste låtarna att spela på Guitar Hero-videospelserien.',
            "Dragonforce",
            "IMG/chordsDrumsThroughFireAndFlames.svg",
            "Audio/throughFireAndFlames.mp3"
        ],
		[
            "satellit",
            "https://www.youtube.com/embed/AcMUULoT_jk?si=TMB5hpTRRJKhPEMv",
            "IMG/satellitImg.jpeg",
            "IMG/chordsGuitarSatellit.jpeg",
            "IMG/chordsPianoSatellit.jpeg",
            "Expert ---- 5/5",
            '"Satellit" är en tidlös poplåt skriven och framförd av den svenska musikern Ted Gärdestad. Släppt år 1979, låter denna melodiska och känslosamma sång lyssnaren drömma sig bort till avlägsna platser och tidlösa äventyr. Med sin poetiska text och Gärdestads karakteristiska röst bjuder låten in till en resa genom melodins rymd, fylld med längtan och hopp om en ljusare framtid.',
            "Ted Gärdestad",
            "IMG/chordsDrumsSatellit.png",
            "Audio/satellit.mp3"
        ]
	],
];

var lektionerLista = [
	[
		"IMG/enklaackord.jpg",
		"IMG/intermediateLektionGitarr.jpg",
		"IMG/hardLektionGitarr.jpg",
	],
	[
		"IMG/enklaPianoAckord.png",
		"IMG/pianoMedelSvårLektion.jpg",
		"IMG/pianoHardLektion.jpg",
	],
	[
		"IMG/trummorEnkelLektion.png",
		"IMG/trummorMedelLektion.png",
		"IMG/trummorSvårLektion.png",
	],
];
var id = ["lektionNybörjare", "lektionMedel", "lektionExpert"];
//event handler så js väntar på att sidan ska ladda
document.addEventListener("DOMContentLoaded", function(event) {
    //bestämmer en variabel för menyn som är stängd från början
	var isMenuClosed = true;
    //hittar meny elementet med hjälp av id;et
	var menuButtonElement = document.getElementById("openMenu");
    //lägger en evendlistener på "öppna meny knappen" att göra functionen "openMenu"
	menuButtonElement.addEventListener("click", openMenu);
    /*Funktionen som öppnar och stänger menyn fungerar genom att först kolla ifall
    menyn är öppen genom en bool. Om menyn är stängd sätts bredden som innan  var noll till 99% 
    av bredden på sidan. 

    EFtersom att användaren fortfarande kan scrolla även när menyn är öppen tar
    vi logan och öppnaknappen och ger dem "position:fixed" det inebär att dem kommer stanna på samma ställe.
    EFtersom fixed ej tar andra objekt till hänsyn måste vi sätta en right, vi får den genom att ta hel sidans
    bredd minus navbarens bredd, och då bli positionen oförändrad. Samma sak görs även med logan och
    länkarna.

    VI gör även så att länkarna blir tabbara när menyn är öppen vilket ökar accebility. Likaså
    tar vi bort tabförmåhan när menyn är stängd fär att inte skapa osynliga tabbar. 

    Därefter sätter vi meny boolen till flaskt och nästa gång funktionen aktiveras görs motsatsen.
    Menyns bredd blir 0 och vi ändrar tillbaka till block och tabbindex='-1'
    
    */

	function openMenu() {
		if (isMenuClosed) {
			document.getElementById("fullScreenMenu").style.width = "99vw";
			var openButton = document.getElementById("openMenu");
			var width = window
				.getComputedStyle(document.getElementById("closedMenu"))
				.getPropertyValue("width");
			var widthOpenButton = window
				.getComputedStyle(openButton)
				.getPropertyValue("width");
			var height = window
				.getComputedStyle(openButton)
				.getPropertyValue("height");
			var topOpenButton = openButton.getBoundingClientRect().top;
			var topLogo = document.getElementById("logo").getBoundingClientRect().top;
			openButton.style.position = "fixed";
			openButton.style.right =
				(document.body.offsetWidth - parseInt(width)) / 2 + "px";
			openButton.style.height = height;
			openButton.style.top = topOpenButton + "px";
			document.getElementById("logo").style.top = topLogo + "px";
			document.getElementById("navList").style.marginRight = widthOpenButton;

			document.getElementById("logo").style.position = "fixed";
			var links = document.getElementsByClassName("hiddenMenuLink");
			for (let i = 0; i < links.length; i++) {
				console.log(links[i]);
				links[i].tabIndex = "0";
			}
		} else {
			document.getElementById("fullScreenMenu").style.width = "0";
			document.getElementById("openMenu").style.position = "";
			document.getElementById("logo").style.position = "";
			document.getElementById("navList").style.marginRight = "";
			var links = document.getElementsByClassName("hiddenMenuLink");
			for (let i = 0; i < links.length; i++) {
				links[i].tabIndex = "-1";
			}
		}
		isMenuClosed = !isMenuClosed;
	}

    //EFtersom vi har olika js för olika sidor men bara en fil tar vi bodyn av den aktiva htmlfilen 
    //och checkar om om det är rätt dokumnet.
	var activeWindow = document.getElementsByTagName("body")[0];
    /*FUnktion för den stora bilden i mitten som ändras
    Görst börjar vi med att skapa en lista med bild länken, namnet och länken.
    Därefter hittar vi Diven och ändrar bild,länk och titel till den aktuella.
    Denna funktion går på en timer som finns nedan under index
    */
	function windowSwitch() {
		var imgs = [
			[
				"IMG/getLuckyImg.jpeg",
				"get lucky",
				"latSida.html?videoUrl=https%3A%2F%2Fwww.youtube.com%2Fembed%3Fv%3D5NV6Rdv1a3I%26pp%3DygUJZ2V0IGx1Y2t5&namn=get%20lucky&gitarrAckord=IMG%2FchordsGetLuckyGuitar.jpg&pianoAckord=IMG%2FchordsPianoGetLucky.png&trummorAckord=IMG%2FchordsGetLuckyDrums.jpg&artist=Daft%20punk&beskrivning=En%20funk-%20och%20discoproduktion%20av%20den%20franska%20elektroniska%20duon%20Daft%20Punk%2C%20som%20släpptes%202013.%20Låten%20har%20en%20retrokänsla%20och%20en%20upplyftande%20stämning%2C%20med%20Pharrell%20Williams%20och%20Nile%20Rodgers%20som%20gästartister.&audio=Audio%2FgetLuckyAudio.mp3",
			],
			[
				"IMG/dontStopBelievingImg.jpeg",
				"Dont stop believin",
				"latSida.html?videoUrl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1k8craCGpgs&namn=Dont%20stop%20believin&gitarrAckord=IMG%2FchordsGuitarDontStopBelieving.png&pianoAckord=IMG%2FchordsPianoDontStopBelieving.png&trummorAckord=IMG%2FdontStopBelievingChordsDrums.png&artist=Journey&beskrivning=En%20klassisk%20rocklåt%20av%20det%20amerikanska%20bandet%20Journey%2C%20släppt%201981.%20Låten%20är%20känd%20för%20sin%20ikoniska%20pianointro%20och%20sina%20inspirerande%20och%20motiverande%20texter%20som%20handlar%20om%20att%20behålla%20hoppet%20och%20tro%20på%20dig%20själv.&audio=Audio%2FdontStopBelievingAudio.mp3",
			],
			[
				"IMG/letHerGoImg.jpeg",
				"Let her go",
				"latSida.html?videoUrl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRBumgq5yVrA&namn=Let%20her%20go&gitarrAckord=IMG%2FchordsGuitarLetHerGo.png&pianoAckord=IMG%2FchordsPianoLetHerGo.png&trummorAckord=IMG%2FletHerGoAckordDrums.png&artist=Passenger&beskrivning=En%20låt%20av%20den%20brittiska%20singer-songwritern%20Passenger%2C%20utgiven%202012.%20Låten%20är%20känd%20för%20sin%20enkla%20gitarrackompanjemang%20och%20gripande%20texter%20som%20handlar%20om%20förlust%20och%20saknad%20av%20en%20älskad%20person.&audio=Audio%2FletHerGoaudi.mp3",
			],
		];
		aktuelltLinkElement = document.getElementById("aktuelltLink");
		aktuelltLinkElement.getElementsByTagName("img")[0].src = "../" + imgs[num][0];
		aktuelltLinkElement.getElementsByTagName("h3")[0].innerText = imgs[num][1];
		aktuelltLinkElement.href = imgs[num][2];
		num += 1;
		if (num > imgs.length - 1) {
			num = 0;
		}
	}
	if (activeWindow.id == "indexBody") {
        //skapar timern
		setInterval(windowSwitch, 4500);
		var num = 1;
        //skapar event listeners för varje knapp
        //Kodar valuet på den klicade knappen till urlet som sedan kan bli läst av lektioner sidan
        //ett helt ok sätt att överföra information utan backend
		var buttons = [
			"gitarrLektionRedirect",
			"pianoLektionRedirect",
			"trummorLektionRedirect",
		];
		for (let i = 0; i < buttons.length; i++) {
			document
				.getElementById(buttons[i])
				.addEventListener("click", function(event) {
					const url =
						"lektioner.html?instrument=" +
						encodeURIComponent(event.target.value);
					window.location.href = url;
				});
		}
	} else if (activeWindow.id == "indexLektioner") {
		var firstTimeLoading = true;
        //börjar med att hämta urlen och den imformation som skickas där
        //Gitarr är även default ifall man går via menyn
		var urlParams = new URLSearchParams(window.location.search);
        //får vilket instrument som användaren har valt
		var value = urlParams.get("instrument");
        //ifall urlen är tom sätts valuen till noll och gitarr väljs
        //Detta för att programmet inte ska krasha ifall användaren går en annan väg
		if (!value) {
			value = 0;
		}
        //sätter ut bilder på varje lektion, här används id listan
		for (let i = 0; i < id.length; i++) {
			document.getElementById(id[i]).src = lektionerLista[value][i];
		}
        //skapar ny lsita med ids för knapparna på sidan
		var buttonsLektioner = [
			"gitarrLektioner",
			"pianoLektioner",
			"trummorLektioner",
		];
        //skapar en eventlistener som gör att instrumentet byts ut
        // det sker genom att vi tar värdet av knappen som tryckts villkte korrespondrar till
        //vilket id just den bilden har i listan, den loopar sedan över 3 gånger för varje svårhetsgrad
        //Här görs även den aktuella färgad så användaren vet vilken som är vald
        //Det sker på samma sätt och innan en ny trycks färgas alla tilbaka till bas färgen för att 
        //göra redo för den nya färgen
		for (let i = 0; i < buttonsLektioner.length; i++) {
			document
				.getElementById(buttonsLektioner[i])
				.addEventListener("click", function(event) {
					for (let i = 0; i < buttonsLektioner.length; i++) {
						document.getElementById(buttonsLektioner[i]).style.backgroundColor =
							"#0D6E6E";
					}
					
					if(!firstTimeLoading){
						event.target.style.backgroundColor = "#FF3D3D";
					}
					for (let i = 0; i < id.length; i++) {
						document.getElementById(id[i]).src =
							lektionerLista[event.target.value][i];
					}
				});
		}
		if(firstTimeLoading){
			console.log(document.getElementById(buttonsLektioner[value]))
			document.getElementById(buttonsLektioner[value]).style.backgroundColor = "#FF3D3D";
			firstTimeLoading = !firstTimeLoading;
		}
	} else if (activeWindow.id == "indexHittaDinNastaLat") {
        //"form" för att se vilken svårighets grad användaren vill ha 
        //sätter även display="none" på forment vsilket gör den osunlig och display block på sångerna vilekt gör dem synlgia
		document.getElementById("submitButton").addEventListener("click", function(event) {
				document.getElementById("quiz").style.display = "none";
				document.getElementById("songContainer").style.display = "block";
                //samlar alla radio knapar för att se vilken som är vaöd
				const radioButtons = document.querySelectorAll('input[name="niva"]');
				var radioValue;
				for (let i = 0; i < radioButtons.length; i++) {
					if (radioButtons[i].checked) {
                        //loopar igenom alla och den som är vald blir radioValue
						radioValue = radioButtons[i].value;
					}
				}
                //startar funktionen nedan
				changeNiva(radioValue);
			});

		function changeNiva(radioValue) {
            /*Skapar dem individuella låt blocken
            funktionen loopar igenom alla sectioner och tar datan från "databas" listan baserat på vad användaren svarad
            DEn skapar sedan en länk till låt sidan som innehåller all information så den kan göras 
            Detta göra tt istället för individuella sidor behövs det bara att man uppdaterar databsen för att
            göra sidan "bättre/större"
            */
			const latar = document.getElementsByTagName("section");
			for (let i = 0; i < latar.length; i++) {
				latar[i].querySelector("h2").innerText = database[radioValue][i][0];
				latar[i].querySelector("img").src = database[radioValue][i][2];
				latar[i].querySelector("p").innerText = database[radioValue][i][5];
				const url =
					"latSida.html?videoUrl=" +
					encodeURIComponent(database[radioValue][i][1]) +
					"&namn=" +
					encodeURIComponent(database[radioValue][i][0]) +
					"&gitarrAckord=" +
					encodeURIComponent(database[radioValue][i][3]) +
					"&pianoAckord=" +
					encodeURIComponent(database[radioValue][i][4]) +
					"&trummorAckord=" +
					encodeURIComponent(database[radioValue][i][8]) +
					"&artist=" +
					encodeURIComponent(database[radioValue][i][7]) +
					"&beskrivning=" +
					encodeURIComponent(database[radioValue][i][6]) +
					"&audio=" +
					encodeURIComponent(database[radioValue][i][9]);
				latar[i].parentElement.href = url;
			}
		}
	} else if (activeWindow.id == "indexLatSida") {
        /*INdividuella låtsidan
        Börjar med att urlen tas och all viktig information extraheras ifrån den och placeras på sidan

        */
		var urlParamsLatSida = new URLSearchParams(window.location.search);
		
		if(!urlParamsLatSida.get("videoUrl")){
			console.log('no argumnet: default')
		}
		else{
			document.getElementById("video").src = urlParamsLatSida.get("videoUrl");
			document.getElementById("ytLänk").href = urlParamsLatSida.get("videoUrl");
			document.getElementsByTagName("h1")[0].innerText =
			urlParamsLatSida.get("namn");
			document.getElementById("artist").innerText =
			"av:" + urlParamsLatSida.get("artist");
			document.getElementById("beskrivning").innerText =
			urlParamsLatSida.get("beskrivning");
			document.getElementById("ackord").src = urlParamsLatSida.get("pianoAckord");
			document.getElementsByTagName("audio")[0].src =
			urlParamsLatSida.get("audio");


		}
		
        /*Skapar en eventlistener för varje instrument knapp för låten
        Likt lektionerna loopar även denna igenom knapparna.
        Här gör den så att om en knapp blir tryckt kommer en bild med ett ackord som hämtas
        ifrån urlen att völjas, även här får den valda en annan färg
        */
		const ackordLista = ["pianoAckord", "gitarrAckord", "trummorAckord"];
		const buttons = document.getElementsByClassName("ackordButton");
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function(event) {
				for (let i = 0; i < buttons.length; i++) {
					buttons[i].style.backgroundColor = "#4a9d9c";
				}
				event.target.style.backgroundColor = "red";
				var a = ackordLista[event.target.value];
				document.getElementById("ackord").src = urlParamsLatSida.get(a);
			});
		}
	} else if (activeWindow.id == "indexSpelrum") {
        //simepl funktoin för att göra ackordet på spelrumet förstningsbart
        //väljer bilden
		const clickableImage = document.querySelector("#ackordImg");
        //Lägger till en eventlister där css expanded togglas
		clickableImage.addEventListener("click", function() {
			this.classList.toggle("expanded");
		});


        /*Kod för metronomen
        
        En knapp som sänker värde på 'bpm' och en som höjer det, finns även en slider för större förändringar
        Spelknappen
		Fungerar genom att en eventlistnerer läggs på vardera knapp, när den klickas väljer vi tagen med bpm, gör om det till ett nummer och subrtaherar eller adderar
        */
		document
			.getElementById("minus")
			.addEventListener("click", function(event) {
				document.getElementById("bpm").innerText =
					Number(document.getElementById("bpm").innerText) - 1;
			});

		document.getElementById("plus").addEventListener("click", function(event) {
			document.getElementById("bpm").innerText =
				Number(document.getElementById("bpm").innerText) + 1;
		});
		//bool för om metronomen spelar
		var metronomeIsPlaying = false;
		//kod för slidern, lik knapparna
		document.getElementById("bpmSlider").addEventListener("input", (event) => {
			document.getElementById("bpm").innerText = event.target.value;
		});

		document.getElementById("ackord").addEventListener("input", (event) => {
			//tar vilken option som är vald, och gör om det till en lista
			var userChoice = JSON.parse(event.target.value);
			//VÄljer från "databsen", eftersom varje vlaue har formatet [0,0] d'r färsta värden är svårhetsgrad och andra är låt, det gör att vi enkelt kan välja låt
			var userAckord = database[userChoice[0]][userChoice[1]];
			//Väljer alla radio knappar
			var radioButtonsInstrument = document.querySelectorAll(
				'input[type="radio"]'
			);
			//lägger till en eventlisteener på radioknapparna som gör att dem byter bilden till bildena av ackordet
			for (let i = 0; i < radioButtonsInstrument.length; i++) {
				radioButtonsInstrument[i].addEventListener("input", function(event) {
					document.getElementById("ackordImg").src =
						userAckord[event.target.value];
				});
			}
		});
		//knapp för att starta metronomen
		/*Börjar med att kolla om metronomen spelar
		Sedan väljer vi ljud och tar bpm användaren har valt, för att göra om det till vänte tid delar vi på 60 och upphöjer med -1
		Vi specificerar sedan ett metronomeINndex som vi använder för att stänga av intervallen
		Därefter startas en intervall med tiden vi räknade ut innan multiplicerat med 1000, vi alternerar även mellan två metrnoom bilder för att få till en animation. Det gör vi
		genom att vi har en bool som vi gör om till ett nummer, den altererar då mellan 1,0. Genom att döpa bilden till metronom0 och 1 kan vi då enkelt byta bild.
		SLutligen sätter vi boolen till falskt

		När det stängs av tar vi loopID:et och clearer den och öndrar tillbaka spelknappen
		*/
		document.getElementById("play").addEventListener("click", function(event) {
			if (!metronomeIsPlaying) {
				var beepSound = new Audio("Audio/beep.wav");
				const bpm = document.getElementById("bpm").innerText;
				const delay = 1 / (bpm / 60);
				var metronomeIndex = 0;

				loopID = setInterval(function() {
					beepSound.play();
					document.getElementById("metronomeImage").src =
						"IMG/metronome" + metronomeIndex + ".png";
					metronomeIndex = Number(!metronomeIndex);
				}, delay * 1000);
				document.getElementById("play").querySelector("img").src =
					"IMG/pauseBPM.png";
				metronomeIsPlaying = !metronomeIsPlaying;
			} else {
				clearInterval(loopID);
				document.getElementById("play").querySelector("img").src =
					"IMG/playBPM.png";
				metronomeIsPlaying = !metronomeIsPlaying;
			}
		});
	}
});
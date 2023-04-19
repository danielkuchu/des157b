(function(){

    "use strict";
    console.log("JS up and running");
    
    const pianoButton = document.getElementById("pianoButton");
    const pausePianoButton = document.getElementById("pausePianoButton");
    let piano = new Audio("audio/piano.mp3");
    piano.volume = 1.0;
    
    pianoButton.addEventListener("click", function(){
    
    piano.play();
    
    });
    
    pausePianoButton.addEventListener("click", function(){
    
    piano.pause();
    
    });
    
    })();
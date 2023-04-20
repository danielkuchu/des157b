(function(){

    "use strict";
    console.log("JS up and running");
    
    const pianoButton = document.getElementById("pianoguy");
    const notes = document.getElementById("notes");
    let piano = new Audio("audio/piano.mp3");
    piano.volume = 1.0;
    
    pianoButton.addEventListener("mouseover", function(){
    
    piano.play();
    notes.className="show";
    
    });
    
    pianoButton.addEventListener("mouseout", function(){
    
    piano.pause();
    notes.className="hide";
    
    });

    
    })();
(function(){

console.log("JS running ma boi");
"use strict";

const darkButton = document.getElementById("darkButton");
const lightButton = document.getElementById("lightButton");
const navBar = document.getElementById("navBar");
const main = document.getElementById("container");
const body = document.querySelector("body");
const cloud = document.getElementById("cloud");


darkButton.addEventListener("click", function(){

body.style.backgroundImage = "url('images/grass2.png')";
main.style.backgroundImage= "url('images/background2.png')";
darkButton.className="hide";
lightButton.className="show";
cloud.src="images/darkCloud.png";
// navBar.style.color="red";

});

lightButton.addEventListener("click", function(){

    body.style.backgroundImage = "url('images/grass.png')";
    main.style.backgroundImage= "url('images/background1.png')";
    darkButton.className="show";
    lightButton.className="hide";
    cloud.src="images/cloud.png";
    
    
    });

})();
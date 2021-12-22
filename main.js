window.addEventListener('load', main);
window.addEventListener('keydown', checkKeyPress, false);
function main(){
    canvas();

    addEventListeners();

}

function addEventListeners(){
    document.getElementById('startbtn').addEventListener('click', startconcert);
}

function startconcert(){

document.getElementById('startscreen').classList.add('startscreenfade')
document.getElementById('startscreen').style.display = 'none';
document.getElementById('drumcontainer').classList.add('drumcontainer')
document.getElementById('drumcontainer').style.display = 'unset';
rocktrack.play();

}

let rocktrack = new Audio();
rocktrack.src="./assets/rock.mp3"

let kicksample = new Audio();
kicksample.src="./assets/kick.wav";

let snaresample = new Audio();
snaresample.src="./assets/snare.wav";

let hihatsample = new Audio();
hihatsample.src="./assets/hihat.wav";

let crashsample = new Audio();
crashsample.src="./assets/crash.wav";




function checkKeyPress(key, keyCode){
    if (key.keyCode == "65"){ // A
        kicksample.currentTime = 0;
        kicksample.play();
        document.getElementById('a-button').classList.add('kick-btn');
    }
    if (key.keyCode == "83"){ // S
        snaresample.currentTime = 0;
        snaresample.play();
        document.getElementById('s-button').classList.add('snare-btn');
    }

    if (key.keyCode == "75" ){ // K
        hihatsample.currentTime = 0;
        hihatsample.play();
        document.getElementById('k-button').classList.add('hihat-btn');
    }


    if (key.keyCode == "76"){ // L
        hihatsample.currentTime = 0;
        hihatsample.play();
        document.getElementById('l-button').classList.add('hihat-btn');
    }

    if (key.keyCode == "79"){ // O
        crashsample.currentTime = 0;
        crashsample.play();
        document.getElementById('o-button').classList.add('crash-btn');
    }
    
} 



document.addEventListener("keyup", function(key, keyCode){
    if (key.keyCode == "65"){ // A
;
        document.getElementById('a-button').classList.remove('kick-btn');
     
    }

    if (key.keyCode == "83"){ // S

        document.getElementById('s-button').classList.remove('snare-btn');
        
    }

    if (key.keyCode == "75"){ // K

        document.getElementById('k-button').classList.remove('hihat-btn');
        
    }

    if (key.keyCode == "76"){ // L

        document.getElementById('l-button').classList.remove('hihat-btn');
        
    }

    if (key.keyCode == "79"){ // O

        document.getElementById('o-button').classList.remove('crash-btn');
    }


})